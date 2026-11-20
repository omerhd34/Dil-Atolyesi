"use client";

import { useTranslations } from "next-intl";
import { DashboardStatsBar } from "@/components/features/dashboard/DashboardStatsBar";
import { HelpSection } from "@/components/features/dashboard/HelpSection";
import { ProgressSection } from "@/components/features/dashboard/ProgressSection";
import { ListeningSection } from "@/components/features/dashboard/ListeningSection";
import { ReadingSection } from "@/components/features/dashboard/ReadingSection";
import { SpeakingSection } from "@/components/features/dashboard/SpeakingSection";
import { WritingSection } from "@/components/features/dashboard/WritingSection";
import { SkillSection } from "@/components/features/dashboard/SkillSection";
import { TopicsSection } from "@/components/features/dashboard/TopicsSection";
import { VocabularySection } from "@/components/features/dashboard/VocabularySection";
import { useWorkshopHash } from "@/hooks/useWorkshopHash";

const SKILL_BY_HASH = {
  listening: "listening",
  writing: "writing",
  speaking: "speaking",
  reading: "reading",
} as const;

type SkillHash = keyof typeof SKILL_BY_HASH;

function isSkillHash(section: string): section is SkillHash {
  return section in SKILL_BY_HASH;
}

const READY_SECTIONS = new Set<string>([
  "help",
  "grammer",
  "vocabulary",
  "progress",
  ...Object.keys(SKILL_BY_HASH),
]);

export function DashboardHome() {
  const t = useTranslations("Dashboard");
  const hash = useWorkshopHash();
  const section = hash.replace(/^#/, "");

  return (
    <div className="page-shell">
      <DashboardStatsBar />
      {section === "help" ? <HelpSection /> : null}
      {section === "grammer" ? <TopicsSection /> : null}
      {section === "vocabulary" ? <VocabularySection /> : null}
      {section === "reading" ? <ReadingSection /> : null}
      {section === "listening" ? <ListeningSection /> : null}
      {section === "writing" ? <WritingSection /> : null}
      {section === "speaking" ? <SpeakingSection /> : null}
      {isSkillHash(section) &&
      section !== "reading" &&
      section !== "listening" &&
      section !== "writing" &&
      section !== "speaking" ? (
        <SkillSection skill={SKILL_BY_HASH[section]} />
      ) : null}
      {section === "progress" ? <ProgressSection /> : null}
      {section !== "" && !READY_SECTIONS.has(section) ? (
        <section className="space-y-2" aria-labelledby="section-soon-heading">
          <h1 id="section-soon-heading" className="page-title">
            {t("sectionSoonTitle")}
          </h1>
          <p className="page-subtitle mt-0">{t("sectionSoonBody")}</p>
        </section>
      ) : null}
    </div>
  );
}
