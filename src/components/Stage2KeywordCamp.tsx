import React, { useMemo, useRef, useState } from 'react';
import { CheckCircle2, XCircle, Volume2, Sparkles } from 'lucide-react';
import { DailyLessonModule, DailySessionRecord, KeywordItem, StudentRecord } from '../types';
import { speakText } from '../services/speechService';
import { checkExactBmSpelling } from '../services/gradingService';
import { markStageComplete, recordSubmission, updateKeywordMastery } from '../services/db';

interface Props {
  student: StudentRecord;
  session: DailySessionRecord;
  lesson: DailyLessonModule;
  showChineseHelper: boolean;
  itemTabSwitched: boolean;
  onResetItemTabSwitch: () => void;
  onGoToStage: (stage: 1 | 2 | 3 | 4 | 5) => void;
}

export const Stage2KeywordCamp: React.FC<Props> = ({
  student,
  session,
  lesson,
  showChineseHelper,
  itemTabSwitched,
  onResetItemTabSwitch,
  onGoToStage,
}) => {
  const keywords = lesson.keywords || [];

  // Part 2A: Matching BM Term <-> Chinese Concept
  const [selectedBmId, setSelectedBmId] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<Record<string, boolean>>({});
  const [wrongMatchMsg, setWrongMatchMsg] = useState<string>('');

  const shuffledMeanings = useMemo(() => {
    const arr = [...keywords];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = (i * 7 + 3) % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [lesson.dayNumber]);

  // Part 2B: Exact BM Keyword Spelling
  const [spellingInputs, setSpellingInputs] = useState<Record<string, string>>({});
  const [spellingResults, setSpellingResults] = useState<
    Record<string, { isCorrect: boolean; hintZh: string }>
  >({});
  const startTimes = useRef<Record<string, number>>({});

  const ensureStart = (id: string) => {
    if (!startTimes.current[id]) startTimes.current[id] = Date.now();
    return startTimes.current[id];
  };

  const handleClickMeaningCard = (targetKw: KeywordItem) => {
    if (!selectedBmId) {
      setWrongMatchMsg('请先点击左侧的一个马来文关键字（Kata Kunci BM），再点击右侧对应的解释！');
      return;
    }
    const sourceKw = keywords.find((k) => k.id === selectedBmId);
    if (!sourceKw) return;

    const isMatch = sourceKw.id === targetKw.id;
    recordSubmission({
      session_id: session.id,
      student_id: student.id,
      stage_number: 2,
      submission_type: 'BM_KEYWORD_MATCH',
      item_id: `match_${sourceKw.id}`,
      question_prompt: `Padankan Kata Kunci BM: ${sourceKw.bmTerm}`,
      student_raw_answer: targetKw.mandarinMeaning,
      is_correct: isMatch,
      score_awarded: isMatch ? 1 : 0,
      max_score: 1,
      ai_grading_breakdown: null,
      time_spent_seconds: 3,
      anti_cheat_flags: {
        fast_click_warning: false,
        guessing_suspected: false,
        paste_detected: false,
        pasted_char_count: 0,
        tab_switched_during_item: itemTabSwitched,
      },
    });
    onResetItemTabSwitch();

    if (isMatch) {
      setMatchedIds((prev) => ({ ...prev, [sourceKw.id]: true }));
      setSelectedBmId(null);
      setWrongMatchMsg('');
    } else {
      setWrongMatchMsg(
        `配对不正确：「${sourceKw.bmTerm}」不是这个意思，请看上方卡片提示再试一次！`
      );
    }
  };

  const handleCheckSpelling = (kw: KeywordItem) => {
    const raw = spellingInputs[kw.id] || '';
    const spent = Math.max(1, Math.round((Date.now() - ensureStart(kw.id)) / 1000));
    const res = checkExactBmSpelling(raw, kw.bmTerm, kw.acceptedVariants);

    recordSubmission({
      session_id: session.id,
      student_id: student.id,
      stage_number: 2,
      submission_type: 'BM_KEYWORD_SPELLING',
      item_id: `spell_${kw.id}`,
      question_prompt: kw.fillBlankSentenceBm,
      student_raw_answer: raw,
      is_correct: res.isCorrect,
      score_awarded: res.isCorrect ? 1 : 0,
      max_score: 1,
      ai_grading_breakdown: null,
      time_spent_seconds: spent,
      anti_cheat_flags: {
        fast_click_warning: spent < 3,
        guessing_suspected: raw.trim().length < 2,
        paste_detected: false,
        pasted_char_count: 0,
        tab_switched_during_item: itemTabSwitched,
      },
    });
    updateKeywordMastery({
      studentId: student.id,
      bmTerm: kw.bmTerm,
      mandarinMeaning: kw.mandarinMeaning,
      chapter: kw.chapterTag || lesson.chapterCode,
      isCorrect: res.isCorrect,
      rawInput: raw,
    });
    onResetItemTabSwitch();
    startTimes.current[kw.id] = Date.now();

    const next = {
      ...spellingResults,
      [kw.id]: { isCorrect: res.isCorrect, hintZh: res.hintZh },
    };
    setSpellingResults(next);

    const allSpelled = keywords.every((k) => next[k.id]?.isCorrect);
    if (allSpelled) {
      markStageComplete(student.id, session.day_number, 2);
    }
  };

  const spelledCorrectCount = keywords.filter((k) => spellingResults[k.id]?.isCorrect).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #78350F 0%, #D97706 60%, #F59E0B 100%)',
          color: '#FFFFFF',
          borderRadius: '20px',
          padding: '22px',
        }}
      >
        <div style={{ fontWeight: 900, fontSize: '12px', color: '#FEF08A', marginBottom: '6px' }}>
          🎯 BAHAGIAN 2 · KEM KATA KUNCI & EJAAN TEPAT BAHASA MELAYU
        </div>
        <h2 style={{ margin: '0 0 6px', fontSize: '22px', fontWeight: 900 }}>
          Kata Kunci Wajib Skor Peperiksaan UASA ({keywords.length} Istilah Rasmi KSSM)
        </h2>
        {showChineseHelper && (
          <div style={{ fontSize: '14px', color: '#FEF3C7' }}>
            考试作答必须写出 100% 拼写准确的官方马来文专有名词！先熟读并聆听发音，再完成配对与马来文句子填空拼写。
          </div>
        )}
      </div>

      {/* Section 1: Illustrated Official BM Keyword Cards (BM Huge & Primary) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '14px',
        }}
      >
        {keywords.map((kw, idx) => (
          <div
            key={kw.id}
            style={{
              background: '#FFFFFF',
              border: '2px solid #FDE68A',
              borderRadius: '16px',
              padding: '16px',
              boxShadow: '0 4px 12px rgba(15,23,42,0.04)',
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
                  background: '#FEF3C7',
                  color: '#92400E',
                  fontWeight: 900,
                  fontSize: '11.5px',
                  padding: '3px 9px',
                  borderRadius: '6px',
                }}
              >
                #{idx + 1} · {kw.chapterTag} (SP {kw.spCode})
              </span>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  type="button"
                  onClick={() => speakText(kw.bmTerm, 'ms-MY')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: '#EFF6FF',
                    color: '#1D4ED8',
                    border: '1px solid #93C5FD',
                    borderRadius: '999px',
                    padding: '3px 9px',
                    fontSize: '11.5px',
                    fontWeight: 800,
                    cursor: 'pointer',
                  }}
                >
                  <Volume2 size={13} /> BM
                </button>
                {showChineseHelper && (
                  <button
                    type="button"
                    onClick={() => speakText(kw.mandarinMeaning, 'zh-CN')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: '#F0FDF4',
                      color: '#15803D',
                      border: '1px solid #86EFAC',
                      borderRadius: '999px',
                      padding: '3px 9px',
                      fontSize: '11.5px',
                      fontWeight: 800,
                      cursor: 'pointer',
                    }}
                  >
                    <Volume2 size={13} /> 华语
                  </button>
                )}
              </div>
            </div>

            {/* Huge BM Keyword Primary */}
            <div
              style={{
                fontSize: '20px',
                fontWeight: 900,
                color: '#0F172A',
                background: '#FEF9C3',
                padding: '7px 11px',
                borderRadius: '10px',
                borderLeft: '4px solid #EAB308',
                marginBottom: '8px',
              }}
            >
              {kw.bmTerm}
            </div>

            {/* BM Context Sentence Primary */}
            <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
              🇲🇾 Ayat Konteks: {kw.fillBlankSentenceBm.replace('__________', `[ ${kw.bmTerm} ]`)}
            </div>

            {showChineseHelper && (
              <>
                <div style={{ fontSize: '13.5px', color: '#334155', fontWeight: 700 }}>
                  🇨🇳 华文释义：{kw.mandarinMeaning}
                </div>
                <div
                  style={{
                    marginTop: '7px',
                    background: '#ECFDF5',
                    color: '#065F46',
                    borderRadius: '8px',
                    padding: '7px 10px',
                    fontSize: '12.5px',
                    fontWeight: 600,
                  }}
                >
                  <Sparkles size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                  {kw.memoryMnemonicZh}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Part 2A: Matching Challenge */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #93C5FD',
          borderRadius: '18px',
          padding: '20px',
        }}
      >
        <h3 style={{ margin: '0 0 6px', fontSize: '18px', fontWeight: 900, color: '#0F172A' }}>
          Latihan 2A: Padankan Kata Kunci Bahasa Melayu dengan Maksudnya (点击配对：{Object.keys(matchedIds).length}/{keywords.length})
        </h3>
        <div style={{ fontSize: '13px', color: '#475569', marginBottom: '12px' }}>
          第1步：点击左边一个 <strong>Kata Kunci BM（马来文词）</strong>；第2步：点击右边对应的解释完成配对！
        </div>
        {wrongMatchMsg && (
          <div
            style={{
              background: '#FFF1F2',
              color: '#BE123C',
              border: '1px solid #FDA4AF',
              padding: '8px 12px',
              borderRadius: '9px',
              fontSize: '13px',
              fontWeight: 700,
              marginBottom: '12px',
            }}
          >
            ⚠️ {wrongMatchMsg}
          </div>
        )}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '14px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {keywords.map((kw) => {
              const done = matchedIds[kw.id];
              const active = selectedBmId === kw.id;
              return (
                <button
                  key={kw.id}
                  type="button"
                  onClick={() => !done && setSelectedBmId(kw.id)}
                  style={{
                    textAlign: 'left',
                    padding: '11px 14px',
                    borderRadius: '11px',
                    border: done
                      ? '2px solid #10B981'
                      : active
                      ? '2.5px solid #2563EB'
                      : '1.5px solid #CBD5E1',
                    background: done ? '#ECFDF5' : active ? '#EFF6FF' : '#F8FAFC',
                    fontWeight: 900,
                    fontSize: '15px',
                    color: '#0F172A',
                    cursor: done ? 'default' : 'pointer',
                  }}
                >
                  {done ? '✅ ' : active ? '👉 ' : '🇲🇾 '}
                  {kw.bmTerm}
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {shuffledMeanings.map((kw) => {
              const done = matchedIds[kw.id];
              return (
                <button
                  key={kw.id}
                  type="button"
                  onClick={() => !done && handleClickMeaningCard(kw)}
                  style={{
                    textAlign: 'left',
                    padding: '11px 14px',
                    borderRadius: '11px',
                    border: done ? '2px solid #10B981' : '1.5px solid #CBD5E1',
                    background: done ? '#ECFDF5' : '#FFFFFF',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    color: '#1E293B',
                    cursor: done ? 'default' : 'pointer',
                  }}
                >
                  {done ? `✅ [${kw.bmTerm}] ` : '🎯 '}
                  {kw.mandarinMeaning}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Part 2B: Exact BM Keyword Spelling in Full BM Sentences */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #F59E0B',
          borderRadius: '18px',
          padding: '20px',
        }}
      >
        <h3 style={{ margin: '0 0 6px', fontSize: '18px', fontWeight: 900, color: '#0F172A' }}>
          Latihan 2B: Ejaan Tepat Kata Kunci BM dalam Ayat Lengkap ({spelledCorrectCount}/{keywords.length} Tepat)
        </h3>
        <div style={{ fontSize: '13px', color: '#475569', marginBottom: '14px' }}>
          阅读马来文完整句子，在空格中输入准确的官方马来文专有名词（不区分大小写，但字母拼写必须完全准确）。
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {keywords.map((kw, idx) => {
            const res = spellingResults[kw.id];
            return (
              <div
                key={kw.id}
                style={{
                  background: '#F8FAFC',
                  border: res
                    ? res.isCorrect
                      ? '2px solid #10B981'
                      : '2px solid #F43F5E'
                    : '1.5px solid #CBD5E1',
                  borderRadius: '14px',
                  padding: '14px 16px',
                }}
              >
                {/* BM Fill-in-the-blank Sentence FIRST */}
                <div style={{ fontSize: '15.5px', fontWeight: 800, color: '#0F172A' }}>
                  {idx + 1}. {kw.fillBlankSentenceBm}
                </div>
                {showChineseHelper && (
                  <div style={{ fontSize: '13px', color: '#475569', marginTop: '4px' }}>
                    🇨🇳 提示：{kw.fillBlankPromptZh}（释义：{kw.mandarinMeaning}）
                  </div>
                )}

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginTop: '10px',
                    alignItems: 'center',
                  }}
                >
                  <input
                    type="text"
                    value={spellingInputs[kw.id] || ''}
                    onFocus={() => ensureStart(kw.id)}
                    onChange={(e) =>
                      setSpellingInputs((prev) => ({ ...prev, [kw.id]: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleCheckSpelling(kw);
                    }}
                    placeholder="Taip kata kunci Bahasa Melayu di sini..."
                    style={{
                      flex: '1 1 260px',
                      padding: '10px 13px',
                      borderRadius: '10px',
                      border: '1.5px solid #94A3B8',
                      fontSize: '15px',
                      fontWeight: 700,
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => handleCheckSpelling(kw)}
                    style={{
                      background: '#D97706',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '10px 18px',
                      fontSize: '13.5px',
                      fontWeight: 800,
                      cursor: 'pointer',
                    }}
                  >
                    Semak Ejaan BM (检查拼写)
                  </button>
                  <button
                    type="button"
                    onClick={() => speakText(kw.bmTerm, 'ms-MY')}
                    style={{
                      background: '#EFF6FF',
                      color: '#1D4ED8',
                      border: '1px solid #93C5FD',
                      borderRadius: '10px',
                      padding: '10px 12px',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    🔊 Dengar Sebutan
                  </button>
                </div>

                {res && (
                  <div
                    style={{
                      marginTop: '8px',
                      fontSize: '13px',
                      fontWeight: 800,
                      color: res.isCorrect ? '#047857' : '#BE123C',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    {res.isCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                    <span>{res.hintZh}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={() => onGoToStage(3)}
          style={{
            background: '#2563EB',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '12px',
            padding: '12px 22px',
            fontSize: '14.5px',
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          ➡️ Teruskan ke Bahagian 3: Peta Pemikiran & Kronologi BM
        </button>
      </div>
    </div>
  );
};
