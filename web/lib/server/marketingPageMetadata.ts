import { getTranslations } from "next-intl/server";

type MarketingPageKey = "benefits" | "packages" | "sss" | "contact";

export async function buildMarketingPageMetadata(
  locale: string,
  pageKey: MarketingPageKey,
) {
  const t = await getTranslations({ locale, namespace: `Pages.${pageKey}` });
  const tMeta = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: tMeta("pageTitle", { title: t("title") }),
    description: t("description"),
  };
}
