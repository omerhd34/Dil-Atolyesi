"use client";

import { useEffect, useState } from "react";
import { usePathname } from "@/i18n/navigation";
import { LEGACY_WORKSHOP_REDIRECT_PREFIX, WORKSHOP_PATH } from "@/lib/appPaths";
import { isWorkshopDashboardPath } from "@/lib/workshopNav";
import {
  LEGACY_WORKSHOP_HASH_TO_SEGMENT,
  resolveLegacyWorkshopHref,
} from "@/lib/workshopSectionRoutes";

import { WORKSHOP_HASH_EVENT } from "@/lib/clientStorageKeys";

export function readWorkshopHash(): string {
  if (typeof window === "undefined") return "";
  return window.location.hash;
}

/** @deprecated Hub bölümleri artık `/atolye/<bölüm>` rotalarında. */
export function navigateWorkshopSection(section: string): void {
  if (typeof window === "undefined") {
    return;
  }

  const segment = LEGACY_WORKSHOP_HASH_TO_SEGMENT[section];
  const target = segment ? `${WORKSHOP_PATH}/${segment}` : WORKSHOP_PATH;

  window.location.assign(target);
}

/** @deprecated `resolveLegacyWorkshopHref` ile normal Link gezinmesi kullanın. */
export function navigateWorkshopHref(href: string): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const resolved = resolveLegacyWorkshopHref(href);
  if (resolved === href) {
    return false;
  }

  const { pathname } = window.location;
  if (
    isWorkshopDashboardPath(pathname) ||
    pathname.endsWith(WORKSHOP_PATH) ||
    pathname.endsWith(LEGACY_WORKSHOP_REDIRECT_PREFIX)
  ) {
    window.location.assign(resolved);
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
