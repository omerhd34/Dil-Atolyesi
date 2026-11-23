import { BoldMessageText } from "@/components/i18n/BoldMessageText";
import { LandingReveal } from "@/components/features/landing/LandingReveal";
import { cn } from "@/lib/utils";

type LandingSectionIntroProps = {
  headingId: string;
  title: string;
  description: string;
  className?: string;
};

export function LandingSectionIntro({
  headingId,
  title,
  description,
  className,
}: LandingSectionIntroProps) {
  return (
    <LandingReveal className={cn("w-full space-y-4", className)}>
      <h2
        id={headingId}
        className="font-display text-3xl font-semibold tracking-tight text-brand-950 sm:text-4xl dark:text-brand-100"
      >
        {title}
      </h2>
      <p className="text-base leading-7 text-brand-600 sm:text-lg sm:leading-8 dark:text-brand-400">
        <BoldMessageText text={description} />
      </p>
    </LandingReveal>
  );
}
