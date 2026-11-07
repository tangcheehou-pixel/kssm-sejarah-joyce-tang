import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  UserPlus,
  Download,
  Upload,
  ExternalLink,
  ShieldAlert,
  Clock,
  CheckCircle2,
  KeyRound,
} from 'lucide-react';
import {
  exportDatabaseJson,
  getStudentKeywords,
  getStudentLogs,
  getStudentSessions,
  importDatabaseJson,
  importWhatsAppSyncCode,
  JOYCE_STUDENT_ID,
  loadDb,
  saveAdminApiKey,
  subscribeDb,
} from '../services/db';
import { formatMmSs } from '../components/ActiveStudyTimerHeader';

export const AdminDashboardPage: React.FC = () => {
  const [tick, setTick] = useState(0);
  const [selectedStudentId, setSelectedStudentId] = useState<string>(JOYCE_STUDENT_ID);
  const [syncCodeInput, setSyncCodeInput] = useState('');
  const [syncFeedback, setSyncFeedback] = useState('');
  const [apiKeyInput, setApiKeyInput] = useState(() => loadDb().admin_settings?.gemini_api_key || '');
  const [apiSavedMsg, setApiSavedMsg] = useState('');

  useEffect(() => {
    return subscribeDb(() => setTick((t) => t + 1));
  }, []);

  const db = useMemo(() => loadDb(), [tick]);
  const currentStudent =
    db.students.find((s) => s.id === selectedStudentId) || db.students[0];

  const sessions = useMemo(
    () => (currentStudent ? getStudentSessions(currentStudent.id) : []),
    [currentStudent, tick]
  );
  const logs = useMemo(
    () => (currentStudent ? getStudentLogs(currentStudent.id) : []),
    [currentStudent, tick]
  );
  const keywords = useMemo(
    () => (currentStudent ? getStudentKeywords(currentStudent.id) : []),
    [currentStudent, tick]
  );

  const totalActiveSec = sessions.reduce((acc, s) => acc + s.active_study_seconds, 0);
  const totalIdleSec = sessions.reduce((acc, s) => acc + s.idle_seconds, 0);
  const totalTabSwitches = sessions.reduce((acc, s) => acc + s.tab_switch_count, 0);
  const completedDays = sessions.filter((s) => s.status === 'COMPLETED').length;

  const handleDownloadJson = () => {
    const blob = new Blob([exportDatabaseJson()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kssm-telemetry-${currentStudent?.slug || 'backup'}-${new Date()
      .toISOString()
      .slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleUploadJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const res = importDatabaseJson(String(reader.result || ''));
      setSyncFeedback(res.message);
      setTick((t) => t + 1);
    };
    reader.readAsText(file);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F1F5F9', paddingBottom: '48px' }}>
      {/* Header */}
      <header
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          color: '#FFFFFF',
          padding: '18px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div>
            <div style={{ fontSize: '12px', color: '#FACC15', fontWeight: 900 }}>
              🛡️ PUSAT PEMANTAUAN TELEMETRI IBU BAPA & PENTADBIR (1对1完全隔离监控中心)
            </div>
            <h1 style={{ margin: '4px 0 0', fontSize: '22px', fontWeight: 900 }}>
              正在独立监控学生：{currentStudent?.name} ({currentStudent?.id})
            </h1>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Users size={16} color="#93C5FD" />
              <select
                value={currentStudent?.id}
                onChange={(e) => setSelectedStudentId(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '9px',
                  fontWeight: 800,
                  fontSize: '13.5px',
                }}
              >
                {db.students.map((st) => (
                  <option key={st.id} value={st.id}>
                    {st.name} ({st.id} · /portal/{st.slug})
                  </option>
                ))}
              </select>
            </div>

            {currentStudent && (
              <Link
                to={`/portal/${currentStudent.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#2563EB',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  padding: '8px 14px',
                  borderRadius: '9px',
                  fontSize: '13px',
                  fontWeight: 800,
                }}
              >
                <ExternalLink size={14} />
                打开 {currentStudent.name} 专属教室
              </Link>
            )}

            <Link
              to="/admin/students/new"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#10B981',
                color: '#FFFFFF',
                textDecoration: 'none',
                padding: '8px 14px',
                borderRadius: '9px',
                fontSize: '13px',
                fontWeight: 800,
              }}
            >
              <UserPlus size={15} />
              注册新学生专属网址
            </Link>
          </div>
        </div>
      </header>

      <main
        style={{
          maxWidth: '1280px',
          margin: '24px auto 0',
          padding: '0 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '22px',
        }}
      >
        {/* Summary KPI Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '14px',
          }}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '18px',
              border: '1.5px solid #CBD5E1',
            }}
          >
            <div style={{ fontSize: '12.5px', color: '#64748B', fontWeight: 700 }}>
              <Clock size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
              累计有效学习总时长
            </div>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#0F172A', marginTop: '4px' }}>
              {formatMmSs(totalActiveSec)}
            </div>
            <div style={{ fontSize: '12px', color: '#475569' }}>
              发呆暂停累计：{formatMmSs(totalIdleSec)}
            </div>
          </div>

          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '18px',
              border: '1.5px solid #CBD5E1',
            }}
          >
            <div style={{ fontSize: '12.5px', color: '#64748B', fontWeight: 700 }}>
              <CheckCircle2 size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
              30天课程结业进度
            </div>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#059669', marginTop: '4px' }}>
              {completedDays} / 30 天
            </div>
            <div style={{ fontSize: '12px', color: '#475569' }}>
              开学日期：{currentStudent?.start_date}
            </div>
          </div>

          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '18px',
              border: '1.5px solid #CBD5E1',
            }}
          >
            <div style={{ fontSize: '12.5px', color: '#64748B', fontWeight: 700 }}>
              总提交点击次数 (Submission Logs)
            </div>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#2563EB', marginTop: '4px' }}>
              {logs.length} 次提交
            </div>
            <div style={{ fontSize: '12px', color: '#475569' }}>
              已追踪马来文词汇：{keywords.length} 个
            </div>
          </div>

          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '18px',
              border: '1.5px solid #FDA4AF',
            }}
          >
            <div style={{ fontSize: '12.5px', color: '#BE123C', fontWeight: 700 }}>
              <ShieldAlert size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
              切屏离开与防作弊警报
            </div>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#E11D48', marginTop: '4px' }}>
              {totalTabSwitches} 次切屏
            </div>
            <div style={{ fontSize: '12px', color: '#475569' }}>
              秒选/粘贴警报：
              {
                logs.filter(
                  (l) =>
                    l.anti_cheat_flags.fast_click_warning || l.anti_cheat_flags.paste_detected
                ).length
              }{' '}
              笔
            </div>
          </div>
        </div>

        {/* Cross-Device Sync & Backup Bar */}
        <div
          style={{
            background: '#FFFFFF',
            border: '2px solid #93C5FD',
            borderRadius: '18px',
            padding: '18px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ fontWeight: 900, fontSize: '15px', color: '#0F172A', marginBottom: '6px' }}>
              📲 跨手机／电脑同步：贴上孩子 WhatsApp 发来的同步码
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                value={syncCodeInput}
                onChange={(e) => setSyncCodeInput(e.target.value)}
                placeholder="在此粘贴 KSSM-SYNC-V1:... 同步码"
                style={{
                  flex: 1,
                  padding: '9px 12px',
                  borderRadius: '9px',
                  border: '1.5px solid #CBD5E1',
                  fontSize: '13px',
                }}
              />
              <button
                type="button"
                onClick={() => {
                  const res = importWhatsAppSyncCode(syncCodeInput);
                  setSyncFeedback(res.message);
                  if (res.ok) setSyncCodeInput('');
                  setTick((t) => t + 1);
                }}
                style={{
                  background: '#2563EB',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '9px',
                  padding: '9px 15px',
                  fontWeight: 800,
                  fontSize: '13px',
                  cursor: 'pointer',
                }}
              >
                立即导入同步
              </button>
            </div>
            {syncFeedback && (
              <div style={{ marginTop: '6px', fontSize: '12.5px', fontWeight: 700, color: '#047857' }}>
                {syncFeedback}
              </div>
            )}
          </div>

          <div>
            <div style={{ fontWeight: 900, fontSize: '15px', color: '#0F172A', marginBottom: '6px' }}>
              💾 完整数据库 JSON 导出／导入 & 可选 Gemini API 密钥
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              <button
                type="button"
                onClick={handleDownloadJson}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: '#0F172A',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <Download size={14} /> 导出 JSON
              </button>
              <label
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: '#E2E8F0',
                  color: '#0F172A',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <Upload size={14} /> 导入 JSON
                <input type="file" accept=".json" onChange={handleUploadJson} style={{ display: 'none' }} />
              </label>

              <div style={{ display: 'flex', gap: '4px', alignItems: 'center', flex: 1 }}>
                <KeyRound size={14} color="#64748B" />
                <input
                  type="password"
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  placeholder="可选：Gemini API Key"
                  style={{
                    flex: 1,
                    minWidth: '120px',
                    padding: '7px 9px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '12px',
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    saveAdminApiKey(apiKeyInput);
                    setApiSavedMsg('已储存');
                    setTimeout(() => setApiSavedMsg(''), 2000);
                  }}
                  style={{
                    background: '#059669',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '7px 10px',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {apiSavedMsg || '保存'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 30-Day Progress Grid */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '18px',
            padding: '20px',
            border: '1.5px solid #CBD5E1',
          }}
        >
          <h2 style={{ margin: '0 0 12px', fontSize: '18px', fontWeight: 900, color: '#0F172A' }}>
            📅 {currentStudent?.name} — 30天 KSSM Sejarah 学习时长与结业日历
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(195px, 1fr))',
              gap: '10px',
            }}
          >
            {sessions.map((ses) => (
              <div
                key={ses.id}
                style={{
                  background:
                    ses.status === 'COMPLETED'
                      ? '#ECFDF5'
                      : ses.status === 'IN_PROGRESS'
                      ? '#EFF6FF'
                      : '#F8FAFC',
                  border:
                    ses.status === 'COMPLETED'
                      ? '1.5px solid #10B981'
                      : ses.status === 'IN_PROGRESS'
                      ? '1.5px solid #3B82F6'
                      : '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '10px 12px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', fontWeight: 800 }}>
                  <span>Day {ses.day_number} · {ses.lesson_date}</span>
                  <span>
                    {ses.status === 'COMPLETED'
                      ? '✅'
                      : ses.status === 'IN_PROGRESS'
                      ? '⏳'
                      : '⚪'}
                  </span>
                </div>
                <div style={{ fontWeight: 800, fontSize: '13px', color: '#0F172A', marginTop: '3px' }}>
                  {ses.chapter_code}
                </div>
                <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px' }}>
                  有效时长：<strong>{formatMmSs(ses.active_study_seconds)}</strong> / 90:00
                </div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>
                  切屏：{ses.tab_switch_count} · 发呆暂停：{ses.idle_pause_count}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Granular Submission Telemetry Feed */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '18px',
            padding: '20px',
            border: '1.5px solid #CBD5E1',
            overflowX: 'auto',
          }}
        >
          <h2 style={{ margin: '0 0 12px', fontSize: '18px', fontWeight: 900, color: '#0F172A' }}>
            🔍 逐笔作答点击遥测全记录 (Granular Submission Logs — 共 {logs.length} 笔)
          </h2>
          {logs.length === 0 ? (
            <div style={{ padding: '20px', color: '#64748B', fontSize: '14px' }}>
              目前尚无学生提交记录。当 {currentStudent?.name} 在专属教室点击任何题目的「提交答案」按钮时，每一笔原始作答、耗时与防作弊标记都会即时显示在此处！
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#F1F5F9', textAlign: 'left' }}>
                  <th style={{ padding: '9px 10px' }}>提交时间</th>
                  <th style={{ padding: '9px 10px' }}>阶段 / 类型</th>
                  <th style={{ padding: '9px 10px' }}>马来文题目</th>
                  <th style={{ padding: '9px 10px' }}>学生原始输入</th>
                  <th style={{ padding: '9px 10px' }}>得分 / 尝试</th>
                  <th style={{ padding: '9px 10px' }}>耗时 / 防作弊标记</th>
                </tr>
              </thead>
              <tbody>
                {logs.slice(0, 100).map((l) => (
                  <tr key={l.id} style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '9px 10px', whiteSpace: 'nowrap', color: '#475569' }}>
                      {l.submitted_at.slice(0, 19).replace('T', ' ')}
                    </td>
                    <td style={{ padding: '9px 10px', fontWeight: 700 }}>
                      S{l.stage_number} · {l.submission_type}
                    </td>
                    <td style={{ padding: '9px 10px', maxWidth: '280px' }}>
                      {l.question_prompt.slice(0, 90)}
                    </td>
                    <td style={{ padding: '9px 10px', fontWeight: 700, color: '#0F172A', maxWidth: '240px' }}>
                      {l.student_raw_answer}
                    </td>
                    <td
                      style={{
                        padding: '9px 10px',
                        fontWeight: 900,
                        color: l.is_correct ? '#059669' : '#E11D48',
                      }}
                    >
                      {l.score_awarded}/{l.max_score} (第{l.attempt_number}次)
                    </td>
                    <td style={{ padding: '9px 10px' }}>
                      <span>{l.time_spent_seconds}s </span>
                      {l.anti_cheat_flags.fast_click_warning && (
                        <span style={{ color: '#D97706', fontWeight: 800 }}>⚡秒选 </span>
                      )}
                      {l.anti_cheat_flags.paste_detected && (
                        <span style={{ color: '#E11D48', fontWeight: 800 }}>
                          📋粘贴({l.anti_cheat_flags.pasted_char_count}字){' '}
                        </span>
                      )}
                      {l.anti_cheat_flags.tab_switched_during_item && (
                        <span style={{ color: '#BE123C', fontWeight: 800 }}>👀切屏 </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
};
