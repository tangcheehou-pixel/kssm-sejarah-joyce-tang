import rawDays from './all_30_days.json';
import { DailyLessonModule, UasaObjectiveMcq } from '../types';
import { OfficialSubtopic } from '../types/textbook';
import { TEXTBOOK_BAB_1_2 } from './textbook_bab1_2';
import { TEXTBOOK_BAB_3_4 } from './textbook_bab3_4';
import { TEXTBOOK_BAB_5_6 } from './textbook_bab5_6';
import { TEXTBOOK_BAB_7_8 } from './textbook_bab7_8';

export const ALL_OFFICIAL_SUBTOPICS: OfficialSubtopic[] = [
  ...TEXTBOOK_BAB_1_2,
  ...TEXTBOOK_BAB_3_4,
  ...TEXTBOOK_BAB_5_6,
  ...TEXTBOOK_BAB_7_8,
];

const SUBTOPIC_BY_CODE = new Map<string, OfficialSubtopic>(
  ALL_OFFICIAL_SUBTOPICS.map((s) => [s.subtopicCode, s])
);

const DAY_TO_SUBTOPICS: Record<number, string[]> = {
  1: ['1.1', '1.2'],
  2: ['1.3', '1.4'],
  3: ['2.1'],
  4: ['2.2', '2.3', '2.4'],
  5: ['3.1', '3.2'],
  6: ['3.2'],
  7: ['3.3', '3.4'],
  8: ['1.1', '1.4', '2.2', '3.2', '3.4'],
  9: ['4.1', '4.2'],
  10: ['4.3', '4.4'],
  11: ['5.1', '5.2'],
  12: ['5.3', '5.4'],
  13: ['6.1', '6.2'],
  14: ['6.3', '6.4'],
  15: ['4.2', '4.4', '5.2', '5.3', '6.2', '6.4'],
  16: ['7.1'],
  17: ['7.1', '7.2'],
  18: ['7.2', '7.3', '7.4'],
  19: ['8.1', '8.2'],
  20: ['8.3', '8.4'],
  21: ['7.1', '7.3', '8.2', '8.4'],
  22: ['1.4', '2.2', '3.2', '4.2', '5.2', '5.3'],
  23: ['1.1', '2.4', '3.3', '4.4', '6.2', '7.2'],
  24: ['1.2', '3.4', '6.4', '7.4', '8.2', '8.4'],
  25: ['1.1', '1.2', '2.1', '2.2', '6.1'],
  26: ['3.1', '3.2', '3.3', '3.4', '7.1'],
  27: ['4.1', '4.2', '4.3', '4.4', '8.1', '8.2'],
  28: ['5.1', '5.2', '5.3', '5.4', '7.3'],
  29: ['6.1', '6.2', '6.3', '6.4'],
  30: ['1.1', '2.2', '3.2', '4.2', '5.3', '6.2', '7.1', '8.2', '8.4'],
};

const EXTRA_DAY_PAIR_FOR_20_MCQS: Record<number, number> = {
  1: 2,
  2: 1,
  3: 4,
  4: 3,
  5: 6,
  6: 7,
  7: 5,
  8: 1,
  9: 10,
  10: 9,
  11: 12,
  12: 11,
  13: 14,
  14: 13,
  15: 13,
  16: 17,
  17: 18,
  18: 16,
  19: 20,
  20: 19,
  21: 18,
  22: 8,
  23: 15,
  24: 21,
  25: 26,
  26: 27,
  27: 28,
  28: 29,
  29: 30,
  30: 25,
};

const typedRawDays = rawDays as unknown as DailyLessonModule[];

export const CURRICULUM_30_DAYS: DailyLessonModule[] = typedRawDays.map((day) => {
  const codes = DAY_TO_SUBTOPICS[day.dayNumber] || ['1.1', '1.2'];
  const officialSubtopics = codes
    .map((c) => SUBTOPIC_BY_CODE.get(c))
    .filter((x): x is OfficialSubtopic => Boolean(x));

  const partnerDayNum = EXTRA_DAY_PAIR_FOR_20_MCQS[day.dayNumber] || ((day.dayNumber % 30) + 1);
  const partnerDay = typedRawDays.find((d) => d.dayNumber === partnerDayNum);

  const seenIds = new Set<string>();
  const combined20: UasaObjectiveMcq[] = [];

  for (const q of day.uasaExam.bahagianA) {
    if (!seenIds.has(q.itemId)) {
      seenIds.add(q.itemId);
      combined20.push(q);
    }
  }
  if (partnerDay) {
    for (const q of partnerDay.uasaExam.bahagianA) {
      const clonedId = `d${day.dayNumber}_ext_${q.itemId}`;
      if (combined20.length < 20 && !seenIds.has(clonedId)) {
        seenIds.add(clonedId);
        combined20.push({ ...q, itemId: clonedId });
      }
    }
  }

  return {
    ...day,
    officialSubtopics,
    expandedBahagianA: combined20,
  };
});

export function getLessonByDay(dayNumber: number): DailyLessonModule {
  return (
    CURRICULUM_30_DAYS.find((d) => d.dayNumber === dayNumber) || CURRICULUM_30_DAYS[0]
  );
}
