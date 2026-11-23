"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Layers } from "lucide-react";
import { useRouter } from "@/i18n/navigation";
import { BrandHomeLink } from "@/components/brand/BrandHomeLink";
import { ProfileAvatar } from "@/components/features/profile/ProfileAvatar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { UserMenu } from "@/components/layout/UserMenu";
import { MarketingNavLink } from "@/components/layout/MarketingNavLink";
import { marketingNavItemKey, navLinks } from "@/components/layout/navLinks";
import { AUTH_ACCOUNT_PATH } from "@/lib/appPaths";
import { useAuthStore } from "@/store/authStore";

export function Navbar() {
  const t = useTranslations("Nav");
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const isLoggingOut = useAuthStore((state) => state.isLoggingOut);
  const [open, setOpen] = useState(false);

  async function handleLogout() {
    try {
      await logout();
    } catch {}
    setOpen(false);
    router.push("/");
  }

  const accountLabel = user?.name?.trim() || user?.email || "";

  return (
    <header className="glass-surface sticky top-0 z-40 rounded-none border-0">
      <Container
        size={user ? "app" : "page"}
        className="grid h-16 grid-cols-[1fr_auto] items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]"
      >
        <div className="flex items-center justify-self-start">
          <BrandHomeLink
            label={t("brand")}
            className="font-display text-2xl font-semibold leading-none tracking-tight text-brand-800 dark:text-brand-400"
            iconClassName="size-8 sm:size-9"
            labelClassName="font-display text-2xl font-semibold leading-none tracking-tight"
          />
        </div>

        <nav
          className="hidden items-center justify-center gap-6 md:flex lg:gap-8"
          aria-label={t("brand")}
        >
          {navLinks.map((item) => {
            const Icon = item.Icon;
            return (
              <MarketingNavLink
                key={marketingNavItemKey(item)}
                sectionId={item.kind === "section" ? item.sectionId : undefined}
                href={item.kind === "route" ? item.href : undefined}
                className="inline-flex items-center gap-1.5 text-base font-medium text-brand-600 hover:text-sky-700 dark:text-brand-400 dark:hover:text-sky-300"
              >
                <Icon
                  className="size-4 shrink-0 text-current"
                  strokeWidth={1.75}
                  aria-hidden
                />
                {t(item.labelKey)}
              </MarketingNavLink>
            );
          })}
        </nav>

        <nav className="hidden items-center justify-self-end gap-3 md:flex">
          <LanguageToggle />
          <ThemeToggle />
          {user ? (
            <>
              <ButtonLink href="/atolye" size="sm">
                <Layers className="size-4" strokeWidth={1.75} aria-hidden />
                {t("myWorkshop")}
              </ButtonLink>
              <UserMenu
                user={user}
                isLoggingOut={isLoggingOut}
                onLogout={() => void handleLogout()}
              />
            </>
          ) : (
            <ButtonLink href={AUTH_ACCOUNT_PATH} size="sm">
              <Layers className="size-4" strokeWidth={1.75} aria-hidden />
              {t("enterWorkshop")}
            </ButtonLink>
          )}
        </nav>

        <div className="flex items-center justify-self-end gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          {user ? (
            <UserMenu
              user={user}
              isLoggingOut={isLoggingOut}
              onLogout={() => void handleLogout()}
            />
          ) : null}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-brand-400/70 dark:border-brand-600"
            aria-expanded={open}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">
              {open ? t("closeMenu") : t("openMenu")}
            </span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
            </span>
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-border px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => {
              const Icon = item.Icon;
              return (
                <MarketingNavLink
                  key={marketingNavItemKey(item)}
                  sectionId={
                    item.kind === "section" ? item.sectionId : undefined
                  }
                  href={item.kind === "route" ? item.href : undefined}
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-brand-800 hover:bg-surface-muted hover:text-sky-700 dark:text-brand-100 dark:hover:bg-brand-900 dark:hover:text-sky-300"
                  onClick={() => setOpen(false)}
                >
                  <Icon
                    className="size-4 shrink-0 text-current"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  {t(item.labelKey)}
                </MarketingNavLink>
              );
            })}
            {user ? (
              <>
                <ButtonLink
                  href="/atolye"
                  size="lg"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  <Layers className="size-4" strokeWidth={1.75} aria-hidden />
                  {t("myWorkshop")}
                </ButtonLink>
                <div className="flex items-center gap-3 px-1 py-2">
                  <ProfileAvatar
                    name={user.name}
                    email={user.email}
                    avatarUrl={user.avatarUrl}
                    className="size-9"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-brand-950 dark:text-brand-100">
                      {accountLabel}
                    </p>
                    {user.name?.trim() ? (
                      <p className="truncate text-xs text-brand-600 dark:text-brand-400">
                        {user.email}
                      </p>
                    ) : null}
                  </div>
                </div>
              </>
            ) : (
              <ButtonLink
                href={AUTH_ACCOUNT_PATH}
                size="lg"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                <Layers className="size-4" strokeWidth={1.75} aria-hidden />
                {t("enterWorkshop")}
              </ButtonLink>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
