"use client";

import { ReadingExerciseSection } from "@/components/features/reading/ReadingExerciseSection";
import { ReadingMultipleChoiceQuiz } from "@/components/features/reading/ReadingMultipleChoiceQuiz";
import type { ReadingSection } from "@/data/readings/types";
import { useReadingSectionStatus } from "@/hooks/useReadingProgress";
import { tryMarkReadingLevelPassed } from "@/lib/readingAccess";
import { markReadingPracticeDone } from "@/lib/readingProgressStorage";
import { EXAM_PASS_PERCENT } from "@/lib/examPassThreshold";

type ReadingExercisesViewProps = {
  section: ReadingSection;
};

const PRACTICE_PASS_PERCENT = EXAM_PASS_PERCENT;

export function ReadingExercisesView({ section }: ReadingExercisesViewProps) {
  const { listened } = useReadingSectionStatus(section.id);
  const block = section.practice;
  const multipleChoice = block.multipleChoice ?? [];

  function handleComplete(_passed: boolean, percent: number) {
    if (percent < PRACTICE_PASS_PERCENT) {
      return;
    }
    markReadingPracticeDone(section.id);
    tryMarkReadingLevelPassed(section.level);
  }

  if (multipleChoice.length > 0) {
    return (
      <ReadingMultipleChoiceQuiz
        questions={multipleChoice}
        listened={listened}
        onComplete={handleComplete}
      />
    );
  }

  return <ReadingExerciseSection block={block} onComplete={handleComplete} />;
}
