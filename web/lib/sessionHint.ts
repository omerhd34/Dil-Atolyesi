import { CLIENT_STORAGE_PREFIX } from "@/lib/brand";

export const SESSION_HINT_COOKIE = `${CLIENT_STORAGE_PREFIX}_user`;

/** Eski küçük harf cookie adı. */
export const LEGACY_SESSION_HINT_COOKIES = ["dilatolyesi_user"] as const;
export const SESSION_HINT_MAX_AGE = 60 * 60 * 24 * 7;

export type SessionHint = {
  id: string;
  email: string;
  name: string | null;
};

export function serializeSessionHint(user: SessionHint): string {
  return JSON.stringify({
    id: user.id,
    email: user.email,
    name: user.name,
  });
}

export function parseSessionHint(
  value: string | undefined,
): SessionHint | null {
  if (!value) {
    return null;
  }

  try {
    const raw =
      value.startsWith("%7B") || value.startsWith("%7b")
        ? decodeURIComponent(value)
        : value;
    const parsed: unknown = JSON.parse(raw);

    if (!parsed || typeof parsed !== "object") {
      return null;
    }

    const record = parsed as Record<string, unknown>;

    if (typeof record.id !== "string" || typeof record.email !== "string") {
      return null;
    }

    return {
      id: record.id,
      email: record.email,
      name: typeof record.name === "string" ? record.name : null,
    };
  } catch {
    return null;
  }
}

export function writeSessionHint(user: SessionHint): void {
  document.cookie = `${SESSION_HINT_COOKIE}=${encodeURIComponent(serializeSessionHint(user))}; Path=/; Max-Age=${SESSION_HINT_MAX_AGE}; SameSite=Lax`;
}

export function clearSessionHint(): void {
  const names = [SESSION_HINT_COOKIE, ...LEGACY_SESSION_HINT_COOKIES];
  for (const name of names) {
    document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax`;
  }
}

export function parseSessionHintFromCookies(
  get: (name: string) => string | undefined,
): SessionHint | null {
  const candidates = [get(SESSION_HINT_COOKIE)];
  for (const legacy of LEGACY_SESSION_HINT_COOKIES) {
    candidates.push(get(legacy));
  }
  for (const value of candidates) {
    const parsed = parseSessionHint(value);
    if (parsed) {
      return parsed;
    }
  }
  return null;
}
