import { type CefrLevel } from "@/data/grammar/dashboardTopics";
import { examA1Clues } from "@/data/grammar/exam/examA1";
import { examA2Clues } from "@/data/grammar/exam/examA2";
import { examB1Clues } from "@/data/grammar/exam/examB1";
import { examB2Clues } from "@/data/grammar/exam/examB2";
import { examC1Clues } from "@/data/grammar/exam/examC1";
import { examC2Clues } from "@/data/grammar/exam/examC2";
import type {
  CrosswordExercise,
  FillBlankExercise,
  MultipleChoiceExercise,
  TopicContent,
  TopicExercise,
  TopicQuizExercise,
  TopicQuizItem,
  ErrorCorrectionExercise,
  ListeningExercise,
  TrueFalseExercise,
} from "@/data/grammar/types";
import { getTopicPracticeExercises } from "@/data/grammar/topicExercises";
import {
  buildCrosswordFromCandidates,
  type CrosswordCandidate,
} from "@/lib/crosswordBuilder";
import { shuffleSeeded } from "@/lib/seededRandom";
import { isVerbFormMatchingExercise } from "@/lib/verbFormMatchingExercise";

const LEVEL_EXAM_CLUES: Record<CefrLevel, CrosswordCandidate[]> = {
  A1: examA1Clues,
  A2: examA2Clues,
  B1: examB1Clues,
  B2: examB2Clues,
  C1: examC1Clues,
  C2: examC2Clues,
};

function getLevelExamClues(level: CefrLevel): CrosswordCandidate[] {
  return LEVEL_EXAM_CLUES[level];
}

export const TOPIC_EXAM_OPTION_COUNT = 4;
export const TOPIC_EXAM_QUESTION_COUNT = 10;
export const TOPIC_QUIZ_MC_COUNT = 15;
export const TOPIC_QUIZ_FB_COUNT = 15;
export const TOPIC_QUIZ_TF_COUNT = 10;
export const TOPIC_QUIZ_LISTENING_COUNT = 10;

const TOPIC_QUIZ_STANDARD_TYPES = [
  "multiple_choice",
  "fill_blank",
  "true_false",
  "listening",
] as const;

type TopicQuizStandardType = (typeof TOPIC_QUIZ_STANDARD_TYPES)[number];

function isTopicQuizStandardType(type: string): type is TopicQuizStandardType {
  return (TOPIC_QUIZ_STANDARD_TYPES as readonly string[]).includes(type);
}

export const LEVEL_EXAM_CROSSWORD_COUNT = 1;
export const LEVEL_EXAM_CLUE_COUNT = 20;
export const LEVEL_EXAM_FILL_BLANK_COUNT = 20;

const FALLBACK_DISTRACTORS = [
  "Hiçbiri",
  "Hepsi doğru",
  "Belirsiz",
  "Konu dışı",
  "Yanlış kalıp",
  "Eş anlamlı değil",
  "Atlanır",
  "Örnek yok",
  "Tamamen farklı",
  "Sadece ezber",
];

function hashString(value: string): number {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function shuffleOptions(options: string[], seed: string): string[] {
  const next = [...options];
  let state = hashString(seed) || 1;
  for (let i = next.length - 1; i > 0; i -= 1) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const j = state % (i + 1);
    const current = next[i];
    const swap = next[j];
    if (current === undefined || swap === undefined) {
      continue;
    }
    next[i] = swap;
    next[j] = current;
  }
  return next;
}

function uniquePush(options: string[], value: string): void {
  const trimmed = value.trim();
  if (!trimmed) {
    return;
  }
  if (
    options.some(
      (item) =>
        item.toLocaleLowerCase("tr") === trimmed.toLocaleLowerCase("tr"),
    )
  ) {
    return;
  }
  options.push(trimmed);
}

export function ensureExamOptionCount(
  exercise: MultipleChoiceExercise,
  distractorPool: string[] = [],
  count: number = TOPIC_EXAM_OPTION_COUNT,
): MultipleChoiceExercise {
  const targetCount = exercise.options.length === 2 ? 2 : count;
  const correct =
    exercise.options[exercise.correctIndex] ?? exercise.options[0] ?? "";
  const options: string[] = [];

  uniquePush(options, correct);
  for (const option of exercise.options) {
    if (options.length >= targetCount) {
      break;
    }
    uniquePush(options, option);
  }
  for (const distractor of distractorPool) {
    if (options.length >= targetCount) {
      break;
    }
    uniquePush(options, distractor);
  }
  for (const distractor of FALLBACK_DISTRACTORS) {
    if (options.length >= targetCount) {
      break;
    }
    uniquePush(options, distractor);
  }

  let filler = 1;
  while (options.length < targetCount) {
    uniquePush(options, `Seçenek ${filler}`);
    filler += 1;
  }

  const finalOptions = shuffleOptions(
    options.slice(0, targetCount),
    `${exercise.id}|${correct}`,
  );
  const correctIndex = Math.max(0, finalOptions.indexOf(correct));

  return {
    ...exercise,
    type: "multiple_choice",
    options: finalOptions,
    correctIndex,
  };
}

function isTopicQuizExercise(item: TopicQuizItem): item is TopicQuizExercise {
  return isTopicQuizStandardType(item.type);
}

export function toTopicQuizExercises(
  exercises: readonly TopicExercise[],
): TopicQuizExercise[] {
  return exercises.filter(
    (item): item is TopicQuizExercise =>
      isTopicQuizStandardType(item.type) &&
      !isVerbFormMatchingExercise(item as TopicExercise),
  );
}

function listQuizExercises(content: TopicContent): TopicQuizItem[] {
  const quiz = content.quiz ?? [];
  if (quiz.length > 0) {
    return quiz;
  }
  return toTopicQuizExercises(getTopicPracticeExercises(content));
}

function practiceTrueFalse(content: TopicContent): TrueFalseExercise[] {
  return getTopicPracticeExercises(content).filter(
    (item): item is TrueFalseExercise => item.type === "true_false",
  );
}

function practiceListening(content: TopicContent): ListeningExercise[] {
  return getTopicPracticeExercises(content).filter(
    (item): item is ListeningExercise => item.type === "listening",
  );
}

function explicitQuizItems(content: TopicContent): TopicQuizItem[] {
  return (content.quiz ?? []).filter(
    (item): item is TopicQuizItem =>
      item.type !== "error_correction" && item.type !== "matching",
  );
}

export function topicQuizUsesErrorCorrectionFormat(
  content: TopicContent,
): boolean {
  const quiz = listQuizExercises(content);
  return (
    quiz.length > 0 &&
    quiz.every(
      (item): item is ErrorCorrectionExercise =>
        item.type === "error_correction",
    )
  );
}

export function resolveTopicErrorCorrectionQuiz(
  content: TopicContent,
): ErrorCorrectionExercise[] {
  if (!topicQuizUsesErrorCorrectionFormat(content)) {
    return [];
  }
  return listQuizExercises(content).filter(
    (item): item is ErrorCorrectionExercise => item.type === "error_correction",
  );
}

export function topicPracticeUsesMixedFormat(content: TopicContent): boolean {
  return content.practiceMixed === true;
}

function practiceMultipleChoice(
  content: TopicContent,
): MultipleChoiceExercise[] {
  return getTopicPracticeExercises(content).filter(
    (item): item is MultipleChoiceExercise => item.type === "multiple_choice",
  );
}

function practiceFillBlanks(content: TopicContent): FillBlankExercise[] {
  return getTopicPracticeExercises(content).filter(
    (item): item is FillBlankExercise => item.type === "fill_blank",
  );
}

function pushUniqueFillBlank(
  target: FillBlankExercise[],
  seen: Set<string>,
  item: FillBlankExercise,
): void {
  const key = item.prompt.trim().toLocaleLowerCase("tr");
  if (seen.has(key)) {
    return;
  }
  seen.add(key);
  target.push(item);
}

export function topicQuizUsesListeningFormat(content: TopicContent): boolean {
  const quiz = listQuizExercises(content);
  return (
    quiz.length > 0 &&
    quiz.every((item): item is ListeningExercise => item.type === "listening")
  );
}

export function resolveTopicListeningQuiz(
  content: TopicContent,
): ListeningExercise[] {
  if (!topicQuizUsesListeningFormat(content)) {
    return [];
  }
  return listQuizExercises(content).filter(
    (item): item is ListeningExercise => item.type === "listening",
  );
}

function countAvailableQuizStandardTypes(content: TopicContent): number {
  const practice = getTopicPracticeExercises(content).filter(
    (item): item is TopicQuizExercise =>
      isTopicQuizStandardType(item.type) && !isVerbFormMatchingExercise(item),
  );
  const explicit = explicitQuizItems(content).filter(isTopicQuizExercise);
  const types = new Set<TopicQuizStandardType>();

  for (const item of [...explicit, ...practice]) {
    types.add(item.type);
  }

  if (explicit.length > 0) {
    for (const type of TOPIC_QUIZ_STANDARD_TYPES) {
      if (!types.has(type) && practice.some((item) => item.type === type)) {
        types.add(type);
      }
    }
  }

  return types.size;
}

export function topicQuizUsesMixedFormat(content: TopicContent): boolean {
  if (
    topicQuizUsesListeningFormat(content) ||
    topicQuizUsesErrorCorrectionFormat(content)
  ) {
    return false;
  }
  return countAvailableQuizStandardTypes(content) >= 2;
}

function pushUniqueQuestion(
  target: MultipleChoiceExercise[],
  seen: Set<string>,
  item: MultipleChoiceExercise,
): void {
  const key = item.prompt.trim().toLocaleLowerCase("tr");
  if (seen.has(key)) {
    return;
  }
  seen.add(key);
  target.push(item);
}

export function resolveTopicExamExercises(
  content: TopicContent,
): MultipleChoiceExercise[] {
  const questionCount =
    content.quizQuestionCount && content.quizQuestionCount > 0
      ? content.quizQuestionCount
      : topicQuizUsesMixedFormat(content)
        ? TOPIC_QUIZ_MC_COUNT
        : TOPIC_EXAM_QUESTION_COUNT;
  const practice = practiceMultipleChoice(content);
  const pool = [
    ...practice.flatMap((item) => item.options),
    ...FALLBACK_DISTRACTORS,
  ];
  const seen = new Set<string>();
  const source: MultipleChoiceExercise[] = [];
  const quizMultipleChoice = listQuizExercises(content).filter(
    (item): item is MultipleChoiceExercise => item.type === "multiple_choice",
  );

  for (const item of quizMultipleChoice) {
    pushUniqueQuestion(source, seen, item);
  }
  if (quizMultipleChoice.length === 0 && source.length < questionCount) {
    for (const item of practice) {
      pushUniqueQuestion(source, seen, {
        ...item,
        id: `quiz-${item.id}`,
      });
    }
  }

  const optionCount =
    content.quizOptionCount && content.quizOptionCount > 1
      ? content.quizOptionCount
      : TOPIC_EXAM_OPTION_COUNT;

  return source
    .slice(0, questionCount)
    .map((item) => ensureExamOptionCount(item, pool, optionCount));
}

export function resolveTopicExamFillBlanks(
  content: TopicContent,
): FillBlankExercise[] {
  const fillCount =
    content.quizFillBlankCount && content.quizFillBlankCount > 0
      ? content.quizFillBlankCount
      : topicQuizUsesMixedFormat(content)
        ? TOPIC_QUIZ_FB_COUNT
        : 0;
  if (fillCount <= 0) {
    return [];
  }

  const seen = new Set<string>();
  const source: FillBlankExercise[] = [];
  const quizFillBlanks = listQuizExercises(content).filter(
    (item): item is FillBlankExercise => item.type === "fill_blank",
  );

  for (const item of quizFillBlanks) {
    pushUniqueFillBlank(source, seen, item);
  }
  if (quizFillBlanks.length === 0) {
    for (const item of practiceFillBlanks(content)) {
      pushUniqueFillBlank(source, seen, {
        ...item,
        id: `quiz-${item.id}`,
      });
    }
  } else if (source.length < fillCount) {
    for (const item of practiceFillBlanks(content)) {
      if (source.length >= fillCount) {
        break;
      }
      pushUniqueFillBlank(source, seen, {
        ...item,
        id: `quiz-${item.id}`,
      });
    }
  }

  return shuffleSeeded(
    source.slice(0, fillCount),
    `topic:${content.topicId}:quiz-fb`,
  ).map((item) => ({
    ...item,
    id: item.id.startsWith("quiz-") ? item.id : `quiz-${item.id}`,
  }));
}

export function resolveTopicExamCrosswords(
  _content: TopicContent,
): CrosswordExercise[] {
  return [];
}

function mapExplicitQuizToPool(content: TopicContent): TopicQuizExercise[] {
  const explicit = explicitQuizItems(content).filter(isTopicQuizExercise);
  if (explicit.length === 0) {
    return [];
  }

  const practice = practiceMultipleChoice(content);
  const optionPool = [
    ...practice.flatMap((item) => item.options),
    ...FALLBACK_DISTRACTORS,
  ];
  const optionCount =
    content.quizOptionCount && content.quizOptionCount > 1
      ? content.quizOptionCount
      : TOPIC_EXAM_OPTION_COUNT;

  return explicit.map((item) =>
    item.type === "multiple_choice"
      ? ensureExamOptionCount(item, optionPool, optionCount)
      : item,
  );
}

function supplementQuizPool(
  content: TopicContent,
  base: TopicQuizExercise[],
): TopicQuizExercise[] {
  const typesPresent = new Set(base.map((item) => item.type));
  const supplements: TopicQuizExercise[] = [];

  if (!typesPresent.has("multiple_choice")) {
    supplements.push(...resolveTopicExamExercises(content).slice(0, 8));
  }
  if (!typesPresent.has("fill_blank")) {
    supplements.push(...resolveTopicExamFillBlanks(content).slice(0, 8));
  }
  if (!typesPresent.has("true_false")) {
    supplements.push(
      ...shuffleSeeded(
        practiceTrueFalse(content),
        `topic:${content.topicId}:quiz-tf`,
      ).slice(0, TOPIC_QUIZ_TF_COUNT),
    );
  }
  if (!typesPresent.has("listening")) {
    supplements.push(
      ...shuffleSeeded(
        practiceListening(content),
        `topic:${content.topicId}:quiz-listen`,
      ).slice(0, TOPIC_QUIZ_LISTENING_COUNT),
    );
  }

  return [...base, ...supplements];
}

export function resolveMixedTopicQuizPool(
  content: TopicContent,
): TopicQuizExercise[] {
  let pool: TopicQuizExercise[];

  const explicit = mapExplicitQuizToPool(content);
  if (explicit.length > 0) {
    pool = supplementQuizPool(content, explicit);
  } else {
    pool = [
      ...resolveTopicExamExercises(content),
      ...resolveTopicExamFillBlanks(content),
      ...shuffleSeeded(
        practiceTrueFalse(content),
        `topic:${content.topicId}:quiz-tf`,
      ).slice(0, TOPIC_QUIZ_TF_COUNT),
      ...shuffleSeeded(
        practiceListening(content),
        `topic:${content.topicId}:quiz-listen`,
      ).slice(0, TOPIC_QUIZ_LISTENING_COUNT),
    ];
  }

  if (pool.length === 0) {
    return [];
  }

  const typeCount = new Set(pool.map((item) => item.type)).size;
  if (typeCount < 2) {
    return [];
  }

  return shuffleSeeded(pool, `topic:${content.topicId}:mixed-quiz`);
}

export function resolveMixedTopicQuiz(
  content: TopicContent,
): TopicQuizExercise[] {
  return resolveMixedTopicQuizPool(content);
}

function shuffleCandidates(
  items: CrosswordCandidate[],
  seed: string,
): CrosswordCandidate[] {
  return shuffleSeeded(items, seed);
}

function collectLevelCrosswordCandidates(
  level: CefrLevel,
): CrosswordCandidate[] {
  const candidates: CrosswordCandidate[] = [];
  const seenAnswers = new Set<string>();

  for (const item of getLevelExamClues(level)) {
    const normalized = item.answer.replace(/[^a-zA-Z]/g, "").toUpperCase();
    if (normalized.length < 2 || normalized.length > 14) {
      continue;
    }
    if (seenAnswers.has(normalized)) {
      continue;
    }
    seenAnswers.add(normalized);
    candidates.push({
      answer: normalized,
      text: item.text.trim(),
    });
  }

  return candidates;
}

function createLevelExamCrossword(level: CefrLevel): CrosswordExercise {
  const pool = collectLevelCrosswordCandidates(level);
  const targetClues = Math.min(LEVEL_EXAM_CLUE_COUNT, Math.max(pool.length, 1));

  let best: CrosswordExercise | null = null;
  const attempts = 24;

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const picked = shuffleCandidates(
      pool,
      `level-cw:${level}:${attempt}`,
    ).slice(0, targetClues);
    const built = buildCrosswordFromCandidates(picked, {
      id: `level-exam-cw-${level}-${attempt}`,
      subtopicId: `level-exam-${level}`,
      targetClues,
      minClues: Math.min(6, targetClues),
    });

    if (!built) {
      continue;
    }

    if (built.clues.length === targetClues) {
      return built;
    }

    if (!best || built.clues.length > best.clues.length) {
      best = built;
    }
  }

  if (best) {
    return best;
  }

  throw new Error(`Yeterlilik bulmacası üretilemedi: ${level}`);
}

export type LevelExamPart = "crossword" | "fill_blank";

export function getLevelExamParts(level: CefrLevel): LevelExamPart[] {
  const usable = getLevelExamClues(level).filter((item) => {
    const normalized = item.answer.replace(/[^a-zA-Z]/g, "");
    return normalized.length >= 2 && normalized.length <= 14;
  });
  if (usable.length === 0) {
    return [];
  }

  const parts: LevelExamPart[] = [];
  if (LEVEL_EXAM_FILL_BLANK_COUNT > 0) {
    parts.push("fill_blank");
  }
  if (LEVEL_EXAM_CROSSWORD_COUNT > 0) {
    parts.push("crossword");
  }
  return parts;
}

export function resolveLevelExamCrosswords(
  level: CefrLevel,
): CrosswordExercise[] {
  return [createLevelExamCrossword(level)].slice(0, LEVEL_EXAM_CROSSWORD_COUNT);
}

function toTitleCaseAnswer(answer: string): string {
  const lower = answer.toLocaleLowerCase("en-US");
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function createLevelExamFillBlanks(level: CefrLevel): FillBlankExercise[] {
  const pool = collectLevelCrosswordCandidates(level);
  const target = Math.min(LEVEL_EXAM_FILL_BLANK_COUNT, pool.length);
  const picked = shuffleCandidates(pool, `level-fb:${level}`).slice(0, target);

  return picked.map((item, index) => {
    const displayAnswer = toTitleCaseAnswer(item.answer);
    return {
      id: `level-exam-fb-${level}-${index + 1}`,
      subtopicId: `level-exam-${level}`,
      type: "fill_blank" as const,
      prompt: `"${item.text}" İngilizcede _____ olarak yazılır.`,
      answer: displayAnswer,
      acceptedAnswers: [
        item.answer,
        item.answer.toLocaleLowerCase("en-US"),
        displayAnswer,
      ],
      explanation: `${displayAnswer} = ${item.text}`,
    };
  });
}

export function resolveLevelExamFillBlanks(
  level: CefrLevel,
): FillBlankExercise[] {
  return createLevelExamFillBlanks(level);
}

export { didPassExamScore as didPassTopicExamScore } from "@/lib/examPassThreshold";
