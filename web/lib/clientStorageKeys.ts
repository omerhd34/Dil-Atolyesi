import { CLIENT_STORAGE_PREFIX } from "@/lib/brand";

export { CLIENT_STORAGE_PREFIX };

const LEGACY_CLIENT_PREFIXES = ["dilatolyesi"] as const;

export function clientStorageKey(suffix: string): string {
  return `${CLIENT_STORAGE_PREFIX}-${suffix}`;
}

export function clientStorageEvent(name: string): string {
  return `${CLIENT_STORAGE_PREFIX}:${name}`;
}

export function migrateLocalStorageKey(suffix: string): string {
  const key = clientStorageKey(suffix);
  if (typeof window === "undefined") {
    return key;
  }

  try {
    if (window.localStorage.getItem(key) !== null) {
      return key;
    }
    for (const prefix of LEGACY_CLIENT_PREFIXES) {
      const legacyKey = `${prefix}-${suffix}`;
      const value = window.localStorage.getItem(legacyKey);
      if (value !== null) {
        window.localStorage.setItem(key, value);
        window.localStorage.removeItem(legacyKey);
        break;
      }
    }
  } catch {
    // localStorage kapalı olabilir
  }

  return key;
}

export const REMEMBER_EMAIL_KEY = clientStorageKey("remember-email");
export const SIDEBAR_COLLAPSE_KEY = clientStorageKey("sidebar-collapsed");
export const PANEL_HASH_EVENT = clientStorageEvent("panel-hash");
