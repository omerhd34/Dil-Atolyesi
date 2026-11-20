import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ButtonAnchorProps = ComponentProps<"a"> &
  VariantProps<typeof buttonVariants>;

export function ButtonAnchor({
  className,
  variant,
  size,
  ...props
}: ButtonAnchorProps) {
  return (
    <a
      data-slot="button"
      data-btn-motion={variant === "link" ? "off" : undefined}
      className={cn(
        buttonVariants({ variant, size }),
        "cursor-pointer",
        className,
      )}
      {...props}
    />
  );
}
