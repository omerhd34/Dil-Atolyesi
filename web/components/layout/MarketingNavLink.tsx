"use client";

import type { ReactNode } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type MarketingNavLinkProps = {
  sectionId?: string;
  href?: "/iletisim";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export function MarketingNavLink({
  sectionId,
  href,
  className,
  children,
  onClick,
}: MarketingNavLinkProps) {
  const pathname = usePathname();
  const linkClassName = cn("marketing-nav-link interaction-motion", className);

  if (href) {
    return (
      <Link href={href} className={linkClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (!sectionId) {
    return null;
  }

  const hash = `#${sectionId}`;

  if (pathname === "/") {
    return (
      <a href={hash} className={linkClassName} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={`/#${sectionId}`} className={linkClassName} onClick={onClick}>
      {children}
    </Link>
  );
}
