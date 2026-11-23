import { Layers, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { LandingReveal } from "@/components/features/landing/LandingReveal";
import { LandingSectionFrame } from "@/components/features/landing/LandingSectionFrame";
import { LandingSectionIntro } from "@/components/features/landing/LandingSectionIntro";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import {
  landingMotionBodyClass,
  landingMotionCardClass,
  landingMotionIconClass,
} from "@/lib/landing/landingMotionCard";
import { cn } from "@/lib/utils";

const PACKAGE_KEYS = ["starter", "pro"] as const;

export function LandingPackagesSection() {
  const t = useTranslations("Pages.packages");
  const headingId = "paketler-heading";

  return (
    <LandingSectionFrame id="paketler" headingId={headingId}>
      <LandingSectionIntro
        headingId={headingId}
        title={t("title")}
        description={t("description")}
      />

      <ul className="mt-12 grid list-none gap-5 sm:items-stretch lg:grid-cols-2 lg:gap-6">
        {PACKAGE_KEYS.map((key, index) => {
          const highlighted = key === "starter";
          const Icon = key === "starter" ? Layers : Sparkles;

          return (
            <li key={key} className="flex min-h-0 flex-col">
              <LandingReveal
                delayMs={index * 120}
                className="flex h-full min-h-0 flex-1 flex-col"
              >
                <Card
                  className={cn(
                    "h-full min-h-0 flex-1 overflow-hidden rounded-3xl",
                    landingMotionCardClass,
                    highlighted
                      ? "border-sky-500/25 bg-sky-500/6 dark:border-sky-400/25 dark:bg-sky-500/10"
                      : "opacity-95",
                  )}
                >
                  <CardHeader className="gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={cn(
                          landingMotionIconClass,
                          "inline-flex size-11 items-center justify-center rounded-2xl border border-border/80 bg-surface/60 text-brand-800 dark:bg-brand-950/50 dark:text-brand-200",
                        )}
                      >
                        <Icon
                          className="size-5"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      </span>
                      {highlighted ? (
                        <Badge variant="secondary">
                          {t(`items.${key}.badge`)}
                        </Badge>
                      ) : (
                        <Badge variant="outline">
                          {t(`items.${key}.badge`)}
                        </Badge>
                      )}
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-xl sm:text-2xl">
                        {t(`items.${key}.name`)}
                      </CardTitle>
                      <p className="font-display text-2xl font-semibold tracking-tight text-brand-950 dark:text-brand-50">
                        {t(`items.${key}.price`)}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={cn(
                        "m-0 text-base leading-7",
                        landingMotionBodyClass,
                      )}
                    >
                      {t(`items.${key}.body`)}
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
