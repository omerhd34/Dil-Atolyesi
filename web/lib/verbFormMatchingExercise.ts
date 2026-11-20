import type {
  ListeningExercise,
  TopicExercise,
  VerbFormMatchingExercise,
} from "@/data/grammar/types";

export function isVerbFormMatchingExercise(
  exercise: TopicExercise,
): exercise is VerbFormMatchingExercise {
  return (
    exercise.type === "matching" &&
    "verbListeningRows" in exercise &&
    (exercise.verbListeningRows?.length ?? 0) > 0
  );
}

export function verbFormMatchingForListeningUi(
  exercise: VerbFormMatchingExercise,
): ListeningExercise {
  return {
    id: exercise.id,
    subtopicId: exercise.subtopicId,
    type: "listening",
    verbTripleForm: true,
    verbListeningRows: exercise.verbListeningRows,
    verbListeningV2Pool: exercise.verbListeningV2Pool,
    verbListeningV3Pool: exercise.verbListeningV3Pool,
    prompt: "",
    speakText: "",
  };
}
