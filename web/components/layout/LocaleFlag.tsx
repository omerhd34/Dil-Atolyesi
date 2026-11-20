import Image from "next/image";
import { cn } from "@/lib/utils";

type LocaleFlagProps = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  objectPosition?: string;
};

export function LocaleFlag({
  src,
  alt,
  className,
  fill = false,
  objectPosition = "50% 50%",
}: LocaleFlagProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? 72 : 40}
      height={fill ? 72 : 28}
      quality={92}
      sizes={fill ? "36px" : "24px"}
      draggable={false}
      style={fill ? { objectPosition } : undefined}
      className={cn(
        "object-cover select-none",
        fill
          ? "absolute inset-0 size-full min-h-full min-w-full"
          : "h-4 w-6 shrink-0 rounded-[3px] ring-1 ring-black/10 dark:ring-white/15",
        className,
      )}
    />
  );
}
