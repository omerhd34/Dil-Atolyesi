import { getTopicContent } from "@/data/grammar";
import { isLevelExamTopicId } from "@/data/grammar/levelExamTopicIds";
import type { ExerciseType } from "@/data/grammar/types";
import type { ExerciseCompleteOutcome } from "@/lib/exerciseCompleteOutcome";
import {
  awardPointsActivity,
  awardPointsActivityAsync,
} from "@/lib/points/award";
import {
  clientStorageEvent,
  migrateLocalStorageKey,
} from "@/lib/clientStorageKeys";

const STORAGE_SUFFIX = "topic-progress";
export const TOPIC_PROGRESS_CHANGED_EVENT = clientStorageEvent(
  "topic-progress-changed",
);

const DEFAULT_LESSON_VIEW_MINUTES = 3;

export function getLessonViewRequiredMs(topicId: string): number {
  const minutes = getTopicContent(topicId)?.viewMinutes;
  if (minutes === undefined) {
    return DEFAULT_LESSON_VIEW_MINUTES * 60 * 1000;
  }
  if (!Number.isFinite(minutes) || minutes < 0) {
    return DEFAULT_LESSON_VIEW_MINUTES * 60 * 1000;
  }
  return Math.round(minutes * 60 * 1000);
}

export type TopicProgressRecord = {
  lessonViewed?: boolean;
  lessonViewMs?: number;
  completedTypes?: ExerciseType[];
  examPassed?: boolean;
};

type TopicProgressMap = Record<string, TopicProgressRecord>;

function canUseDom(): boolean {
  return typeof window !== "undefined";
}

function emitChanged(): void {
  if (!canUseDom()) {
    return;
  }
  window.dispatchEvent(new Event(TOPIC_PROGRESS_CHANGED_EVENT));
}

function readAll(): TopicProgressMap {
  if (!canUseDom()) {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(
      migrateLocalStorageKey(STORAGE_SUFFIX),
    );
    if (!raw) {
      return {};
    }
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return {};
    }
    return parsed as TopicProgressMap;
  } catch {
    return {};
  }
}

function writeAll(map: TopicProgressMap): void {
  if (!canUseDom()) {
    return;
  }
  window.localStorage.setItem(
    migrateLocalStorageKey(STORAGE_SUFFIX),
    JSON.stringify(map),
  );
  emitChanged();
}

function normalizeRecord(record: TopicProgressRecord): TopicProgressRecord {
  if (record.lessonViewed && record.lessonViewMs === undefined) {
    return {
      ...record,
      lessonViewed: false,
      lessonViewMs: 0,
    };
  }
  return record;
}

export function getTopicProgressRecord(topicId: string): TopicProgressRecord {
  return normalizeRecord(readAll()[topicId] ?? {});
}

export function getTopicLessonViewMs(topicId: string): number {
  const requiredMs = getLessonViewRequiredMs(topicId);
  const record = getTopicProgressRecord(topicId);
  if (isLessonProgressEarned(record, requiredMs)) {
    return requiredMs;
  }
  return Math.max(0, record.lessonViewMs ?? 0);
}

export function getTopicLessonViewRemainingMs(topicId: string): number {
  const requiredMs = getLessonViewRequiredMs(topicId);
  return Math.max(0, requiredMs - getTopicLessonViewMs(topicId));
}

export type LessonViewTickResult = {
  complete: boolean;
  newlyCompleted: boolean;
};

export function addTopicLessonViewMs(
  topicId: string,
  deltaMs: number,
): LessonViewTickResult {
  const requiredMs = getLessonViewRequiredMs(topicId);
  if (deltaMs <= 0) {
    const complete = isLessonProgressEarned(
      getTopicProgressRecord(topicId),
      requiredMs,
    );
    return { complete, newlyCompleted: false };
  }

  const all = readAll();
  const current = normalizeRecord(all[topicId] ?? {});
  const wasEarned = isLessonProgressEarned(current, requiredMs);
  if (wasEarned) {
    return { complete: true, newlyCompleted: false };
  }

  const nextMs = Math.min(requiredMs, (current.lessonViewMs ?? 0) + deltaMs);
  const lessonViewed = requiredMs <= 0 || nextMs >= requiredMs;
  const newlyCompleted = !wasEarned && lessonViewed;

  writeAll({
    ...all,
    [topicId]: {
      ...current,
      lessonViewMs: nextMs,
      lessonViewed,
    },
  });

  return { complete: lessonViewed, newlyCompleted };
}

export function markTopicLessonViewed(topicId: string): boolean {
  const requiredMs = getLessonViewRequiredMs(topicId);
  const all = readAll();
  const current = normalizeRecord(all[topicId] ?? {});
  if (isLessonProgressEarned(current, requiredMs)) {
    return false;
  }
  writeAll({
    ...all,
    [topicId]: {
      ...current,
      lessonViewed: true,
      lessonViewMs: requiredMs,
    },
  });
  return true;
}

export async function awardGrammarLessonTimePoints(
  topicId: string,
): Promise<ExerciseCompleteOutcome> {
  const result = await awardPointsActivityAsync(
    "GRAMMAR_LESSON_TIME",
    `grammar:lesson:${topicId}`,
  );
  if (result?.awarded && result.amount > 0) {
    return { pointsEarned: result.amount };
  }
  if (result && !result.awarded) {
    return { pointsAlreadyCounted: true };
  }
  return {};
}

export function markTopicExerciseTypeCompleted(
  topicId: string,
  type: ExerciseType,
): void {
  void completeTopicExerciseTypeForPoints(topicId, type);
}

export async function completeTopicExerciseTypeForPoints(
  topicId: string,
  type: ExerciseType,
): Promise<ExerciseCompleteOutcome> {
  const all = readAll();
  const current = all[topicId] ?? {};
  const completed = new Set(current.completedTypes ?? []);
  if (completed.has(type)) {
    return { pointsAlreadyCounted: true };
  }
  completed.add(type);
  writeAll({
    ...all,
    [topicId]: {
      ...current,
      completedTypes: Array.from(completed),
    },
  });
  const result = await awardPointsActivityAsync(
    "GRAMMAR_EXERCISE",
    `grammar:exercise:${topicId}:${type}`,
  );
  if (result?.awarded && result.amount > 0) {
    return { pointsEarned: result.amount };
  }
  return { pointsAlreadyCounted: true };
}

export function unmarkTopicExerciseTypeCompleted(
  topicId: string,
  type: ExerciseType,
): void {
  const all = readAll();
  const current = all[topicId];
  const completed = current?.completedTypes ?? [];
  if (!completed.includes(type)) {
    return;
  }

  writeAll({
    ...all,
    [topicId]: {
      ...current,
      completedTypes: completed.filter((item) => item !== type),
    },
  });
}

export function isTopicExerciseTypeCompleted(
  topicId: string,
  type: ExerciseType,
): boolean {
  const completed = getTopicProgressRecord(topicId).completedTypes ?? [];
  return completed.includes(type);
}

export function getCompletedTopicExerciseTypes(
  topicId: string,
): ExerciseType[] {
  return getTopicProgressRecord(topicId).completedTypes ?? [];
}

export function markTopicExamPassed(topicId: string): void {
  const all = readAll();
  const current = all[topicId] ?? {};
  if (current.examPassed) {
    return;
  }
  writeAll({
    ...all,
    [topicId]: {
      ...current,
      examPassed: true,
    },
  });
  awardPointsActivity(
    isLevelExamTopicId(topicId) ? "GRAMMAR_LEVEL_EXAM" : "GRAMMAR_TOPIC_EXAM",
    `grammar:exam:${topicId}`,
  );
}

export function isTopicExamPassed(topicId: string): boolean {
  return getTopicProgressRecord(topicId).examPassed === true;
}

function hasLessonViewTime(
  record: TopicProgressRecord,
  requiredMs: number,
): boolean {
  if (requiredMs <= 0) {
    return record.lessonViewed === true;
  }
  return (record.lessonViewMs ?? 0) >= requiredMs;
}

function isLessonProgressEarned(
  record: TopicProgressRecord,
  requiredMs: number,
): boolean {
  return hasLessonViewTime(record, requiredMs);
}

export function isLessonWaitWaivedByExam(topicId: string): boolean {
  const record = getTopicProgressRecord(topicId);
  if (record.examPassed !== true) {
    return false;
  }
  return !hasLessonViewTime(record, getLessonViewRequiredMs(topicId));
}

export function clearTopicProgressStorage(): void {
  if (!canUseDom()) {
    return;
  }
  window.localStorage.removeItem(migrateLocalStorageKey(STORAGE_SUFFIX));
  emitChanged();
}
