import {
  Award,
  BookMarked,
  BookOpen,
  Bot,
  Gauge,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { EducationStepCard } from "@/components/features/landing/EducationStepCard";
import { EducationStepsGrid } from "@/components/features/landing/EducationStepsGrid";
import { LandingReveal } from "@/components/features/landing/LandingReveal";
import { LandingSectionFrame } from "@/components/features/landing/LandingSectionFrame";
import { LandingSectionIntro } from "@/components/features/landing/LandingSectionIntro";

const STEPS = [
  { key: "level", Icon: Gauge },
  { key: "lessons", Icon: BookOpen },
  { key: "practice", Icon: Bot },
  { key: "progress", Icon: TrendingUp },
  { key: "vocabulary", Icon: BookMarked },
  { key: "levelAdvance", Icon: Award },
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

      <EducationStepsGrid>
        {STEPS.map(({ key, Icon }, index) => (
          <li key={key} className="flex min-h-0 flex-col">
            <LandingReveal
              delayMs={index * 100}
              className="flex h-full min-h-0 flex-1 flex-col"
            >
              <EducationStepCard
                index={index + 1}
                title={t(`steps.${key}.title`)}
                body={t(`steps.${key}.body`)}
                Icon={Icon}
              />
            </LandingReveal>
          </li>
        ))}
      </EducationStepsGrid>
    </LandingSectionFrame>
  );
}
