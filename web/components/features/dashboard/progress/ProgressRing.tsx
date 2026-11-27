import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ProgressRingProps = {
  percent: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  trackClassName?: string;
  fillClassName?: string;
  ariaLabel: string;
  children?: ReactNode;
};

export function ProgressRing({
  percent,
  size = 148,
  strokeWidth = 10,
  className,
  trackClassName,
  fillClassName,
  ariaLabel,
  children,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(100, Math.max(0, percent));
  const offset = circumference - (clamped / 100) * circumference;
  const center = size / 2;

  return (
    <div
      className={cn("relative inline-flex shrink-0", className)}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        role="img"
        aria-label={ariaLabel}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className={cn(
            "stroke-brand-950/10 dark:stroke-white/15",
            trackClassName,
          )}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={cn(
            "stroke-brand-800 transition-[stroke-dashoffset] duration-500 ease-out dark:stroke-brand-100",
            fillClassName,
          )}
        />
      </svg>
      {children ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      ) : null}
    </div>
  );
}
