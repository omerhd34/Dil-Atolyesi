import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type LandingSectionTone = "default" | "muted";

type LandingSectionFrameProps = {
  id?: string;
  headingId: string;
  children: ReactNode;
  tone?: LandingSectionTone;
  className?: string;
};

const toneClasses: Record<LandingSectionTone, string> = {
  default: "",
  muted:
    "bg-[linear-gradient(to_bottom,rgb(238,242,248),rgb(238,242,248))] dark:bg-[linear-gradient(to_bottom,rgb(17,21,34),rgb(22,28,44))]",
};

export function LandingSectionFrame({
  id,
  headingId,
  children,
  tone = "default",
  className,
}: LandingSectionFrameProps) {
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "scroll-mt-20 border-t border-border/80",
        toneClasses[tone],
        className,
      )}
    >
      <Container className="py-16 sm:py-20 lg:py-24">{children}</Container>
    </section>
  );
}
