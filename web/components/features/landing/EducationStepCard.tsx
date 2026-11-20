import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

type EducationStepCardProps = {
  index: number;
  title: string;
  body: string;
  Icon: LucideIcon;
};

export function EducationStepCard({
  index,
  title,
  body,
  Icon,
}: EducationStepCardProps) {
  const stepLabel = String(index).padStart(2, "0");

  return (
    <Card className="h-full gap-0 rounded-3xl p-0">
      <CardHeader className="gap-4 p-6 pb-0 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span
            aria-hidden="true"
            className="font-display text-sm font-semibold tracking-[0.16em] text-brand-800/70 dark:text-brand-400/70"
          >
            {stepLabel}
          </span>
          <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-sky-500/25 bg-sky-500/10 text-sky-700 dark:border-sky-400/30 dark:bg-sky-500/15 dark:text-sky-300">
            <Icon className="size-5" strokeWidth={1.75} aria-hidden />
          </span>
        </div>
        <CardTitle className="text-xl sm:text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-4 sm:p-7 sm:pt-4">
        <p className="text-sm leading-6 text-brand-600 sm:text-base sm:leading-7 dark:text-brand-400">
          {body}
        </p>
      </CardContent>
    </Card>
  );
}
