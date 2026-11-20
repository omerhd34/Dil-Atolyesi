import { getTranslations, setRequestLocale } from "next-intl/server";
import { MarketingPage } from "@/components/features/marketing/MarketingPage";
import { buildMarketingPageMetadata } from "@/lib/server/marketingPageMetadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildMarketingPageMetadata(locale, "benefits");
}

export default async function BenefitsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Pages.benefits");

  return <MarketingPage title={t("title")} description={t("description")} />;
}
