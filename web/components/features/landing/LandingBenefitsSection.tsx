import { BookMarked, Brain, MessageCircle, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { BoldMessageText } from "@/components/i18n/BoldMessageText";
import { LandingReveal } from "@/components/features/landing/LandingReveal";
import { LandingSectionFrame } from "@/components/features/landing/LandingSectionFrame";
import { LandingSectionIntro } from "@/components/features/landing/LandingSectionIntro";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import {
  landingMotionBodyClass,
  landingMotionCardClass,
  landingMotionIconClass,
} from "@/lib/landing/landingMotionCard";
import { cn } from "@/lib/utils";

const BENEFIT_KEYS = ["vocabulary", "grammar", "skills", "confidence"] as const;

const BENEFIT_ICONS: Record<(typeof BENEFIT_KEYS)[number], LucideIcon> = {
  vocabulary: BookMarked,
  grammar: Brain,
  skills: MessageCircle,
  confidence: TrendingUp,
};

export function LandingBenefitsSection() {
  const t = useTranslations("Pages.benefits");
  const headingId = "kazanimlar-heading";

  return (
    <LandingSectionFrame id="kazanimlar" headingId={headingId} tone="muted">
      <LandingSectionIntro
        headingId={headingId}
        title={t("title")}
        description={t("description")}
      />

      <ul className="mt-12 grid list-none gap-5 sm:grid-cols-2 sm:items-stretch lg:grid-cols-4 lg:gap-6">
        {BENEFIT_KEYS.map((key, index) => {
          const Icon = BENEFIT_ICONS[key];
          return (
            <li key={key} className="flex min-h-0 flex-col">
              <LandingReveal
                delayMs={index * 90}
                className="flex h-full min-h-0 flex-1 flex-col"
              >
                <Card
                  className={cn(
                    "h-full min-h-0 flex-1 overflow-hidden rounded-3xl",
                    landingMotionCardClass,
                  )}
                >
                  <CardHeader className="gap-3">
                    <span
                      className={cn(
                        landingMotionIconClass,
                        "inline-flex size-11 items-center justify-center rounded-2xl border border-border/80 bg-surface/60 text-brand-800 dark:bg-brand-950/50 dark:text-brand-200",
                      )}
                    >
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <CardTitle className="text-lg sm:text-xl">
                      {t(`items.${key}.title`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={cn(
                        "m-0 text-base leading-7",
                        landingMotionBodyClass,
                      )}
                    >
                      <BoldMessageText text={t(`items.${key}.body`)} />
                    </p>
                  </CardContent>
                </Card>
              </LandingReveal>
            </li>
          );
        })}
      </ul>
    </LandingSectionFrame>
  );
}
