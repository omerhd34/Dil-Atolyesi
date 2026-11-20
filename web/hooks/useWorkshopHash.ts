"use client";

import { useEffect, useState } from "react";
import { usePathname } from "@/i18n/navigation";
import {
  isLegacyWorkshopPath,
  LEGACY_WORKSHOP_REDIRECT_PREFIX,
  WORKSHOP_PATH,
} from "@/lib/appPaths";
import {
  isWorkshopDashboardPath,
  resolveWorkshopDashboardUrl,
} from "@/lib/workshopNav";

import { WORKSHOP_HASH_EVENT } from "@/lib/clientStorageKeys";

export function readWorkshopHash(): string {
  if (typeof window === "undefined") return "";
  return window.location.hash;
}

export function navigateWorkshopSection(section: string): void {
  if (typeof window === "undefined") return;

  const { pathname } = window.location;
  const nextUrl = resolveWorkshopDashboardUrl(section);
  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (
    !isWorkshopDashboardPath(pathname) &&
    !pathname.endsWith(WORKSHOP_PATH) &&
    !pathname.endsWith(LEGACY_WORKSHOP_REDIRECT_PREFIX)
  ) {
    window.location.assign(nextUrl);
    return;
  }

  if (currentUrl !== nextUrl) {
    window.history.pushState(null, "", nextUrl);
  }

  window.dispatchEvent(new HashChangeEvent("hashchange"));
  window.dispatchEvent(new Event(WORKSHOP_HASH_EVENT));
}

export function navigateWorkshopHref(href: string): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const hashIndex = href.indexOf("#");
  if (hashIndex < 0) {
    return false;
  }

  const path = href.slice(0, hashIndex) || WORKSHOP_PATH;
  const section = href.slice(hashIndex + 1);
  const { pathname } = window.location;
  const onWorkshop =
    isWorkshopDashboardPath(pathname) ||
    pathname.endsWith(WORKSHOP_PATH) ||
    pathname.endsWith(LEGACY_WORKSHOP_REDIRECT_PREFIX);

  if ((path === WORKSHOP_PATH || isLegacyWorkshopPath(path)) && onWorkshop) {
    navigateWorkshopSection(section);
    return true;
  }

  return false;
}

export function useWorkshopHash(): string {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(readWorkshopHash());

    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    window.addEventListener(WORKSHOP_HASH_EVENT, sync);

    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
      window.removeEventListener(WORKSHOP_HASH_EVENT, sync);
    };
  }, [pathname]);

  return hash;
}
