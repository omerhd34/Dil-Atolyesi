import type { ListeningExercise } from "@/data/grammar/types";

export const LISTENING_DICTATION_MAX_ATTEMPTS = 3;

function normalizeAnswer(value: string): string {
  return value.trim().toLocaleLowerCase("en-US");
}

export function isListeningDictationExercise(
  exercise: ListeningExercise,
): boolean {
  return (exercise.verbListeningRows?.length ?? 0) === 0;
}

export function listeningDictationAnswer(exercise: ListeningExercise): string {
  return exercise.answer?.trim() || exercise.speakText.trim();
}

export function listeningDictationAccepted(
  exercise: ListeningExercise,
): string[] {
  const base = listeningDictationAnswer(exercise);
  const extras = exercise.acceptedAnswers ?? [];
  return [...new Set([base, ...extras].map((item) => normalizeAnswer(item)))];
}

export function isListeningDictationCorrect(
  exercise: ListeningExercise,
  value: string,
): boolean {
  const normalized = normalizeAnswer(value);
  if (!normalized) {
    return false;
  }
  return listeningDictationAccepted(exercise).includes(normalized);
}

export function isListeningDictationInputLocked(
  attempts: number,
  checked: boolean,
  correct: boolean,
): boolean {
  return (checked && correct) || attempts >= LISTENING_DICTATION_MAX_ATTEMPTS;
}

export function canListeningDictationRetryEdit(
  attempts: number,
  checked: boolean,
  correct: boolean,
): boolean {
  return checked && !correct && attempts < LISTENING_DICTATION_MAX_ATTEMPTS;
}

export function canListeningDictationSubmitCheck(
  attempts: number,
  checked: boolean,
  correct: boolean,
): boolean {
  return attempts < LISTENING_DICTATION_MAX_ATTEMPTS && !(checked && correct);
}
