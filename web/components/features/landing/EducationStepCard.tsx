import type { LucideIcon } from "lucide-react";
import { BoldMessageText } from "@/components/i18n/BoldMessageText";
import { Card, CardContent } from "@/components/ui/Card";
import {
  landingMotionBodyClass,
  landingMotionCardClass,
} from "@/lib/landing/landingMotionCard";
import { cn } from "@/lib/utils";

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
    <Card
      className={cn(
        "education-step-card group/edu-step h-full min-h-0 flex-1 gap-0 overflow-hidden rounded-3xl p-0",
        landingMotionCardClass,
      )}
    >
      <CardContent className="relative z-2 flex h-full flex-col gap-2 p-5 sm:gap-2.5 sm:p-6">
        <div className="flex items-center gap-3">
          <h3 className="section-title m-0 min-w-0 flex-1 text-lg leading-snug sm:text-xl">
            <span
              aria-hidden="true"
              className="education-step-card__step mr-1.5 inline font-bold tracking-[0.06em] text-[1.12em] tabular-nums"
            >
              {stepLabel}
            </span>
            <span aria-hidden="true" className="mr-1.5 font-semibold">
              –
            </span>
            <span className="font-semibold">{title}</span>
          </h3>
          <span
            className={cn(
              "education-step-card__icon landing-motion-card__icon inline-flex size-10 shrink-0 items-center justify-center rounded-xl",
              "border border-sky-500/30 bg-linear-to-br from-sky-500/16 to-sky-600/8",
              "text-sky-700 shadow-[inset_0_1px_0_rgb(255_255_255/35%)]",
              "dark:border-sky-400/35 dark:from-sky-500/22 dark:to-sky-600/10 dark:text-sky-300",
            )}
          >
            <Icon className="size-4.5" strokeWidth={1.75} aria-hidden />
          </span>
        </div>
        <p
          className={cn(
            "education-step-card__body m-0 flex-1 text-base leading-7",
            landingMotionBodyClass,
          )}
        >
          <BoldMessageText text={body} />
        </p>
      </CardContent>
    </Card>
  );
}
