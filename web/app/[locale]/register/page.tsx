import { redirect } from "@/i18n/navigation";
import { AUTH_ACCOUNT_PATH } from "@/lib/appPaths";
import { setRequestLocale } from "next-intl/server";

export default async function RegisterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  redirect({ href: AUTH_ACCOUNT_PATH, locale });
}
