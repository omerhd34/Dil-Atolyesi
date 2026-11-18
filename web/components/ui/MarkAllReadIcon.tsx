import { cn } from "@/lib/utils";

type MarkAllReadIconProps = {
  className?: string;
};

export function MarkAllReadIcon({ className }: MarkAllReadIconProps) {
  return (
    <img
      src="/dashboard/icons/mark-all-read.webp"
      alt=""
      aria-hidden
      width={14}
      height={14}
      decoding="async"
      className={cn(
        "size-3.5 shrink-0 object-contain opacity-90 dark:invert",
        className,
      )}
    />
  );
}
