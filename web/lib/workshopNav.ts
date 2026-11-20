import {
  LEGACY_ACCOUNT_LOGIN_SEGMENT,
  LEGACY_WORKSHOP_REDIRECT_PREFIX,
  WORKSHOP_PATH,
} from "@/lib/appPaths";

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
    pathname === `${WORKSHOP_PATH}/vocabulary` ||
    pathname.startsWith(`${WORKSHOP_PATH}/vocabulary/`) ||
    pathname === LEGACY_VOCABULARY_PREFIX ||
    pathname.startsWith(`${LEGACY_VOCABULARY_PREFIX}/`)
  );
}

export function isVocabularyNavSectionActive(
  pathname: string,
  workshopHash: string,
): boolean {
  if (isWorkshopDashboardPath(pathname)) {
    return workshopHash === "#vocabulary";
  }
  return isVocabularyRoutePath(pathname);
}

function hrefPathAndHash(href: string): { path: string; hash: string } {
  const hashIndex = href.indexOf("#");
  if (hashIndex < 0) {
    return { path: href, hash: "" };
  }
  return {
    path: href.slice(0, hashIndex) || WORKSHOP_PATH,
    hash: href.slice(hashIndex),
  };
}

export function isVocabularySubNavItemActive(
  pathname: string,
  workshopHash: string,
  href: string,
): boolean {
  const { path, hash: itemHash } = hrefPathAndHash(href);

  if (itemHash !== "") {
    return isWorkshopDashboardPath(pathname) && workshopHash === itemHash;
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}

export function isWorkshopNavLinkActive(
  pathname: string,
  workshopHash: string,
  href: string,
): boolean {
  const { path, hash } = hrefPathAndHash(href);

  if (hash) {
    if (!isWorkshopDashboardPath(pathname)) {
      return false;
    }
    return workshopHash === hash;
  }

  if (path === WORKSHOP_PATH) {
    return isWorkshopDashboardPath(pathname) && workshopHash === "";
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
