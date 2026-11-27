"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Lock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { SpeakEnglishTitleButton } from "@/components/ui/SpeakEnglishTitleButton";

type DashboardItemCardHeaderProps = {
  indexBadge: ReactNode;
  progressLabel: string;
  locked?: boolean;
  title: ReactNode;
  titleSecondary?: ReactNode;
  description?: ReactNode;
};

export function DashboardItemCardHeader({
  indexBadge,
  progressLabel,
  locked = false,
  title,
  titleSecondary,
  description,
}: DashboardItemCardHeaderProps) {
  const t = useTranslations("Dashboard");

  return (
    <CardHeader>
      <div className="flex flex-wrap items-center gap-2">
        {indexBadge}
        {locked ? (
          <Badge
            variant="outline"
            className="gap-1 border-amber-500/40 text-amber-700 dark:text-amber-300"
          >
            <Lock className="size-3" aria-hidden />
            {t("locked")}
          </Badge>
        ) : null}
        <Badge variant="outline" className="ml-auto tabular-nums">
          {progressLabel}
        </Badge>
      </div>

      <div className="space-y-1">
        <CardTitle>{title}</CardTitle>
        {titleSecondary}
        {description}
      </div>
    </CardHeader>
  );
}

type DashboardItemTitleSecondaryProps = {
  text: string;
};

export function DashboardItemTitleSecondary({
  text,
}: DashboardItemTitleSecondaryProps) {
  return (
    <div className="flex min-w-0 items-center gap-0.5">
      <CardDescription className="min-w-0 font-medium tracking-wide text-brand-500 italic dark:text-brand-400">
        {text}
      </CardDescription>
      <SpeakEnglishTitleButton text={text} />
    </div>
  );
}

export function dashboardItemTitleSecondary(text: string) {
  return <DashboardItemTitleSecondary text={text} />;
}

export function dashboardItemDescription(text: string) {
  return (
    <CardDescription className="text-brand-600 dark:text-brand-300">
      {text}
    </CardDescription>
  );
}

export function dashboardItemSummary(text: string) {
  return <CardDescription className="line-clamp-2">{text}</CardDescription>;
}
