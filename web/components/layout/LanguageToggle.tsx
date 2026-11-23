"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { UI_LOCALE_OPTIONS, localeOptionFor } from "@/lib/localeUi";
import { Button } from "@/components/ui/Button";
import { LocaleFlag } from "@/components/layout/LocaleFlag";

function alternateLocale(current: string): AppLocale {
  const availableIds = UI_LOCALE_OPTIONS.filter(
    (option) => option.available,
  ).map((option) => option.id);
  const next = availableIds.find((id) => id !== current);
  if (next && (routing.locales as readonly string[]).includes(next)) {
    return next as AppLocale;
  }
  return (routing.defaultLocale as AppLocale) ?? "tr";
}

export function LanguageToggle() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const activeOption = localeOptionFor(locale) ?? UI_LOCALE_OPTIONS[0];
  const next = alternateLocale(locale);
  const ariaLabel = next === "en" ? t("switchToEnglish") : t("switchToTurkish");

  function toggleLocale() {
    if (next === locale) {
      return;
    }
    router.replace(pathname, { locale: next, scroll: false });
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="relative h-9 w-9 shrink-0 overflow-hidden p-0"
      aria-label={ariaLabel}
      onClick={toggleLocale}
    >
      <LocaleFlag
        fill
        src={activeOption.flagSrc}
        alt=""
        objectPosition={activeOption.flagFocus}
      />
      <span
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px_rgb(17_21_34/0.1)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.14)]"
        aria-hidden
      />
    </Button>
  );
}
