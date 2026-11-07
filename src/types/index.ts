import { OfficialSubtopic } from './textbook';

export type SessionStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

export type SubmissionType =
  | 'STORY_CHECKPOINT'
  | 'BM_KEYWORD_MATCH'
  | 'BM_KEYWORD_SPELLING'
  | 'CONCEPT_MAP_DRAG'
  | 'UASA_OBJ_MCQ'
  | 'UASA_STRUKTUR_B'
  | 'UASA_KBAT_C'
  | 'ERROR_RETRY'
  | 'DAILY_FINAL_LOCK';

export type MasteryStatus = 'LEARNING' | 'WEAK' | 'MASTERED';

export interface StudentRecord {
  id: string;
  name: string;
  slug: string;
  access_pin: string;
  grade_level: string;
  active_subjects: string[];
  start_date: string;
  daily_target_seconds: number;
  created_at: string;
}

export interface DailySessionRecord {
  id: string;
  student_id: string;
  lesson_date: string;
  day_number: number;
  chapter_code: string;
  status: SessionStatus;
  started_at: string | null;
  completed_at: string | null;
  active_study_seconds: number;
  idle_seconds: number;
  idle_pause_count: number;
  tab_switch_count: number;
  current_stage: 1 | 2 | 3 | 4 | 5;
  stage_completed_flags: {
    stage1: boolean;
    stage2: boolean;
    stage3: boolean;
    stage4: boolean;
    stage5: boolean;
  };
}

export interface AiGradingBreakdown {
  fakta_score: number;
  huraian_score: number;
  contoh_score: number;
  inferens_score: number;
  mandarin_feedback: string;
  suggested_bm_improvement: string;
  graded_by?: 'GEMINI_CLOUD' | 'LOCAL_KSSM_RUBRIC_ENGINE';
}

export interface AntiCheatFlags {
  fast_click_warning: boolean;
  guessing_suspected: boolean;
  paste_detected: boolean;
  pasted_char_count: number;
  tab_switched_during_item: boolean;
}

export interface SubmissionLogRecord {
  id: string;
  session_id: string;
  student_id: string;
  stage_number: 1 | 2 | 3 | 4 | 5;
  submission_type: SubmissionType;
  item_id: string;
  question_prompt: string;
  student_raw_answer: string;
  attempt_number: number;
  is_correct: boolean;
  score_awarded: number;
  max_score: number;
  ai_grading_breakdown: AiGradingBreakdown | null;
  time_spent_seconds: number;
  anti_cheat_flags: AntiCheatFlags;
  submitted_at: string;
}

export interface KeywordMasteryRecord {
  student_id: string;
  bm_term: string;
  mandarin_meaning: string;
  chapter: string;
  correct_streak: number;
  wrong_count: number;
  last_misspelled_input: string;
  mastery_status: MasteryStatus;
}

export interface TabSwitchEvent {
  student_id: string;
  session_id: string;
  day_number: number;
  occurred_at: string;
  reason: 'TAB_HIDDEN' | 'WINDOW_BLUR' | 'IDLE_90S';
}

export interface DatabaseStore {
  version: number;
  students: StudentRecord[];
  daily_sessions: DailySessionRecord[];
  submission_logs: SubmissionLogRecord[];
  keyword_mastery: KeywordMasteryRecord[];
  tab_events: TabSwitchEvent[];
  admin_settings: {
    admin_pin: string;
    gemini_api_key?: string;
  };
}

// Curriculum JSON structures from all_30_days.json
export interface McqOption {
  id: 'A' | 'B' | 'C' | 'D';
  textBm: string;
  textZh: string;
}

export interface StoryCheckpoint {
  itemId: string;
  promptBm: string;
  promptZhHelper: string;
  roleplayPromptZh: string;
  options: McqOption[];
  correctOptionId: 'A' | 'B' | 'C' | 'D';
  explanationRightZh: string;
  explanationWrongZh: string;
}

export interface StorySegment {
  id: string;
  segmentNumber: number;
  headingZh: string;
  eraTag: string;
  narrativeParagraphs: string[];
  comicDialogues: {
    speaker: string;
    roleBadge: string;
    avatarEmoji: string;
    bubbleTheme: string;
    lineZh: string;
    bmKeyPhrase: string;
  }[];
  textbookDeepPoints: {
    badgeType: 'FAKTA' | 'HURAIAN' | 'CONTOH' | 'TRAP';
    codeLabel: string;
    titleBm: string;
    titleZh: string;
    detailZh: string;
    examMustWriteBm: string;
  }[];
  funnyTeacherHackZh: string;
  highlightedBmTerms: string[];
  checkpoint: StoryCheckpoint;
}

export interface KeywordItem {
  id: string;
  bmTerm: string;
  mandarinMeaning: string;
  storyContextZh: string;
  memoryMnemonicZh: string;
  spCode: string;
  chapterTag: string;
  fillBlankPromptZh: string;
  fillBlankSentenceBm: string;
  acceptedVariants: string[];
}

export interface ConceptMapNode {
  nodeId: string;
  orderIndex: number;
  slotLabel: string;
  correctTextBm: string;
  correctTextZh: string;
  wrongPlacementHintZh: string;
}

export interface ConceptMapChallenge {
  id: string;
  mapTitleBm: string;
  mapTitleZh: string;
  mapType: string;
  instructionZh: string;
  nodes: ConceptMapNode[];
}

export interface UasaObjectiveMcq {
  itemId: string;
  spCode: string;
  difficulty: 'RENDAH' | 'SEDERHANA' | 'TINGGI';
  questionBm: string;
  questionZh: string;
  trickyWordsGlossary: { bm: string; zh: string }[];
  options: McqOption[];
  correctOptionId: 'A' | 'B' | 'C' | 'D';
  explanationBm: string;
  explanationZh: string;
}

export interface UasaWrittenQuestion {
  itemId: string;
  section: 'BAHAGIAN_B' | 'BAHAGIAN_C';
  spCode: string;
  maxScore: number;
  stemContextBm: string;
  questionBm: string;
  questionZh: string;
  sentenceStarters: {
    tag: string;
    labelZh: string;
    starterBm: string;
    guidanceZh: string;
  }[];
  rubric: {
    faktaMax: number;
    huraianMax: number;
    contohMax: number;
    inferensMax: number;
    expectedFaktaKeywords: string[];
    expectedHuraianKeywords: string[];
    expectedContohKeywords: string[];
    expectedInferensKeywords: string[];
    modelAnswerBm: string;
    modelAnswerZh: string;
  };
}

export interface DailyLessonModule {
  dayNumber: number;
  lessonDate: string;
  chapterCode: string;
  chapterIllustrationKey: string;
  illustrationCaptionZh: string;
  sceneHotspots: {
    id: string;
    xPercent: number;
    yPercent: number;
    badgeBm: string;
    titleZh: string;
    detailZh: string;
  }[];
  officialKssmRef: string;
  titleBm: string;
  titleZh: string;
  lessonType: string;
  learningObjectives: string[];
  syllabusAuditNoteZh?: string;
  storySegments: StorySegment[];
  keywords: KeywordItem[];
  conceptMap: ConceptMapChallenge;
  uasaExam: {
    bahagianA: UasaObjectiveMcq[];
    bahagianB: UasaWrittenQuestion;
    bahagianC: UasaWrittenQuestion;
  };
  /** Enriched at runtime with full official DBP BM+ZH Subtopic Modules & expanded 20-MCQ UASA bank */
  officialSubtopics?: OfficialSubtopic[];
  expandedBahagianA?: UasaObjectiveMcq[];
}
