import React, { useRef, useState } from 'react';
import { CheckCircle2, XCircle, Send, Award } from 'lucide-react';
import {
  AiGradingBreakdown,
  DailyLessonModule,
  DailySessionRecord,
  StudentRecord,
  UasaObjectiveMcq,
  UasaWrittenQuestion,
} from '../types';
import { markStageComplete, recordSubmission } from '../services/db';
import { gradeUasaWrittenAnswer } from '../services/gradingService';
import { SpeakBmButton } from './HighlightBmText';

interface Props {
  student: StudentRecord;
  session: DailySessionRecord;
  lesson: DailyLessonModule;
  showChineseHelper: boolean;
  itemTabSwitched: boolean;
  onResetItemTabSwitch: () => void;
  onGoToStage: (stage: 1 | 2 | 3 | 4 | 5) => void;
}

export const Stage4UasaExamCenter: React.FC<Props> = ({
  student,
  session,
  lesson,
  showChineseHelper,
  itemTabSwitched,
  onResetItemTabSwitch,
  onGoToStage,
}) => {
  const mcqs: UasaObjectiveMcq[] = lesson.expandedBahagianA || lesson.uasaExam.bahagianA;
  const bahagianB = lesson.uasaExam.bahagianB;
  const bahagianC = lesson.uasaExam.bahagianC;

  // Objective MCQ State — 100% clickable immediately, ZERO disabled options!
  const [selectedOpts, setSelectedOpts] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [submittedMcqs, setSubmittedMcqs] = useState<
    Record<string, { chosen: 'A' | 'B' | 'C' | 'D'; isCorrect: boolean }>
  >({});

  // Written Bahagian B & C State
  const [textB, setTextB] = useState('');
  const [textC, setTextC] = useState('');
  const [pasteCountB, setPasteCountB] = useState(0);
  const [pasteCountC, setPasteCountC] = useState(0);
  const [resultB, setResultB] = useState<{
    totalScore: number;
    maxScore: number;
    breakdown: AiGradingBreakdown;
  } | null>(null);
  const [resultC, setResultC] = useState<{
    totalScore: number;
    maxScore: number;
    breakdown: AiGradingBreakdown;
  } | null>(null);
  const [gradingBusy, setGradingBusy] = useState<'B' | 'C' | null>(null);

  const itemTimers = useRef<Record<string, number>>({});
  const ensureTimer = (id: string) => {
    if (!itemTimers.current[id]) itemTimers.current[id] = Date.now();
    return itemTimers.current[id];
  };

  const handleSubmitMcq = (q: UasaObjectiveMcq) => {
    const chosen = selectedOpts[q.itemId];
    if (!chosen) return;
    const spent = Math.max(1, Math.round((Date.now() - ensureTimer(q.itemId)) / 1000));
    const isCorrect = chosen === q.correctOptionId;

    recordSubmission({
      session_id: session.id,
      student_id: student.id,
      stage_number: 4,
      submission_type: 'UASA_OBJ_MCQ',
      item_id: q.itemId,
      question_prompt: q.questionBm,
      student_raw_answer: chosen,
      is_correct: isCorrect,
      score_awarded: isCorrect ? 1 : 0,
      max_score: 1,
      ai_grading_breakdown: null,
      time_spent_seconds: spent,
      anti_cheat_flags: {
        fast_click_warning: spent < 4,
        guessing_suspected: !isCorrect && spent < 4,
        paste_detected: false,
        pasted_char_count: 0,
        tab_switched_during_item: itemTabSwitched,
      },
    });
    onResetItemTabSwitch();
    itemTimers.current[q.itemId] = Date.now();

    const next = { ...submittedMcqs, [q.itemId]: { chosen, isCorrect } };
    setSubmittedMcqs(next);
    checkStage4Completion(next, resultB, resultC);
  };

  const handleGradeWritten = async (section: 'B' | 'C', q: UasaWrittenQuestion) => {
    const raw = section === 'B' ? textB : textC;
    const pasted = section === 'B' ? pasteCountB : pasteCountC;
    if (raw.trim().length < 5) return;

    setGradingBusy(section);
    const spent = Math.max(3, Math.round((Date.now() - ensureTimer(q.itemId)) / 1000));
    const res = await gradeUasaWrittenAnswer(q, raw);
    setGradingBusy(null);

    recordSubmission({
      session_id: session.id,
      student_id: student.id,
      stage_number: 4,
      submission_type: section === 'B' ? 'UASA_STRUKTUR_B' : 'UASA_KBAT_C',
      item_id: q.itemId,
      question_prompt: q.questionBm,
      student_raw_answer: raw,
      is_correct: res.totalScore >= Math.ceil(q.maxScore * 0.5),
      score_awarded: res.totalScore,
      max_score: res.maxScore,
      ai_grading_breakdown: res.breakdown,
      time_spent_seconds: spent,
      anti_cheat_flags: {
        fast_click_warning: spent < 10,
        guessing_suspected: raw.trim().length < 15,
        paste_detected: pasted > 0,
        pasted_char_count: pasted,
        tab_switched_during_item: itemTabSwitched,
      },
    });
    onResetItemTabSwitch();
    itemTimers.current[q.itemId] = Date.now();

    if (section === 'B') {
      setResultB(res);
      checkStage4Completion(submittedMcqs, res, resultC);
    } else {
      setResultC(res);
      checkStage4Completion(submittedMcqs, resultB, res);
    }
  };

  const checkStage4Completion = (
    mcqState: typeof submittedMcqs,
    bRes: typeof resultB,
    cRes: typeof resultC
  ) => {
    const answeredCount = Object.keys(mcqState).length;
    if (answeredCount >= Math.min(10, mcqs.length) && bRes && cRes) {
      markStageComplete(student.id, session.day_number, 4);
    }
  };

  const mcqCorrectCount = Object.values(submittedMcqs).filter((m) => m.isCorrect).length;
  const mcqAnsweredCount = Object.keys(submittedMcqs).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
      {/* Official UASA Paper Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #312E81 0%, #4338CA 55%, #2563EB 100%)',
          color: '#FFFFFF',
          borderRadius: '20px',
          padding: '24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '10px',
            marginBottom: '8px',
          }}
        >
          <span
            style={{
              background: '#FACC15',
              color: '#713F12',
              fontWeight: 900,
              fontSize: '12px',
              padding: '4px 12px',
              borderRadius: '999px',
            }}
          >
            📝 INSTRUMEN PENTAKSIRAN UASA SEJARAH KOD 21 (BM UTAMA)
          </span>
          <span
            style={{
              background: 'rgba(255,255,255,0.18)',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '12.5px',
              fontWeight: 800,
            }}
          >
            Skor Bahagian A: {mcqCorrectCount} / {mcqs.length} (Dijawab: {mcqAnsweredCount})
          </span>
        </div>
        <h2 style={{ margin: '0 0 6px', fontSize: '22px', fontWeight: 900 }}>
          Kertas Latihan UASA Lengkap: Bahagian A ({mcqs.length} Objektif) · Bahagian B (Struktur) ·
          Bahagian C (KBAT)
        </h2>
        <div style={{ fontSize: '13.5px', color: '#E0E7FF', lineHeight: 1.55 }}>
          Format Rasmi UASA Sekolah KPM (Kod 21): Bahagian A (20 Objektif = 20m), Bahagian B (4
          Soalan Struktur = 40m), Bahagian C (Esei/KBAT = 20m). Semua soalan di bawah adalah{' '}
          <strong>100% dalam Bahasa Melayu</strong> (dengan bantuan makna Bahasa Cina di tepi/bawah)
          dan boleh terus dipilih serta dihantar!
        </div>
      </div>

      {/* BAHAGIAN A: 20 UASA OBJECTIVE QUESTIONS */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #C7D2FE',
          borderRadius: '20px',
          padding: '22px',
        }}
      >
        <h3 style={{ margin: '0 0 16px', fontSize: '20px', fontWeight: 900, color: '#1E1B4B' }}>
          BAHAGIAN A: Soalan Objektif Aneka Pilihan ({mcqs.length} Soalan — Klik Pilihan A/B/C/D)
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {mcqs.map((q, idx) => {
            const chosen = selectedOpts[q.itemId];
            const sub = submittedMcqs[q.itemId];

            return (
              <div
                key={q.itemId}
                style={{
                  background: '#F8FAFC',
                  border: sub
                    ? sub.isCorrect
                      ? '2px solid #10B981'
                      : '2px solid #F43F5E'
                    : '1.5px solid #CBD5E1',
                  borderRadius: '16px',
                  padding: '18px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '8px',
                  }}
                >
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span
                      style={{
                        background: '#312E81',
                        color: '#FFFFFF',
                        fontWeight: 900,
                        fontSize: '12px',
                        padding: '3px 10px',
                        borderRadius: '999px',
                      }}
                    >
                      Soalan {idx + 1} / {mcqs.length}
                    </span>
                    <span
                      style={{
                        background: '#EEF2FF',
                        color: '#4338CA',
                        fontWeight: 800,
                        fontSize: '11.5px',
                        padding: '3px 9px',
                        borderRadius: '6px',
                      }}
                    >
                      SP {q.spCode} · Aras {q.difficulty}
                    </span>
                  </div>
                  <SpeakBmButton text={q.questionBm} label="Dengar Soalan BM" compact />
                </div>

                {/* Primary Bahasa Melayu Stem */}
                <div style={{ fontSize: '16.5px', fontWeight: 800, color: '#0F172A', lineHeight: 1.55 }}>
                  {q.questionBm}
                </div>
                {showChineseHelper && (
                  <div style={{ fontSize: '13.5px', color: '#475569', marginTop: '4px' }}>
                    🇨🇳 {q.questionZh}
                  </div>
                )}

                {/* Tricky BM Glossary Pills */}
                {showChineseHelper && q.trickyWordsGlossary?.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                    {q.trickyWordsGlossary.map((g, gIdx) => (
                      <span
                        key={gIdx}
                        style={{
                          background: '#FEF3C7',
                          color: '#92400E',
                          fontSize: '11.5px',
                          fontWeight: 700,
                          padding: '2px 8px',
                          borderRadius: '6px',
                        }}
                      >
                        📖 {g.bm} = {g.zh}
                      </span>
                    ))}
                  </div>
                )}

                {/* Options A / B / C / D — 100% IMMEDIATELY SELECTABLE */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '10px',
                    marginTop: '12px',
                  }}
                >
                  {q.options.map((opt) => {
                    const isSelected = chosen === opt.id;
                    const isRight = sub && opt.id === q.correctOptionId;
                    const isWrongChosen = sub && sub.chosen === opt.id && !sub.isCorrect;

                    let border = '#CBD5E1';
                    let bg = '#FFFFFF';
                    if (isRight) {
                      border = '#10B981';
                      bg = '#ECFDF5';
                    } else if (isWrongChosen) {
                      border = '#F43F5E';
                      bg = '#FFF1F2';
                    } else if (isSelected) {
                      border = '#2563EB';
                      bg = '#EFF6FF';
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          ensureTimer(q.itemId);
                          setSelectedOpts((prev) => ({ ...prev, [q.itemId]: opt.id }));
                        }}
                        style={{
                          textAlign: 'left',
                          background: bg,
                          border: `2.5px solid ${border}`,
                          borderRadius: '12px',
                          padding: '11px 13px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
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
                        <div>
                          <div style={{ fontSize: '14.5px', fontWeight: 800, color: '#0F172A' }}>
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
                    onClick={() => handleSubmitMcq(q)}
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
                      ? `Hantar Jawapan ${chosen} (提交答案 ${chosen})`
                      : 'Klik Pilihan A / B / C / D Dahulu'}
                  </button>

                  {sub && (
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontWeight: 900,
                        fontSize: '13.5px',
                        color: sub.isCorrect ? '#047857' : '#BE123C',
                      }}
                    >
                      {sub.isCorrect ? (
                        <>
                          <CheckCircle2 size={17} /> Betul! (+1 markah)
                        </>
                      ) : (
                        <>
                          <XCircle size={17} /> Salah — Jawapan Tepat: {q.correctOptionId}
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
                      borderRadius: '10px',
                      padding: '10px 12px',
                      border: `1px solid ${sub.isCorrect ? '#6EE7B7' : '#FDA4AF'}`,
                    }}
                  >
                    <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#0F172A' }}>
                      🇲🇾 {q.explanationBm}
                    </div>
                    {showChineseHelper && (
                      <div style={{ fontSize: '12.5px', color: '#475569', marginTop: '3px' }}>
                        🇨🇳 {q.explanationZh}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* BAHAGIAN B (STRUKTUR) & BAHAGIAN C (ESEI KBAT) */}
      {(
        [
          {
            sec: 'B' as const,
            title: 'BAHAGIAN B: Soalan Subjektif Respons Terhad (Struktur)',
            q: bahagianB,
            val: textB,
            setVal: setTextB,
            setPaste: setPasteCountB,
            res: resultB,
            accent: '#D97706',
          },
          {
            sec: 'C' as const,
            title: 'BAHAGIAN C: Soalan Esei & Kemahiran Berfikir Aras Tinggi (KBAT)',
            q: bahagianC,
            val: textC,
            setVal: setTextC,
            setPaste: setPasteCountC,
            res: resultC,
            accent: '#7C3AED',
          },
        ] as const
      ).map(({ sec, title, q, val, setVal, setPaste, res, accent }) => (
        <div
          key={sec}
          style={{
            background: '#FFFFFF',
            border: `2px solid ${accent}`,
            borderRadius: '20px',
            padding: '22px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '10px',
            }}
          >
            <span
              style={{
                background: accent,
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: '12px',
                padding: '4px 12px',
                borderRadius: '999px',
              }}
            >
              {title} · [{q.maxScore} Markah]
            </span>
            <SpeakBmButton text={`${q.stemContextBm}. ${q.questionBm}`} />
          </div>

          <div
            style={{
              background: '#F8FAFC',
              borderLeft: `4px solid ${accent}`,
              padding: '12px 14px',
              borderRadius: '0 10px 10px 0',
              fontSize: '14.5px',
              fontWeight: 700,
              color: '#1E293B',
              marginBottom: '10px',
            }}
          >
            {q.stemContextBm}
          </div>

          <div style={{ fontSize: '17px', fontWeight: 900, color: '#0F172A' }}>{q.questionBm}</div>
          {showChineseHelper && (
            <div style={{ fontSize: '13.5px', color: '#475569', marginTop: '4px' }}>
              🇨🇳 {q.questionZh}
            </div>
          )}

          {/* Clickable BM Sentence Starters (Fakta + Huraian + Contoh + Inferens) */}
          <div style={{ marginTop: '14px' }}>
            <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#475569', marginBottom: '6px' }}>
              💡 Rangka Ayat Bahasa Melayu (点击句型开头可直接插入作答框，再补充你自己的完整句子)：
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {q.sentenceStarters.map((st, sIdx) => (
                <button
                  key={sIdx}
                  type="button"
                  onClick={() => {
                    ensureTimer(q.itemId);
                    setVal((prev) => (prev ? `${prev} ${st.starterBm}` : st.starterBm));
                  }}
                  style={{
                    background: '#F1F5F9',
                    border: '1px solid #94A3B8',
                    borderRadius: '8px',
                    padding: '6px 10px',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#0F172A',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <strong>[{st.tag}]</strong> {st.starterBm.slice(0, 52)}...
                </button>
              ))}
            </div>
          </div>

          <textarea
            rows={5}
            value={val}
            onFocus={() => ensureTimer(q.itemId)}
            onPaste={(e) => {
              const txt = e.clipboardData.getData('text') || '';
              setPaste((prev) => prev + txt.length);
            }}
            onChange={(e) => setVal(e.target.value)}
            placeholder="Tulis jawapan penuh anda dalam Bahasa Melayu mengikut format Fakta + Huraian + Contoh (+ Inferens)..."
            style={{
              width: '100%',
              boxSizing: 'border-box',
              marginTop: '12px',
              borderRadius: '12px',
              border: '2px solid #CBD5E1',
              padding: '12px 14px',
              fontSize: '15px',
              fontFamily: 'inherit',
              lineHeight: 1.6,
            }}
          />

          <div style={{ marginTop: '12px' }}>
            <button
              type="button"
              onClick={() => handleGradeWritten(sec, q)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: accent,
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '11px',
                padding: '11px 22px',
                fontSize: '14px',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              <Award size={17} />
              {gradingBusy === sec
                ? 'Sedang Menyemak Rubrik KPM...'
                : `Hantar & Semak Bahagian ${sec} (提交并按 KPM Rubrik 批改)`}
            </button>
          </div>

          {res && (
            <div
              style={{
                marginTop: '14px',
                background: '#F8FAFC',
                border: `2px solid ${accent}`,
                borderRadius: '14px',
                padding: '16px',
              }}
            >
              <div style={{ fontWeight: 900, fontSize: '16px', color: '#0F172A' }}>
                🎯 Keputusan Rubrik KPM: {res.totalScore} / {res.maxScore} Markah (Fakta:{' '}
                {res.breakdown.fakta_score} · Huraian: {res.breakdown.huraian_score} · Contoh:{' '}
                {res.breakdown.contoh_score}
                {q.rubric.inferensMax > 0 ? ` · Inferens: ${res.breakdown.inferens_score}` : ''})
              </div>
              <div style={{ fontSize: '13.5px', color: '#334155', marginTop: '6px', lineHeight: 1.6 }}>
                {res.breakdown.mandarin_feedback}
              </div>
              <div
                style={{
                  marginTop: '10px',
                  background: '#FEF9C3',
                  border: '1px solid #FACC15',
                  borderRadius: '10px',
                  padding: '10px 12px',
                }}
              >
                <div style={{ fontWeight: 900, fontSize: '12.5px', color: '#713F12' }}>
                  🇲🇾 Skema Jawapan Cemerlang Bahasa Melayu (满分马来文范文对照)：
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginTop: '4px', lineHeight: 1.6 }}>
                  {q.rubric.modelAnswerBm}
                </div>
                {showChineseHelper && (
                  <div style={{ fontSize: '12.5px', color: '#475569', marginTop: '4px' }}>
                    🇨🇳 {q.rubric.modelAnswerZh}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={() => onGoToStage(5)}
          style={{
            background: '#059669',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '12px',
            padding: '12px 22px',
            fontSize: '14.5px',
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          ➡️ Ke Bahagian 5: Semakan Kelemahan & Kunci Tamat Kelas 90 Minit
        </button>
      </div>
    </div>
  );
};
