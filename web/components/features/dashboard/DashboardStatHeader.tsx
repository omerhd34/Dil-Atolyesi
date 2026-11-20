import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type DashboardStatHeaderProps = {
  children: ReactNode;
  trailing?: ReactNode;
  className?: string;
};

export function DashboardStatHeader({
  children,
  trailing,
  className,
}: DashboardStatHeaderProps) {
  return (
    <div
      className={cn(
        "flex h-9 shrink-0 items-center justify-between gap-3",
        className,
      )}
    >
      {children}
      {trailing ? (
        <div className="flex shrink-0 items-center">{trailing}</div>
      ) : (
        <span className="w-px shrink-0 self-stretch opacity-0" aria-hidden />
      )}
    </div>
  );
}
