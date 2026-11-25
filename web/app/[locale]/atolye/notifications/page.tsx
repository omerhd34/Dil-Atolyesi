export const instant = false;

import { getTranslations, setRequestLocale } from "next-intl/server";
import { NotificationsPanel } from "@/components/features/dashboard/NotificationsPanel";
import { DashboardStatsBar } from "@/components/features/dashboard/DashboardStatsBar";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Dashboard" });
  const tMeta = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: tMeta("pageTitle", { title: t("notifications") }),
  };
}

export default async function NotificationsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="page-shell">
      <DashboardStatsBar />
      <NotificationsPanel layout="page" showPageLink={false} />
    </div>
  );
}
