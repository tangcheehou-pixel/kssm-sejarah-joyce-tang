import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Copy, Check, X } from 'lucide-react';
import { CURRICULUM_30_DAYS, getLessonByDay } from '../curriculum';
import {
  generateWhatsAppSyncCode,
  getOrStartSession,
  getStudentBySlug,
  getStudentSessions,
  JOYCE_SLUG,
  setCurrentStage,
  subscribeDb,
} from '../services/db';
import { ActiveStudyTimerHeader } from '../components/ActiveStudyTimerHeader';
import { Stage1TextbookMastery } from '../components/Stage1TextbookMastery';
import { Stage2KeywordCamp } from '../components/Stage2KeywordCamp';
import { Stage3ConceptMap } from '../components/Stage3ConceptMap';
import { Stage4UasaExamCenter } from '../components/Stage4UasaExamCenter';
import { Stage5ReviewAndLock } from '../components/Stage5ReviewAndLock';

export const StudentPortalPage: React.FC = () => {
  const { studentSlug } = useParams<{ studentSlug: string }>();
  const slug = studentSlug || JOYCE_SLUG;

  const [dbTick, setDbTick] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [showChineseHelper, setShowChineseHelper] = useState<boolean>(true);
  const [pinVerified, setPinVerified] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string>('');
  const [itemTabSwitched, setItemTabSwitched] = useState<boolean>(false);
  const [syncModalOpen, setSyncModalOpen] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  useEffect(() => {
    return subscribeDb(() => setDbTick((t) => t + 1));
  }, []);

  const student = useMemo(() => getStudentBySlug(slug), [slug, dbTick]);

  const session = useMemo(() => {
    if (!student) return null;
    return getOrStartSession(student.id, selectedDay);
  }, [student, selectedDay, dbTick]);

  const allSessions = useMemo(
    () => (student ? getStudentSessions(student.id) : []),
    [student, dbTick]
  );

  const lesson = useMemo(() => getLessonByDay(selectedDay), [selectedDay]);

  if (!student || !session) {
    return (
      <div style={{ padding: '48px 20px', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 900, color: '#0F172A' }}>
          Portal Pelajar Tidak Dijumpai (/portal/{slug})
        </h2>
        <p style={{ color: '#475569' }}>找不到此学生专属网址，请确认网址拼写或前往管理后台新增。</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '16px' }}>
          <Link
            to={`/portal/${JOYCE_SLUG}`}
            style={{
              background: '#2563EB',
              color: '#FFFFFF',
              padding: '10px 18px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 800,
            }}
          >
            前往 Joyce Tang 专属教室
          </Link>
          <Link
            to="/admin"
            style={{
              background: '#0F172A',
              color: '#FFFFFF',
              padding: '10px 18px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 800,
            }}
          >
            前往家长管理中心
          </Link>
        </div>
      </div>
    );
  }

  // Optional PIN lock if student has access_pin set
  if (student.access_pin && !pinVerified) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#0F172A',
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
            padding: '28px',
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <h2 style={{ margin: '0 0 8px', fontWeight: 900 }}>
            🔒 Portal {student.name}
          </h2>
          <p style={{ fontSize: '13.5px', color: '#475569' }}>请输入专属存取 PIN 码进入课堂：</p>
          <input
            type="password"
            value={pinInput}
            onChange={(e) => setPinInput(e.target.value)}
            placeholder="PIN"
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '10px 12px',
              borderRadius: '10px',
              border: '1.5px solid #CBD5E1',
              fontSize: '16px',
              textAlign: 'center',
              marginBottom: '10px',
            }}
          />
          {pinError && (
            <div style={{ color: '#E11D48', fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>
              {pinError}
            </div>
          )}
          <button
            type="button"
            onClick={() => {
              if (pinInput.trim() === student.access_pin) {
                setPinVerified(true);
                setPinError('');
              } else {
                setPinError('PIN 码不正确，请重试。');
              }
            }}
            style={{
              width: '100%',
              background: '#2563EB',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '10px',
              padding: '11px',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            进入专属教室
          </button>
        </div>
      </div>
    );
  }

  const stage1QCount =
    (lesson.officialSubtopics || []).reduce((acc, s) => acc + s.subtopicMcqs.length + (s.strukturQuestion ? s.strukturQuestion.parts.length : 0), 0);
  const stage4QCount = (lesson.expandedBahagianA?.length || 10) + 2;

  const handleSwitchStage = (stage: 1 | 2 | 3 | 4 | 5) => {
    setCurrentStage(student.id, selectedDay, stage);
    setDbTick((t) => t + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const STAGE_TABS: { num: 1 | 2 | 3 | 4 | 5; bm: string; zh: string; badge: string }[] = [
    {
      num: 1,
      bm: '1. Buku Teks Lengkap BM & Latihan',
      zh: '马来文完整课本 + 图表 + 随堂题',
      badge: `${stage1QCount} Soalan`,
    },
    {
      num: 2,
      bm: '2. Kata Kunci & Ejaan BM',
      zh: '官方马来文词汇配对与拼写',
      badge: `${lesson.keywords.length} Istilah`,
    },
    {
      num: 3,
      bm: '3. Peta Pemikiran & Kronologi',
      zh: '马来文时间轴与因果重组',
      badge: `${lesson.conceptMap.nodes.length} Fasa`,
    },
    {
      num: 4,
      bm: '4. Kertas Peperiksaan UASA',
      zh: '完整 UASA 考卷（选择+结构+KBAT）',
      badge: `${stage4QCount} Soalan`,
    },
    {
      num: 5,
      bm: '5. Semakan & Kunci 90 Minit',
      zh: '错题订正与90分钟打卡结算',
      badge: session.status === 'COMPLETED' ? '✅ Tamat' : '90:00',
    },
  ];

  const syncCodeStr = syncModalOpen ? generateWhatsAppSyncCode(student.id) : '';

  return (
    <div style={{ minHeight: '100vh', background: '#F1F5F9', paddingBottom: '64px' }}>
      <ActiveStudyTimerHeader
        student={student}
        session={session}
        showChineseHelper={showChineseHelper}
        onToggleChineseHelper={() => setShowChineseHelper((v) => !v)}
        onSessionUpdated={() => setDbTick((t) => t + 1)}
        onItemTabSwitchFlag={() => setItemTabSwitched(true)}
        onOpenSyncModal={() => setSyncModalOpen(true)}
      />

      {/* Day Curriculum Picker + Unlocked 5-Stage Navigation Bar */}
      <div
        style={{
          background: '#FFFFFF',
          borderBottom: '2px solid #E2E8F0',
          padding: '12px 16px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {/* 30-Day Selector Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span style={{ fontWeight: 900, fontSize: '13.5px', color: '#0F172A' }}>
              📅 Pilih Bab / Hari Pembelajaran (切换单元 Bab 1 – Bab 8):
            </span>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(Number(e.target.value))}
              style={{
                flex: '1 1 340px',
                padding: '9px 12px',
                borderRadius: '10px',
                border: '2px solid #2563EB',
                background: '#EFF6FF',
                fontWeight: 800,
                fontSize: '14px',
                color: '#1E3A8A',
                cursor: 'pointer',
              }}
            >
              {CURRICULUM_30_DAYS.map((d) => {
                const sRec = allSessions.find((x) => x.day_number === d.dayNumber);
                const statusIcon =
                  sRec?.status === 'COMPLETED'
                    ? '✅'
                    : sRec?.status === 'IN_PROGRESS'
                    ? '⏳'
                    : '📖';
                return (
                  <option key={d.dayNumber} value={d.dayNumber}>
                    {statusIcon} Hari {d.dayNumber} ({d.lessonDate}) — {d.chapterCode}: {d.titleBm}
                  </option>
                );
              })}
            </select>
          </div>

          {/* 5 Unlocked Stage Tabs — ALL IMMEDIATELY CLICKABLE */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '8px',
            }}
          >
            {STAGE_TABS.map((tab) => {
              const isCurrent = session.current_stage === tab.num;
              const doneFlag =
                session.stage_completed_flags[
                  `stage${tab.num}` as keyof typeof session.stage_completed_flags
                ];
              return (
                <button
                  key={tab.num}
                  type="button"
                  onClick={() => handleSwitchStage(tab.num)}
                  style={{
                    textAlign: 'left',
                    padding: '10px 12px',
                    borderRadius: '12px',
                    border: isCurrent
                      ? '2.5px solid #2563EB'
                      : doneFlag
                      ? '2px solid #10B981'
                      : '1.5px solid #CBD5E1',
                    background: isCurrent ? '#EFF6FF' : doneFlag ? '#ECFDF5' : '#F8FAFC',
                    cursor: 'pointer',
                    transition: 'all 0.12s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 900,
                        fontSize: '13px',
                        color: isCurrent ? '#1D4ED8' : '#0F172A',
                      }}
                    >
                      {doneFlag ? '✅ ' : ''}
                      {tab.bm}
                    </span>
                    <span
                      style={{
                        background: isCurrent ? '#2563EB' : '#E2E8F0',
                        color: isCurrent ? '#FFFFFF' : '#334155',
                        fontSize: '10.5px',
                        fontWeight: 800,
                        padding: '2px 7px',
                        borderRadius: '999px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tab.badge}
                    </span>
                  </div>
                  {showChineseHelper && (
                    <div style={{ fontSize: '11.5px', color: '#475569', marginTop: '3px' }}>
                      {tab.zh}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Stage Content Container */}
      <main style={{ maxWidth: '1280px', margin: '22px auto 0', padding: '0 16px' }}>
        {session.current_stage === 1 && (
          <Stage1TextbookMastery
            student={student}
            session={session}
            lesson={lesson}
            showChineseHelper={showChineseHelper}
            itemTabSwitched={itemTabSwitched}
            onResetItemTabSwitch={() => setItemTabSwitched(false)}
            onGoToStage={handleSwitchStage}
          />
        )}
        {session.current_stage === 2 && (
          <Stage2KeywordCamp
            student={student}
            session={session}
            lesson={lesson}
            showChineseHelper={showChineseHelper}
            itemTabSwitched={itemTabSwitched}
            onResetItemTabSwitch={() => setItemTabSwitched(false)}
            onGoToStage={handleSwitchStage}
          />
        )}
        {session.current_stage === 3 && (
          <Stage3ConceptMap
            student={student}
            session={session}
            lesson={lesson}
            showChineseHelper={showChineseHelper}
            itemTabSwitched={itemTabSwitched}
            onResetItemTabSwitch={() => setItemTabSwitched(false)}
            onGoToStage={handleSwitchStage}
          />
        )}
        {session.current_stage === 4 && (
          <Stage4UasaExamCenter
            student={student}
            session={session}
            lesson={lesson}
            showChineseHelper={showChineseHelper}
            itemTabSwitched={itemTabSwitched}
            onResetItemTabSwitch={() => setItemTabSwitched(false)}
            onGoToStage={handleSwitchStage}
          />
        )}
        {session.current_stage === 5 && (
          <Stage5ReviewAndLock
            student={student}
            session={session}
            lesson={lesson}
            showChineseHelper={showChineseHelper}
            onSessionRefresh={() => setDbTick((t) => t + 1)}
          />
        )}
      </main>

      {/* WhatsApp Sync Modal */}
      {syncModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 900,
            background: 'rgba(15, 23, 42, 0.72)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              maxWidth: '520px',
              width: '100%',
              padding: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 900 }}>
                📲 传送学习进度同步码给家长
              </h3>
              <button
                type="button"
                onClick={() => setSyncModalOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <X size={20} />
              </button>
            </div>
            <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.55 }}>
              若你在自己的电脑／平板上课，家长在另一部手机打开后台，只需点击下方复制同步码并发 WhatsApp 给家长，家长贴入后台即可一秒同步所有作答与学习时长！
            </p>
            <textarea
              readOnly
              rows={4}
              value={syncCodeStr}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '10px',
                borderRadius: '10px',
                border: '1.5px solid #CBD5E1',
                fontSize: '12px',
                fontFamily: 'monospace',
              }}
            />
            <button
              type="button"
              onClick={() => {
                navigator.clipboard?.writeText(syncCodeStr);
                setCopiedCode(true);
                setTimeout(() => setCopiedCode(false), 2500);
              }}
              style={{
                marginTop: '12px',
                width: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: '#10B981',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '11px',
                padding: '12px',
                fontSize: '14.5px',
                fontWeight: 900,
                cursor: 'pointer',
              }}
            >
              {copiedCode ? <Check size={18} /> : <Copy size={18} />}
              {copiedCode ? '已复制成功！请贴到 WhatsApp 发送' : '一键复制同步码'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
