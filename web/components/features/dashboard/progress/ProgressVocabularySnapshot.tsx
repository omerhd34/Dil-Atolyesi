"use client";

import { useTranslations } from "next-intl";
import { BookOpen, ClipboardCheck, Timer } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { StartStudyTimerButton } from "@/components/features/vocabulary/StartStudyTimerButton";
import { DashboardStatProgressBar } from "@/components/features/dashboard/DashboardStatProgressBar";
import {
  useVocabularyLearnQuotaQuery,
  useVocabularyQuizQuery,
} from "@/store/api";
import { useCountdown } from "@/hooks/useCountdown";
import {
  BYPASS_LEARN_WORD_LOCK,
  LEARN_WORD_PERIOD_LIMIT,
} from "@/lib/vocabularyLimits";

export function ProgressVocabularySnapshot() {
  const t = useTranslations("Dashboard");
  const { data: quota } = useVocabularyLearnQuotaQuery();
  const { data: quiz } = useVocabularyQuizQuery();
  const dueCount = quiz?.dueCount ?? 0;
  const pending = quota?.pendingStudyCount ?? 0;
  const learnLimit =
    quota?.learnLimit ?? quota?.dailyLearnLimit ?? LEARN_WORD_PERIOD_LIMIT;
  const remainingMs = useCountdown(quota?.lockedUntil);
  const isLocked =
    !BYPASS_LEARN_WORD_LOCK && Boolean(quota?.lockedUntil) && remainingMs > 0;
  const quotaLabel = t("wordTimerQuota", {
    selected: pending,
    limit: learnLimit,
  });

  return (
    <article className="workshop-card flex h-full flex-col p-5 sm:p-6">
      <p className="workshop-card__label text-base">
        <Timer className="size-5" aria-hidden />
        {t("wordTimer")}
      </p>
      <p className="mt-1 text-sm text-brand-600 dark:text-brand-400">
        {t("wordTimerIdleHint")}
      </p>

      <DashboardStatProgressBar
        value={pending}
        max={learnLimit}
        ariaLabel={quotaLabel}
        fillVariant={isLocked ? "warning" : "default"}
        inlineEndLabel={
          <>
            {pending}
            <span className="font-medium text-brand-700 dark:text-brand-300">
              /{learnLimit}
            </span>
          </>
        }
        className="mt-4"
      />

      <div className="mt-4 flex flex-wrap gap-2">
        <StartStudyTimerButton />
        {dueCount > 0 ? (
          <ButtonLink href="/atolye/vocabulary/exam" size="sm">
            <ClipboardCheck className="size-3.5" aria-hidden />
            {t("quizCardCta")}
          </ButtonLink>
        ) : null}
        <ButtonLink href="/atolye/vocabulary" variant="outline" size="sm">
          <BookOpen className="size-3.5" aria-hidden />
          {t("selectWord")}
        </ButtonLink>
      </div>
    </article>
  );
}
