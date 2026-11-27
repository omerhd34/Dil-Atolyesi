"use client";

import {
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { ListChecks, RotateCcw } from "lucide-react";
import { useTranslations } from "next-intl";
import { Volume2 } from "lucide-react";
import { ExerciseCheckButton } from "@/components/features/exercises/ExerciseCheckButton";
import { ExerciseFinishedSection } from "@/components/features/exercises/ExerciseFinishedSection";
import { ExerciseQuestionHeader } from "@/components/features/exercises/ExerciseQuestionHeader";
import { ExercisePercentBadge } from "@/components/features/topics/ExercisePercentBadge";
import { ExerciseResultDialog } from "@/components/features/topics/ExerciseResultDialog";
import { ExerciseStepNav } from "@/components/features/topics/ExerciseStepNav";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { VerbFormSpeakButton } from "@/components/features/vocabulary/VerbFormSpeakButton";
import type { ListeningExercise, VerbListeningRow } from "@/data/grammar/types";
import {
  useExerciseCompletionPoints,
  type ExerciseOnComplete,
} from "@/hooks/useExerciseCompletionPoints";
import { useExerciseNavigation } from "@/hooks/useExerciseNavigation";
import {
  SKY_OPTION_HOVER_CLASSES,
  SKY_OPTION_SELECTED_CLASSES,
} from "@/lib/topicAccess";
import {
  canListeningDictationRetryEdit,
  canListeningDictationSubmitCheck,
  isListeningDictationCorrect,
  isListeningDictationExercise,
  isListeningDictationInputLocked,
  LISTENING_DICTATION_MAX_ATTEMPTS,
} from "@/lib/listeningDictation";
import { speakIconButtonClasses } from "@/lib/speakIconButton";
import { speakText, stopSpeaking } from "@/lib/speakText";
import { cn } from "@/lib/utils";

type ExerciseSessionResult = {
  correct: number;
  total: number;
};

type ListeningExercisesProps = {
  exercises: ListeningExercise[];
  onComplete?: ExerciseOnComplete;
  onRestart?: () => void;
  initialIndex?: number;
  initialSlots?: ListeningSlot[];
  progressShare?: number;
  onSessionChange?: (session: {
    index: number;
    correct: number;
    total: number;
    slots: ListeningSlot[];
  }) => void;
  onBackToTypes?: () => void;
};

type VerbRowSlotSelection = {
  v2Selected: number | null;
  v3Selected: number | null;
};

export type ListeningSlot = {
  englishSelected: number | null;
  turkishSelected: number | null;
  v2Selected: number | null;
  writtenAnswer: string;
  dictationAttempts: number;
  verbRows?: VerbRowSlotSelection[];
  checked: boolean;
};

function isVerbBatchListening(exercise: ListeningExercise): boolean {
  return (exercise.verbListeningRows?.length ?? 0) > 0;
}

function isVerbTripleListening(exercise: ListeningExercise): boolean {
  return (
    exercise.verbTripleForm === true &&
    !isVerbBatchListening(exercise) &&
    exercise.v2Options !== undefined &&
    exercise.v2CorrectIndex !== undefined
  );
}

type OptionGroupProps = {
  label: string;
  options: string[];
  selected: number | null;
  correctIndex: number;
  checked: boolean;
  ariaLabel: string;
  onSelect: (index: number) => void;
  speakOnCorrectOption?: boolean;
};

function createListeningSlot(): ListeningSlot {
  return {
    englishSelected: null,
    turkishSelected: null,
    v2Selected: null,
    writtenAnswer: "",
    dictationAttempts: 0,
    checked: false,
  };
}

function listeningSlotForExercise(exercise: ListeningExercise): ListeningSlot {
  const slot = createListeningSlot();
  if (exercise.verbListeningRows?.length) {
    return {
      ...slot,
      verbRows: exercise.verbListeningRows.map(() => ({
        v2Selected: null,
        v3Selected: null,
      })),
    };
  }
  return slot;
}

function resolveListeningInitialSlots(
  exercises: ListeningExercise[],
  saved?: ListeningSlot[],
): ListeningSlot[] {
  if (!saved || saved.length !== exercises.length) {
    return exercises.map((exercise) => listeningSlotForExercise(exercise));
  }

  return exercises.map((exercise, slotIndex) => {
    const preset = listeningSlotForExercise(exercise);
    const savedSlot = saved[slotIndex];
    if (!savedSlot) {
      return preset;
    }

    return {
      ...preset,
      ...savedSlot,
      writtenAnswer: savedSlot.writtenAnswer ?? preset.writtenAnswer,
      dictationAttempts:
        savedSlot.dictationAttempts ?? preset.dictationAttempts,
    };
  });
}

function isVerbBatchComplete(
  rows: VerbListeningRow[],
  selections: VerbRowSlotSelection[] | undefined,
): boolean {
  if (!selections || selections.length !== rows.length) {
    return false;
  }

  return rows.every((_, rowIndex) => {
    const selection = selections[rowIndex];
    return selection?.v2Selected !== null && selection?.v3Selected !== null;
  });
}

function isListeningCorrect(exercise: ListeningExercise, slot: ListeningSlot) {
  if (exercise.verbListeningRows?.length && slot.verbRows) {
    return exercise.verbListeningRows.every((row, rowIndex) => {
      const selection = slot.verbRows?.[rowIndex];
      if (
        !selection ||
        selection.v2Selected === null ||
        selection.v3Selected === null
      ) {
        return false;
      }
      return (
        selection.v2Selected === row.v2CorrectPoolIndex &&
        selection.v3Selected === row.v3CorrectPoolIndex
      );
    });
  }

  if (isListeningDictationExercise(exercise)) {
    return isListeningDictationCorrect(exercise, slot.writtenAnswer);
  }

  const base =
    slot.englishSelected === exercise.englishCorrectIndex &&
    slot.turkishSelected === exercise.turkishCorrectIndex;

  if (!isVerbTripleListening(exercise)) {
    return base;
  }

  return base && slot.v2Selected === exercise.v2CorrectIndex;
}

function countCorrect(exercises: ListeningExercise[], slots: ListeningSlot[]) {
  return exercises.reduce((count, exercise, exerciseIndex) => {
    const slot = slots[exerciseIndex];
    if (slot?.checked && isListeningCorrect(exercise, slot)) {
      return count + 1;
    }
    return count;
  }, 0);
}

function OptionGroup({
  label,
  options,
  selected,
  correctIndex,
  checked,
  ariaLabel,
  onSelect,
  speakOnCorrectOption = false,
}: OptionGroupProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold tracking-wide text-brand-500 uppercase dark:text-brand-400">
        {label}
      </p>
      <ul className="space-y-2" role="listbox" aria-label={ariaLabel}>
        {options.map((option, optionIndex) => {
          const isSelected = selected === optionIndex;
          const showCorrect = checked && optionIndex === correctIndex;
          const showWrong =
            checked && isSelected && optionIndex !== correctIndex;

          const showSpeak =
            speakOnCorrectOption && optionIndex === correctIndex;

          return (
            <li
              key={`${label}-${option}-${optionIndex}`}
              className={cn("flex items-stretch gap-2", showSpeak && "gap-2")}
            >
              <button
                type="button"
                role="option"
                aria-selected={isSelected}
                disabled={checked}
                onClick={() => onSelect(optionIndex)}
                className={cn(
                  "interaction-motion min-w-0 flex-1 cursor-pointer rounded-xl border px-4 py-3 text-left text-sm",
                  "disabled:cursor-default",
                  showCorrect &&
                    "border-emerald-500/60 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200",
                  showWrong &&
                    "border-red-500/60 bg-red-500/10 text-red-800 dark:text-red-200",
                  !showCorrect &&
                    !showWrong &&
                    isSelected &&
                    SKY_OPTION_SELECTED_CLASSES,
                  !showCorrect &&
                    !showWrong &&
                    !isSelected &&
                    "border-border bg-background/50 text-brand-800 dark:bg-brand-950/40 dark:text-brand-200",
                  !showCorrect &&
                    !showWrong &&
                    !isSelected &&
                    SKY_OPTION_HOVER_CLASSES,
                )}
              >
                {option}
              </button>
              {showSpeak ? (
                <VerbFormSpeakButton
                  form={option}
                  className="size-11 shrink-0 self-center rounded-xl"
                />
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

type VerbPoolWordButtonProps = {
  word: string;
  poolIndex: number;
  assignedRow: number;
  activeRow: number | null;
  checked: boolean;
  showCorrect: boolean;
  showWrong: boolean;
  disabled: boolean;
  onClick: () => void;
};

function VerbPoolWordButton({
  word,
  assignedRow,
  activeRow,
  checked,
  showCorrect,
  showWrong,
  disabled,
  onClick,
}: VerbPoolWordButtonProps) {
  const isAssigned = assignedRow >= 0;
  const isActiveTarget = assignedRow === activeRow;

  return (
    <div className="flex w-full min-w-0 items-stretch gap-1.5">
      <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "interaction-motion flex min-h-10 min-w-0 flex-1 items-center rounded-xl border px-2.5 py-2 text-left text-sm",
          "disabled:cursor-default",
          showCorrect &&
            "border-emerald-500/60 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200",
          showWrong &&
            "border-red-500/60 bg-red-500/10 text-red-800 dark:text-red-200",
          !showCorrect &&
            !showWrong &&
            isActiveTarget &&
            SKY_OPTION_SELECTED_CLASSES,
          !showCorrect &&
            !showWrong &&
            isAssigned &&
            !isActiveTarget &&
            "border-brand-400/50 bg-brand-50/80 dark:bg-brand-900/40",
          !showCorrect &&
            !showWrong &&
            !isAssigned &&
            "border-border bg-background/50 text-brand-800 dark:bg-brand-950/40 dark:text-brand-200",
          !showCorrect &&
            !showWrong &&
            !isAssigned &&
            !disabled &&
            !checked &&
            SKY_OPTION_HOVER_CLASSES,
          !disabled && !checked && "cursor-pointer",
        )}
      >
        <span className="min-w-0 flex-1 truncate">{word}</span>
      </button>
      <VerbFormSpeakButton
        form={word}
        className="size-10 shrink-0 rounded-xl"
      />
    </div>
  );
}

const verbListeningWordButtonClass =
  "interaction-motion flex min-h-10 min-w-0 flex-1 items-center rounded-xl border px-2.5 py-2 text-left text-sm";

function isVerbRowRevealed(selection: VerbRowSlotSelection): boolean {
  return selection.v2Selected !== null && selection.v3Selected !== null;
}

function isVerbRowCorrect(
  row: VerbListeningRow,
  selection: VerbRowSlotSelection,
): boolean {
  return (
    selection.v2Selected === row.v2CorrectPoolIndex &&
    selection.v3Selected === row.v3CorrectPoolIndex
  );
}

type VerbListeningBatchSectionProps = {
  rows: VerbListeningRow[];
  v2Pool: string[];
  v3Pool: string[];
  selections: VerbRowSlotSelection[];
  checked: boolean;
  v1Label: string;
  v2Label: string;
  v3Label: string;
  pickRowHint: string;
  onSelectV2: (rowIndex: number, poolIndex: number) => void;
  onSelectV3: (rowIndex: number, poolIndex: number) => void;
};

function VerbListeningBatchSection({
  rows,
  v2Pool,
  v3Pool,
  selections,
  checked,
  v1Label,
  v2Label,
  v3Label,
  pickRowHint,
  onSelectV2,
  onSelectV3,
}: VerbListeningBatchSectionProps) {
  const tVocabulary = useTranslations("Vocabulary");
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const rowCount = Math.max(rows.length, v2Pool.length, v3Pool.length);
  const columnHeaderClass =
    "px-0.5 text-xs font-semibold tracking-wide text-brand-500 uppercase dark:text-brand-400";

  function poolFeedback(
    poolIndex: number,
    field: "v2" | "v3",
  ): {
    showCorrect: boolean;
    showWrong: boolean;
    assignedRow: number;
    rowLocked: boolean;
  } {
    const slotKey = field === "v2" ? "v2Selected" : "v3Selected";
    const correctKey =
      field === "v2" ? "v2CorrectPoolIndex" : "v3CorrectPoolIndex";
    const assignedRow = selections.findIndex(
      (item) => item[slotKey] === poolIndex,
    );
    const row = assignedRow >= 0 ? rows[assignedRow] : undefined;
    const selection = assignedRow >= 0 ? selections[assignedRow] : undefined;
    const rowRevealed = selection !== undefined && isVerbRowRevealed(selection);
    const rowCorrect =
      rowRevealed && row !== undefined && isVerbRowCorrect(row, selection);
    const rowLocked = rowCorrect;

    const isThisSelection =
      assignedRow >= 0 && selection?.[slotKey] === poolIndex;
    const isCorrectOption = row !== undefined && poolIndex === row[correctKey];

    const showCorrect =
      rowRevealed &&
      assignedRow >= 0 &&
      (rowCorrect ? isThisSelection && isCorrectOption : isCorrectOption);
    const showWrong =
      rowRevealed && assignedRow >= 0 && isThisSelection && !isCorrectOption;

    return { showCorrect, showWrong, assignedRow, rowLocked };
  }

  return (
    <div className="space-y-2">
      <p className="text-sm text-brand-600 dark:text-brand-400">
        {pickRowHint}
      </p>
      <div className="grid grid-cols-3 items-stretch gap-x-3 gap-y-1.5">
        <p className={columnHeaderClass}>{v1Label}</p>
        <p className={columnHeaderClass}>{v2Label}</p>
        <p className={columnHeaderClass}>{v3Label}</p>

        {Array.from({ length: rowCount }, (_, rowIndex) => {
          const row = rows[rowIndex];
          const v2Word = v2Pool[rowIndex];
          const v3Word = v3Pool[rowIndex];

          if (!row && !v2Word && !v3Word) {
            return null;
          }

          const selection = selections[rowIndex] ?? {
            v2Selected: null,
            v3Selected: null,
          };
          const rowRevealed = isVerbRowRevealed(selection);
          const rowCorrect =
            row && rowRevealed && isVerbRowCorrect(row, selection);
          const rowWrong = row && rowRevealed && !rowCorrect;
          const rowLocked = Boolean(rowCorrect);

          const v2Index = rowIndex < v2Pool.length ? rowIndex : -1;
          const v3Index = rowIndex < v3Pool.length ? rowIndex : -1;
          const v2Fb = v2Index >= 0 ? poolFeedback(v2Index, "v2") : null;
          const v3Fb = v3Index >= 0 ? poolFeedback(v3Index, "v3") : null;

          return (
            <Fragment key={row?.verbId ?? `verb-row-${rowIndex}`}>
              {row ? (
                <div className="flex w-full min-w-0 items-stretch gap-1.5">
                  <button
                    type="button"
                    disabled={checked || rowLocked}
                    onClick={() => setActiveRow(rowIndex)}
                    className={cn(
                      verbListeningWordButtonClass,
                      "gap-2 font-medium",
                      "disabled:cursor-default",
                      activeRow !== null &&
                        activeRow === rowIndex &&
                        !checked &&
                        !rowLocked &&
                        cn(
                          SKY_OPTION_SELECTED_CLASSES,
                          "ring-2 ring-sky-500/25",
                        ),
                      rowCorrect &&
                        "border-emerald-500/60 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200",
                      rowWrong &&
                        "border-red-500/60 bg-red-500/10 text-red-800 dark:text-red-200",
                      !rowCorrect &&
                        !rowWrong &&
                        "border-border bg-background/50 text-brand-950 dark:bg-brand-950/40 dark:text-brand-100",
                      !rowCorrect &&
                        !rowWrong &&
                        !checked &&
                        !rowLocked &&
                        SKY_OPTION_HOVER_CLASSES,
                      !checked && !rowLocked && "cursor-pointer",
                    )}
                  >
                    <span className="min-w-0 flex-1 truncate">{row.v1}</span>
                    <Badge
                      variant={row.regular ? "secondary" : "outline"}
                      className="shrink-0 px-1.5 py-0 text-[10px] font-normal leading-tight"
                    >
                      {row.regular
                        ? tVocabulary("verbsTypeRegular")
                        : tVocabulary("verbsTypeIrregular")}
                    </Badge>
                  </button>
                  <VerbFormSpeakButton
                    form={row.v1}
                    className="size-10 shrink-0 rounded-xl"
                  />
                </div>
              ) : (
                <div aria-hidden />
              )}

              {v2Word && v2Fb ? (
                <VerbPoolWordButton
                  word={v2Word}
                  poolIndex={v2Index}
                  assignedRow={v2Fb.assignedRow}
                  activeRow={activeRow}
                  checked={checked}
                  showCorrect={v2Fb.showCorrect}
                  showWrong={v2Fb.showWrong}
                  disabled={
                    checked ||
                    v2Fb.rowLocked ||
                    (activeRow === null && v2Fb.assignedRow < 0)
                  }
                  onClick={() => {
                    if (activeRow === null) {
                      return;
                    }
                    onSelectV2(activeRow, v2Index);
                  }}
                />
              ) : (
                <div aria-hidden />
              )}

              {v3Word && v3Fb ? (
                <VerbPoolWordButton
                  word={v3Word}
                  poolIndex={v3Index}
                  assignedRow={v3Fb.assignedRow}
                  activeRow={activeRow}
                  checked={checked}
                  showCorrect={v3Fb.showCorrect}
                  showWrong={v3Fb.showWrong}
                  disabled={
                    checked ||
                    v3Fb.rowLocked ||
                    (activeRow === null && v3Fb.assignedRow < 0)
                  }
                  onClick={() => {
                    if (activeRow === null) {
                      return;
                    }
                    onSelectV3(activeRow, v3Index);
                  }}
                />
              ) : (
                <div aria-hidden />
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export function ListeningExercises({
  exercises,
  onComplete,
  onRestart,
  initialIndex = 0,
  initialSlots,
  progressShare = 100,
  onSessionChange,
  onBackToTypes,
}: ListeningExercisesProps) {
  const t = useTranslations("Topic");
  const [batchSectionKey, setBatchSectionKey] = useState(0);
  const skipSessionSave = useRef(true);
  const { pointsEarned, pointsAlreadyCounted, runComplete } =
    useExerciseCompletionPoints(onComplete);
  const completionRecorded = useRef(false);
  const seededSlots = useMemo(
    () => resolveListeningInitialSlots(exercises, initialSlots),
    [exercises, initialSlots],
  );
  const buildAllSlots = useMemo(
    () => () => exercises.map((item) => listeningSlotForExercise(item)),
    [exercises],
  );
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
    createSlot: createListeningSlot,
    buildAllSlots,
    initialIndex,
    initialSlots: seededSlots,
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
      slots: slots.map((slot) => ({
        englishSelected: slot.englishSelected,
        turkishSelected: slot.turkishSelected,
        v2Selected: slot.v2Selected,
        writtenAnswer: slot.writtenAnswer,
        dictationAttempts: slot.dictationAttempts,
        verbRows: slot.verbRows,
        checked: slot.checked,
      })),
    });
  }, [exercises, index, onSessionChange, slots]);

  useEffect(() => {
    if (!finished || completionRecorded.current) {
      return;
    }
    completionRecorded.current = true;
    void runComplete({
      correct: countCorrect(exercises, slots),
      total: exercises.length,
    });
  }, [exercises, finished, runComplete, slots]);

  const exercise = exercises[index];

  useEffect(() => {
    stopSpeaking();
  }, [exercise?.id, index]);

  if (exercises.length === 0 || !current || !exercise) {
    return <p className="page-subtitle mt-0">{t("noExercisesForType")}</p>;
  }

  const isCorrect = current.checked && isListeningCorrect(exercise, current);
  const canRestart = index > 0;
  const continueLabel = t(nextLabelKey);
  const answered = slots.filter((slot) => slot.checked).length;
  const percent =
    exercises.length === 0
      ? 0
      : Math.round((answered / exercises.length) * progressShare);

  function resetAll() {
    stopSpeaking();
    completionRecorded.current = false;
    resetSession();
  }

  function resetCurrentVerbBatch() {
    if (!exercise.verbListeningRows) {
      return;
    }
    updateCurrent({
      verbRows: exercise.verbListeningRows.map(() => ({
        v2Selected: null,
        v3Selected: null,
      })),
      checked: false,
    });
    setBatchSectionKey((value) => value + 1);
  }

  if (finished) {
    const correctCount = countCorrect(exercises, slots);
    return (
      <ExerciseFinishedSection
        correct={correctCount}
        total={exercises.length}
        onRetry={resetAll}
        onBackToTypes={onBackToTypes}
        pointsEarned={pointsEarned}
        pointsAlreadyCounted={pointsAlreadyCounted}
      />
    );
  }

  function applyVerbRowSelection(
    rowIndex: number,
    field: "v2" | "v3",
    optionIndex: number,
  ) {
    if (current.checked || !exercise.verbListeningRows) {
      return;
    }

    const row = exercise.verbListeningRows[rowIndex];
    const existing = current.verbRows?.[rowIndex];
    if (
      row &&
      existing &&
      isVerbRowRevealed(existing) &&
      isVerbRowCorrect(row, existing)
    ) {
      return;
    }

    const nextRows = [...(current.verbRows ?? [])];
    while (nextRows.length < exercise.verbListeningRows.length) {
      nextRows.push({ v2Selected: null, v3Selected: null });
    }

    const slotKey = field === "v2" ? "v2Selected" : "v3Selected";

    for (let i = 0; i < nextRows.length; i += 1) {
      if (i !== rowIndex && nextRows[i]?.[slotKey] === optionIndex) {
        nextRows[i] = { ...nextRows[i], [slotKey]: null };
      }
    }

    nextRows[rowIndex] = {
      ...nextRows[rowIndex],
      [slotKey]: optionIndex,
    };

    const complete = isVerbBatchComplete(exercise.verbListeningRows, nextRows);

    updateCurrent({
      verbRows: nextRows,
      ...(complete ? { checked: true } : {}),
    });
  }

  function handleDictationCheck(event?: FormEvent) {
    event?.preventDefault();
    if (!isListeningDictationExercise(exercise)) {
      return;
    }
    const answerCorrect = isListeningDictationCorrect(
      exercise,
      current.writtenAnswer,
    );
    if (
      !canListeningDictationSubmitCheck(
        current.dictationAttempts,
        current.checked,
        answerCorrect,
      )
    ) {
      return;
    }
    if (!current.writtenAnswer.trim()) {
      return;
    }
    const nextAttempts = current.dictationAttempts + 1;
    updateCurrent({ checked: true, dictationAttempts: nextAttempts });
    if (exercise.explanation) {
      setResultOpen(true);
    }
  }

  function handleNext() {
    handleAdvance(() => undefined);
  }

  const verbBatch = isVerbBatchListening(exercise);
  const dictation = isListeningDictationExercise(exercise);
  const batchRows = exercise.verbListeningRows ?? [];
  const batchSelections =
    current.verbRows ??
    batchRows.map(() => ({ v2Selected: null, v3Selected: null }));
  const canResetVerbBatch =
    verbBatch &&
    (current.checked ||
      batchSelections.some(
        (row) => row.v2Selected !== null || row.v3Selected !== null,
      ));

  const dictationAnswerCorrect =
    dictation && isListeningDictationCorrect(exercise, current.writtenAnswer);
  const dictationLocked =
    dictation &&
    isListeningDictationInputLocked(
      current.dictationAttempts,
      current.checked,
      dictationAnswerCorrect,
    );
  const dictationAttemptsLeft =
    LISTENING_DICTATION_MAX_ATTEMPTS - current.dictationAttempts;

  return (
    <div
      className={cn("mx-auto space-y-4", verbBatch ? "max-w-4xl" : "max-w-2xl")}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-brand-500 dark:text-brand-400">
          {t("progress", { current: index + 1, total: exercises.length })}
        </p>
        <div className="flex shrink-0 items-center gap-2">
          {dictation &&
          current.dictationAttempts > 0 &&
          dictationAttemptsLeft > 0 &&
          !dictationLocked ? (
            <Badge
              variant="outline"
              className="max-w-44 truncate text-xs tabular-nums sm:max-w-none"
            >
              {t("listeningDictationAttemptsLeft", {
                remaining: dictationAttemptsLeft,
              })}
            </Badge>
          ) : null}
          {dictation &&
          dictationLocked &&
          current.checked &&
          !dictationAnswerCorrect &&
          current.dictationAttempts >= LISTENING_DICTATION_MAX_ATTEMPTS ? (
            <Badge
              variant="outline"
              className="max-w-44 truncate text-xs text-red-700 dark:text-red-300 sm:max-w-none"
            >
              {t("listeningDictationNoAttemptsLeft")}
            </Badge>
          ) : null}
          <ExercisePercentBadge percent={percent} />
        </div>
      </div>

      <article className="workshop-card space-y-5">
        {verbBatch ? null : (
          <ExerciseQuestionHeader
            title={exercise.prompt}
            showHint={false}
            actions={
              <Button
                type="button"
                variant="outline"
                size="sm"
                data-btn-motion="off"
                className={speakIconButtonClasses()}
                onClick={() => speakText(exercise.speakText)}
              >
                <Volume2 className="size-4" aria-hidden />
                {t("playAudio")}
              </Button>
            }
          />
        )}

        {verbBatch ? (
          <VerbListeningBatchSection
            key={`verb-batch-${index}-${batchSectionKey}`}
            rows={batchRows}
            v2Pool={exercise.verbListeningV2Pool ?? []}
            v3Pool={exercise.verbListeningV3Pool ?? []}
            selections={batchSelections}
            checked={current.checked}
            v1Label={t("listeningVerbV1Label")}
            v2Label={t("listeningVerbV2Label")}
            v3Label={t("listeningVerbV3Label")}
            pickRowHint={t("listeningVerbPickRowHint")}
            onSelectV2={(rowIndex, optionIndex) =>
              applyVerbRowSelection(rowIndex, "v2", optionIndex)
            }
            onSelectV3={(rowIndex, optionIndex) =>
              applyVerbRowSelection(rowIndex, "v3", optionIndex)
            }
          />
        ) : dictation ? (
          <form className="space-y-4" onSubmit={handleDictationCheck}>
            <label className="flex w-full flex-col gap-1.5 text-sm">
              <span className="sr-only">{t("listeningWriteAria")}</span>
              <input
                type="text"
                value={current.writtenAnswer}
                disabled={dictationLocked}
                onChange={(event) => {
                  const next = event.target.value;
                  const canRetry = canListeningDictationRetryEdit(
                    current.dictationAttempts,
                    current.checked,
                    dictationAnswerCorrect,
                  );
                  updateCurrent({
                    writtenAnswer: next,
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
                      resetAll();
                    }}
                  >
                    <RotateCcw className="size-4" aria-hidden />
                    {t("restart")}
                  </Button>
                ) : null
              }
            >
              {canListeningDictationSubmitCheck(
                current.dictationAttempts,
                current.checked,
                dictationAnswerCorrect,
              ) ? (
                <ExerciseCheckButton
                  type="submit"
                  disabled={!current.writtenAnswer.trim()}
                >
                  <ListChecks className="size-4" aria-hidden />
                  {t("check")}
                </ExerciseCheckButton>
              ) : null}
            </ExerciseStepNav>
          </form>
        ) : null}

        {verbBatch ? (
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
                    resetAll();
                  }}
                >
                  <RotateCcw className="size-4" aria-hidden />
                  {t("restart")}
                </Button>
              ) : null
            }
            trailing={
              canResetVerbBatch ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={resetCurrentVerbBatch}
                >
                  {t("listeningVerbReset")}
                </Button>
              ) : null
            }
          />
        ) : null}
      </article>

      <ExerciseResultDialog
        open={resultOpen && current.checked && Boolean(exercise.explanation)}
        variant={isCorrect ? "correct" : "incorrect"}
        explanation={exercise.explanation}
        onOpenChange={setResultOpen}
        onContinue={handleNext}
        continueLabel={continueLabel}
      />
    </div>
  );
}
