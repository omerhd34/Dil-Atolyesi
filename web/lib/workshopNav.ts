import {
  LEGACY_ACCOUNT_LOGIN_SEGMENT,
  LEGACY_WORKSHOP_REDIRECT_PREFIX,
  WORKSHOP_PATH,
} from "@/lib/appPaths";
import { WORKSHOP_VOCABULARY_PATH } from "@/lib/workshopSectionRoutes";

const LEGACY_VOCABULARY_PREFIX = `${LEGACY_WORKSHOP_REDIRECT_PREFIX}/vocabulary`;

export function isWorkshopDashboardPath(pathname: string): boolean {
  return (
    pathname === WORKSHOP_PATH ||
    pathname === LEGACY_WORKSHOP_REDIRECT_PREFIX ||
    pathname === "/"
  );
}

export function isVocabularyRoutePath(pathname: string): boolean {
  return (
    pathname === WORKSHOP_VOCABULARY_PATH ||
    pathname.startsWith(`${WORKSHOP_VOCABULARY_PATH}/`) ||
    pathname === LEGACY_VOCABULARY_PREFIX ||
    pathname.startsWith(`${LEGACY_VOCABULARY_PREFIX}/`)
  );
}

export function isVocabularyNavSectionActive(pathname: string): boolean {
  return isVocabularyRoutePath(pathname);
}

function hrefPath(href: string): string {
  const hashIndex = href.indexOf("#");
  return hashIndex >= 0 ? href.slice(0, hashIndex) : href;
}

export function isVocabularySubNavItemActive(
  pathname: string,
  href: string,
): boolean {
  const path = hrefPath(href);
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function isWorkshopNavLinkActive(
  pathname: string,
  href: string,
): boolean {
  const path = hrefPath(href);

  if (path === WORKSHOP_PATH) {
    return isWorkshopDashboardPath(pathname);
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}

function isWorkshopHubPathname(pathname: string): boolean {
  return (
    pathname === WORKSHOP_PATH ||
    pathname === LEGACY_WORKSHOP_REDIRECT_PREFIX ||
    pathname === "/" ||
    pathname.endsWith(WORKSHOP_PATH) ||
    pathname.endsWith(LEGACY_WORKSHOP_REDIRECT_PREFIX)
  );
}

/** @deprecated Eski hash gezinimi; yalnızca geri uyumluluk için. */
export function resolveWorkshopDashboardUrl(section: string): string {
  const { pathname, search } = window.location;
  const nextHash = section ? `#${section}` : "";

  if (isWorkshopHubPathname(pathname)) {
    const base =
      pathname === "/" ||
      pathname === LEGACY_WORKSHOP_REDIRECT_PREFIX ||
      pathname.endsWith(LEGACY_WORKSHOP_REDIRECT_PREFIX)
        ? WORKSHOP_PATH
        : pathname.endsWith(WORKSHOP_PATH)
          ? pathname
          : pathname === WORKSHOP_PATH
            ? WORKSHOP_PATH
            : pathname;
    return `${base}${search}${nextHash}`;
  }

  const localeMatch = pathname.match(/^\/([^/]+)\//);
  const legacySegment = LEGACY_WORKSHOP_REDIRECT_PREFIX.slice(1);
  const localePrefix =
    localeMatch &&
    localeMatch[1] !== legacySegment &&
    localeMatch[1] !== "atolye" &&
    localeMatch[1] !== LEGACY_ACCOUNT_LOGIN_SEGMENT &&
    localeMatch[1] !== "dilAtolyesi"
      ? `/${localeMatch[1]}`
      : "";
  return `${localePrefix}${WORKSHOP_PATH}${search}${nextHash}`;
}
