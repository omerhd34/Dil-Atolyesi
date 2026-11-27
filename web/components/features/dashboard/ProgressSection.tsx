"use client";

import { useTranslations } from "next-intl";
import { MyPointsSection } from "@/components/features/dashboard/MyPointsSection";
import { ProgressFocusCard } from "@/components/features/dashboard/progress/ProgressFocusCard";
import { ProgressHeroCard } from "@/components/features/dashboard/progress/ProgressHeroCard";
import { ProgressHubKpis } from "@/components/features/dashboard/progress/ProgressHubKpis";
import { ProgressSkillGrid } from "@/components/features/dashboard/progress/ProgressSkillGrid";
import { ProgressVocabularySnapshot } from "@/components/features/dashboard/progress/ProgressVocabularySnapshot";

export function ProgressSection() {
  const t = useTranslations("Dashboard");

  return (
    <section
      id="progress"
      aria-labelledby="progress-heading"
      className="space-y-5 sm:space-y-6"
    >
      <header className="progress-page-header">
        <h1 id="progress-heading" className="page-title">
          {t("progressTitle")}
        </h1>
        <p className="page-subtitle">{t("progressSubtitle")}</p>
      </header>

      <ProgressHubKpis />

      <ProgressHeroCard />

      <ProgressSkillGrid />

      <div className="grid items-stretch gap-3 md:grid-cols-2">
        <ProgressFocusCard />
        <ProgressVocabularySnapshot />
      </div>

      <MyPointsSection />
    </section>
  );
}
