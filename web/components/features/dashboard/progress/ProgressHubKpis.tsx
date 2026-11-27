"use client";

import { useTranslations } from "next-intl";
import { BookMarked, Flame, Trophy } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { usePassedLevelExams } from "@/hooks/usePassedLevelExams";
import { useStreakQuery } from "@/hooks/useStreakQuery";
import { useKnownVocabularyWordsQuery } from "@/store/api";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type KpiCardProps = {
  icon: React.ReactNode;
  iconWrapClass: string;
  title: string;
  value: string;
  hint: string;
  href?: string;
};

function KpiCard({
  icon,
  iconWrapClass,
  title,
  value,
  hint,
  href,
}: KpiCardProps) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-semibold tracking-[0.06em] text-brand-600 uppercase dark:text-brand-400">
          {title}
        </p>
        <span
          className={cn(
            "inline-flex size-9 shrink-0 items-center justify-center rounded-xl",
            iconWrapClass,
          )}
          aria-hidden
        >
          {icon}
        </span>
      </div>
      <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-950 tabular-nums dark:text-brand-50">
        {value}
      </p>
      <p className="mt-1.5 text-xs leading-relaxed text-brand-600 dark:text-brand-400">
        {hint}
      </p>
    </>
  );

  const cardClass =
    "progress-kpi-card flex flex-col rounded-2xl border border-border/60 bg-surface-muted/60 p-4 transition-colors dark:border-white/10 dark:bg-white/[0.04]";

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          cardClass,
          "hover:border-sky-500/30 hover:bg-sky-500/5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        )}
      >
        {inner}
      </Link>
    );
  }

  return <article className={cardClass}>{inner}</article>;
}

export function ProgressHubKpis() {
  const t = useTranslations("Dashboard");
  const { data: streak, isLoading: streakLoading } = useStreakQuery();
  const { data: knownWords, isLoading: wordsLoading } =
    useKnownVocabularyWordsQuery();
  const passedExams = usePassedLevelExams();

  const knownCount = knownWords?.count ?? 0;
  const passedCount = passedExams.length;

  return (
    <section
      className="grid gap-3 sm:grid-cols-3"
      aria-label={t("progressKpisAria")}
    >
      {streakLoading ? (
        <Skeleton className="h-30 rounded-2xl" />
      ) : (
        <KpiCard
          icon={<Flame className="size-4" strokeWidth={1.75} />}
          iconWrapClass="bg-orange-500/15 text-orange-700 dark:bg-orange-400/15 dark:text-orange-200"
          title={t("progressStreakTitle")}
          value={t("progressStreakCurrent", {
            count: streak?.currentStreak ?? 0,
          })}
          hint={
            streak?.activeToday
              ? t("progressStreakActiveToday")
              : t("progressStreakLongest", {
                  count: streak?.longestStreak ?? 0,
                })
          }
        />
      )}

      {wordsLoading && !knownWords ? (
        <Skeleton className="h-30 rounded-2xl" />
      ) : (
        <KpiCard
          href="/atolye/vocabulary/known-words"
          icon={<BookMarked className="size-4" strokeWidth={1.75} />}
          iconWrapClass="bg-teal-500/15 text-teal-700 dark:bg-teal-400/15 dark:text-teal-200"
          title={t("progressKnownWordsKpi")}
          value={String(knownCount)}
          hint={t("progressKnownWordsHint")}
        />
      )}

      <KpiCard
        icon={<Trophy className="size-4" strokeWidth={1.75} />}
        iconWrapClass="bg-amber-500/15 text-amber-800 dark:bg-amber-400/15 dark:text-amber-100"
        title={t("progressPassedLevelsKpi")}
        value={String(passedCount)}
        hint={t("progressPassedLevelsHint")}
      />
    </section>
  );
}
