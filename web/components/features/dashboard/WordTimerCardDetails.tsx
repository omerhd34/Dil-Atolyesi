"use client";

import { useTranslations } from "next-intl";
import { useStudyCycleOpen } from "@/components/features/vocabulary/StartStudyTimerButton";
import { CancelStudyTimerButton } from "@/components/features/vocabulary/CancelStudyTimerButton";
import {
  useStudiedTodayVocabularyWordsQuery,
  useVocabularyLearnQuotaQuery,
  useVocabularyQuizQuery,
} from "@/store/api";
import { useCountdown } from "@/hooks/useCountdown";
import { formatDurationHms } from "@/lib/formatDuration";
import { BYPASS_LEARN_WORD_LOCK } from "@/lib/vocabularyLimits";
import { cn } from "@/lib/utils";

type WordTimerCardDetailsProps = {
  className?: string;
};

export function WordTimerCardDetails({ className }: WordTimerCardDetailsProps) {
  const t = useTranslations("Dashboard");
  const { data: quota } = useVocabularyLearnQuotaQuery();
  const { data: quiz } = useVocabularyQuizQuery();
  const { data: studiedToday } = useStudiedTodayVocabularyWordsQuery();
  const pending = quota?.pendingStudyCount ?? 0;
  const dueCount = quiz?.dueCount ?? 0;
  const cancellableCount = studiedToday?.cancellableCount ?? 0;
  const remainingMs = useCountdown(quota?.lockedUntil);
  const { open: cycleOpen, ready: cycleKnown } = useStudyCycleOpen();
  const startBlocked = cycleKnown && cycleOpen && pending > 0;
  const isLocked =
    !BYPASS_LEARN_WORD_LOCK && Boolean(quota?.lockedUntil) && remainingMs > 0;

  const showActiveTimer = cancellableCount > 0;
  const showPendingHint = pending > 0 && !startBlocked && !showActiveTimer;
  const showBlockedHint = startBlocked && !showActiveTimer;
  const showQuizReady = dueCount > 0;
  const showIdle =
    !showActiveTimer &&
    !showPendingHint &&
    !showBlockedHint &&
    !showQuizReady &&
    !isLocked;

  return (
    <div className={cn("mt-2 flex flex-col gap-3", className)}>
      {isLocked ? (
        <p className="font-mono text-xs font-semibold text-amber-800 tabular-nums dark:text-amber-200">
          {t("wordTimerRemaining", {
            time: formatDurationHms(remainingMs),
          })}
        </p>
      ) : null}

      {showActiveTimer ? (
        <div className="rounded-xl border border-sky-500/20 bg-sky-500/8 px-3 py-2.5 dark:border-sky-400/15 dark:bg-sky-400/8">
          <p className="text-xs leading-relaxed text-brand-800 dark:text-brand-200">
            {t("studyTimerActiveHint", { count: cancellableCount })}
          </p>
          <div className="mt-2">
            <CancelStudyTimerButton />
          </div>
        </div>
      ) : null}

      {showPendingHint ? (
        <p className="text-xs leading-relaxed text-brand-600 dark:text-brand-400">
          {t("studyTimerPendingHint", { count: pending })}
        </p>
      ) : null}

      {showBlockedHint ? (
        <p className="text-xs leading-relaxed text-amber-900 dark:text-amber-100">
          {t("studyTimerBlockedHint", { count: pending })}
        </p>
      ) : null}

      {showQuizReady ? (
        <p className="text-xs font-medium text-brand-800 dark:text-brand-200">
          {t("quizCardReady", { count: dueCount })}
        </p>
      ) : null}

      {showIdle ? (
        <p className="truncate text-xs text-brand-600 dark:text-brand-400">
          {t("wordTimerIdleHint")}
        </p>
      ) : null}
    </div>
  );
}
