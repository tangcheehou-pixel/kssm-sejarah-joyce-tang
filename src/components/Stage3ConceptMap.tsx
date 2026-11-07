import React, { useMemo, useRef, useState } from 'react';
import { ArrowUp, ArrowDown, CheckCircle2, AlertCircle } from 'lucide-react';
import { ConceptMapNode, DailyLessonModule, DailySessionRecord, StudentRecord } from '../types';
import { markStageComplete, recordSubmission } from '../services/db';
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

export const Stage3ConceptMap: React.FC<Props> = ({
  student,
  session,
  lesson,
  showChineseHelper,
  itemTabSwitched,
  onResetItemTabSwitch,
  onGoToStage,
}) => {
  const map = lesson.conceptMap;
  const initialShuffled = useMemo(() => {
    const copy = [...map.nodes];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = (i * 5 + 2) % (i + 1);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, [map.id]);

  const [orderedNodes, setOrderedNodes] = useState<ConceptMapNode[]>(initialShuffled);
  const [checked, setChecked] = useState(false);
  const startTimeRef = useRef<number>(Date.now());

  const moveNode = (idx: number, dir: -1 | 1) => {
    const target = idx + dir;
    if (target < 0 || target >= orderedNodes.length) return;
    const next = [...orderedNodes];
    [next[idx], next[target]] = [next[target], next[idx]];
    setOrderedNodes(next);
    setChecked(false);
  };

  const handleVerifyOrder = () => {
    const spent = Math.max(2, Math.round((Date.now() - startTimeRef.current) / 1000));
    const correctCount = orderedNodes.filter((n, idx) => n.orderIndex === idx + 1).length;
    const isAllCorrect = correctCount === orderedNodes.length;

    recordSubmission({
      session_id: session.id,
      student_id: student.id,
      stage_number: 3,
      submission_type: 'CONCEPT_MAP_DRAG',
      item_id: map.id,
      question_prompt: map.mapTitleBm,
      student_raw_answer: orderedNodes.map((n) => `${n.orderIndex}:${n.correctTextBm}`).join(' -> '),
      is_correct: isAllCorrect,
      score_awarded: correctCount,
      max_score: orderedNodes.length,
      ai_grading_breakdown: null,
      time_spent_seconds: spent,
      anti_cheat_flags: {
        fast_click_warning: spent < 5,
        guessing_suspected: false,
        paste_detected: false,
        pasted_char_count: 0,
        tab_switched_during_item: itemTabSwitched,
      },
    });
    onResetItemTabSwitch();
    startTimeRef.current = Date.now();
    setChecked(true);
    if (isAllCorrect) {
      markStageComplete(student.id, session.day_number, 3);
    }
  };

  const correctPositions = orderedNodes.filter((n, idx) => n.orderIndex === idx + 1).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div
        style={{
          background: 'linear-gradient(135deg, #065F46 0%, #059669 60%, #10B981 100%)',
          color: '#FFFFFF',
          borderRadius: '20px',
          padding: '22px',
        }}
      >
        <div style={{ fontWeight: 900, fontSize: '12px', color: '#A7F3D0', marginBottom: '6px' }}>
          🗺️ BAHAGIAN 3 · PETA PEMIKIRAN & SUSUNAN KRONOLOGI BUKU TEKS (BM UTAMA)
        </div>
        <h2 style={{ margin: '0 0 6px', fontSize: '21px', fontWeight: 900 }}>{map.mapTitleBm}</h2>
        {showChineseHelper && (
          <div style={{ fontSize: '14px', color: '#ECFDF5' }}>
            🇨🇳 {map.mapTitleZh} — {map.instructionZh}
          </div>
        )}
      </div>

      <div
        style={{
          background: '#FFFFFF',
          border: '2px solid #6EE7B7',
          borderRadius: '18px',
          padding: '20px',
        }}
      >
        <div style={{ fontSize: '13.5px', color: '#475569', marginBottom: '14px', fontWeight: 600 }}>
          使用右侧 <strong>⬆️ 上移 / ⬇️ 下移</strong> 按钮，将下列马来文历史事件依照正确的先后因果顺序排列，然后点击下方验证按钮：
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {orderedNodes.map((node, idx) => {
            const targetSlot = map.nodes.find((n) => n.orderIndex === idx + 1);
            const isRightHere = node.orderIndex === idx + 1;
            return (
              <div
                key={node.nodeId}
                style={{
                  background: checked
                    ? isRightHere
                      ? '#ECFDF5'
                      : '#FFF1F2'
                    : '#F8FAFC',
                  border: checked
                    ? isRightHere
                      ? '2px solid #10B981'
                      : '2px solid #F43F5E'
                    : '1.5px solid #CBD5E1',
                  borderRadius: '14px',
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '6px',
                    }}
                  >
                    <span
                      style={{
                        background: '#059669',
                        color: '#FFFFFF',
                        fontWeight: 900,
                        fontSize: '11.5px',
                        padding: '3px 9px',
                        borderRadius: '999px',
                      }}
                    >
                      Kedudukan #{idx + 1} · {targetSlot?.slotLabel || ''}
                    </span>
                    <SpeakBmButton text={node.correctTextBm} label="BM" compact />
                  </div>
                  <div style={{ fontSize: '15.5px', fontWeight: 800, color: '#0F172A' }}>
                    🇲🇾 {node.correctTextBm}
                  </div>
                  {showChineseHelper && (
                    <div style={{ fontSize: '13px', color: '#475569', marginTop: '3px' }}>
                      🇨🇳 {node.correctTextZh}
                    </div>
                  )}
                  {checked && !isRightHere && (
                    <div
                      style={{
                        marginTop: '6px',
                        fontSize: '12.5px',
                        color: '#BE123C',
                        fontWeight: 700,
                      }}
                    >
                      💡 提示：{node.wrongPlacementHintZh}
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <button
                    type="button"
                    onClick={() => moveNode(idx, -1)}
                    style={{
                      background: idx === 0 ? '#E2E8F0' : '#EFF6FF',
                      color: idx === 0 ? '#94A3B8' : '#1D4ED8',
                      border: '1px solid #93C5FD',
                      borderRadius: '8px',
                      padding: '6px 10px',
                      cursor: idx === 0 ? 'default' : 'pointer',
                      fontWeight: 800,
                    }}
                  >
                    <ArrowUp size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => moveNode(idx, 1)}
                    style={{
                      background: idx === orderedNodes.length - 1 ? '#E2E8F0' : '#EFF6FF',
                      color: idx === orderedNodes.length - 1 ? '#94A3B8' : '#1D4ED8',
                      border: '1px solid #93C5FD',
                      borderRadius: '8px',
                      padding: '6px 10px',
                      cursor: idx === orderedNodes.length - 1 ? 'default' : 'pointer',
                      fontWeight: 800,
                    }}
                  >
                    <ArrowDown size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: '16px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <button
            type="button"
            onClick={handleVerifyOrder}
            style={{
              background: '#059669',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '11px',
              padding: '11px 22px',
              fontSize: '14px',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            Semak Susunan Peta Pemikiran (提交验证排列顺序)
          </button>

          {checked && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 900,
                fontSize: '14px',
                color: correctPositions === orderedNodes.length ? '#047857' : '#BE123C',
              }}
            >
              {correctPositions === orderedNodes.length ? (
                <>
                  <CheckCircle2 size={18} /> Sempurna! Semua {orderedNodes.length} kedudukan tepat!
                </>
              ) : (
                <>
                  <AlertCircle size={18} /> {correctPositions} / {orderedNodes.length} kedudukan
                  tepat — sila laraskan kad merah!
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={() => onGoToStage(4)}
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
          ➡️ Teruskan ke Bahagian 4: Kertas Peperiksaan UASA Lengkap (20 Objektif + Struktur + KBAT)
        </button>
      </div>
    </div>
  );
};
