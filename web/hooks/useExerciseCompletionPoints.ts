"use client";

import { useCallback, useState } from "react";
import type { ExerciseCompleteOutcome } from "@/lib/exerciseCompleteOutcome";

export type ExerciseSessionResult = {
  correct: number;
  total: number;
};

export type ExerciseOnComplete = (
  result: ExerciseSessionResult,
) => void | Promise<ExerciseCompleteOutcome | void>;

export function useExerciseCompletionPoints(onComplete?: ExerciseOnComplete) {
  const [pointsEarned, setPointsEarned] = useState<number | null>(null);
  const [pointsAlreadyCounted, setPointsAlreadyCounted] = useState(false);

  const runComplete = useCallback(
    async (result: ExerciseSessionResult) => {
      setPointsEarned(null);
      setPointsAlreadyCounted(false);
      const outcome = await onComplete?.(result);
      if (outcome?.pointsEarned && outcome.pointsEarned > 0) {
        setPointsEarned(outcome.pointsEarned);
      } else if (outcome?.pointsAlreadyCounted) {
        setPointsAlreadyCounted(true);
      }
    },
    [onComplete],
  );

  return { pointsEarned, pointsAlreadyCounted, runComplete };
}
