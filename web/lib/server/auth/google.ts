import { createHash, randomBytes } from "node:crypto";
import { AppError } from "@/lib/server/AppError";
import { getServerEnv } from "@/lib/server/env";
import { getGoogleOAuthEnv } from "@/lib/server/auth/googleEnv";

export const GOOGLE_OAUTH_STATE_COOKIE = "googleOAuthState";
export const GOOGLE_OAUTH_LOCALE_COOKIE = "googleOAuthLocale";

const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_USERINFO_URL = "https://openidconnect.googleapis.com/v1/userinfo";

const OAUTH_COOKIE_MAX_AGE = 10 * 60;

export type GoogleUserProfile = {
  sub: string;
  email: string;
  email_verified: boolean;
  name?: string;
};

type GoogleTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope?: string;
  id_token?: string;
};

function requireGoogleOAuthEnv() {
  const env = getGoogleOAuthEnv();
  if (!env) {
    throw new AppError(
      "Google sign-in is not configured",
      503,
      "GOOGLE_AUTH_DISABLED",
    );
  }
  return env;
}

export function createGoogleOAuthState(): string {
  return randomBytes(24).toString("hex");
}

export function hashGoogleOAuthState(state: string): string {
  return createHash("sha256").update(state).digest("hex");
}

export function getGoogleOAuthCookieMaxAge(): number {
  return OAUTH_COOKIE_MAX_AGE;
}

export function getGoogleRedirectUri(): string {
  const { APP_URL } = getServerEnv();
  return `${APP_URL.replace(/\/$/, "")}/api/v1/auth/google/callback`;
}

export function buildGoogleAuthorizationUrl(state: string): string {
  const { GOOGLE_CLIENT_ID } = requireGoogleOAuthEnv();
  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: getGoogleRedirectUri(),
    response_type: "code",
    scope: "openid email profile",
    state,
    prompt: "select_account",
  });

  return `${GOOGLE_AUTH_URL}?${params.toString()}`;
}

export async function exchangeGoogleAuthCode(
  code: string,
): Promise<GoogleUserProfile> {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = requireGoogleOAuthEnv();

  const body = new URLSearchParams({
    code,
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    redirect_uri: getGoogleRedirectUri(),
    grant_type: "authorization_code",
  });

  const tokenResponse = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!tokenResponse.ok) {
    const errorBody = await tokenResponse.text();
    console.error(
      "Google token exchange failed:",
      tokenResponse.status,
      errorBody,
    );

    const googleError = (() => {
      try {
        const parsed = JSON.parse(errorBody) as {
          error?: string;
          error_description?: string;
        };
        if (parsed.error === "redirect_uri_mismatch") {
          return "GOOGLE_REDIRECT_MISMATCH";
        }
        return "GOOGLE_AUTH_FAILED";
      } catch {
        return "GOOGLE_AUTH_FAILED";
      }
    })();

    throw new AppError("Google token exchange failed", 502, googleError);
  }

  const tokenData = (await tokenResponse.json()) as GoogleTokenResponse;

  const profileResponse = await fetch(GOOGLE_USERINFO_URL, {
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
    },
  });

  if (!profileResponse.ok) {
    throw new AppError(
      "Google profile fetch failed",
      502,
      "GOOGLE_AUTH_FAILED",
    );
  }

  const profile = (await profileResponse.json()) as Partial<GoogleUserProfile>;

  if (typeof profile.sub !== "string" || typeof profile.email !== "string") {
    console.error("Google userinfo missing fields:", profile);
    throw new AppError("Google profile incomplete", 502, "GOOGLE_AUTH_FAILED");
  }

  if (profile.email_verified === false) {
    throw new AppError(
      "Google account email is not verified",
      403,
      "GOOGLE_EMAIL_UNVERIFIED",
    );
  }

  return {
    sub: profile.sub,
    email: profile.email,
    email_verified: true,
    name: typeof profile.name === "string" ? profile.name : undefined,
  };
}
