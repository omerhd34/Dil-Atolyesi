"use client";

import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { usePathname } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/Button";
import { ButtonAnchor } from "@/components/ui/ButtonAnchor";
import { ButtonLink } from "@/components/ui/ButtonLink";

type MarketingButtonAnchorProps = VariantProps<typeof buttonVariants> & {
  sectionId: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export function MarketingButtonAnchor({
  sectionId,
  children,
  variant,
  size,
  className,
  onClick,
}: MarketingButtonAnchorProps) {
  const pathname = usePathname();
  const hashHref = `/#${sectionId}`;

  if (pathname === "/") {
    return (
      <ButtonAnchor
        href={`#${sectionId}`}
        variant={variant}
        size={size}
        className={className}
        onClick={onClick}
      >
        {children}
      </ButtonAnchor>
    );
  }

  return (
    <ButtonLink
      href={hashHref}
      variant={variant}
      size={size}
      className={className}
      onClick={onClick}
    >
      {children}
    </ButtonLink>
  );
}
