import type { ExerciseType } from "@/data/grammar/types";
import {
  clientStorageEvent,
  migrateLocalStorageKey,
} from "@/lib/clientStorageKeys";
import type { ExerciseCompleteOutcome } from "@/lib/exerciseCompleteOutcome";
import { awardPointsActivityAsync } from "@/lib/points/award";

const STORAGE_SUFFIX = "vocabulary-exercise-progress";
export const VOCABULARY_EXERCISE_PROGRESS_CHANGED_EVENT = clientStorageEvent(
  "vocabulary-exercise-progress-changed",
);

type VocabularyExerciseProgressMap = Record<string, ExerciseType[]>;

function canUseDom(): boolean {
  return typeof window !== "undefined";
}

function emitChanged(): void {
  if (!canUseDom()) {
    return;
  }
  window.dispatchEvent(new Event(VOCABULARY_EXERCISE_PROGRESS_CHANGED_EVENT));
}

function readAll(): VocabularyExerciseProgressMap {
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

    const map: VocabularyExerciseProgressMap = {};
    for (const [categoryId, value] of Object.entries(parsed)) {
      if (!Array.isArray(value)) {
        continue;
      }
      const types = value.filter(
        (item): item is ExerciseType => typeof item === "string",
      );
      if (types.length > 0) {
        map[categoryId] = types;
      }
    }
    return map;
  } catch {
    return {};
  }
}

function writeAll(map: VocabularyExerciseProgressMap): void {
  if (!canUseDom()) {
    return;
  }
  window.localStorage.setItem(
    migrateLocalStorageKey(STORAGE_SUFFIX),
    JSON.stringify(map),
  );
  emitChanged();
}

export function getCompletedVocabularyExerciseTypes(
  categoryId: string,
): ExerciseType[] {
  return readAll()[categoryId] ?? [];
}

export async function markVocabularyExerciseTypeCompleted(
  categoryId: string,
  type: ExerciseType,
): Promise<ExerciseCompleteOutcome> {
  const all = readAll();
  const current = all[categoryId] ?? [];
  if (current.includes(type)) {
    return { pointsAlreadyCounted: true };
  }

  writeAll({
    ...all,
    [categoryId]: [...current, type],
  });

  const result = await awardPointsActivityAsync(
    "VOCABULARY_CATEGORY_EXERCISE",
    `vocab:category:${categoryId}:exercise:${type}`,
  );

  if (result?.awarded && result.amount > 0) {
    return { pointsEarned: result.amount };
  }
  return { pointsAlreadyCounted: true };
}

export function unmarkVocabularyExerciseTypeCompleted(
  categoryId: string,
  type: ExerciseType,
): void {
  const all = readAll();
  const current = all[categoryId];
  if (!current?.includes(type)) {
    return;
  }

  writeAll({
    ...all,
    [categoryId]: current.filter((item) => item !== type),
  });
}
