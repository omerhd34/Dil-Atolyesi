"use client";

import type { MouseEvent } from "react";
import { useTranslations } from "next-intl";
import { LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  appNavLinks,
  appNavTooltipKey,
  type AppNavLink,
} from "@/components/layout/app/appNavLinks";
import { sidebarNavButtonClassName } from "@/components/layout/app/sidebarNavButton";
import { BrandHomeLink } from "@/components/brand/BrandHomeLink";
import { VocabularyNavItem } from "@/components/layout/app/VocabularyNavItem";
import { NotificationsMenu } from "@/components/features/dashboard/NotificationsMenu";
import { ProfileAvatar } from "@/components/features/profile/ProfileAvatar";
import { Link, usePathname } from "@/i18n/navigation";
import {
  navigateWorkshopSection,
  useWorkshopHash,
} from "@/hooks/useWorkshopHash";
import { useProfileAvatarUpload } from "@/hooks/useProfileAvatarUpload";
import {
  isWorkshopDashboardPath,
  isWorkshopNavLinkActive,
} from "@/lib/workshopNav";
import { cn } from "@/lib/utils";
import type { AuthUser } from "@/store/api";
import { useAuthStore } from "@/store/authStore";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

function hrefHash(href: string): string {
  const index = href.indexOf("#");
  return index >= 0 ? href.slice(index) : "";
}

function hrefPath(href: string): string {
  const index = href.indexOf("#");
  return index >= 0 ? href.slice(0, index) : href;
}

type AppSidebarProps = {
  user: AuthUser;
  isLoggingOut: boolean;
  onLogout: () => void;
};

const railIconButtonClassName =
  "group-data-[collapsible=icon]:h-[42px] group-data-[collapsible=icon]:w-full group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:rounded-[13px] group-data-[collapsible=icon]:px-0";

const sidebarBrandLabelClassName =
  "font-display text-xl font-semibold tracking-tight transition-colors duration-[950ms] ease-[cubic-bezier(0.33,0,0.2,1)] group-hover/brand:text-sky-700 dark:group-hover/brand:text-sky-300";

const sidebarInsetXClassName = "px-4 group-data-[collapsible=icon]:px-3.5";

export function AppSidebarMobileBar() {
  const tNav = useTranslations("Nav");
  const { openMobile } = useSidebar();

  return (
    <div className="glass-surface sticky top-0 z-30 mx-3 mt-3 flex h-14 items-center justify-between rounded-2xl px-4 text-sidebar-foreground lg:hidden">
      <BrandHomeLink
        label={tNav("brand")}
        className="max-w-fit self-start overflow-visible text-sidebar-foreground"
        iconClassName="size-9"
        labelClassName={sidebarBrandLabelClassName}
      />
      <SidebarTrigger
        aria-label={openMobile ? tNav("closeMenu") : tNav("openMenu")}
      />
    </div>
  );
}

export function AppSidebar({ user, isLoggingOut, onLogout }: AppSidebarProps) {
  const t = useTranslations("AppNav");
  const tNav = useTranslations("Nav");
  const tSettings = useTranslations("Settings");
  const pathname = usePathname();
  const workshopHash = useWorkshopHash();
  const { setOpenMobile, state } = useSidebar();
  const collapsed = state === "collapsed";
  const storeUser = useAuthStore((state) => state.user);
  const resolvedUser = storeUser ?? user;
  const displayName = resolvedUser.name?.trim() || resolvedUser.email;
  const { pickFile, isUpdatingAvatar } = useProfileAvatarUpload();

  function isActive(href: string): boolean {
    return isWorkshopNavLinkActive(pathname, workshopHash, href);
  }

  function handleNavClick(event: MouseEvent<HTMLElement>, href: string) {
    const path = hrefPath(href);
    const hash = hrefHash(href);
    const onWorkshop = isWorkshopDashboardPath(pathname);

    setOpenMobile(false);

    if (path === "/atolye") {
      if (onWorkshop) {
        event.preventDefault();
        navigateWorkshopSection(hash.replace(/^#/, ""));
        return;
      }
      if (hash) {
        return;
      }
      event.preventDefault();
      navigateWorkshopSection("");
    }
  }

  function renderLink(item: AppNavLink) {
    const Icon = item.Icon;
    const active = isActive(item.href);
    const label = t(item.labelKey);
    const tooltip = t(appNavTooltipKey(item.labelKey));

    return (
      <SidebarMenuItem key={item.labelKey}>
        <SidebarMenuButton
          isActive={active}
          tooltip={tooltip}
          className={sidebarNavButtonClassName}
          render={<Link href={item.href} />}
          onClick={(event) => handleNavClick(event, item.href)}
        >
          <Icon className="size-4" strokeWidth={1.75} aria-hidden />
          <span>{label}</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  const settingsActive =
    pathname === "/atolye/ayarlar" || pathname.startsWith("/atolye/ayarlar/");

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader className="p-4 group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:pt-4.5 group-data-[collapsible=icon]:pb-2.5">
        <div className="flex items-center justify-between gap-3 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:gap-2">
          <BrandHomeLink
            label={tNav("brand")}
            className="max-w-fit min-w-0 self-start overflow-visible text-sidebar-foreground"
            iconClassName="size-9 group-data-[collapsible=icon]:size-10"
            labelClassName={cn(
              sidebarBrandLabelClassName,
              "group-data-[collapsible=icon]:hidden",
            )}
          />
          <SidebarTrigger
            aria-label={collapsed ? t("expandSidebar") : t("collapseSidebar")}
            title={collapsed ? t("expandSidebar") : t("collapseSidebar")}
          />
        </div>
      </SidebarHeader>
      <SidebarContent className="scroll-pt-1 pt-1 group-data-[collapsible=icon]:pt-1">
        <SidebarGroup
          className={cn(
            "pb-0 pt-0 group-data-[collapsible=icon]:pt-0",
            sidebarInsetXClassName,
          )}
        >
          <SidebarGroupContent>
            <nav aria-label={t("menu")}>
              <SidebarMenu className="gap-0.5 group-data-[collapsible=icon]:gap-0.5">
                {appNavLinks.map((item) =>
                  item.labelKey === "vocabulary" ? (
                    <VocabularyNavItem
                      key={item.labelKey}
                      onNavigate={handleNavClick}
                    />
                  ) : (
                    renderLink(item)
                  ),
                )}
              </SidebarMenu>
            </nav>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter
        className={cn(
          "gap-1 py-4 group-data-[collapsible=icon]:items-stretch group-data-[collapsible=icon]:pt-2 group-data-[collapsible=icon]:pb-3.5",
          sidebarInsetXClassName,
        )}
      >
        <SidebarSeparator className="mx-0 mb-1 bg-(--glass-line) group-data-[collapsible=icon]:mx-1" />
        <SidebarMenu className="gap-0.5 group-data-[collapsible=icon]:gap-0.5">
          <SidebarMenuItem>
            <NotificationsMenu variant="sidebar" />
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={settingsActive}
              tooltip={t("settingsTooltip")}
              className={sidebarNavButtonClassName}
              render={<Link href="/atolye/ayarlar" />}
              onClick={() => setOpenMobile(false)}
            >
              <Settings className="size-4" strokeWidth={1.75} aria-hidden />
              <span>{t("settings")}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="mb-1 rounded-[18px] bg-(--glass-2) p-2 shadow-[inset_0_0_0_1px_var(--glass-line)] group-data-[collapsible=icon]:mb-0 group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:shadow-none">
          <div className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:h-10.5 group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center">
            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-sidebar-accent group-data-[collapsible=icon]:flex-none group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:hover:bg-transparent">
              <ProfileAvatar
                name={resolvedUser.name}
                email={resolvedUser.email}
                avatarUrl={resolvedUser.avatarUrl}
                shape="rounded"
                className="size-9 group-data-[collapsible=icon]:size-8"
                fallbackClassName="text-[0.65rem]"
                editable
                uploading={isUpdatingAvatar}
                onPickFile={pickFile}
                label={tSettings("profilePhotoChange")}
              />
              <Link
                href="/atolye/ayarlar"
                onClick={() => setOpenMobile(false)}
                className="min-w-0 flex-1 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-brand-400/40 group-data-[collapsible=icon]:hidden"
                aria-label={t("settings")}
              >
                <p className="truncate text-base font-medium text-sidebar-foreground">
                  {displayName}
                </p>
              </Link>
            </div>
          </div>
        </div>
        <Button
          type="button"
          variant="outline"
          className={cn(
            "h-9 w-full text-base text-sidebar-foreground/80",
            "hover:text-destructive focus-visible:text-destructive dark:hover:text-red-300 dark:focus-visible:text-red-300",
            "[&_svg]:text-current",
            railIconButtonClassName,
          )}
          disabled={isLoggingOut}
          aria-label={tNav("logout")}
          title={tNav("logout")}
          onClick={onLogout}
        >
          <LogOut className="size-4 text-current" aria-hidden />
          <span className="group-data-[collapsible=icon]:hidden">
            {tNav("logout")}
          </span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
