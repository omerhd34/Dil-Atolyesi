import { cn } from "@/lib/utils";

type TrashIconProps = {
  className?: string;
};

export function TrashIcon({ className }: TrashIconProps) {
  return (
    <img
      src="/dashboard/icons/trash.webp"
      alt=""
      aria-hidden
      width={16}
      height={16}
      decoding="async"
      className={cn(
        "size-4 shrink-0 object-contain opacity-90 dark:invert",
        className,
      )}
    />
  );
}
