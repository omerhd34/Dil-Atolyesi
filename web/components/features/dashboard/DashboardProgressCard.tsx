import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const PROGRESS_RING_COLOR = "#0ea5e9";

type DashboardProgressCardProps = {
  progress: number;
  locked?: boolean;
  progressAriaLabel: string;
  children: ReactNode;
};

export function DashboardProgressCard({
  progress,
  locked = false,
  progressAriaLabel,
  children,
}: DashboardProgressCardProps) {
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <div
      className={cn(
        "relative h-full rounded-2xl",
        "[--progress-track:#dce3ef] dark:[--progress-track:#303d59]",
        locked && "opacity-70",
      )}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      aria-label={progressAriaLabel}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl ring-[3px] ring-(--progress-track) ring-inset"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl transition-[background] duration-500 ease-out"
        style={{
          padding: 3,
          background: `conic-gradient(from -90deg, ${PROGRESS_RING_COLOR} ${clamped}%, transparent 0)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <Card className="relative h-full">{children}</Card>
    </div>
  );
}

export function dashboardItemCardFooterClass(buttonCount: 2 | 3): string {
  return cn(
    "mt-auto grid grid-cols-1 items-start gap-x-2 gap-y-1",
    buttonCount === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2",
  );
}
