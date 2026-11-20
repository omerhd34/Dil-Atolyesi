import type { AppLocale } from "@/i18n/routing";

export type UiLocaleId = AppLocale | "en";

export type UiLocaleOption = {
  id: UiLocaleId;
  available: boolean;
  code: string;
  flagSrc: string;
  flagFocus: string;
};

export const UI_LOCALE_OPTIONS: UiLocaleOption[] = [
  {
    id: "tr",
    available: true,
    code: "TR",
    flagSrc: "/flags/tr.jpg",
    flagFocus: "50% 50%",
  },
  {
    id: "en",
    available: true,
    code: "EN",
    flagSrc: "/flags/en.jpg",
    flagFocus: "50% 50%",
  },
];

export function localeOptionFor(locale: string): UiLocaleOption | undefined {
  return UI_LOCALE_OPTIONS.find((option) => option.id === locale);
}
