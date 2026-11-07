import React, { useMemo, useState } from 'react';
import { CheckCircle2, Lock, Unlock, RefreshCw, Copy, Check } from 'lucide-react';
import {
  DailyLessonModule,
  DailySessionRecord,
  StudentRecord,
  UasaObjectiveMcq,
} from '../types';
import {
  generateWhatsAppSyncCode,
  getStudentKeywords,
  getStudentLogs,
  markStageComplete,
  recordSubmission,
} from '../services/db';
import { formatMmSs } from './ActiveStudyTimerHeader';

interface Props {
  student: StudentRecord;
  session: DailySessionRecord;
  lesson: DailyLessonModule;
  showChineseHelper: boolean;
  onSessionRefresh: () => void;
}

export const Stage5ReviewAndLock: React.FC<Props> = ({
  student,
  session,
  lesson,
  showChineseHelper,
  onSessionRefresh,
}) => {
  const [retryChoices, setRetryChoices] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [clearedIds, setClearedIds] = useState<Record<string, boolean>>({});
  const [copiedSync, setCopiedSync] = useState(false);
  const [lockError, setLockError] = useState('');

  const logs = useMemo(
    () => getStudentLogs(student.id, session.id),
    [student.id, session.id, clearedIds, session.active_study_seconds]
  );

  const allMcqsPool: UasaObjectiveMcq[] = useMemo(() => {
    const subMcqs: UasaObjectiveMcq[] = (lesson.officialSubtopics || []).flatMap((st) =>
      st.subtopicMcqs.map((m) => ({
        itemId: m.id,
        spCode: m.spCode,
        difficulty: 'SEDERHANA' as const,
        questionBm: m.questionBm,
        questionZh: m.questionZh,
        trickyWordsGlossary: [],
        options: m.options,
        correctOptionId: m.correctId,
        explanationBm: m.explanationBm,
        explanationZh: m.explanationZh,
      }))
    );
    return [...subMcqs, ...(lesson.expandedBahagianA || lesson.uasaExam.bahagianA)];
  }, [lesson]);

  // Identify questions whose latest attempt was wrong
  const pendingWrongMcqs = useMemo(() => {
    const latestByItem = new Map<string, boolean>();
    // logs are sorted newest-first
    for (const l of logs) {
      if (!latestByItem.has(l.item_id)) {
        latestByItem.set(l.item_id, l.is_correct);
      }
    }
    return allMcqsPool.filter(
      (q) => latestByItem.get(q.itemId) === false && !clearedIds[q.itemId]
    );
  }, [logs, allMcqsPool, clearedIds]);

  const weakKeywords = useMemo(
    () => getStudentKeywords(student.id).filter((k) => k.mastery_status === 'WEAK'),
    [student.id, logs]
  );

  const handleRetryMcq = (q: UasaObjectiveMcq) => {
    const chosen = retryChoices[q.itemId];
    if (!chosen) return;
    const isCorrect = chosen === q.correctOptionId;
    recordSubmission({
      session_id: session.id,
      student_id: student.id,
      stage_number: 5,
      submission_type: 'ERROR_RETRY',
      item_id: q.itemId,
      question_prompt: `[ULANG KAJI KESILAPAN] ${q.questionBm}`,
      student_raw_answer: chosen,
      is_correct: isCorrect,
      score_awarded: isCorrect ? 1 : 0,
      max_score: 1,
      ai_grading_breakdown: null,
      time_spent_seconds: 5,
      anti_cheat_flags: {
        fast_click_warning: false,
        guessing_suspected: false,
        paste_detected: false,
        pasted_char_count: 0,
        tab_switched_during_item: false,
      },
    });
    if (isCorrect) {
      setClearedIds((p) => ({ ...p, [q.itemId]: true }));
    }
    onSessionRefresh();
  };

  const targetSec = student.daily_target_seconds || 5400;
  const remainingSec = Math.max(0, targetSec - session.active_study_seconds);
  const canLock = remainingSec === 0 && pendingWrongMcqs.length === 0;

  const handleFinalLock = () => {
    if (remainingSec > 0) {
      setLockError(
        `尚未达到每日规定的 ${Math.round(targetSec / 60)} 分钟有效学习时间！还差 ${formatMmSs(
          remainingSec
        )}，请回到第1至第4阶段继续研读课本与练习。`
      );
      return;
    }
    if (pendingWrongMcqs.length > 0) {
      setLockError(`还有 ${pendingWrongMcqs.length} 道错题尚未订正答对，请先在上方完成错题重做！`);
      return;
    }
    recordSubmission({
      session_id: session.id,
      student_id: student.id,
      stage_number: 5,
      submission_type: 'DAILY_FINAL_LOCK',
      item_id: `final_lock_d${session.day_number}`,
      question_prompt: `Pengesahan Tamat Sesi Hari ${session.day_number} (${lesson.chapterCode})`,
      student_raw_answer: `TAMAT_90_MINIT_${session.active_study_seconds}s`,
      is_correct: true,
      score_awarded: 1,
      max_score: 1,
      ai_grading_breakdown: null,
      time_spent_seconds: session.active_study_seconds,
      anti_cheat_flags: {
        fast_click_warning: false,
        guessing_suspected: false,
        paste_detected: false,
        pasted_char_count: 0,
        tab_switched_during_item: false,
      },
    });
    markStageComplete(student.id, session.day_number, 5);
    setLockError('');
    onSessionRefresh();
  };

  const handleCopySyncCode = () => {
    const code = generateWhatsAppSyncCode(student.id);
    navigator.clipboard?.writeText(code);
    setCopiedSync(true);
    setTimeout(() => setCopiedSync(false), 3000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #065F46 100%)',
          color: '#FFFFFF',
          borderRadius: '20px',
          padding: '24px',
        }}
      >
        <div style={{ fontWeight: 900, fontSize: '12px', color: '#6EE7B7', marginBottom: '6px' }}>
          🏁 BAHAGIAN 5 · PEMBETULAN KESILAPAN & PENGESAHAN TAMAT 90 MINIT
        </div>
        <h2 style={{ margin: '0 0 6px', fontSize: '22px', fontWeight: 900 }}>
          Semakan Akhir Hari {session.day_number}: Sifar Kesilapan & Genap 90 Minit Masa Belajar Aktif
        </h2>
        {showChineseHelper && (
          <div style={{ fontSize: '14px', color: '#D1FAE5' }}>
            完成今日所有错题订正，并累计满 90 分钟（5,400 秒）真实有效学习时间后，即可正式锁定今日结业并生成家长 WhatsApp 同步码！
          </div>
        )}
      </div>

      {/* Wrong MCQ Remedial Queue */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #FDA4AF',
          borderRadius: '18px',
          padding: '20px',
        }}
      >
        <h3 style={{ margin: '0 0 10px', fontSize: '18px', fontWeight: 900, color: '#0F172A' }}>
          <RefreshCw size={18} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
          Senarai Pembetulan Soalan Salah (今日待订正错题：{pendingWrongMcqs.length} 题)
        </h3>

        {pendingWrongMcqs.length === 0 ? (
          <div
            style={{
              background: '#ECFDF5',
              color: '#065F46',
              padding: '14px',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '14.5px',
            }}
          >
            ✅ Tiada kesilapan tertangguh! Semua soalan yang dijawab telah diperbetulkan! (太棒了！目前没有任何待订正的错题！)
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {pendingWrongMcqs.map((q) => (
              <div
                key={q.itemId}
                style={{
                  background: '#FFF1F2',
                  border: '1.5px solid #FDA4AF',
                  borderRadius: '14px',
                  padding: '15px',
                }}
              >
                <div style={{ fontWeight: 800, fontSize: '15.5px', color: '#0F172A' }}>
                  {q.questionBm}
                </div>
                {showChineseHelper && (
                  <div style={{ fontSize: '13px', color: '#475569', marginTop: '3px' }}>
                    🇨🇳 {q.questionZh}
                  </div>
                )}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                    gap: '8px',
                    marginTop: '10px',
                  }}
                >
                  {q.options.map((opt) => {
                    const sel = retryChoices[q.itemId] === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() =>
                          setRetryChoices((p) => ({ ...p, [q.itemId]: opt.id }))
                        }
                        style={{
                          textAlign: 'left',
                          padding: '10px 12px',
                          borderRadius: '10px',
                          border: sel ? '2.5px solid #2563EB' : '1.5px solid #CBD5E1',
                          background: sel ? '#EFF6FF' : '#FFFFFF',
                          fontWeight: 800,
                          fontSize: '14px',
                          cursor: 'pointer',
                        }}
                      >
                        {opt.id}. {opt.textBm} {showChineseHelper ? `(${opt.textZh})` : ''}
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={() => handleRetryMcq(q)}
                  style={{
                    marginTop: '10px',
                    background: '#E11D48',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '9px',
                    padding: '8px 16px',
                    fontSize: '13px',
                    fontWeight: 800,
                    cursor: 'pointer',
                  }}
                >
                  Hantar Pembetulan (提交订正答案)
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Weak Keywords Summary */}
      {weakKeywords.length > 0 && (
        <div
          style={{
            background: '#FFFBEB',
            border: '2px solid #F59E0B',
            borderRadius: '18px',
            padding: '18px',
          }}
        >
          <h3 style={{ margin: '0 0 8px', fontSize: '17px', fontWeight: 900, color: '#78350F' }}>
            📌 Kata Kunci BM Perlu Diulang Kaji (需重点复习拼写的马来文词：{weakKeywords.length})
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {weakKeywords.map((kw, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid #FCD34D',
                  borderRadius: '10px',
                  padding: '8px 12px',
                  fontSize: '13.5px',
                }}
              >
                <strong style={{ color: '#0F172A' }}>{kw.bm_term}</strong> — {kw.mandarin_meaning}
                {kw.last_misspelled_input && (
                  <div style={{ fontSize: '11.5px', color: '#BE123C' }}>
                    上次误拼：{kw.last_misspelled_input}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Final 90-Minute Lock & WhatsApp Sync Card */}
      <div
        style={{
          background: '#FFFFFF',
          border: '2.5px solid #10B981',
          borderRadius: '20px',
          padding: '24px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            marginBottom: '18px',
          }}
        >
          <div style={{ background: '#F8FAFC', padding: '14px', borderRadius: '12px' }}>
            <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 700 }}>
              Masa Belajar Aktif Hari Ini
            </div>
            <div style={{ fontSize: '22px', fontWeight: 900, color: '#0F172A' }}>
              {formatMmSs(session.active_study_seconds)} / {formatMmSs(targetSec)}
            </div>
          </div>
          <div style={{ background: '#F8FAFC', padding: '14px', borderRadius: '12px' }}>
            <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 700 }}>
              Jumlah Klik Hantar (Submission Logs)
            </div>
            <div style={{ fontSize: '22px', fontWeight: 900, color: '#2563EB' }}>
              {logs.length} rekod
            </div>
          </div>
          <div style={{ background: '#F8FAFC', padding: '14px', borderRadius: '12px' }}>
            <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 700 }}>
              Status Sesi Hari {session.day_number}
            </div>
            <div
              style={{
                fontSize: '18px',
                fontWeight: 900,
                color: session.status === 'COMPLETED' ? '#059669' : '#D97706',
              }}
            >
              {session.status === 'COMPLETED' ? '✅ COMPLETED (已结业)' : '⏳ IN PROGRESS'}
            </div>
          </div>
        </div>

        {lockError && (
          <div
            style={{
              background: '#FFF1F2',
              color: '#BE123C',
              border: '1.5px solid #FDA4AF',
              borderRadius: '11px',
              padding: '10px 14px',
              fontSize: '13.5px',
              fontWeight: 800,
              marginBottom: '14px',
            }}
          >
            ⚠️ {lockError}
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {session.status === 'COMPLETED' ? (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ECFDF5',
                color: '#065F46',
                border: '2px solid #10B981',
                borderRadius: '12px',
                padding: '12px 20px',
                fontWeight: 900,
                fontSize: '15px',
              }}
            >
              <CheckCircle2 size={20} /> Tahniah {student.name}! Sesi 90 Minit Hari{' '}
              {session.day_number} Telah Disahkan Tamat!
            </div>
          ) : (
            <button
              type="button"
              onClick={handleFinalLock}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: canLock ? '#059669' : '#475569',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '12px',
                padding: '13px 24px',
                fontSize: '15px',
                fontWeight: 900,
                cursor: 'pointer',
              }}
            >
              {canLock ? <Unlock size={18} /> : <Lock size={18} />}
              Sahkan Tamat Kelas 90 Minit (完成今日90分钟课程正式打卡)
            </button>
          )}

          <button
            type="button"
            onClick={handleCopySyncCode}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#2563EB',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '12px',
              padding: '13px 20px',
              fontSize: '14px',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            {copiedSync ? <Check size={18} /> : <Copy size={18} />}
            {copiedSync
              ? '已复制同步码！请贴到 WhatsApp 发给家长'
              : '复制今日学习报告同步码 (发 WhatsApp 给家长)'}
          </button>
        </div>
      </div>
    </div>
  );
};
