"use client";

import { useTranslations } from "next-intl";
import { Award, CalendarDays, CalendarRange, Sun } from "lucide-react";
import { usePointsQuery } from "@/hooks/usePointsQuery";
import { Skeleton } from "@/components/ui/skeleton";

const PERIOD_KEYS = [
  {
    key: "daily",
    labelKey: "daily",
    hintKey: "myPointsDailyHint",
    Icon: Sun,
    valueKey: "daily" as const,
  },
  {
    key: "weekly",
    labelKey: "weekly",
    hintKey: "myPointsWeeklyHint",
    Icon: CalendarDays,
    valueKey: "weekly" as const,
  },
  {
    key: "monthly",
    labelKey: "monthly",
    hintKey: "myPointsMonthlyHint",
    Icon: CalendarRange,
    valueKey: "monthly" as const,
  },
] as const;

export function MyPointsSection() {
  const t = useTranslations("Dashboard");
  const { data, isLoading, isError } = usePointsQuery();

  return (
    <section
      aria-labelledby="my-points-heading"
      className="workshop-card workshop-card--stat space-y-5 p-5 sm:p-6"
    >
      <div className="flex items-start gap-3">
        <span
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-700 dark:bg-amber-400/10 dark:text-amber-200"
          aria-hidden
        >
          <Award className="size-5" strokeWidth={1.75} />
        </span>
        <div className="min-w-0">
          <h2 id="my-points-heading" className="section-title">
            {t("myPoints")}
          </h2>
          <p className="page-subtitle">{t("myPointsSubtitle")}</p>
          <p className="mt-1 text-xs text-brand-500 dark:text-brand-400">
            {t("myPointsRulesHint")}
          </p>
          {data ? (
            <p className="mt-1 text-xs font-medium text-brand-600 dark:text-brand-400">
              {t("myPointsTotalHint", { count: data.total })}
            </p>
          ) : null}
        </div>
      </div>

      {isError ? (
        <p className="text-sm text-destructive">{t("myPointsError")}</p>
      ) : null}

      <dl className="grid gap-3 sm:grid-cols-3">
        {PERIOD_KEYS.map(({ key, labelKey, hintKey, Icon, valueKey }) => {
          const value = data?.[valueKey] ?? 0;
          return (
            <div
              key={key}
              className="flex flex-col rounded-2xl border border-border/70 bg-surface-muted/70 px-4 py-4 transition-colors hover:border-amber-500/25 dark:border-white/10 dark:bg-white/5 dark:hover:border-amber-400/20"
            >
              <div className="flex items-center justify-between gap-2">
                <dt className="text-xs font-semibold tracking-[0.08em] text-brand-600 uppercase dark:text-brand-400">
                  {t(labelKey)}
                </dt>
                <Icon
                  className="size-4 text-brand-500 dark:text-brand-400"
                  aria-hidden
                />
              </div>
              {isLoading && !data ? (
                <Skeleton className="mt-3 h-10 w-16" />
              ) : (
                <dd className="mt-3 font-display text-4xl font-semibold tracking-tight text-brand-950 tabular-nums dark:text-brand-50">
                  {value}
                </dd>
              )}
              <p className="mt-2 text-xs text-brand-500 dark:text-brand-400">
                {t(hintKey)}
              </p>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
