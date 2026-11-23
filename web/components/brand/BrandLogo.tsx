import { BrandMark } from "@/components/brand/BrandMark";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  label: string;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
};

export function BrandLogo({
  label,
  className,
  iconClassName,
  labelClassName,
  showLabel = true,
}: BrandLogoProps) {
  return (
    <span
      className={cn(
        "group/brand inline-flex max-h-full max-w-fit items-center gap-2.5 overflow-visible",
        className,
      )}
    >
      <BrandMark
        className={cn(
          "size-9 origin-center transition-transform duration-200 ease-out will-change-transform group-hover/brand:scale-[1.14] group-focus-visible/brand:scale-[1.14] motion-reduce:transition-none motion-reduce:group-hover/brand:scale-100 motion-reduce:group-focus-visible/brand:scale-100",
          iconClassName,
        )}
        title={showLabel ? undefined : label}
      />
      {showLabel ? <span className={labelClassName}>{label}</span> : null}
    </span>
  );
}
