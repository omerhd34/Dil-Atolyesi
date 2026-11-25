import { NextResponse } from "next/server";
import { getPathname } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { AUTH_ACCOUNT_PATH, WORKSHOP_PATH } from "@/lib/appPaths";
import { getServerEnv } from "@/lib/server/env";

function resolveLocale(value: string | null | undefined): AppLocale {
  if (value && routing.locales.includes(value as AppLocale)) {
    return value as AppLocale;
  }
  return routing.defaultLocale;
}

export function redirectToGoogleAuthError(
  locale: AppLocale,
  code: string,
): NextResponse {
  const env = getServerEnv();
  const accountPath = getPathname({
    href: AUTH_ACCOUNT_PATH,
    locale,
  });
  const url = new URL(accountPath, env.APP_URL);
  url.searchParams.set("google_error", code);
  return NextResponse.redirect(url);
}

export function redirectAfterGoogleAuth(locale: AppLocale): NextResponse {
  const env = getServerEnv();
  const workshopPath = getPathname({
    href: WORKSHOP_PATH,
    locale,
  });
  return NextResponse.redirect(new URL(workshopPath, env.APP_URL));
}
