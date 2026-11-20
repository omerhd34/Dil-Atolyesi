export const instant = false;

import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { DashboardStatsBar } from "@/components/features/dashboard/DashboardStatsBar";
import { PrepositionsSection } from "@/components/features/vocabulary/PrepositionsSection";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Vocabulary" });

  return {
    title: t("prepositionsDocumentTitle"),
  };
}

export default async function PrepositionsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Vocabulary");

  return (
    <div className="page-shell">
      <DashboardStatsBar />
      <Suspense
        fallback={<p className="page-subtitle mt-0">{t("statusLoading")}</p>}
      >
        <PrepositionsSection />
      </Suspense>
    </div>
  );
}
