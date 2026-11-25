export const instant = false;

import { getTranslations, setRequestLocale } from "next-intl/server";
import { SpeakingSection } from "@/components/features/dashboard/SpeakingSection";
import { WorkshopSectionShell } from "@/components/features/dashboard/WorkshopSectionShell";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Dashboard" });
  const tMeta = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: tMeta("pageTitle", { title: t("skillSpeakingTitle") }),
  };
}

export default async function SpeakingHubPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <WorkshopSectionShell>
      <SpeakingSection />
    </WorkshopSectionShell>
  );
}
