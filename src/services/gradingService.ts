import { AiGradingBreakdown, UasaWrittenQuestion } from '../types';
import { SubtopicStrukturPart } from '../types/textbook';
import { loadDb } from './db';

function normalizeBm(input: string): string {
  return input
    .toLowerCase()
    .replace(/['’`]/g, "'")
    .replace(/[^a-z0-9'\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function checkExactBmSpelling(
  rawInput: string,
  targetTerm: string,
  acceptedVariants: string[] = []
): { isCorrect: boolean; similarityPercent: number; hintZh: string } {
  const cleanUser = normalizeBm(rawInput);
  const candidates = [targetTerm, ...acceptedVariants].map(normalizeBm);
  if (!cleanUser) {
    return { isCorrect: false, similarityPercent: 0, hintZh: '请输入马来文关键字后再提交。' };
  }
  if (candidates.includes(cleanUser)) {
    return { isCorrect: true, similarityPercent: 100, hintZh: '拼写 100% 完全正确！' };
  }
  // Levenshtein distance against primary target
  const target = candidates[0];
  const m = cleanUser.length;
  const n = target.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = cleanUser[i - 1] === target[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  const dist = dp[m][n];
  const maxLen = Math.max(m, n, 1);
  const sim = Math.max(0, Math.round(((maxLen - dist) / maxLen) * 100));
  const firstLetters = targetTerm
    .split(' ')
    .map((w) => `${w.slice(0, 2)}${'_'.repeat(Math.max(1, w.length - 2))}`)
    .join(' ');
  return {
    isCorrect: false,
    similarityPercent: sim,
    hintZh:
      sim >= 70
        ? `非常接近了（相似度 ${sim}%）！注意字母拼写细节，正确词形提示：${firstLetters}`
        : `拼写不正确（相似度 ${sim}%）。请对照字首提示再拼一次：${firstLetters}`,
  };
}

export function gradeSubtopicStrukturPart(
  rawAnswer: string,
  part: SubtopicStrukturPart
): { score: number; maxScore: number; matchedKeywords: string[]; feedbackZh: string } {
  const clean = normalizeBm(rawAnswer);
  if (clean.length < 4) {
    return {
      score: 0,
      maxScore: part.marks,
      matchedKeywords: [],
      feedbackZh: '尚未写出完整的马来文作答内容，请参考课本要点用完整马来文句子（Ayat Lengkap）作答。',
    };
  }
  const matched = part.expectedKeywordsBm.filter((kw) => clean.includes(normalizeBm(kw)));
  const wordCount = clean.split(' ').length;
  let score = Math.min(part.marks, matched.length);
  if (score === 0 && wordCount >= 8) {
    score = 1;
  }
  if (matched.length >= 2 && wordCount >= 10) {
    score = Math.min(part.marks, matched.length + 1);
  }
  const missing = part.expectedKeywordsBm.filter((kw) => !matched.includes(kw)).slice(0, 3);
  const feedbackZh =
    score >= part.marks
      ? `满分通过（${score}/${part.marks} 分）！你准确写出了核心得分词：${matched.join(', ')}。`
      : `获得 ${score}/${part.marks} 分。已命中关键字：${
          matched.length ? matched.join(', ') : '暂无精确命中'
        }。建议补上官方课本关键字：${missing.join(' / ')}。`;

  return { score, maxScore: part.marks, matchedKeywords: matched, feedbackZh };
}

export async function gradeUasaWrittenAnswer(
  question: UasaWrittenQuestion,
  rawAnswer: string
): Promise<{ totalScore: number; maxScore: number; breakdown: AiGradingBreakdown }> {
  const clean = normalizeBm(rawAnswer);
  const r = question.rubric;

  const countHits = (keywords: string[], cap: number): { score: number; hits: string[] } => {
    const hits = keywords.filter((kw) => clean.includes(normalizeBm(kw)));
    const score = Math.min(cap, hits.length);
    return { score, hits };
  };

  const fRes = countHits(r.expectedFaktaKeywords, r.faktaMax);
  const hRes = countHits(r.expectedHuraianKeywords, r.huraianMax);
  const cRes = countHits(r.expectedContohKeywords, r.contohMax);
  const iRes =
    r.inferensMax > 0
      ? countHits(r.expectedInferensKeywords, r.inferensMax)
      : { score: 0, hits: [] as string[] };

  // Optional Gemini Cloud Enhancement if Admin provided API key
  const apiKey = loadDb().admin_settings?.gemini_api_key?.trim();
  if (apiKey && rawAnswer.trim().length >= 15) {
    try {
      const resp = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(
          apiKey
        )}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Anda ialah pemeriksa rasmi KPM Sejarah Tingkatan 3 (UASA Kod 21). Semak jawapan pelajar mengikut rubrik Fakta (maks ${r.faktaMax}), Huraian (maks ${r.huraianMax}), Contoh (maks ${r.contohMax}), Inferens (maks ${r.inferensMax}).
Soalan BM: ${question.questionBm}
Skema Jawapan Contoh: ${r.modelAnswerBm}
Jawapan Pelajar: ${rawAnswer}
Pulangkan JSON sahaja: {"fakta_score":0,"huraian_score":0,"contoh_score":0,"inferens_score":0,"mandarin_feedback":"简体中文详细评语","suggested_bm_improvement":"Cadangan ayat Bahasa Melayu lengkap"}`,
                  },
                ],
              },
            ],
          }),
        }
      );
      if (resp.ok) {
        const data = await resp.json();
        const txt: string = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
        const jsonMatch = txt.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          const f = Math.min(r.faktaMax, Math.max(0, Number(parsed.fakta_score) || 0));
          const h = Math.min(r.huraianMax, Math.max(0, Number(parsed.huraian_score) || 0));
          const c = Math.min(r.contohMax, Math.max(0, Number(parsed.contoh_score) || 0));
          const inf = Math.min(r.inferensMax, Math.max(0, Number(parsed.inferens_score) || 0));
          const total = Math.min(question.maxScore, f + h + c + inf);
          return {
            totalScore: total,
            maxScore: question.maxScore,
            breakdown: {
              fakta_score: f,
              huraian_score: h,
              contoh_score: c,
              inferens_score: inf,
              mandarin_feedback: String(parsed.mandarin_feedback || ''),
              suggested_bm_improvement: String(parsed.suggested_bm_improvement || r.modelAnswerBm),
              graded_by: 'GEMINI_CLOUD',
            },
          };
        }
      }
    } catch {
      // Fallback cleanly to deterministic KPM Rubric Engine
    }
  }

  let fScore = fRes.score;
  let hScore = hRes.score;
  const cScore = cRes.score;
  const iScore = iRes.score;

  const wordCount = clean ? clean.split(' ').length : 0;
  if (fScore === 0 && wordCount >= 12) fScore = 1;
  if (
    hScore === 0 &&
    wordCount >= 22 &&
    (clean.includes('kerana') || clean.includes('supaya') || clean.includes('bagi') || clean.includes('untuk'))
  ) {
    hScore = 1;
  }

  const totalScore = Math.min(question.maxScore, fScore + hScore + cScore + iScore);
  const missingF = r.expectedFaktaKeywords.filter((k) => !fRes.hits.includes(k)).slice(0, 3);
  const missingC = r.expectedContohKeywords.filter((k) => !cRes.hits.includes(k)).slice(0, 3);

  const feedbackParts: string[] = [];
  feedbackParts.push(
    `【KPM UASA Rubrik 评分】总分 ${totalScore} / ${question.maxScore} 分（Fakta: ${fScore}/${r.faktaMax}，Huraian: ${hScore}/${r.huraianMax}，Contoh: ${cScore}/${r.contohMax}${
      r.inferensMax > 0 ? `，Inferens: ${iScore}/${r.inferensMax}` : ''
    }）。`
  );
  if (fRes.hits.length > 0) {
    feedbackParts.push(`已准确写出的马来文得分词：${[...fRes.hits, ...hRes.hits, ...cRes.hits].join(', ')}。`);
  }
  if (missingF.length > 0) {
    feedbackParts.push(`建议补充 Fakta 核心词：${missingF.join(' / ')}。`);
  }
  if (missingC.length > 0) {
    feedbackParts.push(`建议补充 Contoh 课本实例词：${missingC.join(' / ')}。`);
  }
  if (r.inferensMax > 0 && iScore === 0) {
    feedbackParts.push(
      `KBAT 题别忘了最后一句加上总结（Kesimpulannya, ... supaya kedaulatan negara terpelihara）拿下 Inferens 分数！`
    );
  }

  return {
    totalScore,
    maxScore: question.maxScore,
    breakdown: {
      fakta_score: fScore,
      huraian_score: hScore,
      contoh_score: cScore,
      inferens_score: iScore,
      mandarin_feedback: feedbackParts.join(' '),
      suggested_bm_improvement: r.modelAnswerBm,
      graded_by: 'LOCAL_KSSM_RUBRIC_ENGINE',
    },
  };
}
