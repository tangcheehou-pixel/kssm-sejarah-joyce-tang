import {
  DatabaseStore,
  StudentRecord,
  DailySessionRecord,
  SubmissionLogRecord,
  KeywordMasteryRecord,
  TabSwitchEvent,
} from '../types';

const DB_STORAGE_KEY = 'kssm_isolated_tutoring_db_v2';
const SYNC_CHANNEL_NAME = 'kssm_telemetry_sync_v2';

export const JOYCE_STUDENT_ID = 'STD-001';
export const JOYCE_SLUG = 'joyce-tang';

const CHAPTER_CODES_30: { day: number; date: string; code: string }[] = [
  { day: 1, date: '2026-11-07', code: 'Bab 1.1 & 1.2' },
  { day: 2, date: '2026-11-08', code: 'Bab 1.3 & 1.4' },
  { day: 3, date: '2026-11-09', code: 'Bab 2.1' },
  { day: 4, date: '2026-11-10', code: 'Bab 2.2, 2.3 & 2.4' },
  { day: 5, date: '2026-11-11', code: 'Bab 3.1 & 3.2 (Perak)' },
  { day: 6, date: '2026-11-12', code: 'Bab 3.2 (Selangor, N.S. & Pahang)' },
  { day: 7, date: '2026-11-13', code: 'Bab 3.3 & 3.4' },
  { day: 8, date: '2026-11-14', code: 'Ulang Kaji 1 (Bab 1–3)' },
  { day: 9, date: '2026-11-15', code: 'Bab 4.1 & 4.2' },
  { day: 10, date: '2026-11-16', code: 'Bab 4.3 & 4.4' },
  { day: 11, date: '2026-11-17', code: 'Bab 5.1 & 5.2' },
  { day: 12, date: '2026-11-18', code: 'Bab 5.3 & 5.4' },
  { day: 13, date: '2026-11-19', code: 'Bab 6.1 & 6.2' },
  { day: 14, date: '2026-11-20', code: 'Bab 6.3 & 6.4' },
  { day: 15, date: '2026-11-21', code: 'Ulang Kaji 2 (Bab 4–6)' },
  { day: 16, date: '2026-11-22', code: 'Bab 7.1 (Bahagian 1)' },
  { day: 17, date: '2026-11-23', code: 'Bab 7.1 (Bahagian 2)' },
  { day: 18, date: '2026-11-24', code: 'Bab 7.2, 7.3 & 7.4' },
  { day: 19, date: '2026-11-25', code: 'Bab 8.1 & 8.2' },
  { day: 20, date: '2026-11-26', code: 'Bab 8.3 & 8.4' },
  { day: 21, date: '2026-11-27', code: 'Ulang Kaji 3 (Bab 7–8)' },
  { day: 22, date: '2026-11-28', code: 'Klinik UASA 1 (Kronologi & Perjanjian)' },
  { day: 23, date: '2026-11-29', code: 'Klinik UASA 2 (Bahagian B Struktur)' },
  { day: 24, date: '2026-11-30', code: 'Klinik UASA 3 (Bahagian C KBAT)' },
  { day: 25, date: '2026-12-01', code: 'Simulasi UASA Penuh 1' },
  { day: 26, date: '2026-12-02', code: 'Simulasi UASA Penuh 2' },
  { day: 27, date: '2026-12-03', code: 'Simulasi UASA Penuh 3' },
  { day: 28, date: '2026-12-04', code: 'Simulasi UASA Penuh 4' },
  { day: 29, date: '2026-12-05', code: 'Simulasi UASA Penuh 5' },
  { day: 30, date: '2026-12-06', code: 'Simulasi UASA Penuh 6 (Peperiksaan Akhir)' },
];

function addDaysIso(startDateIso: string, offsetDays: number): string {
  const base = new Date(`${startDateIso}T00:00:00Z`);
  if (Number.isNaN(base.getTime())) return '2026-11-07';
  base.setUTCDate(base.getUTCDate() + offsetDays);
  return base.toISOString().slice(0, 10);
}

export function buildSessionsForStudent(
  studentId: string,
  startDate: string
): DailySessionRecord[] {
  return CHAPTER_CODES_30.map((item, idx) => ({
    id: `SES-${studentId}-D${String(item.day).padStart(2, '0')}`,
    student_id: studentId,
    lesson_date: addDaysIso(startDate, idx),
    day_number: item.day,
    chapter_code: item.code,
    status: 'NOT_STARTED',
    started_at: null,
    completed_at: null,
    active_study_seconds: 0,
    idle_seconds: 0,
    idle_pause_count: 0,
    tab_switch_count: 0,
    current_stage: 1,
    stage_completed_flags: {
      stage1: false,
      stage2: false,
      stage3: false,
      stage4: false,
      stage5: false,
    },
  }));
}

function createInitialStore(): DatabaseStore {
  const joyce: StudentRecord = {
    id: JOYCE_STUDENT_ID,
    name: 'Joyce Tang',
    slug: JOYCE_SLUG,
    access_pin: '',
    grade_level: 'Form 3 (Tingkatan 3)',
    active_subjects: ['Sejarah'],
    start_date: '2026-11-07',
    daily_target_seconds: 5400,
    created_at: '2026-11-06T00:00:00.000Z',
  };

  return {
    version: 2,
    students: [joyce],
    daily_sessions: buildSessionsForStudent(joyce.id, joyce.start_date),
    submission_logs: [],
    keyword_mastery: [],
    tab_events: [],
    admin_settings: {
      admin_pin: '8888',
      gemini_api_key: '',
    },
  };
}

let channel: BroadcastChannel | null = null;
try {
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    channel = new BroadcastChannel(SYNC_CHANNEL_NAME);
  }
} catch {
  channel = null;
}

const listeners = new Set<() => void>();

export function subscribeDb(cb: () => void): () => void {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === DB_STORAGE_KEY) cb();
  };
  const onBroadcast = () => cb();
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', onStorage);
  }
  channel?.addEventListener('message', onBroadcast);
  return () => {
    listeners.delete(cb);
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', onStorage);
    }
    channel?.removeEventListener('message', onBroadcast);
  };
}

function notifyAll() {
  listeners.forEach((fn) => fn());
  try {
    channel?.postMessage({ updatedAt: Date.now() });
  } catch {
    // ignore
  }
}

export function loadDb(): DatabaseStore {
  if (typeof window === 'undefined') return createInitialStore();
  try {
    const raw = window.localStorage.getItem(DB_STORAGE_KEY);
    if (!raw) {
      const fresh = createInitialStore();
      window.localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(fresh));
      return fresh;
    }
    const parsed = JSON.parse(raw) as DatabaseStore;
    if (!parsed.students || !parsed.students.some((s) => s.slug === JOYCE_SLUG)) {
      const fresh = createInitialStore();
      window.localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(fresh));
      return fresh;
    }
    return parsed;
  } catch {
    return createInitialStore();
  }
}

export function saveDb(store: DatabaseStore): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(store));
  notifyAll();
}

export function getStudentBySlug(slug: string): StudentRecord | undefined {
  return loadDb().students.find((s) => s.slug.toLowerCase() === slug.toLowerCase());
}

export function getStudentSessions(studentId: string): DailySessionRecord[] {
  return loadDb()
    .daily_sessions.filter((s) => s.student_id === studentId)
    .sort((a, b) => a.day_number - b.day_number);
}

export function getOrStartSession(studentId: string, dayNumber: number): DailySessionRecord {
  const db = loadDb();
  let session = db.daily_sessions.find(
    (s) => s.student_id === studentId && s.day_number === dayNumber
  );
  if (!session) {
    const student = db.students.find((s) => s.id === studentId);
    const created = buildSessionsForStudent(studentId, student?.start_date || '2026-11-07');
    db.daily_sessions.push(...created);
    session = db.daily_sessions.find(
      (s) => s.student_id === studentId && s.day_number === dayNumber
    )!;
  }
  if (session.status === 'NOT_STARTED') {
    session.status = 'IN_PROGRESS';
    session.started_at = new Date().toISOString();
    saveDb(db);
  }
  return session;
}

export function tickSessionTimer(
  studentId: string,
  dayNumber: number,
  deltaActiveSeconds: number,
  deltaIdleSeconds: number
): DailySessionRecord {
  const db = loadDb();
  const session = db.daily_sessions.find(
    (s) => s.student_id === studentId && s.day_number === dayNumber
  );
  if (!session) return getOrStartSession(studentId, dayNumber);
  if (session.status === 'NOT_STARTED') {
    session.status = 'IN_PROGRESS';
    session.started_at = new Date().toISOString();
  }
  session.active_study_seconds = Math.max(0, session.active_study_seconds + deltaActiveSeconds);
  session.idle_seconds = Math.max(0, session.idle_seconds + deltaIdleSeconds);
  saveDb(db);
  return session;
}

export function recordPauseOrTabEvent(
  studentId: string,
  dayNumber: number,
  reason: 'TAB_HIDDEN' | 'WINDOW_BLUR' | 'IDLE_90S'
): DailySessionRecord {
  const db = loadDb();
  const session = db.daily_sessions.find(
    (s) => s.student_id === studentId && s.day_number === dayNumber
  );
  if (!session) return getOrStartSession(studentId, dayNumber);
  if (reason === 'IDLE_90S') {
    session.idle_pause_count += 1;
  } else {
    session.tab_switch_count += 1;
  }
  const ev: TabSwitchEvent = {
    student_id: studentId,
    session_id: session.id,
    day_number: dayNumber,
    occurred_at: new Date().toISOString(),
    reason,
  };
  db.tab_events.push(ev);
  saveDb(db);
  return session;
}

export function setCurrentStage(
  studentId: string,
  dayNumber: number,
  stage: 1 | 2 | 3 | 4 | 5
): void {
  const db = loadDb();
  const session = db.daily_sessions.find(
    (s) => s.student_id === studentId && s.day_number === dayNumber
  );
  if (session) {
    session.current_stage = stage;
    saveDb(db);
  }
}

export function markStageComplete(
  studentId: string,
  dayNumber: number,
  stage: 1 | 2 | 3 | 4 | 5
): void {
  const db = loadDb();
  const session = db.daily_sessions.find(
    (s) => s.student_id === studentId && s.day_number === dayNumber
  );
  if (!session) return;
  const key = `stage${stage}` as keyof DailySessionRecord['stage_completed_flags'];
  session.stage_completed_flags[key] = true;
  if (stage === 5) {
    session.status = 'COMPLETED';
    session.completed_at = new Date().toISOString();
  }
  saveDb(db);
}

export function recordSubmission(
  entry: Omit<SubmissionLogRecord, 'id' | 'attempt_number' | 'submitted_at'>
): SubmissionLogRecord {
  const db = loadDb();
  const previousAttempts = db.submission_logs.filter(
    (l) =>
      l.student_id === entry.student_id &&
      l.session_id === entry.session_id &&
      l.item_id === entry.item_id
  ).length;

  const fullRecord: SubmissionLogRecord = {
    ...entry,
    id: `SUB-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    attempt_number: previousAttempts + 1,
    submitted_at: new Date().toISOString(),
  };
  db.submission_logs.push(fullRecord);
  saveDb(db);
  return fullRecord;
}

export function updateKeywordMastery(params: {
  studentId: string;
  bmTerm: string;
  mandarinMeaning: string;
  chapter: string;
  isCorrect: boolean;
  rawInput?: string;
}): KeywordMasteryRecord {
  const db = loadDb();
  let rec = db.keyword_mastery.find(
    (k) =>
      k.student_id === params.studentId &&
      k.bm_term.toLowerCase() === params.bmTerm.toLowerCase()
  );
  if (!rec) {
    rec = {
      student_id: params.studentId,
      bm_term: params.bmTerm,
      mandarin_meaning: params.mandarinMeaning,
      chapter: params.chapter,
      correct_streak: 0,
      wrong_count: 0,
      last_misspelled_input: '',
      mastery_status: 'LEARNING',
    };
    db.keyword_mastery.push(rec);
  }
  if (params.isCorrect) {
    rec.correct_streak += 1;
    rec.mastery_status = rec.correct_streak >= 2 && rec.wrong_count === 0 ? 'MASTERED' : rec.correct_streak >= 3 ? 'MASTERED' : 'LEARNING';
  } else {
    rec.wrong_count += 1;
    rec.correct_streak = 0;
    if (params.rawInput) rec.last_misspelled_input = params.rawInput;
    rec.mastery_status = 'WEAK';
  }
  saveDb(db);
  return rec;
}

export function getStudentLogs(studentId: string, sessionId?: string): SubmissionLogRecord[] {
  return loadDb()
    .submission_logs.filter(
      (l) => l.student_id === studentId && (!sessionId || l.session_id === sessionId)
    )
    .sort((a, b) => b.submitted_at.localeCompare(a.submitted_at));
}

export function getStudentKeywords(studentId: string): KeywordMasteryRecord[] {
  return loadDb().keyword_mastery.filter((k) => k.student_id === studentId);
}

export function registerNewStudent(input: {
  name: string;
  slug: string;
  accessPin: string;
  gradeLevel: string;
  activeSubjects: string[];
  startDate: string;
  dailyTargetMinutes: number;
}): { ok: boolean; error?: string; student?: StudentRecord } {
  const db = loadDb();
  const cleanSlug = input.slug
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  if (!cleanSlug) {
    return { ok: false, error: '请输入有效的专属网址代号（Slug），例如 ethan-lim。' };
  }
  if (db.students.some((s) => s.slug.toLowerCase() === cleanSlug)) {
    return { ok: false, error: `专属网址 /portal/${cleanSlug} 已存在，请使用其他代号。` };
  }
  const nextNum = db.students.length + 1;
  const student: StudentRecord = {
    id: `STD-${String(nextNum).padStart(3, '0')}`,
    name: input.name.trim(),
    slug: cleanSlug,
    access_pin: input.accessPin.trim(),
    grade_level: input.gradeLevel,
    active_subjects: input.activeSubjects.length ? input.activeSubjects : ['Sejarah'],
    start_date: input.startDate || '2026-11-07',
    daily_target_seconds: Math.max(600, Math.round(input.dailyTargetMinutes * 60)),
    created_at: new Date().toISOString(),
  };
  db.students.push(student);
  db.daily_sessions.push(...buildSessionsForStudent(student.id, student.start_date));
  saveDb(db);
  return { ok: true, student };
}

export function exportDatabaseJson(): string {
  return JSON.stringify(loadDb(), null, 2);
}

export function importDatabaseJson(jsonText: string): { ok: boolean; message: string } {
  try {
    const parsed = JSON.parse(jsonText) as DatabaseStore;
    if (!Array.isArray(parsed.students) || !Array.isArray(parsed.daily_sessions)) {
      return { ok: false, message: 'JSON 格式不正确：缺少 students 或 daily_sessions 数据表。' };
    }
    saveDb(parsed);
    return {
      ok: true,
      message: `成功导入 ${parsed.students.length} 位学生、${parsed.submission_logs?.length || 0} 笔提交记录！`,
    };
  } catch (err) {
    return { ok: false, message: `JSON 解析失败：${(err as Error).message}` };
  }
}

/** Compact WhatsApp Sync Code for instant cross-device parent monitoring */
export function generateWhatsAppSyncCode(studentId: string): string {
  const db = loadDb();
  const student = db.students.find((s) => s.id === studentId);
  const sessions = db.daily_sessions.filter(
    (s) => s.student_id === studentId && s.status !== 'NOT_STARTED'
  );
  const logs = db.submission_logs.filter((l) => l.student_id === studentId).slice(-120);
  const kw = db.keyword_mastery.filter((k) => k.student_id === studentId);
  const payload = { s: student, d: sessions, l: logs, k: kw, t: Date.now() };
  const utf8Bytes = new TextEncoder().encode(JSON.stringify(payload));
  let binary = '';
  utf8Bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return `KSSM-SYNC-V1:${btoa(binary)}`;
}

export function importWhatsAppSyncCode(code: string): { ok: boolean; message: string } {
  try {
    const trimmed = code.trim();
    const prefix = 'KSSM-SYNC-V1:';
    const idx = trimmed.indexOf(prefix);
    if (idx === -1) {
      return { ok: false, message: '未找到有效的 KSSM-SYNC-V1: 同步码，请确认完整复制。' };
    }
    const b64 = trimmed.slice(idx + prefix.length).trim();
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const jsonStr = new TextDecoder().decode(bytes);
    const payload = JSON.parse(jsonStr) as {
      s?: StudentRecord;
      d?: DailySessionRecord[];
      l?: SubmissionLogRecord[];
      k?: KeywordMasteryRecord[];
    };
    if (!payload.s) {
      return { ok: false, message: '同步码缺少学生基本资料。' };
    }
    const db = loadDb();
    if (!db.students.some((st) => st.id === payload.s!.id)) {
      db.students.push(payload.s);
      db.daily_sessions.push(...buildSessionsForStudent(payload.s.id, payload.s.start_date));
    }
    for (const incomingSes of payload.d || []) {
      const existingIdx = db.daily_sessions.findIndex((x) => x.id === incomingSes.id);
      if (existingIdx >= 0) {
        db.daily_sessions[existingIdx] = incomingSes;
      } else {
        db.daily_sessions.push(incomingSes);
      }
    }
    const existingLogIds = new Set(db.submission_logs.map((x) => x.id));
    for (const log of payload.l || []) {
      if (!existingLogIds.has(log.id)) {
        db.submission_logs.push(log);
      }
    }
    for (const kw of payload.k || []) {
      const kIdx = db.keyword_mastery.findIndex(
        (x) =>
          x.student_id === kw.student_id &&
          x.bm_term.toLowerCase() === kw.bm_term.toLowerCase()
      );
      if (kIdx >= 0) db.keyword_mastery[kIdx] = kw;
      else db.keyword_mastery.push(kw);
    }
    saveDb(db);
    return {
      ok: true,
      message: `已成功同步学生 ${payload.s.name} 的最新学习时长与 ${payload.l?.length || 0} 笔作答记录！`,
    };
  } catch (e) {
    return { ok: false, message: `同步码解析失败：${(e as Error).message}` };
  }
}

export function saveAdminApiKey(apiKey: string): void {
  const db = loadDb();
  db.admin_settings.gemini_api_key = apiKey.trim();
  saveDb(db);
}
