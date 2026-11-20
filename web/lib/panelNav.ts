export function isPanelDashboardPath(pathname: string): boolean {
  return pathname === "/panel" || pathname === "/";
}

export function isVocabularyRoutePath(pathname: string): boolean {
  return (
    pathname === "/panel/vocabulary" ||
    pathname.startsWith("/panel/vocabulary/")
  );
}

export function isVocabularyNavSectionActive(
  pathname: string,
  panelHash: string,
): boolean {
  if (isPanelDashboardPath(pathname)) {
    return panelHash === "#vocabulary";
  }
  return isVocabularyRoutePath(pathname);
}

function hrefPathAndHash(href: string): { path: string; hash: string } {
  const hashIndex = href.indexOf("#");
  if (hashIndex < 0) {
    return { path: href, hash: "" };
  }
  return {
    path: href.slice(0, hashIndex) || "/panel",
    hash: href.slice(hashIndex),
  };
}

export function isVocabularySubNavItemActive(
  pathname: string,
  panelHash: string,
  href: string,
): boolean {
  const { path, hash: itemHash } = hrefPathAndHash(href);

  if (itemHash !== "") {
    return isPanelDashboardPath(pathname) && panelHash === itemHash;
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}

export function isPanelNavLinkActive(
  pathname: string,
  panelHash: string,
  href: string,
): boolean {
  const { path, hash } = hrefPathAndHash(href);

  if (hash) {
    if (!isPanelDashboardPath(pathname)) {
      return false;
    }
    return panelHash === hash;
  }

  if (path === "/panel") {
    return isPanelDashboardPath(pathname) && panelHash === "";
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}

export function resolvePanelDashboardUrl(section: string): string {
  const { pathname, search } = window.location;
  const nextHash = section ? `#${section}` : "";

  if (
    pathname === "/panel" ||
    pathname === "/" ||
    pathname.endsWith("/panel")
  ) {
    const base =
      pathname === "/"
        ? "/panel"
        : pathname.endsWith("/panel")
          ? pathname
          : pathname;
    return `${base}${search}${nextHash}`;
  }

  const localeMatch = pathname.match(/^\/([^/]+)\//);
  const localePrefix =
    localeMatch && localeMatch[1] !== "panel" && localeMatch[1] !== "panelLogin"
      ? `/${localeMatch[1]}`
      : "";
  return `${localePrefix}/panel${search}${nextHash}`;
}
