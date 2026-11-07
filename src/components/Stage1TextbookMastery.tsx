import React, { useState, useRef } from 'react';
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  Sparkles,
  Image as ImageIcon,
  Table as TableIcon,
  MessageSquare,
  HelpCircle,
  Send,
} from 'lucide-react';
import { DailyLessonModule, DailySessionRecord, StudentRecord } from '../types';
import { OfficialSubtopic, SubtopicMcq, SubtopicStrukturQuestion } from '../types/textbook';
import { resolveImageSrc } from '../curriculum/imageMap';
import { HighlightBmText, SpeakBmButton } from './HighlightBmText';
import { TextbookSvgAtlas } from './TextbookSvgAtlas';
import { markStageComplete, recordSubmission } from '../services/db';
import { gradeSubtopicStrukturPart } from '../services/gradingService';

interface Props {
  student: StudentRecord;
  session: DailySessionRecord;
  lesson: DailyLessonModule;
  showChineseHelper: boolean;
  itemTabSwitched: boolean;
  onResetItemTabSwitch: () => void;
  onGoToStage: (stage: 1 | 2 | 3 | 4 | 5) => void;
}

const TAG_BADGE_STYLES: Record<
  'FAKTA' | 'HURAIAN' | 'CONTOH' | 'PERHATIAN',
  { bg: string; text: string; border: string; labelBm: string; labelZh: string }
> = {
  FAKTA: {
    bg: '#FEF08A',
    text: '#713F12',
    border: '#FACC15',
    labelBm: 'FAKTA UTAMA',
    labelZh: '必背核心词',
  },
  HURAIAN: {
    bg: '#E0F2FE',
    text: '#0C4A6E',
    border: '#38BDF8',
    labelBm: 'HURAIAN SEBAB & KESAN',
    labelZh: '因果逻辑阐述',
  },
  CONTOH: {
    bg: '#D1FAE5',
    text: '#064E3B',
    border: '#34D399',
    labelBm: 'CONTOH BUKU TEKS',
    labelZh: '课本具体铁证',
  },
  PERHATIAN: {
    bg: '#FFE4E6',
    text: '#881337',
    border: '#FB7185',
    labelBm: 'PERHATIAN PEPERIKSAAN',
    labelZh: '考官常设陷阱',
  },
};

export const Stage1TextbookMastery: React.FC<Props> = ({
  student,
  session,
  lesson,
  showChineseHelper,
  itemTabSwitched,
  onResetItemTabSwitch,
  onGoToStage,
}) => {
  const subtopics: OfficialSubtopic[] = lesson.officialSubtopics || [];

  // Track active hotspot per subtopic+image
  const [activeHotspot, setActiveHotspot] = useState<Record<string, number | null>>({});

  // Track MCQ selections & submitted states (100% immediately selectable, NEVER disabled!)
  const [selectedMcq, setSelectedMcq] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [submittedMcq, setSubmittedMcq] = useState<
    Record<string, { chosen: 'A' | 'B' | 'C' | 'D'; isCorrect: boolean }>
  >({});
  const mcqStartTimes = useRef<Record<string, number>>({});

  // Track Subtopic Struktur answers & grading
  const [strukturInputs, setStrukturInputs] = useState<Record<string, string>>({});
  const [strukturResults, setStrukturResults] = useState<
    Record<string, { score: number; maxScore: number; feedbackZh: string }>
  >({});
  const [pastedMap, setPastedMap] = useState<Record<string, number>>({});

  const getStartTime = (id: string) => {
    if (!mcqStartTimes.current[id]) {
      mcqStartTimes.current[id] = Date.now();
    }
    return mcqStartTimes.current[id];
  };

  const handleSelectOption = (qId: string, optId: 'A' | 'B' | 'C' | 'D') => {
    getStartTime(qId);
    setSelectedMcq((prev) => ({ ...prev, [qId]: optId }));
  };

  const handleSubmitSubtopicMcq = (mcq: SubtopicMcq) => {
    const chosen = selectedMcq[mcq.id];
    if (!chosen) return;
    const spent = Math.max(1, Math.round((Date.now() - getStartTime(mcq.id)) / 1000));
    const isCorrect = chosen === mcq.correctId;

    recordSubmission({
      session_id: session.id,
      student_id: student.id,
      stage_number: 1,
      submission_type: 'STORY_CHECKPOINT',
      item_id: mcq.id,
      question_prompt: mcq.questionBm,
      student_raw_answer: chosen,
      is_correct: isCorrect,
      score_awarded: isCorrect ? 1 : 0,
      max_score: 1,
      ai_grading_breakdown: null,
      time_spent_seconds: spent,
      anti_cheat_flags: {
        fast_click_warning: spent < 5,
        guessing_suspected: !isCorrect && spent < 4,
        paste_detected: false,
        pasted_char_count: 0,
        tab_switched_during_item: itemTabSwitched,
      },
    });
    onResetItemTabSwitch();
    mcqStartTimes.current[mcq.id] = Date.now();

    const nextSubmitted = {
      ...submittedMcq,
      [mcq.id]: { chosen, isCorrect },
    };
    setSubmittedMcq(nextSubmitted);

    // Mark Stage 1 completed once at least 5 subtopic questions are answered correctly
    const correctCount = Object.values(nextSubmitted).filter((v) => v.isCorrect).length;
    if (correctCount >= 5) {
      markStageComplete(student.id, session.day_number, 1);
    }
  };

  const handleSubmitStrukturPart = (
    sq: SubtopicStrukturQuestion,
    partIdx: number
  ) => {
    const part = sq.parts[partIdx];
    const key = `${sq.id}_${part.partLabel}`;
    const raw = strukturInputs[key] || '';
    const spent = Math.max(2, Math.round((Date.now() - getStartTime(key)) / 1000));
    const graded = gradeSubtopicStrukturPart(raw, part);
    const pastedChars = pastedMap[key] || 0;

    recordSubmission({
      session_id: session.id,
      student_id: student.id,
      stage_number: 1,
      submission_type: 'UASA_STRUKTUR_B',
      item_id: key,
      question_prompt: `${sq.stimulusBm} — ${part.partLabel} ${part.questionBm}`,
      student_raw_answer: raw,
      is_correct: graded.score >= Math.ceil(part.marks * 0.5),
      score_awarded: graded.score,
      max_score: graded.maxScore,
      ai_grading_breakdown: {
        fakta_score: graded.score,
        huraian_score: 0,
        contoh_score: 0,
        inferens_score: 0,
        mandarin_feedback: graded.feedbackZh,
        suggested_bm_improvement: part.modelAnswerBm,
        graded_by: 'LOCAL_KSSM_RUBRIC_ENGINE',
      },
      time_spent_seconds: spent,
      anti_cheat_flags: {
        fast_click_warning: spent < 6,
        guessing_suspected: raw.trim().length < 5,
        paste_detected: pastedChars > 0,
        pasted_char_count: pastedChars,
        tab_switched_during_item: itemTabSwitched,
      },
    });
    onResetItemTabSwitch();
    setStrukturResults((prev) => ({ ...prev, [key]: graded }));
  };

  const totalInlineMcqs =
    subtopics.reduce((acc, st) => acc + st.subtopicMcqs.length, 0) +
    lesson.storySegments.length;
  const answeredCorrectCount = Object.values(submittedMcq).filter((x) => x.isCorrect).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Top Unit Banner — Bahasa Melayu Primary */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 65%, #0284C7 100%)',
          color: '#FFFFFF',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 10px 28px rgba(37, 99, 235, 0.22)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            marginBottom: '10px',
          }}
        >
          <span
            style={{
              background: '#FACC15',
              color: '#713F12',
              fontWeight: 900,
              fontSize: '12px',
              padding: '5px 12px',
              borderRadius: '999px',
            }}
          >
            📚 BUKU TEKS LENGKAP KSSM SEJARAH TINGKATAN 3 · {lesson.chapterCode}
          </span>
          <span
            style={{
              background: 'rgba(255,255,255,0.18)',
              padding: '5px 12px',
              borderRadius: '999px',
              fontSize: '12px',
              fontWeight: 700,
            }}
          >
            ✅ Latihan Subtopik Dijawab Betul: {answeredCorrectCount} / {totalInlineMcqs} Soalan
          </span>
        </div>

        <h1 style={{ margin: '0 0 6px', fontSize: '24px', fontWeight: 900, lineHeight: 1.3 }}>
          {lesson.titleBm}
        </h1>
        {showChineseHelper && (
          <div style={{ fontSize: '15px', color: '#DBEAFE', fontWeight: 600, marginBottom: '12px' }}>
            🇨🇳 中文对照标题：{lesson.titleZh}
          </div>
        )}
        <div
          style={{
            fontSize: '12.5px',
            background: 'rgba(15, 23, 42, 0.32)',
            padding: '8px 12px',
            borderRadius: '10px',
            color: '#E0F2FE',
          }}
        >
          <strong>Rujukan DSKP KPM Rasmi:</strong> {lesson.officialKssmRef} · Semua pilihan jawapan{' '}
          <strong>(A / B / C / D)</strong> dibuka sepenuhnya — klik terus mana-mana jawapan untuk
          menjawab!
        </div>

        {/* Subtopic Quick Jump Pills */}
        {subtopics.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '14px' }}>
            {subtopics.map((st) => (
              <a
                key={st.subtopicCode}
                href={`#subtopik-${st.subtopicCode.replace('.', '-')}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(`subtopik-${st.subtopicCode.replace('.', '-')}`)
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  background: '#FFFFFF',
                  color: '#1E3A8A',
                  textDecoration: 'none',
                  padding: '6px 13px',
                  borderRadius: '999px',
                  fontSize: '12.5px',
                  fontWeight: 800,
                }}
              >
                📖 Subtopik {st.subtopicCode}: {st.titleBm}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Render ALL Official DBP Subtopics Openly */}
      {subtopics.map((st) => (
        <section
          key={st.subtopicCode}
          id={`subtopik-${st.subtopicCode.replace('.', '-')}`}
          style={{
            background: '#FFFFFF',
            border: '2px solid #BFDBFE',
            borderRadius: '22px',
            padding: '24px',
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
          }}
        >
          {/* Subtopic Header (BM Primary) */}
          <div
            style={{
              borderBottom: '2px solid #EFF6FF',
              paddingBottom: '16px',
              marginBottom: '20px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '12px',
            }}
          >
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                <span
                  style={{
                    background: '#2563EB',
                    color: '#FFFFFF',
                    fontWeight: 900,
                    fontSize: '12px',
                    padding: '4px 12px',
                    borderRadius: '8px',
                  }}
                >
                  BAB {st.babNumber} · SUBTOPIK {st.subtopicCode}
                </span>
                <span
                  style={{
                    background: '#FEF3C7',
                    color: '#92400E',
                    fontWeight: 800,
                    fontSize: '12px',
                    padding: '4px 10px',
                    borderRadius: '8px',
                  }}
                >
                  {st.skCode} · {st.spCodes.join(', ')}
                </span>
              </div>
              <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 900, color: '#0F172A' }}>
                {st.titleBm}
              </h2>
              {showChineseHelper && (
                <div
                  style={{
                    fontSize: '15px',
                    color: '#475569',
                    fontWeight: 700,
                    marginTop: '4px',
                  }}
                >
                  🇨🇳 {st.titleZh}
                </div>
              )}
            </div>
            <SpeakBmButton text={`Subtopik ${st.subtopicCode}. ${st.titleBm}`} label="Dengar Tajuk BM" />
          </div>

          {/* Multi-Photo Illustrated Gallery for this Subtopic */}
          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 800,
                fontSize: '14px',
                color: '#1E40AF',
                marginBottom: '10px',
              }}
            >
              <ImageIcon size={17} />
              <span>
                Galeri Ilustrasi & Visual Sejarah Buku Teks (课本历史实景图鉴 — 点击图上座标点查看马来文重点)
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  st.heroImages.length > 1
                    ? 'repeat(auto-fit, minmax(340px, 1fr))'
                    : 'minmax(0, 1fr)',
                gap: '16px',
              }}
            >
              {st.heroImages.map((img, imgIdx) => {
                const hsKey = `${st.subtopicCode}_${imgIdx}`;
                const selectedHsIdx = activeHotspot[hsKey] ?? (img.hotspots?.length ? 0 : null);
                const currentHs =
                  selectedHsIdx !== null && img.hotspots ? img.hotspots[selectedHsIdx] : null;

                return (
                  <div
                    key={hsKey}
                    style={{
                      background: '#F8FAFC',
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '16px',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{ position: 'relative' }}>
                      <img
                        src={resolveImageSrc(img.imageKey)}
                        alt={img.captionBm}
                        style={{
                          width: '100%',
                          height: '250px',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                      {img.hotspots?.map((hs, hIdx) => (
                        <button
                          key={hIdx}
                          type="button"
                          onClick={() =>
                            setActiveHotspot((prev) => ({ ...prev, [hsKey]: hIdx }))
                          }
                          style={{
                            position: 'absolute',
                            left: `${Math.min(88, Math.max(8, hs.x))}%`,
                            top: `${Math.min(86, Math.max(10, hs.y))}%`,
                            transform: 'translate(-50%, -50%)',
                            background: selectedHsIdx === hIdx ? '#FACC15' : '#2563EB',
                            color: selectedHsIdx === hIdx ? '#713F12' : '#FFFFFF',
                            border: '2px solid #FFFFFF',
                            borderRadius: '999px',
                            padding: '4px 10px',
                            fontSize: '11.5px',
                            fontWeight: 900,
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.35)',
                          }}
                        >
                          📍 {hs.termBm}
                        </button>
                      ))}
                    </div>

                    <div style={{ padding: '12px 14px' }}>
                      <div style={{ fontWeight: 800, fontSize: '14px', color: '#0F172A' }}>
                        🖼️ {img.captionBm}
                      </div>
                      {showChineseHelper && (
                        <div style={{ fontSize: '12.5px', color: '#475569', marginTop: '3px' }}>
                          🇨🇳 {img.captionZh}
                        </div>
                      )}

                      {currentHs && (
                        <div
                          style={{
                            marginTop: '10px',
                            background: '#FEF9C3',
                            border: '1.5px solid #FACC15',
                            borderRadius: '10px',
                            padding: '10px 12px',
                          }}
                        >
                          <div style={{ fontWeight: 900, fontSize: '13.5px', color: '#713F12' }}>
                            🔎 Fokus Gambar: {currentHs.termBm}{' '}
                            {showChineseHelper && <span>({currentHs.meaningZh})</span>}
                          </div>
                          <div
                            style={{
                              fontSize: '13px',
                              color: '#0F172A',
                              fontWeight: 700,
                              marginTop: '3px',
                            }}
                          >
                            {currentHs.detailBm}
                          </div>
                          {showChineseHelper && (
                            <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>
                              🇨🇳 {currentHs.detailZh}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Complete Point-by-Point Textbook Sections — BM PRIMARY LEFT/TOP, ZH BESIDE/BELOW */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {st.sections.map((sec) => (
              <div
                key={sec.sectionCode}
                style={{
                  background: '#F8FAFC',
                  border: '1.5px solid #E2E8F0',
                  borderRadius: '16px',
                  padding: '18px',
                }}
              >
                {/* Section Title Bar */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                    marginBottom: '12px',
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: 'inline-block',
                        background: '#DBEAFE',
                        color: '#1E40AF',
                        fontWeight: 900,
                        fontSize: '11.5px',
                        padding: '3px 9px',
                        borderRadius: '6px',
                        marginBottom: '4px',
                      }}
                    >
                      NOTA LENGKAP {sec.sectionCode}
                    </span>
                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 900, color: '#0F172A' }}>
                      {sec.headingBm}
                    </h3>
                    {showChineseHelper && (
                      <div style={{ fontSize: '13.5px', color: '#475569', fontWeight: 600 }}>
                        🇨🇳 {sec.headingZh}
                      </div>
                    )}
                  </div>
                  <SpeakBmButton text={`${sec.headingBm}. ${sec.leadParagraphBm}`} />
                </div>

                {/* Lead Textbook Paragraph: BM Primary + ZH Beside */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: showChineseHelper
                      ? 'repeat(auto-fit, minmax(300px, 1fr))'
                      : '1fr',
                    gap: '12px',
                    background: '#FFFFFF',
                    border: '1.5px solid #BFDBFE',
                    borderRadius: '12px',
                    padding: '14px',
                    marginBottom: '14px',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 900,
                        color: '#1D4ED8',
                        marginBottom: '4px',
                      }}
                    >
                      🇲🇾 TEKS UTAMA BAHASA MELAYU (BUKU TEKS)
                    </div>
                    <div style={{ fontSize: '15px', lineHeight: 1.65, color: '#0F172A', fontWeight: 600 }}>
                      <HighlightBmText text={sec.leadParagraphBm} />
                    </div>
                  </div>
                  {showChineseHelper && (
                    <div
                      style={{
                        background: '#F8FAFC',
                        borderLeft: '3px solid #93C5FD',
                        padding: '8px 12px',
                        borderRadius: '0 8px 8px 0',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          color: '#64748B',
                          marginBottom: '4px',
                        }}
                      >
                        🇨🇳 华文旁注解释
                      </div>
                      <div style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#334155' }}>
                        {sec.leadParagraphZh}
                      </div>
                    </div>
                  )}
                </div>

                {/* Optional Embedded Section Photo */}
                {sec.imageKey && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                      gap: '14px',
                      alignItems: 'center',
                      background: '#FFFFFF',
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '14px',
                      padding: '12px',
                      marginBottom: '14px',
                    }}
                  >
                    <img
                      src={resolveImageSrc(sec.imageKey)}
                      alt={sec.imageCaptionBm || sec.headingBm}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 900,
                          color: '#B45309',
                          marginBottom: '4px',
                        }}
                      >
                        📸 ILUSTRASI BUKU TEKS SEJARAH
                      </div>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A' }}>
                        {sec.imageCaptionBm || sec.headingBm}
                      </div>
                      {showChineseHelper && sec.imageCaptionZh && (
                        <div style={{ fontSize: '13px', color: '#475569', marginTop: '4px' }}>
                          🇨🇳 {sec.imageCaptionZh}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Optional Embedded Textbook Visual Diagram */}
                {sec.diagramKey && (
                  <TextbookSvgAtlas
                    diagramKey={sec.diagramKey}
                    showChineseHelper={showChineseHelper}
                  />
                )}

                {/* Exhaustive Bullet Points — Side-by-Side BM Primary + Chinese Helper */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {sec.bullets.map((b, bIdx) => {
                    const badge = TAG_BADGE_STYLES[b.tag] || TAG_BADGE_STYLES.FAKTA;
                    return (
                      <div
                        key={bIdx}
                        style={{
                          background: '#FFFFFF',
                          border: `1.5px solid ${badge.border}`,
                          borderRadius: '12px',
                          padding: '12px 14px',
                          display: 'grid',
                          gridTemplateColumns: showChineseHelper
                            ? 'minmax(0, 1.35fr) minmax(0, 1fr)'
                            : '1fr',
                          gap: '12px',
                          alignItems: 'start',
                        }}
                      >
                        <div>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '8px',
                              marginBottom: '6px',
                            }}
                          >
                            <span
                              style={{
                                background: badge.bg,
                                color: badge.text,
                                fontWeight: 900,
                                fontSize: '11px',
                                padding: '2px 8px',
                                borderRadius: '6px',
                              }}
                            >
                              {badge.labelBm} {showChineseHelper ? `· ${badge.labelZh}` : ''}
                            </span>
                            <SpeakBmButton text={b.bm} label="BM" compact />
                          </div>
                          <div
                            style={{
                              fontSize: '15px',
                              lineHeight: 1.65,
                              color: '#0F172A',
                              fontWeight: 700,
                            }}
                          >
                            <HighlightBmText text={b.bm} tone={b.tag} />
                          </div>
                        </div>

                        {showChineseHelper && (
                          <div
                            style={{
                              background: '#F8FAFC',
                              borderRadius: '8px',
                              padding: '9px 11px',
                              fontSize: '13.5px',
                              lineHeight: 1.6,
                              color: '#334155',
                              borderLeft: `3px solid ${badge.border}`,
                            }}
                          >
                            <span style={{ fontWeight: 800, color: '#475569' }}>华文解释：</span>
                            {b.zh}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Complete Textbook Comparison Tables (BM Primary + ZH Helper) */}
          {st.comparisonTables.map((tbl, tIdx) => (
            <div
              key={tIdx}
              style={{
                marginTop: '22px',
                background: '#FFFBEB',
                border: '2px solid #F59E0B',
                borderRadius: '16px',
                padding: '16px',
                overflowX: 'auto',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '10px',
                }}
              >
                <TableIcon size={18} color="#B45309" />
                <div>
                  <div style={{ fontWeight: 900, fontSize: '16px', color: '#78350F' }}>
                    {tbl.titleBm}
                  </div>
                  {showChineseHelper && (
                    <div style={{ fontSize: '13px', color: '#92400E', fontWeight: 600 }}>
                      🇨🇳 {tbl.titleZh}
                    </div>
                  )}
                </div>
              </div>

              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              >
                <thead>
                  <tr style={{ background: '#FEF3C7' }}>
                    {tbl.headers.map((h, hIdx) => (
                      <th
                        key={hIdx}
                        style={{
                          padding: '10px 12px',
                          textAlign: 'left',
                          borderBottom: '2px solid #F59E0B',
                          fontSize: '13.5px',
                          color: '#78350F',
                        }}
                      >
                        <div style={{ fontWeight: 900 }}>{h.bm}</div>
                        {showChineseHelper && (
                          <div style={{ fontSize: '11.5px', fontWeight: 600, color: '#92400E' }}>
                            {h.zh}
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tbl.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      style={{
                        background: rIdx % 2 === 0 ? '#FFFFFF' : '#FFFDF5',
                        borderBottom: '1px solid #FDE68A',
                      }}
                    >
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          style={{ padding: '10px 12px', verticalAlign: 'top' }}
                        >
                          <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>
                            <HighlightBmText text={cell.bm} />
                          </div>
                          {showChineseHelper && (
                            <div style={{ fontSize: '12.5px', color: '#475569', marginTop: '3px' }}>
                              {cell.zh}
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          {/* Historical Dialogues (BM Primary + ZH Translation) & Memory Hack */}
          <div
            style={{
              marginTop: '20px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '14px',
            }}
          >
            <div
              style={{
                background: '#EFF6FF',
                border: '1.5px solid #93C5FD',
                borderRadius: '16px',
                padding: '16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontWeight: 900,
                  fontSize: '14.5px',
                  color: '#1E3A8A',
                  marginBottom: '10px',
                }}
              >
                <MessageSquare size={17} />
                <span>Dialog Watak Sejarah (BM Utama + 华文翻译)</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {st.dialogues.map((d, dIdx) => (
                  <div
                    key={dIdx}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '12px',
                      padding: '11px 13px',
                      border: '1px solid #BFDBFE',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '5px',
                      }}
                    >
                      <span style={{ fontWeight: 900, fontSize: '13px', color: '#1D4ED8' }}>
                        {d.emoji} {d.speakerBm} — {d.roleBm}{' '}
                        {showChineseHelper ? `(${d.roleZh})` : ''}
                      </span>
                      <SpeakBmButton text={d.lineBm} label="BM" compact />
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>
                      “<HighlightBmText text={d.lineBm} />”
                    </div>
                    {showChineseHelper && (
                      <div style={{ fontSize: '12.5px', color: '#475569', marginTop: '4px' }}>
                        🇨🇳 「{d.lineZh}」
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: '#ECFDF5',
                border: '1.5px solid #6EE7B7',
                borderRadius: '16px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontWeight: 900,
                  fontSize: '14.5px',
                  color: '#065F46',
                  marginBottom: '8px',
                }}
              >
                <Sparkles size={17} />
                <span>Formula Ingatan Pantas BM (王牌马来文秒记口诀)</span>
              </div>
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '12px 14px',
                  border: '1.5px solid #34D399',
                  fontSize: '15px',
                  fontWeight: 800,
                  color: '#064E3B',
                }}
              >
                🇲🇾 <HighlightBmText text={st.memoryHackBm} tone="CONTOH" />
              </div>
              {showChineseHelper && (
                <div
                  style={{
                    fontSize: '13.5px',
                    color: '#047857',
                    marginTop: '10px',
                    lineHeight: 1.6,
                    fontWeight: 600,
                  }}
                >
                  💡 补习名师妙招：{st.memoryHackZh}
                </div>
              )}
            </div>
          </div>

          {/* SUBTOPIC PRACTICE BANK: 5 BM-FIRST MCQS + 1 MULTI-PART STRUKTUR QUESTION */}
          <div
            style={{
              marginTop: '24px',
              background: '#F0F9FF',
              border: '2px solid #38BDF8',
              borderRadius: '18px',
              padding: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '8px',
                marginBottom: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HelpCircle size={20} color="#0284C7" />
                <div>
                  <div style={{ fontWeight: 900, fontSize: '17px', color: '#0F172A' }}>
                    Latihan Pengukuhan Subtopik {st.subtopicCode} ({st.subtopicMcqs.length} Objektif
                    + Struktur BM)
                  </div>
                  {showChineseHelper && (
                    <div style={{ fontSize: '12.5px', color: '#0369A1', fontWeight: 600 }}>
                      本小节随堂实战题（马来文题目为主 + 华文旁注；直接点击选项 A/B/C/D 即可作答！）
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {st.subtopicMcqs.map((mcq, qIdx) => {
                const chosen = selectedMcq[mcq.id];
                const sub = submittedMcq[mcq.id];

                return (
                  <div
                    key={mcq.id}
                    style={{
                      background: '#FFFFFF',
                      border: sub
                        ? sub.isCorrect
                          ? '2px solid #10B981'
                          : '2px solid #F43F5E'
                        : '1.5px solid #CBD5E1',
                      borderRadius: '14px',
                      padding: '16px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          background: '#EFF6FF',
                          color: '#1D4ED8',
                          fontWeight: 900,
                          fontSize: '12px',
                          padding: '3px 10px',
                          borderRadius: '999px',
                        }}
                      >
                        Soalan {st.subtopicCode} #{qIdx + 1} · {mcq.spCode}
                      </span>
                      <SpeakBmButton text={mcq.questionBm} label="Dengar Soalan" compact />
                    </div>

                    <div
                      style={{
                        fontSize: '16px',
                        fontWeight: 800,
                        color: '#0F172A',
                        lineHeight: 1.55,
                      }}
                    >
                      <HighlightBmText text={mcq.questionBm} />
                    </div>
                    {showChineseHelper && (
                      <div
                        style={{
                          fontSize: '13px',
                          color: '#475569',
                          marginTop: '4px',
                          marginBottom: '12px',
                        }}
                      >
                        🇨🇳 {mcq.questionZh}
                      </div>
                    )}

                    {/* Options A / B / C / D — 100% CLICKABLE IMMEDIATELY */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '10px',
                        marginTop: '10px',
                      }}
                    >
                      {mcq.options.map((opt) => {
                        const isSelected = chosen === opt.id;
                        const isRightOption = sub && opt.id === mcq.correctId;
                        const isWrongChosen = sub && sub.chosen === opt.id && !sub.isCorrect;

                        let borderColor = '#CBD5E1';
                        let bgColor = '#F8FAFC';
                        if (isRightOption) {
                          borderColor = '#10B981';
                          bgColor = '#ECFDF5';
                        } else if (isWrongChosen) {
                          borderColor = '#F43F5E';
                          bgColor = '#FFF1F2';
                        } else if (isSelected) {
                          borderColor = '#2563EB';
                          bgColor = '#EFF6FF';
                        }

                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => handleSelectOption(mcq.id, opt.id)}
                            style={{
                              textAlign: 'left',
                              background: bgColor,
                              border: `2.5px solid ${borderColor}`,
                              borderRadius: '12px',
                              padding: '11px 13px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              transition: 'all 0.12s ease',
                            }}
                          >
                            <span
                              style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '999px',
                                background: isSelected ? '#2563EB' : '#E2E8F0',
                                color: isSelected ? '#FFFFFF' : '#0F172A',
                                fontWeight: 900,
                                fontSize: '13px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                              }}
                            >
                              {opt.id}
                            </span>
                            <div style={{ flex: 1 }}>
                              <div
                                style={{
                                  fontSize: '14.5px',
                                  fontWeight: 800,
                                  color: '#0F172A',
                                }}
                              >
                                {opt.textBm}
                              </div>
                              {showChineseHelper && (
                                <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>
                                  ({opt.textZh})
                                </div>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div
                      style={{
                        marginTop: '12px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '10px',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => handleSubmitSubtopicMcq(mcq)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: chosen ? '#2563EB' : '#94A3B8',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '10px',
                          padding: '9px 18px',
                          fontSize: '13.5px',
                          fontWeight: 800,
                          cursor: 'pointer',
                        }}
                      >
                        <Send size={14} />
                        {chosen
                          ? `Hantar Jawapan ${chosen} (提交选项 ${chosen})`
                          : 'Sila Klik Pilihan A/B/C/D Dahulu (请先点击上方选项)'}
                      </button>

                      {sub && (
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontWeight: 800,
                            fontSize: '13.5px',
                            color: sub.isCorrect ? '#047857' : '#BE123C',
                          }}
                        >
                          {sub.isCorrect ? (
                            <>
                              <CheckCircle2 size={17} /> Jawapan Tepat! (答对了！)
                            </>
                          ) : (
                            <>
                              <XCircle size={17} /> Belum Tepat — Jawapan Sebenar: {mcq.correctId}{' '}
                              (正确答案：{mcq.correctId})
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {sub && (
                      <div
                        style={{
                          marginTop: '10px',
                          background: sub.isCorrect ? '#ECFDF5' : '#FFF1F2',
                          border: `1px solid ${sub.isCorrect ? '#6EE7B7' : '#FDA4AF'}`,
                          borderRadius: '10px',
                          padding: '10px 12px',
                        }}
                      >
                        <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#0F172A' }}>
                          🇲🇾 Penerangan: <HighlightBmText text={mcq.explanationBm} />
                        </div>
                        {showChineseHelper && (
                          <div style={{ fontSize: '12.5px', color: '#475569', marginTop: '3px' }}>
                            🇨🇳 解析：{mcq.explanationZh}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Subtopic Multi-Part Struktur Question (a)(b)(c) */}
              {st.strukturQuestion && (
                <div
                  style={{
                    background: '#FFFFFF',
                    border: '2px solid #8B5CF6',
                    borderRadius: '14px',
                    padding: '18px',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-block',
                      background: '#EDE9FE',
                      color: '#5B21B6',
                      fontWeight: 900,
                      fontSize: '12px',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      marginBottom: '8px',
                    }}
                  >
                    ✍️ SOALAN STRUKTUR SUBTOPIK {st.subtopicCode} (BAHAGIAN B · 10 MARKAH)
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>
                    <HighlightBmText text={st.strukturQuestion.stimulusBm} />
                  </div>
                  {showChineseHelper && (
                    <div style={{ fontSize: '13px', color: '#475569', marginTop: '3px' }}>
                      🇨🇳 {st.strukturQuestion.stimulusZh}
                    </div>
                  )}

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                      marginTop: '14px',
                    }}
                  >
                    {st.strukturQuestion.parts.map((part, pIdx) => {
                      const key = `${st.strukturQuestion!.id}_${part.partLabel}`;
                      const res = strukturResults[key];
                      return (
                        <div
                          key={key}
                          style={{
                            background: '#F8FAFC',
                            border: '1px solid #CBD5E1',
                            borderRadius: '12px',
                            padding: '12px 14px',
                          }}
                        >
                          <div style={{ fontWeight: 800, fontSize: '14.5px', color: '#0F172A' }}>
                            {part.partLabel} {part.questionBm}{' '}
                            <span style={{ color: '#6D28D9' }}>[{part.marks} markah]</span>
                          </div>
                          {showChineseHelper && (
                            <div style={{ fontSize: '12.5px', color: '#475569', marginTop: '2px' }}>
                              🇨🇳 {part.questionZh}
                            </div>
                          )}
                          <textarea
                            rows={2}
                            value={strukturInputs[key] || ''}
                            onFocus={() => getStartTime(key)}
                            onPaste={(e) => {
                              const txt = e.clipboardData.getData('text') || '';
                              setPastedMap((p) => ({ ...p, [key]: (p[key] || 0) + txt.length }));
                            }}
                            onChange={(e) =>
                              setStrukturInputs((p) => ({ ...p, [key]: e.target.value }))
                            }
                            placeholder="Tulis jawapan dalam Bahasa Melayu menggunakan ayat lengkap... (请用马来文完整句子作答)"
                            style={{
                              width: '100%',
                              boxSizing: 'border-box',
                              marginTop: '8px',
                              borderRadius: '10px',
                              border: '1.5px solid #94A3B8',
                              padding: '9px 12px',
                              fontSize: '14px',
                              fontFamily: 'inherit',
                            }}
                          />
                          <div style={{ marginTop: '8px' }}>
                            <button
                              type="button"
                              onClick={() =>
                                handleSubmitStrukturPart(st.strukturQuestion!, pIdx)
                              }
                              style={{
                                background: '#7C3AED',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '9px',
                                padding: '7px 15px',
                                fontSize: '13px',
                                fontWeight: 800,
                                cursor: 'pointer',
                              }}
                            >
                              Semak Jawapan {part.partLabel} (批改此小题)
                            </button>
                          </div>
                          {res && (
                            <div
                              style={{
                                marginTop: '8px',
                                background: '#F5F3FF',
                                border: '1px solid #C4B5FD',
                                borderRadius: '9px',
                                padding: '9px 12px',
                                fontSize: '13px',
                              }}
                            >
                              <div style={{ fontWeight: 800, color: '#5B21B6' }}>
                                {res.feedbackZh}
                              </div>
                              <div style={{ marginTop: '4px', color: '#0F172A', fontWeight: 700 }}>
                                📌 Contoh Jawapan Penuh BM: {part.modelAnswerBm}
                              </div>
                              {showChineseHelper && (
                                <div style={{ color: '#475569', marginTop: '2px' }}>
                                  🇨🇳 {part.modelAnswerZh}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom Navigation Callout to Stage 2 & Stage 4 */}
      <div
        style={{
          background: 'linear-gradient(135deg, #ECFDF5 0%, #DBEAFE 100%)',
          border: '2px solid #34D399',
          borderRadius: '18px',
          padding: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px',
        }}
      >
        <div>
          <div style={{ fontWeight: 900, fontSize: '17px', color: '#064E3B' }}>
            <BookOpen size={18} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
            Selesai Membaca Nota Buku Teks & Latihan Subtopik?
          </div>
          <div style={{ fontSize: '13.5px', color: '#0F172A', marginTop: '3px' }}>
            Teruskan ke <strong>Bahagian 2 (Ejaan Kata Kunci BM)</strong> atau terus ke{' '}
            <strong>Bahagian 4 (20 Soalan Objektif UASA + Struktur + KBAT)</strong>!
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <button
            type="button"
            onClick={() => onGoToStage(2)}
            style={{
              background: '#059669',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '11px',
              padding: '11px 18px',
              fontSize: '14px',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            ➡️ Ke Bahagian 2: Kata Kunci & Ejaan BM
          </button>
          <button
            type="button"
            onClick={() => onGoToStage(4)}
            style={{
              background: '#2563EB',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '11px',
              padding: '11px 18px',
              fontSize: '14px',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            📝 Terus Ke Bahagian 4: 20 Soalan Kertas UASA
          </button>
        </div>
      </div>
    </div>
  );
};
