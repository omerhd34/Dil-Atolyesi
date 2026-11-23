import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BoldMessageText } from "@/components/i18n/BoldMessageText";
import {
  landingMotionBodyClass,
  landingMotionCardClass,
  landingMotionIconClass,
} from "@/lib/landing/landingMotionCard";
import { cn } from "@/lib/utils";

type FaqItemProps = {
  question: string;
  answer: string;
  icon: LucideIcon;
};

export function FaqItem({ question, answer, icon: Icon }: FaqItemProps) {
  return (
    <details
      className={cn(
        "group overflow-hidden rounded-3xl border border-border/80 bg-surface/40 shadow-sm",
        landingMotionCardClass,
        "transition-colors open:border-sky-500/20 open:bg-sky-500/5 dark:open:border-sky-400/20 dark:open:bg-sky-500/10",
      )}
    >
      <summary className="cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-3 p-5 sm:gap-4 sm:p-6">
          <span
            className={cn(
              landingMotionIconClass,
              "inline-flex size-10 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-surface/60 text-brand-800 sm:size-11 dark:bg-brand-950/50 dark:text-brand-200",
            )}
          >
            <Icon className="size-5" strokeWidth={1.75} aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="font-display text-base font-semibold tracking-tight text-brand-950 sm:text-lg dark:text-brand-100">
              {question}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-surface/50 text-brand-700 transition-[transform,background-color] duration-200 group-open:rotate-180 group-open:border-sky-500/25 group-open:bg-sky-500/10 group-open:text-sky-700 dark:bg-brand-950/40 dark:text-brand-300 dark:group-open:border-sky-400/30 dark:group-open:bg-sky-500/15 dark:group-open:text-sky-300"
          >
            <ChevronDown className="size-4" strokeWidth={2} />
          </span>
        </span>
      </summary>
      <div className="border-t border-border/60 px-5 pt-1 pb-5 sm:px-6 sm:pb-6">
        <p
          className={cn(
            "m-0 pl-13 text-sm leading-6 sm:pl-15 sm:text-base sm:leading-7",
            landingMotionBodyClass,
          )}
        >
          <BoldMessageText text={answer} />
        </p>
      </div>
    </details>
  );
}
