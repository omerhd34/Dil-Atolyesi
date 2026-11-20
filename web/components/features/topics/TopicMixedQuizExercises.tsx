"use client";

import { ListChecks, RotateCcw } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, type FormEvent } from "react";
import { ExerciseCheckButton } from "@/components/features/exercises/ExerciseCheckButton";
import { ExerciseFinishedPanel } from "@/components/features/exercises/ExerciseFinishedPanel";
import { ExerciseListenWordButton } from "@/components/features/exercises/ExerciseListenWordButton";
import { ExerciseQuestionHeader } from "@/components/features/exercises/ExerciseQuestionHeader";
import { InstantMultipleChoiceOptions } from "@/components/features/exercises/InstantMultipleChoiceOptions";
import {
  ListeningMatchingBlock,
  type MatchingBlockSessionState,
} from "@/components/features/listening/ListeningMatchingBlock";
import { ExercisePercentBadge } from "@/components/features/topics/ExercisePercentBadge";
import { ExerciseResultDialog } from "@/components/features/topics/ExerciseResultDialog";
import { ExerciseStepNav } from "@/components/features/topics/ExerciseStepNav";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type {
  FillBlankExercise,
  ListeningExercise,
  MatchingExercise,
  TopicQuizExercise,
} from "@/data/grammar/types";
import { speakText, stopSpeaking } from "@/lib/speakText";
import type { ListeningMatchingQuestion } from "@/data/listenings/types";
import { useExerciseNavigation } from "@/hooks/useExerciseNavigation";
import {
  fillBlankSpeakText,
  multipleChoiceSpeakText,
} from "@/lib/exerciseSpeakText";
import {
  canListeningDictationRetryEdit,
  canListeningDictationSubmitCheck,
  isListeningDictationCorrect,
  isListeningDictationInputLocked,
  LISTENING_DICTATION_MAX_ATTEMPTS,
} from "@/lib/listeningDictation";
import { cn } from "@/lib/utils";

export type ExerciseSessionResult = {
  correct: number;
  total: number;
};

type MixedSlot = {
  selected: number | null;
  answer: string;
  checked: boolean;
  englishSelected?: number | null;
  turkishSelected?: number | null;
  matchingCorrect?: boolean;
  assignments?: Record<number, number>;
  revealed?: boolean;
  graded?: boolean;
  dictationAttempts?: number;
};

type TopicMixedQuizExercisesProps = {
  exercises: (TopicQuizExercise | MatchingExercise)[];
  onComplete?: (result: ExerciseSessionResult) => void;
  onRestart?: () => void;
  initialIndex?: number;
  initialSlots?: MixedSlot[];
  onSessionChange?: (session: {
    index: number;
    correct: number;
    total: number;
    slots: MixedSlot[];
  }) => void;
  showHint?: boolean;
  liveProgressPercent?: boolean;
};

function createMixedSlot(): MixedSlot {
  return {
    selected: null,
    answer: "",
    checked: false,
    matchingCorrect: false,
    assignments: {},
    revealed: false,
    graded: false,
    dictationAttempts: 0,
  };
}

function normalizeAnswer(value: string) {
  return value.trim().toLocaleLowerCase("en-US");
}

function isFillBlankCorrect(exercise: FillBlankExercise, value: string) {
  const normalized = normalizeAnswer(value);
  const accepted = [exercise.answer, ...(exercise.acceptedAnswers ?? [])].map(
    normalizeAnswer,
  );
  return accepted.includes(normalized);
}

function isChoiceExercise(
  exercise: TopicQuizExercise | MatchingExercise,
): exercise is TopicQuizExercise & {
  type: "multiple_choice" | "true_false";
  options: string[];
  correctIndex: number;
} {
  return exercise.type === "multiple_choice" || exercise.type === "true_false";
}

function isListeningExercise(
  exercise: TopicQuizExercise | MatchingExercise,
): exercise is ListeningExercise {
  return exercise.type === "listening";
}

function isSlotCorrect(
  exercise: TopicQuizExercise | MatchingExercise,
  slot: MixedSlot,
): boolean {
  if (!slot.checked) {
    return false;
  }
  if (exercise.type === "matching") {
    return slot.matchingCorrect === true;
  }
  if (isListeningExercise(exercise)) {
    return isListeningDictationCorrect(exercise, slot.answer);
  }
  if (isChoiceExercise(exercise)) {
    return slot.selected === exercise.correctIndex;
  }
  if (exercise.type === "fill_blank") {
    return isFillBlankCorrect(exercise, slot.answer);
  }
  return false;
}

function countCorrect(
  exercises: (TopicQuizExercise | MatchingExercise)[],
  slots: MixedSlot[],
): number {
  return exercises.reduce((count, exercise, exerciseIndex) => {
    const slot = slots[exerciseIndex];
    if (slot && isSlotCorrect(exercise, slot)) {
      return count + 1;
    }
    return count;
  }, 0);
}

function matchingSessionFromSlot(
  slot: MixedSlot,
): MatchingBlockSessionState | undefined {
  const hasProgress =
    slot.revealed ||
    slot.graded ||
    (slot.assignments && Object.keys(slot.assignments).length > 0);
  if (!hasProgress) {
    return undefined;
  }
  return {
    assignments: slot.assignments ?? {},
    revealed: slot.revealed ?? false,
    graded: slot.graded ?? false,
  };
}

function toListeningQuestion(
  exercise: MatchingExercise,
  showHint: boolean,
): ListeningMatchingQuestion {
  return {
    id: exercise.id,
    prompt: exercise.prompt,
    hint: showHint ? (exercise.hint ?? "") : "",
    pairs: exercise.pairs,
  };
}

export function TopicMixedQuizExercises({
  exercises,
  onComplete,
  onRestart,
  initialIndex = 0,
  initialSlots,
  onSessionChange,
  showHint = false,
  liveProgressPercent = true,
}: TopicMixedQuizExercisesProps) {
  const t = useTranslations("Topic");
  const skipSessionSave = useRef(true);
  const {
    index,
    slots,
    current,
    finished,
    resultOpen,
    setResultOpen,
    nextLabelKey,
    canGoPrevious,
    canGoNext,
    updateCurrent,
    handlePrevious,
    handleAdvance,
    resetSession,
  } = useExerciseNavigation({
    length: exercises.length,
    createSlot: createMixedSlot,
    initialIndex,
    initialSlots,
  });

  useEffect(() => {
    if (!onSessionChange) {
      return;
    }
    if (skipSessionSave.current) {
      skipSessionSave.current = false;
      return;
    }

    onSessionChange({
      index,
      correct: countCorrect(exercises, slots),
      total: exercises.length,
      slots,
    });
  }, [exercises, index, onSessionChange, slots]);

  useEffect(() => {
    return () => stopSpeaking();
  }, []);

  useEffect(() => {
    stopSpeaking();
  }, [exercises, index]);

  const syncMatchingState = useCallback(
    (state: MatchingBlockSessionState) => {
      updateCurrent({
        assignments: state.assignments,
        revealed: state.revealed,
        graded: state.graded,
      });
    },
    [updateCurrent],
  );

  if (exercises.length === 0 || !current) {
    return <p className="page-subtitle mt-0">{t("noExamQuestions")}</p>;
  }

  const exercise = exercises[index];
  if (!exercise) {
    return null;
  }

  const isCorrect = isSlotCorrect(exercise, current);
  const canRestart = index > 0;
  const continueLabel = t(nextLabelKey);
  const answered = slots.filter((slot) => slot.checked).length;
  const percent =
    exercises.length === 0
      ? 0
      : Math.round((answered / exercises.length) * 100);

  if (finished) {
    const correctCount = countCorrect(exercises, slots);
    return (
      <ExerciseFinishedPanel
        correct={correctCount}
        total={exercises.length}
        onRetry={resetSession}
      />
    );
  }

  function handleNext() {
    handleAdvance((answeredSlots) => {
      onComplete?.({
        correct: countCorrect(exercises, answeredSlots),
        total: exercises.length,
      });
    });
  }

  if (exercise.type === "matching") {
    const listeningQuestion = toListeningQuestion(exercise, showHint);
    const matchingInitialSession = matchingSessionFromSlot(current);

    return (
      <div className="mx-auto max-w-3xl space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-brand-500 dark:text-brand-400">
            {t("progress", { current: index + 1, total: exercises.length })}
          </p>
          {liveProgressPercent ? (
            <ExercisePercentBadge percent={percent} />
          ) : null}
        </div>

        <article className="dashboard-panel space-y-5 pb-5 sm:pb-6">
          <ListeningMatchingBlock
            key={`${exercise.id}-${index}`}
            question={listeningQuestion}
            titleVariant="prompt"
            leftListen
            showInQuestionRetry={false}
            wrongMatchHint={t("matchWrongHint")}
            initialSession={matchingInitialSession}
            onSessionChange={syncMatchingState}
            onGraded={(correctPairs, totalPairs) => {
              updateCurrent({
                checked: true,
                matchingCorrect: correctPairs === totalPairs,
                graded: true,
              });
              setResultOpen(true);
            }}
            navTrailing={
              <ExerciseStepNav
                canGoPrevious={canGoPrevious}
                canGoNext={canGoNext && current.checked}
                nextLabel={continueLabel}
                nextVariant={current.checked ? "default" : "outline"}
                onPrevious={handlePrevious}
                onNext={handleNext}
                leading={
                  canRestart ? (
                    <Button
                      type="button"
                      variant="outline"
                      className="gap-2"
                      onClick={() => {
                        onRestart?.();
                        resetSession();
                      }}
                    >
                      <RotateCcw className="size-4" aria-hidden />
                      {t("restart")}
                    </Button>
                  ) : null
                }
              />
            }
          />
        </article>

        <ExerciseResultDialog
          open={resultOpen && current.checked}
          variant={isCorrect ? "correct" : "incorrect"}
          explanation={exercise.explanation}
          onOpenChange={setResultOpen}
          onContinue={handleNext}
          continueLabel={continueLabel}
        />
      </div>
    );
  }

  if (isListeningExercise(exercise)) {
    const listeningExercise = exercise;
    const listeningPromptId = `${listeningExercise.id}-prompt`;

    const listeningAttempts = current.dictationAttempts ?? 0;
    const listeningAnswerCorrect = isListeningDictationCorrect(
      listeningExercise,
      current.answer,
    );
    const listeningLocked = isListeningDictationInputLocked(
      listeningAttempts,
      current.checked,
      listeningAnswerCorrect,
    );
    const listeningAttemptsLeft =
      LISTENING_DICTATION_MAX_ATTEMPTS - listeningAttempts;

    function handleListeningCheck(event?: FormEvent) {
      event?.preventDefault();
      if (
        !canListeningDictationSubmitCheck(
          listeningAttempts,
          current.checked,
          listeningAnswerCorrect,
        )
      ) {
        return;
      }
      if (!current.answer.trim()) {
        return;
      }
      updateCurrent({
        checked: true,
        dictationAttempts: listeningAttempts + 1,
      });
      setResultOpen(true);
    }

    return (
      <div className="mx-auto max-w-2xl space-y-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-brand-500 dark:text-brand-400">
            {t("progress", { current: index + 1, total: exercises.length })}
          </p>
          <div className="flex shrink-0 items-center gap-2">
            {listeningAttempts > 0 &&
            listeningAttemptsLeft > 0 &&
            !listeningLocked ? (
              <Badge
                variant="outline"
                className="max-w-44 truncate text-xs tabular-nums sm:max-w-none"
              >
                {t("listeningDictationAttemptsLeft", {
                  remaining: listeningAttemptsLeft,
                })}
              </Badge>
            ) : null}
            {listeningLocked &&
            current.checked &&
            !listeningAnswerCorrect &&
            listeningAttempts >= LISTENING_DICTATION_MAX_ATTEMPTS ? (
              <Badge
                variant="outline"
                className="max-w-44 truncate text-xs text-red-700 dark:text-red-300 sm:max-w-none"
              >
                {t("listeningDictationNoAttemptsLeft")}
              </Badge>
            ) : null}
            {liveProgressPercent ? (
              <ExercisePercentBadge percent={percent} />
            ) : null}
          </div>
        </div>

        <article className="dashboard-panel space-y-5 pb-5 sm:pb-6">
          <ExerciseQuestionHeader
            title={listeningExercise.prompt}
            showHint={false}
            headingId={listeningPromptId}
            actions={
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => speakText(listeningExercise.speakText)}
              >
                {t("playAudio")}
              </Button>
            }
          />

          <form className="space-y-4" onSubmit={handleListeningCheck}>
            <label className="flex w-full flex-col gap-1.5 text-sm">
              <span className="sr-only">{t("listeningWriteAria")}</span>
              <input
                type="text"
                value={current.answer}
                disabled={listeningLocked}
                onChange={(event) => {
                  const next = event.target.value;
                  const canRetry = canListeningDictationRetryEdit(
                    listeningAttempts,
                    current.checked,
                    listeningAnswerCorrect,
                  );
                  updateCurrent({
                    answer: next,
                    ...(canRetry ? { checked: false } : {}),
                  });
                }}
                placeholder={t("listeningWritePlaceholder")}
                autoComplete="off"
                spellCheck={false}
                className={cn(
                  "h-11 rounded-lg border bg-surface px-3 text-brand-950 outline-none transition-colors",
                  "placeholder:text-brand-600/60 focus:ring-2",
                  "dark:bg-brand-900 dark:text-brand-100 dark:placeholder:text-brand-400/70",
                  current.checked &&
                    isCorrect &&
                    "border-emerald-500/60 focus:border-emerald-500 focus:ring-emerald-500/20",
                  current.checked &&
                    !isCorrect &&
                    "border-red-500/60 focus:border-red-500 focus:ring-red-500/20",
                  !current.checked &&
                    "border-brand-400/70 focus:border-brand-800 focus:ring-brand-800/20 dark:border-brand-600 dark:focus:border-brand-400 dark:focus:ring-brand-400/20",
                )}
              />
            </label>

            <ExerciseStepNav
              canGoPrevious={canGoPrevious}
              canGoNext={canGoNext && current.checked}
              nextLabel={continueLabel}
              nextVariant={current.checked ? "default" : "outline"}
              onPrevious={handlePrevious}
              onNext={handleNext}
              leading={
                canRestart ? (
                  <Button
                    type="button"
                    variant="outline"
                    className="gap-2"
                    onClick={() => {
                      onRestart?.();
                      resetSession();
                    }}
                  >
                    <RotateCcw className="size-4" aria-hidden />
                    {t("restart")}
                  </Button>
                ) : null
              }
            >
              {canListeningDictationSubmitCheck(
                listeningAttempts,
                current.checked,
                listeningAnswerCorrect,
              ) ? (
                <ExerciseCheckButton
                  type="submit"
                  disabled={!current.answer.trim()}
                >
                  <ListChecks className="size-4" aria-hidden />
                  {t("check")}
                </ExerciseCheckButton>
              ) : null}
            </ExerciseStepNav>
          </form>
        </article>

        <ExerciseResultDialog
          open={resultOpen && current.checked}
          variant={isCorrect ? "correct" : "incorrect"}
          explanation={listeningExercise.explanation}
          onOpenChange={setResultOpen}
          onContinue={handleNext}
          continueLabel={continueLabel}
        />
      </div>
    );
  }

  const promptId = `${exercise.id}-prompt`;
  const hintFallbackKey =
    exercise.type === "fill_blank" ? "topicFillBlank" : "topicMultipleChoice";

  function handleOptionSelect(optionIndex: number) {
    if (current.checked || !isChoiceExercise(exercise)) {
      return;
    }
    updateCurrent({ selected: optionIndex });
  }

  function handleCheck(event?: FormEvent) {
    event?.preventDefault();
    if (current.checked) {
      return;
    }
    if (exercise.type === "fill_blank") {
      if (!current.answer.trim()) {
        return;
      }
    } else if (current.selected === null) {
      return;
    }
    updateCurrent({ checked: true });
    setResultOpen(true);
  }

  function canSubmitCheck(): boolean {
    if (current.checked) {
      return false;
    }
    if (exercise.type === "fill_blank") {
      return current.answer.trim() !== "";
    }
    if (isChoiceExercise(exercise)) {
      return current.selected !== null;
    }
    return false;
  }

  const listenWord = isChoiceExercise(exercise)
    ? multipleChoiceSpeakText(exercise)
    : exercise.type === "fill_blank"
      ? fillBlankSpeakText(exercise)
      : null;

  return (
    <div
      className={cn(
        "mx-auto space-y-4",
        isChoiceExercise(exercise) && exercise.options.length >= 6
          ? "max-w-3xl"
          : "max-w-2xl",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-brand-500 dark:text-brand-400">
          {t("progress", { current: index + 1, total: exercises.length })}
        </p>
        {liveProgressPercent ? (
          <ExercisePercentBadge percent={percent} />
        ) : null}
      </div>

      <article className="dashboard-panel space-y-5 pb-5 sm:pb-6">
        <ExerciseQuestionHeader
          title={exercise.prompt}
          hint={exercise.hint}
          fallbackKey={showHint ? hintFallbackKey : undefined}
          showHint={showHint}
          headingId={promptId}
          actions={
            listenWord ? <ExerciseListenWordButton text={listenWord} /> : null
          }
        />

        <form className="space-y-4" onSubmit={handleCheck}>
          {isChoiceExercise(exercise) ? (
            <InstantMultipleChoiceOptions
              options={exercise.options}
              correctIndex={exercise.correctIndex}
              selected={current.selected}
              revealed={current.checked}
              onSelect={handleOptionSelect}
              labelledBy={promptId}
              optionsAriaLabel={t("optionsAria")}
            />
          ) : (
            <label className="flex w-full flex-col gap-1.5 text-sm">
              <input
                type="text"
                value={current.answer}
                disabled={current.checked}
                onChange={(event) =>
                  updateCurrent({ answer: event.target.value })
                }
                placeholder={t("answerPlaceholder")}
                autoComplete="off"
                spellCheck={false}
                className={cn(
                  "h-11 rounded-lg border bg-surface px-3 text-brand-950 outline-none transition-colors",
                  "placeholder:text-brand-600/60 focus:ring-2",
                  "dark:bg-brand-900 dark:text-brand-100 dark:placeholder:text-brand-400/70",
                  current.checked &&
                    isCorrect &&
                    "border-emerald-500/60 focus:border-emerald-500 focus:ring-emerald-500/20",
                  current.checked &&
                    !isCorrect &&
                    "border-red-500/60 focus:border-red-500 focus:ring-red-500/20",
                  !current.checked &&
                    "border-brand-400/70 focus:border-brand-800 focus:ring-brand-800/20 dark:border-brand-600 dark:focus:border-brand-400 dark:focus:ring-brand-400/20",
                )}
              />
            </label>
          )}

          <ExerciseStepNav
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext && current.checked}
            nextLabel={continueLabel}
            nextVariant={current.checked ? "default" : "outline"}
            onPrevious={handlePrevious}
            onNext={handleNext}
            leading={
              canRestart ? (
                <Button
                  type="button"
                  variant="outline"
                  className="gap-2"
                  onClick={() => {
                    onRestart?.();
                    resetSession();
                  }}
                >
                  <RotateCcw className="size-4" aria-hidden />
                  {t("restart")}
                </Button>
              ) : null
            }
          >
            {!current.checked ? (
              <ExerciseCheckButton type="submit" disabled={!canSubmitCheck()}>
                <ListChecks className="size-4" aria-hidden />
                {t("check")}
              </ExerciseCheckButton>
            ) : null}
          </ExerciseStepNav>
        </form>
      </article>

      <ExerciseResultDialog
        open={resultOpen && current.checked}
        variant={isCorrect ? "correct" : "incorrect"}
        explanation={exercise.explanation}
        onOpenChange={setResultOpen}
        onContinue={handleNext}
        continueLabel={continueLabel}
      />
    </div>
  );
}
