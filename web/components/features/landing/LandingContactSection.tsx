import { Clock, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { LandingReveal } from "@/components/features/landing/LandingReveal";
import { LandingSectionFrame } from "@/components/features/landing/LandingSectionFrame";
import { LandingSectionIntro } from "@/components/features/landing/LandingSectionIntro";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type LandingContactSectionProps = {
  standalone?: boolean;
};

export function LandingContactSection({
  standalone = false,
}: LandingContactSectionProps) {
  const t = useTranslations("Pages.contact");
  const headingId = "iletisim-heading";
  const email = t("email");

  return (
    <LandingSectionFrame
      id={standalone ? undefined : "iletisim"}
      headingId={headingId}
      tone="muted"
      className={cn(
        standalone &&
          "min-h-[calc(100dvh-4rem)] border-t-0 [&>div]:flex [&>div]:flex-col [&>div]:justify-center",
      )}
    >
      <LandingSectionIntro
        headingId={headingId}
        title={t("title")}
        description={t("description")}
      />

      <LandingReveal delayMs={80} className="mt-12 max-w-2xl">
        <Card className="rounded-3xl p-0">
          <CardContent className="space-y-6 p-6 sm:p-8">
            <div className="flex gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-sky-500/25 bg-sky-500/10 text-sky-700 dark:border-sky-400/30 dark:bg-sky-500/15 dark:text-sky-300">
                <Mail className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <div className="min-w-0 space-y-1">
                <p className="text-xs font-semibold tracking-[0.14em] text-brand-800/70 uppercase dark:text-brand-400/70">
                  {t("emailLabel")}
                </p>
                <a
                  href={`mailto:${email}`}
                  className="font-display text-lg font-semibold tracking-tight text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200"
                >
                  {email}
                </a>
              </div>
            </div>
            <div className="flex gap-4 border-t border-border/80 pt-6">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-surface/60 text-brand-800 dark:bg-brand-950/50 dark:text-brand-200">
                <Clock className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <p className="text-sm leading-6 text-brand-600 sm:text-base sm:leading-7 dark:text-brand-400">
                {t("responseNote")}
              </p>
            </div>
          </CardContent>
        </Card>
      </LandingReveal>
    </LandingSectionFrame>
  );
}
