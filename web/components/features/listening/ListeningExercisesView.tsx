"use client";

import { ListeningPracticeQuiz } from "@/components/features/listening/ListeningPracticeQuiz";
import type { ListeningSection } from "@/data/listenings/types";
import type { ListeningSectionSpeak } from "@/hooks/useListeningSectionSpeak";
import { useListeningSectionStatus } from "@/hooks/useListeningProgress";
import { tryMarkListeningLevelPassed } from "@/lib/listeningAccess";
import { markListeningPracticeDone } from "@/lib/listeningProgressStorage";
import { EXAM_PASS_PERCENT } from "@/lib/examPassThreshold";

type ListeningExercisesViewProps = {
  section: ListeningSection;
  speak: ListeningSectionSpeak;
};

const PRACTICE_PASS_PERCENT = EXAM_PASS_PERCENT;

export function ListeningExercisesView({
  section,
  speak,
}: ListeningExercisesViewProps) {
  const { listened } = useListeningSectionStatus(section.id);

  function handleComplete(_passed: boolean, percent: number) {
    if (percent < PRACTICE_PASS_PERCENT) {
      return;
    }
    markListeningPracticeDone(section.id);
    tryMarkListeningLevelPassed(section.level);
  }

  return (
    <ListeningPracticeQuiz
      block={section.practice}
      listened={listened}
      speak={speak}
      onComplete={handleComplete}
    />
  );
}
