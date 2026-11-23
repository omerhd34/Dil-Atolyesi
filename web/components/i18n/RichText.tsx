"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { BoldMessageText } from "@/components/i18n/BoldMessageText";
import { cn } from "@/lib/utils";

type RichTextProps = {
  namespace?: Parameters<typeof useTranslations>[0];
  messageKey: string;
  className?: string;
  emphasisClassName?: string;
  as?: "span" | "p" | "div";
};

export function RichText({
  namespace,
  messageKey,
  className,
  emphasisClassName,
  as: Tag = "span",
}: RichTextProps): ReactNode {
  const t = useTranslations(namespace);

  return (
    <Tag className={cn(className)}>
      <BoldMessageText
        text={t(messageKey)}
        emphasisClassName={emphasisClassName}
      />
    </Tag>
  );
}
