import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ShieldAlert, Languages, Share2, BarChart3, PlayCircle } from 'lucide-react';
import { DailySessionRecord, StudentRecord } from '../types';
import { recordPauseOrTabEvent, tickSessionTimer } from '../services/db';

interface Props {
  student: StudentRecord;
  session: DailySessionRecord;
  showChineseHelper: boolean;
  onToggleChineseHelper: () => void;
  onSessionUpdated: (s: DailySessionRecord) => void;
  onItemTabSwitchFlag: () => void;
  onOpenSyncModal: () => void;
}

export function formatMmSs(totalSeconds: number): string {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export const ActiveStudyTimerHeader: React.FC<Props> = ({
  student,
  session,
  showChineseHelper,
  onToggleChineseHelper,
  onSessionUpdated,
  onItemTabSwitchFlag,
  onOpenSyncModal,
}) => {
  const lastActivityRef = useRef<number>(Date.now());
  const [pauseModalReason, setPauseModalReason] = useState<'IDLE' | 'TAB' | null>(null);
  const pauseReasonRef = useRef<'IDLE' | 'TAB' | null>(null);

  useEffect(() => {
    pauseReasonRef.current = pauseModalReason;
  }, [pauseModalReason]);

  useEffect(() => {
    const bumpActivity = () => {
      lastActivityRef.current = Date.now();
    };
    const events = ['mousemove', 'keydown', 'mousedown', 'touchstart', 'scroll'];
    events.forEach((ev) => window.addEventListener(ev, bumpActivity, { passive: true }));

    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') {
        if (!pauseReasonRef.current) {
          const updated = recordPauseOrTabEvent(student.id, session.day_number, 'TAB_HIDDEN');
          onSessionUpdated(updated);
          onItemTabSwitchFlag();
          setPauseModalReason('TAB');
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    const interval = window.setInterval(() => {
      if (pauseReasonRef.current) {
        const updated = tickSessionTimer(student.id, session.day_number, 0, 1);
        onSessionUpdated(updated);
        return;
      }
      const idleMs = Date.now() - lastActivityRef.current;
      if (idleMs >= 90_000) {
        const updated = recordPauseOrTabEvent(student.id, session.day_number, 'IDLE_90S');
        onSessionUpdated(updated);
        setPauseModalReason('IDLE');
        return;
      }
      const updated = tickSessionTimer(student.id, session.day_number, 1, 0);
      onSessionUpdated(updated);
    }, 1000);

    return () => {
      events.forEach((ev) => window.removeEventListener(ev, bumpActivity));
      document.removeEventListener('visibilitychange', handleVisibility);
      window.clearInterval(interval);
    };
  }, [student.id, session.day_number]);

  const targetSec = student.daily_target_seconds || 5400;
  const pct = Math.min(100, Math.round((session.active_study_seconds / targetSec) * 100));

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 60%, #1D4ED8 100%)',
          color: '#FFFFFF',
          padding: '10px 16px',
          boxShadow: '0 4px 18px rgba(15, 23, 42, 0.25)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                background: '#FACC15',
                color: '#713F12',
                fontWeight: 900,
                fontSize: '12px',
                padding: '5px 10px',
                borderRadius: '8px',
              }}
            >
              🇲🇾 KSSM SEJARAH T3
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: '15px', lineHeight: 1.2 }}>
                Portal Pelajar: {student.name}{' '}
                <span style={{ fontSize: '12px', opacity: 0.85 }}>({student.id})</span>
              </div>
              <div style={{ fontSize: '12px', color: '#BFDBFE' }}>
                Hari {session.day_number}/30 · {session.chapter_code} · Tarikh: {session.lesson_date}
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {/* Active Timer Pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background:
                  session.active_study_seconds >= targetSec
                    ? 'rgba(16, 185, 129, 0.25)'
                    : 'rgba(255, 255, 255, 0.14)',
                border:
                  session.active_study_seconds >= targetSec
                    ? '1.5px solid #34D399'
                    : '1.5px solid rgba(255,255,255,0.28)',
                borderRadius: '10px',
                padding: '5px 11px',
              }}
            >
              <Clock size={16} color="#FACC15" />
              <div>
                <div style={{ fontSize: '10.5px', color: '#DBEAFE' }}>
                  Masa Belajar Aktif (今日有效学习时间)
                </div>
                <div style={{ fontWeight: 900, fontSize: '14px', fontVariantNumeric: 'tabular-nums' }}>
                  {formatMmSs(session.active_study_seconds)} / {formatMmSs(targetSec)}{' '}
                  <span style={{ fontSize: '11px', color: '#FDE047' }}>({pct}%)</span>
                </div>
              </div>
            </div>

            {/* Pause / Tab Switch Counter */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(244, 63, 94, 0.2)',
                border: '1px solid rgba(251, 113, 133, 0.45)',
                borderRadius: '10px',
                padding: '5px 10px',
                fontSize: '12px',
              }}
            >
              <ShieldAlert size={15} color="#FDA4AF" />
              <span>
                发呆/切屏暂停：
                <strong>{session.idle_pause_count + session.tab_switch_count}</strong> 次
              </span>
            </div>

            {/* Language Mode Toggle */}
            <button
              type="button"
              onClick={onToggleChineseHelper}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                background: showChineseHelper ? '#FEF08A' : '#38BDF8',
                color: '#0F172A',
                border: 'none',
                borderRadius: '9px',
                padding: '7px 11px',
                fontSize: '12px',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              <Languages size={14} />
              {showChineseHelper ? '🇲🇾 BM Utama + 华文旁注' : '🇲🇾 Mod UASA (纯马来文)'}
            </button>

            <button
              type="button"
              onClick={onOpenSyncModal}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                background: '#10B981',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '9px',
                padding: '7px 11px',
                fontSize: '12px',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              <Share2 size={14} />
              同步给家长
            </button>

            <Link
              to="/admin"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                background: 'rgba(255,255,255,0.16)',
                color: '#FFFFFF',
                textDecoration: 'none',
                borderRadius: '9px',
                padding: '7px 11px',
                fontSize: '12px',
                fontWeight: 700,
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              <BarChart3 size={14} />
              家长监控后台
            </Link>
          </div>
        </div>
      </header>

      {pauseModalReason && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(15, 23, 42, 0.78)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              maxWidth: '460px',
              width: '100%',
              padding: '28px',
              textAlign: 'center',
              border: '3px solid #F59E0B',
              boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
            }}
          >
            <div style={{ fontSize: '42px', marginBottom: '8px' }}>⏸️</div>
            <h3 style={{ margin: '0 0 8px', fontSize: '20px', color: '#0F172A', fontWeight: 900 }}>
              {pauseModalReason === 'TAB'
                ? 'Masa Belajar Dijeda (侦测到切换分页/离开画面)'
                : 'Masa Belajar Dijeda — 90s Tiada Aktiviti (超过90秒无操作)'}
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
              {pauseModalReason === 'TAB'
                ? '系统侦测到你离开了上课分页，90分钟有效学习计时已自动暂停并记录至家长监控后台。请专心留在课本页面继续学习！'
                : '你已经超过 90 秒没有滑动或作答，有效学习计时已自动暂停，目前正在累计发呆时间（Idle Time）。'}
            </p>
            <button
              type="button"
              onClick={() => {
                lastActivityRef.current = Date.now();
                setPauseModalReason(null);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#2563EB',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '12px',
                padding: '12px 24px',
                fontSize: '15px',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              <PlayCircle size={18} />
              Saya Kembali, Sambung Belajar (我回来了，继续上课)
            </button>
          </div>
        </div>
      )}
    </>
  );
};
