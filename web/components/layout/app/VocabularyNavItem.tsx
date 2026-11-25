"use client";

import type { MouseEvent } from "react";
import { useTranslations } from "next-intl";
import { BookA } from "lucide-react";
import {
  appNavTooltipKey,
  vocabularySubNav,
} from "@/components/layout/app/appNavLinks";
import { Link, usePathname } from "@/i18n/navigation";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { sidebarNavButtonClassName } from "@/components/layout/app/sidebarNavButton";
import {
  isVocabularyNavSectionActive,
  isVocabularySubNavItemActive,
} from "@/lib/workshopNav";
import { WORKSHOP_VOCABULARY_PATH } from "@/lib/workshopSectionRoutes";
import { cn } from "@/lib/utils";

type VocabularyNavItemProps = {
  onNavigate: (event: MouseEvent<HTMLElement>, href: string) => void;
};

export function VocabularyNavItem({ onNavigate }: VocabularyNavItemProps) {
  const t = useTranslations("AppNav");
  const pathname = usePathname();
  const sectionActive = isVocabularyNavSectionActive(pathname);
  const parentLabel = t("vocabulary");
  const parentTooltip = t(appNavTooltipKey("vocabulary"));

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        isActive={sectionActive}
        tooltip={parentTooltip}
        className={sidebarNavButtonClassName}
        render={<Link href={WORKSHOP_VOCABULARY_PATH} />}
        onClick={(event) => onNavigate(event, WORKSHOP_VOCABULARY_PATH)}
      >
        <BookA className="size-4" strokeWidth={1.75} aria-hidden />
        <span>{parentLabel}</span>
      </SidebarMenuButton>

      {sectionActive ? (
        <SidebarMenuSub className="mx-3.5 mt-1 mb-1 border-l-0 px-2.5 translate-x-0 gap-0.5">
          {vocabularySubNav.map((item) => {
            const itemActive = isVocabularySubNavItemActive(
              pathname,
              item.href,
            );

            return (
              <SidebarMenuSubItem key={item.href}>
                <SidebarMenuSubButton
                  isActive={itemActive}
                  size="sm"
                  tooltip={t(appNavTooltipKey(item.labelKey))}
                  className={cn(
                    "group/sub-link h-7 gap-2 rounded-md px-2 text-sm font-medium text-sidebar-foreground/55",
                    "hover:bg-transparent hover:text-sky-600 dark:hover:text-sky-300",
                    "data-active:bg-transparent data-active:font-semibold data-active:text-sky-600 dark:data-active:text-sky-300",
                    "data-active:hover:bg-transparent",
                  )}
                  render={<Link href={item.href} />}
                  aria-current={itemActive ? "page" : undefined}
                  onClick={(event) => onNavigate(event, item.href)}
                >
                  <span
                    className={cn(
                      "size-1.5 shrink-0 rounded-full bg-sidebar-foreground/30 transition-colors",
                      itemActive && "bg-sky-500 dark:bg-sky-300",
                      !itemActive &&
                        "group-hover/sub-link:bg-sky-500 dark:group-hover/sub-link:bg-sky-300",
                    )}
                    aria-hidden
                  />
                  <span className="truncate">{t(item.labelKey)}</span>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            );
          })}
        </SidebarMenuSub>
      ) : null}
    </SidebarMenuItem>
  );
}
