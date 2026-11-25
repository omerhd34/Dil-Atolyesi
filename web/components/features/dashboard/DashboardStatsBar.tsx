"use client";

import { useTranslations } from "next-intl";
import { BookOpen, ClipboardCheck, Timer } from "lucide-react";
import {
  useVocabularyLearnQuotaQuery,
  useVocabularyQuizQuery,
} from "@/store/api";
import { DashboardStatHeader } from "@/components/features/dashboard/DashboardStatHeader";
import { getCefrLevelBadgeClass } from "@/lib/topicAccess";
import { cn } from "@/lib/utils";
import { useVocabularyUiStore } from "@/store/vocabularyUiStore";
import { DashboardStatProgressBar } from "@/components/features/dashboard/DashboardStatProgressBar";
import { LevelStatusCard } from "@/components/features/dashboard/LevelStatusCard";
import { QuickContinueCard } from "@/components/features/dashboard/QuickContinueCard";
import { StartStudyTimerButton } from "@/components/features/vocabulary/StartStudyTimerButton";
import { WordTimerCardDetails } from "@/components/features/dashboard/WordTimerCardDetails";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { useRouter } from "@/i18n/navigation";
import { WORKSHOP_VOCABULARY_PATH } from "@/lib/workshopSectionRoutes";
import { useCountdown } from "@/hooks/useCountdown";
import {
  BYPASS_LEARN_WORD_LOCK,
  LEARN_WORD_PERIOD_LIMIT,
} from "@/lib/vocabularyLimits";

export function DashboardStatsBar() {
  const t = useTranslations("Dashboard");
  const router = useRouter();
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
  const vocabularyLevel = useVocabularyUiStore((s) => s.selectedLevel);

  return (
    <section
      aria-label={t("statsAria")}
      className="grid items-start gap-3 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]"
    >
      <QuickContinueCard className="h-auto" />
      <LevelStatusCard className="h-auto" />

      <article className="workshop-card workshop-card--stat h-auto md:col-span-2 xl:col-span-1">
        <DashboardStatHeader
          trailing={
            <span
              className={cn(
                "inline-flex items-center rounded-lg px-2.5 py-1 text-sm font-semibold",
                getCefrLevelBadgeClass(vocabularyLevel),
              )}
            >
              {vocabularyLevel}
            </span>
          }
        >
          <p className="workshop-card__label text-base">
            <Timer className="size-5" aria-hidden />
            {t("wordTimer")}
          </p>
        </DashboardStatHeader>
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
        />
        <WordTimerCardDetails />
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3">
          <div className="flex flex-wrap items-center gap-2">
            <StartStudyTimerButton />
            {dueCount > 0 ? (
              <ButtonLink href="/atolye/vocabulary/exam" size="sm">
                <ClipboardCheck className="size-3.5 text-current" aria-hidden />
                {t("quizCardCta")}
              </ButtonLink>
            ) : null}
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              router.push(WORKSHOP_VOCABULARY_PATH);
            }}
          >
            <BookOpen className="size-3.5 text-current" aria-hidden />
            {t("selectWord")}
          </Button>
        </div>
      </article>
    </section>
  );
}
