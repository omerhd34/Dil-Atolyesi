import { BookOpen, Bot, Gauge, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { EducationStepCard } from "@/components/features/landing/EducationStepCard";
import { LandingReveal } from "@/components/features/landing/LandingReveal";
import { LandingSectionFrame } from "@/components/features/landing/LandingSectionFrame";
import { LandingSectionIntro } from "@/components/features/landing/LandingSectionIntro";

const STEPS = [
  { key: "level", Icon: Gauge },
  { key: "lessons", Icon: BookOpen },
  { key: "practice", Icon: Bot },
  { key: "progress", Icon: TrendingUp },
] as const satisfies ReadonlyArray<{
  key: string;
  Icon: LucideIcon;
}>;

export function LandingEducationSystem() {
  const t = useTranslations("EducationSystem");
  const headingId = "education-system-heading";

  return (
    <LandingSectionFrame id="egitim-sistemi" headingId={headingId}>
      <LandingSectionIntro
        headingId={headingId}
        title={t("title")}
        description={t("subtitle")}
      />

      <ul className="mt-12 grid list-none gap-5 sm:grid-cols-2 lg:gap-6">
        {STEPS.map(({ key, Icon }, index) => (
          <li key={key}>
            <LandingReveal delayMs={index * 100} className="h-full">
              <EducationStepCard
                index={index + 1}
                title={t(`steps.${key}.title`)}
                body={t(`steps.${key}.body`)}
                Icon={Icon}
              />
            </LandingReveal>
          </li>
        ))}
      </ul>
    </LandingSectionFrame>
  );
}
