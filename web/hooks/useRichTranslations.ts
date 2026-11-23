"use client";

import { useTranslations } from "next-intl";

export function useRichTranslations(
  namespace?: Parameters<typeof useTranslations>[0],
) {
  return useTranslations(namespace);
}
