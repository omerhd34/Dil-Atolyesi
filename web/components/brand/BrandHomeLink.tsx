"use client";

import type { MouseEvent } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { cn } from "@/lib/utils";

type BrandHomeLinkProps = {
  label: string;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
};

export function BrandHomeLink({
  label,
  className,
  iconClassName,
  labelClassName,
  showLabel = true,
}: BrandHomeLinkProps) {
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Link
      href="/"
      aria-label={label}
      onClick={handleClick}
      className={cn(
        "group/brand inline-flex cursor-pointer transition-colors hover:text-sky-700 dark:hover:text-sky-300",
        className,
      )}
    >
      <BrandLogo
        label={label}
        iconClassName={iconClassName}
        labelClassName={labelClassName}
        showLabel={showLabel}
      />
    </Link>
  );
}
