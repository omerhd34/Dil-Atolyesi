"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";

const subscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const t = useTranslations("Nav");
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsMounted();
  const isDark = mounted && resolvedTheme === "dark";

  const label = isDark ? t("switchToLightTheme") : t("switchToDarkTheme");

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      disabled={!mounted}
      aria-label={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="nav-icon-button size-9 px-0"
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-4" strokeWidth={1.75} aria-hidden />
        ) : (
          <Moon className="size-4" strokeWidth={1.75} aria-hidden />
        )
      ) : (
        <Moon className="size-4 opacity-0" strokeWidth={1.75} aria-hidden />
      )}
    </Button>
  );
}
