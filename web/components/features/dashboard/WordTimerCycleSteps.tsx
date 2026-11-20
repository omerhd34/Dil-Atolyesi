"use client";

import { useTranslations } from "next-intl";
import { Check, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export type WordTimerCycleStepState = "done" | "current" | "upcoming";

type WordTimerCycleStepsProps = {
  selectState: WordTimerCycleStepState;
  timerState: WordTimerCycleStepState;
  quizState: WordTimerCycleStepState;
  className?: string;
};

const STEP_KEYS = ["select", "timer", "quiz"] as const;

function StepGlyph({ state }: { state: WordTimerCycleStepState }) {
  if (state === "done") {
    return (
      <span
        className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
        aria-hidden
      >
        <Check className="size-3" strokeWidth={2.5} />
      </span>
    );
  }

  if (state === "current") {
    return (
      <span
        className="inline-flex size-5 shrink-0 items-center justify-center"
        aria-hidden
      >
        <span className="size-2.5 rounded-full bg-sky-500 shadow-[0_0_0_3px] shadow-sky-500/25 dark:bg-sky-400" />
      </span>
    );
  }

  return (
    <span
      className="inline-flex size-5 shrink-0 items-center justify-center text-brand-400 dark:text-brand-500"
      aria-hidden
    >
      <Circle className="size-3.5" strokeWidth={1.75} />
    </span>
  );
}

export function WordTimerCycleSteps({
  selectState,
  timerState,
  quizState,
  className,
}: WordTimerCycleStepsProps) {
  const t = useTranslations("Dashboard");
  const states: WordTimerCycleStepState[] = [
    selectState,
    timerState,
    quizState,
  ];

  return (
    <ol
      className={cn("space-y-2", className)}
      aria-label={t("wordTimerCycleAria")}
    >
      {STEP_KEYS.map((key, index) => {
        const state = states[index] ?? "upcoming";
        const label = t(`wordTimerStep_${key}`);
        return (
          <li
            key={key}
            className={cn(
              "flex min-w-0 items-center gap-2.5 rounded-lg px-1 py-0.5",
              state === "current" && "bg-sky-500/8 dark:bg-sky-400/10",
            )}
          >
            <StepGlyph state={state} />
            <span
              className={cn(
                "text-sm leading-snug",
                state === "done" &&
                  "font-medium text-brand-700 dark:text-brand-300",
                state === "current" &&
                  "font-semibold text-brand-950 dark:text-brand-50",
                state === "upcoming" && "text-brand-500 dark:text-brand-500",
              )}
            >
              {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

export function resolveWordTimerCycleSteps(input: {
  pending: number;
  cancellableCount: number;
  dueCount: number;
  isLocked: boolean;
}): {
  selectState: WordTimerCycleStepState;
  timerState: WordTimerCycleStepState;
  quizState: WordTimerCycleStepState;
} {
  const { pending, cancellableCount, dueCount, isLocked } = input;
  const timerRunning = cancellableCount > 0 || isLocked;

  if (dueCount > 0) {
    return {
      selectState: "done",
      timerState: "done",
      quizState: "current",
    };
  }

  if (timerRunning) {
    return {
      selectState: "done",
      timerState: "current",
      quizState: "upcoming",
    };
  }

  if (pending > 0) {
    return {
      selectState: "done",
      timerState: "current",
      quizState: "upcoming",
    };
  }

  return {
    selectState: "current",
    timerState: "upcoming",
    quizState: "upcoming",
  };
}
