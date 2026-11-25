"use client";

import { useEffect } from "react";
import { useRouter } from "@/i18n/navigation";
import { WORKSHOP_PATH } from "@/lib/appPaths";
import {
  LEGACY_WORKSHOP_HASH_TO_SEGMENT,
  resolveLegacyWorkshopHref,
} from "@/lib/workshopSectionRoutes";

export function WorkshopLegacyHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) {
      return;
    }

    const segment = LEGACY_WORKSHOP_HASH_TO_SEGMENT[hash];
    if (!segment) {
      return;
    }

    const target = resolveLegacyWorkshopHref(`${WORKSHOP_PATH}#${hash}`);
    const current = `${window.location.pathname}${window.location.search}`;
    if (current !== target) {
      router.replace(target);
    }
  }, [router]);

  return null;
}
