"use client";

import { useTranslations } from "next-intl";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function WorkshopLoading() {
  const t = useTranslations("Dashboard");

  return (
    <div
      className="page-shell"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <p className="sr-only">{t("loading")}</p>

      <div
        className="grid items-start gap-3 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]"
        aria-hidden
      >
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className={cn(
              "workshop-card space-y-3",
              index === 2 && "md:col-span-2 xl:col-span-1",
            )}
          >
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-3 w-32" />
          </div>
        ))}
      </div>

      <div className="space-y-2" aria-hidden>
        <Skeleton className="h-8 w-36" />
        <Skeleton className="h-4 w-full max-w-2xl" />
      </div>

      <div className="flex flex-wrap gap-2" aria-hidden>
        {Array.from({ length: 6 }, (_, index) => (
          <Skeleton key={index} className="h-9 w-24 rounded-full" />
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" aria-hidden>
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="glass-surface space-y-4 rounded-2xl p-6">
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <div className="flex gap-2 pt-2">
              <Skeleton className="h-9 w-24" />
              <Skeleton className="h-9 w-28" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
