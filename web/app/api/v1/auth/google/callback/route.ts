import { cookies } from "next/headers";
import { AppError } from "@/lib/server/AppError";
import {
  exchangeGoogleAuthCode,
  GOOGLE_OAUTH_LOCALE_COOKIE,
  GOOGLE_OAUTH_STATE_COOKIE,
} from "@/lib/server/auth/google";
import {
  redirectAfterGoogleAuth,
  redirectToGoogleAuthError,
} from "@/lib/server/auth/googleRedirect";
import {
  setRefreshCookie,
  setSessionHintCookie,
} from "@/lib/server/auth/cookies";
import { loginWithGoogle } from "@/lib/server/auth/service";
import { withPrisma } from "@/lib/server/prisma";
import { routing, type AppLocale } from "@/i18n/routing";

function resolveLocale(value: string | null | undefined): AppLocale {
  if (value && routing.locales.includes(value as AppLocale)) {
    return value as AppLocale;
  }
  return routing.defaultLocale;
}

export async function GET(request: Request) {
  const cookieStore = await cookies();
  const locale = resolveLocale(
    cookieStore.get(GOOGLE_OAUTH_LOCALE_COOKIE)?.value,
  );
  const { searchParams } = new URL(request.url);
  const error = searchParams.get("error");

  if (error) {
    const code = error === "access_denied" ? "denied" : "generic";
    return redirectToGoogleAuthError(locale, code);
  }

  const returnedState = searchParams.get("state");
  const savedState = cookieStore.get(GOOGLE_OAUTH_STATE_COOKIE)?.value;
  const code = searchParams.get("code");

  if (!returnedState || !savedState || returnedState !== savedState || !code) {
    return redirectToGoogleAuthError(locale, "state_invalid");
  }

  try {
    const profile = await exchangeGoogleAuthCode(code);
    const result = await withPrisma(() => loginWithGoogle(profile));

    const response = redirectAfterGoogleAuth(locale);
    setRefreshCookie(response, result.refreshToken);
    setSessionHintCookie(response, result.user);

    response.cookies.set(GOOGLE_OAUTH_STATE_COOKIE, "", {
      httpOnly: true,
      path: "/api/v1/auth",
      maxAge: 0,
    });
    response.cookies.set(GOOGLE_OAUTH_LOCALE_COOKIE, "", {
      httpOnly: true,
      path: "/api/v1/auth",
      maxAge: 0,
    });

    return response;
  } catch (error) {
    console.error("Google OAuth callback failed:", error);

    if (error instanceof AppError) {
      if (error.code === "GOOGLE_EMAIL_UNVERIFIED") {
        return redirectToGoogleAuthError(locale, "email_unverified");
      }
      if (error.code === "GOOGLE_REDIRECT_MISMATCH") {
        return redirectToGoogleAuthError(locale, "redirect_mismatch");
      }
      if (error.code === "GOOGLE_AUTH_FAILED") {
        return redirectToGoogleAuthError(locale, "token_failed");
      }
      if (error.code === "GOOGLE_ACCOUNT_MISMATCH") {
        return redirectToGoogleAuthError(locale, "account_mismatch");
      }
    }

    return redirectToGoogleAuthError(locale, "generic");
  }
}
