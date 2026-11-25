import { getTranslations, setRequestLocale } from "next-intl/server";
import { WorkshopAccountAuth } from "@/components/features/auth/WorkshopAccountAuth";
import { WorkshopAccountShell } from "@/components/features/auth/WorkshopAccountShell";
import { isGoogleAuthConfigured } from "@/lib/server/auth/googleEnv";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Auth" });
  const tMeta = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: tMeta("pageTitle", { title: t("enterWorkshop") }),
  };
}

export default async function AuthAccountPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const googleAuthEnabled = isGoogleAuthConfigured();

  return (
    <WorkshopAccountShell>
      <WorkshopAccountAuth googleAuthEnabled={googleAuthEnabled} />
    </WorkshopAccountShell>
  );
}
