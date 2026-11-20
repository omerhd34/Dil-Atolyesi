import { Layers, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { LandingReveal } from "@/components/features/landing/LandingReveal";
import { LandingSectionFrame } from "@/components/features/landing/LandingSectionFrame";
import { LandingSectionIntro } from "@/components/features/landing/LandingSectionIntro";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

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

      <ul className="mt-12 grid list-none gap-5 lg:grid-cols-2 lg:gap-6">
        {PACKAGE_KEYS.map((key, index) => {
          const highlighted = key === "starter";
          const Icon = key === "starter" ? Layers : Sparkles;

          return (
            <li key={key}>
              <LandingReveal delayMs={index * 120} className="h-full">
                <Card
                  className={
                    highlighted
                      ? "h-full rounded-3xl border-sky-500/25 bg-sky-500/6 dark:border-sky-400/25 dark:bg-sky-500/10"
                      : "h-full rounded-3xl opacity-95"
                  }
                >
                  <CardHeader className="gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-border/80 bg-surface/60 text-brand-800 dark:bg-brand-950/50 dark:text-brand-200">
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
                    <p className="text-sm leading-6 text-brand-600 sm:text-base sm:leading-7 dark:text-brand-400">
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
