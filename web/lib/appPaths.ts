export const AUTH_ACCOUNT_PATH = "/dilAtolyesi/hesap";

export const WORKSHOP_PATH = "/atolye";

const LEGACY_DASHBOARD_SEGMENT = "pan" + "el";

export const LEGACY_ACCOUNT_LOGIN_SEGMENT = "pan" + "elLogin";

export const LEGACY_WORKSHOP_REDIRECT_PREFIX = `/${LEGACY_DASHBOARD_SEGMENT}`;

export const LEGACY_ACCOUNT_LOGIN_PATH = `/${LEGACY_ACCOUNT_LOGIN_SEGMENT}`;

export function isLegacyWorkshopPath(pathname: string): boolean {
  return (
    pathname === LEGACY_WORKSHOP_REDIRECT_PREFIX ||
    pathname.startsWith(`${LEGACY_WORKSHOP_REDIRECT_PREFIX}/`)
  );
}

export function normalizeLegacyWorkshopPath(pathname: string): string {
  if (!isLegacyWorkshopPath(pathname)) {
    return pathname;
  }
  return pathname.replace(
    new RegExp(`^${LEGACY_WORKSHOP_REDIRECT_PREFIX}`),
    WORKSHOP_PATH,
  );
}
