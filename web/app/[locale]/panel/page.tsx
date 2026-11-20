export const instant = false;

import { getTranslations, setRequestLocale } from "next-intl/server";
import { DashboardHome } from "@/components/features/dashboard/DashboardHome";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Dashboard" });
  const tMeta = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: tMeta("pageTitle", { title: t("title") }),
  };
}

export default async function PanelPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DashboardHome />;
}
