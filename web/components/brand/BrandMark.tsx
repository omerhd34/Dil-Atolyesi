import Image from "next/image";
import { BRAND_ICON_SRC } from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  title?: string;
};

export function BrandMark({ className, title }: BrandMarkProps) {
  const label = title?.trim();

  return (
    <Image
      src={BRAND_ICON_SRC}
      alt={label ?? ""}
      width={512}
      height={512}
      sizes="(max-width: 640px) 36px, 48px"
      className={cn("shrink-0 rounded-[22%] object-cover", className)}
      aria-hidden={label ? undefined : true}
    />
  );
}
