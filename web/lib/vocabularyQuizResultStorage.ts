export type LastVocabularyQuizResult = {
  score: number;
  correct: number;
  total: number;
  finishedAt: string;
};

import {
  clientStorageEvent,
  migrateLocalStorageKey,
} from "@/lib/clientStorageKeys";

const STORAGE_SUFFIX = "last-vocabulary-quiz";
export const QUIZ_RESULT_CHANGED_EVENT = clientStorageEvent(
  "quiz-result-changed",
);

function canUseStorage(): boolean {
  return typeof window !== "undefined";
}

function emitChanged(): void {
  if (!canUseStorage()) {
    return;
  }
  window.dispatchEvent(new Event(QUIZ_RESULT_CHANGED_EVENT));
}

function isLastVocabularyQuizResult(
  value: unknown,
): value is LastVocabularyQuizResult {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const item = value as Record<string, unknown>;
  return (
    typeof item.score === "number" &&
    typeof item.correct === "number" &&
    typeof item.total === "number" &&
    typeof item.finishedAt === "string"
  );
}

export function readLastVocabularyQuizResult(): LastVocabularyQuizResult | null {
  if (!canUseStorage()) {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(
      migrateLocalStorageKey(STORAGE_SUFFIX),
    );
    if (!raw) {
      return null;
    }
    const parsed: unknown = JSON.parse(raw);
    return isLastVocabularyQuizResult(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function writeLastVocabularyQuizResult(
  result: LastVocabularyQuizResult,
): void {
  if (!canUseStorage()) {
    return;
  }
  window.localStorage.setItem(
    migrateLocalStorageKey(STORAGE_SUFFIX),
    JSON.stringify(result),
  );
  emitChanged();
}

export function clearLastVocabularyQuizResult(): void {
  if (!canUseStorage()) {
    return;
  }
  window.localStorage.removeItem(migrateLocalStorageKey(STORAGE_SUFFIX));
  emitChanged();
}
