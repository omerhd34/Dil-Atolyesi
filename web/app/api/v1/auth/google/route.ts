import { NextResponse } from "next/server";
import { AppError } from "@/lib/server/AppError";
import { handleRouteError } from "@/lib/server/apiResponse";
import { getServerEnv } from "@/lib/server/env";
import {
  buildGoogleAuthorizationUrl,
  createGoogleOAuthState,
  getGoogleOAuthCookieMaxAge,
  GOOGLE_OAUTH_LOCALE_COOKIE,
  GOOGLE_OAUTH_STATE_COOKIE,
} from "@/lib/server/auth/google";
import { redirectToGoogleAuthError } from "@/lib/server/auth/googleRedirect";
import { getGoogleOAuthEnv } from "@/lib/server/auth/googleEnv";
import { routing, type AppLocale } from "@/i18n/routing";

function resolveLocale(value: string | null): AppLocale {
  if (value && routing.locales.includes(value as AppLocale)) {
    return value as AppLocale;
  }
  return routing.defaultLocale;
}

export async function GET(request: Request) {
  try {
    if (!getGoogleOAuthEnv()) {
      throw new AppError(
        "Google sign-in is not configured",
        503,
        "GOOGLE_AUTH_DISABLED",
      );
    }

    const { searchParams } = new URL(request.url);
    const locale = resolveLocale(searchParams.get("locale"));
    const state = createGoogleOAuthState();
    const authorizationUrl = buildGoogleAuthorizationUrl(state);
    const response = NextResponse.redirect(authorizationUrl);
    const env = getServerEnv();
    const cookieOptions = {
      httpOnly: true,
      secure: env.COOKIE_SECURE,
      sameSite: "lax" as const,
      maxAge: getGoogleOAuthCookieMaxAge(),
      path: "/api/v1/auth",
    };

    response.cookies.set(GOOGLE_OAUTH_STATE_COOKIE, state, cookieOptions);
    response.cookies.set(GOOGLE_OAUTH_LOCALE_COOKIE, locale, cookieOptions);

    return response;
  } catch (error) {
    const fallback = redirectToGoogleAuthError(
      routing.defaultLocale,
      "generic",
    );
    if (error instanceof AppError && error.code === "GOOGLE_AUTH_DISABLED") {
      return fallback;
    }
    return handleRouteError(error);
  }
}
