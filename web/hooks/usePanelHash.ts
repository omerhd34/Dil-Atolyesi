"use client";

import { useEffect, useState } from "react";
import { usePathname } from "@/i18n/navigation";
import { isPanelDashboardPath, resolvePanelDashboardUrl } from "@/lib/panelNav";

const PANEL_HASH_EVENT = "pylmor:panel-hash";

export function readPanelHash(): string {
  if (typeof window === "undefined") return "";
  return window.location.hash;
}

export function navigatePanelSection(section: string): void {
  if (typeof window === "undefined") return;

  const { pathname } = window.location;
  const nextUrl = resolvePanelDashboardUrl(section);
  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (!isPanelDashboardPath(pathname) && !pathname.endsWith("/panel")) {
    window.location.assign(nextUrl);
    return;
  }

  if (currentUrl !== nextUrl) {
    window.history.pushState(null, "", nextUrl);
  }

  window.dispatchEvent(new HashChangeEvent("hashchange"));
  window.dispatchEvent(new Event(PANEL_HASH_EVENT));
}

export function navigatePanelHref(href: string): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const hashIndex = href.indexOf("#");
  if (hashIndex < 0) {
    return false;
  }

  const path = href.slice(0, hashIndex) || "/panel";
  const section = href.slice(hashIndex + 1);
  const { pathname } = window.location;
  const onPanel = isPanelDashboardPath(pathname) || pathname.endsWith("/panel");

  if (path === "/panel" && onPanel) {
    navigatePanelSection(section);
    return true;
  }

  return false;
}

export function usePanelHash(): string {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(readPanelHash());

    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    window.addEventListener(PANEL_HASH_EVENT, sync);

    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
      window.removeEventListener(PANEL_HASH_EVENT, sync);
    };
  }, [pathname]);

  return hash;
}
