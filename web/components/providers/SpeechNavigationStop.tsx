"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useWorkshopHash } from "@/hooks/useWorkshopHash";
import { usePathname } from "@/i18n/navigation";
import { stopSpeaking } from "@/lib/speakText";

export function SpeechNavigationStop() {
  const pathname = usePathname();
  const hash = useWorkshopHash();
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const skipInitial = useRef(true);

  useEffect(() => {
    if (skipInitial.current) {
      skipInitial.current = false;
      return;
    }
    stopSpeaking();
  }, [pathname, hash, search]);

  useEffect(
    () => () => {
      stopSpeaking();
    },
    [],
  );

  return null;
}
