import { CircleHelp, Rocket, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import { BrandMark } from "@/components/brand/BrandMark";
import { HeroLevelPath } from "@/components/features/landing/HeroLevelPath";
import { Badge } from "@/components/ui/Badge";
import { ButtonAnchor } from "@/components/ui/ButtonAnchor";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { AUTH_ACCOUNT_PATH } from "@/lib/appPaths";

function landingStrong(chunks: ReactNode) {
  return (
    <span className="font-semibold text-brand-900 dark:text-brand-100">
      {chunks}
    </span>
  );
}

export function LandingHero() {
  const t = useTranslations("Landing");
  const tNav = useTranslations("Nav");
  const landingRich = { strong: landingStrong };

  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgb(56,139,180,0.28),transparent_50%),radial-gradient(ellipse_80%_60%_at_100%_0%,rgb(48,109,132,0.18),transparent_45%),linear-gradient(to_bottom,rgb(220,227,239),rgb(238,242,248))] dark:bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgb(56,139,180,0.22),transparent_50%),radial-gradient(ellipse_80%_60%_at_100%_0%,rgb(83,102,132,0.2),transparent_45%),linear-gradient(to_bottom,rgb(17,21,34),rgb(30,38,59))]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(48,109,132,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(48,109,132,0.06)_1px,transparent_1px)] mask-[linear-gradient(to_bottom,black,transparent_85%)] bg-size-[3rem_3rem] dark:bg-[linear-gradient(to_right,rgb(152,169,196,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(152,169,196,0.08)_1px,transparent_1px)]"
      />

      <Container className="relative flex flex-1 flex-col justify-center py-12 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="hero-enter-left flex w-full min-w-0 animate-[hero-slide-in-left_1.15s_ease-out_both] flex-col gap-7">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/60 px-3 py-1 text-xs font-medium text-brand-800 shadow-[inset_0_0_0_1px_rgb(255_255_255/40%)] backdrop-blur-sm dark:bg-brand-950/35 dark:text-brand-200">
                <Sparkles
                  className="size-3.5 text-sky-600 dark:text-sky-400"
                  strokeWidth={2}
                  aria-hidden
                />
                {tNav("brand")}
              </span>
              <Badge
                variant="secondary"
                aria-label={t("aiBadgeLabel")}
                title={t("aiBadgeLabel")}
                className="tracking-[0.14em] uppercase"
              >
                {t("aiBadge")}
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="max-w-full font-display text-[2rem] font-semibold leading-[1.12] tracking-tight text-brand-950 sm:text-5xl sm:leading-[1.1] lg:text-[3.25rem] xl:text-6xl dark:text-brand-50">
                {t("headline")}
              </h1>
              <p className="max-w-full text-base leading-7 text-brand-700 sm:text-lg sm:leading-8 dark:text-brand-300">
                {t.rich("subheadline", landingRich)}
              </p>
            </div>

            <div className="flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center">
              <ButtonAnchor
                href="#egitim-sistemi"
                variant="outline"
                size="lg"
                className="w-full min-[480px]:w-auto"
              >
                <CircleHelp className="size-4" strokeWidth={1.75} aria-hidden />
                {t("ctaHowItWorks")}
              </ButtonAnchor>
              <ButtonLink
                href={AUTH_ACCOUNT_PATH}
                size="lg"
                className="w-full min-[480px]:w-auto"
              >
                <Rocket className="size-4" strokeWidth={1.75} aria-hidden />
                {t("ctaStartLearning")}
              </ButtonLink>
            </div>
          </div>

          <div className="hero-enter-right w-full min-w-0 animate-[hero-slide-in-right_1.15s_ease-out_0.12s_both]">
            <div className="glass-surface relative w-full overflow-hidden rounded-3xl p-7 sm:p-9 lg:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-12 size-48 rounded-full bg-sky-500/20 blur-3xl dark:bg-sky-400/15"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-emerald-500/12 blur-3xl dark:bg-emerald-400/10"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -bottom-6"
              >
                <BrandMark className="size-36 opacity-[0.12] sm:size-44 dark:opacity-[0.18]" />
              </div>
              <div className="relative">
                <HeroLevelPath
                  label={t("levelsLabel")}
                  caption={t.rich("levelsCaption", landingRich)}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
