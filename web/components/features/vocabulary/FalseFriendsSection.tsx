"use client";

import { useTranslations } from "next-intl";
import { FalseFriendsTable } from "@/components/features/vocabulary/FalseFriendsTable";
import { falseFriends } from "@/data/vocabulary/falseFriends";

export function FalseFriendsSection() {
  const t = useTranslations("Vocabulary");

  return (
    <section aria-labelledby="false-friends-heading" className="space-y-6">
      <div>
        <h1 id="false-friends-heading" className="page-title">
          {t("falseFriendsTitle")}
        </h1>
        <p className="page-subtitle max-w-3xl">{t("falseFriendsSubtitle")}</p>
      </div>

      <div className="rounded-2xl border border-dashed border-brand-300/80 bg-brand-50/50 px-4 py-3 text-sm text-brand-900 dark:border-brand-700 dark:bg-brand-950/30 dark:text-brand-100">
        {t("falseFriendsHint")}
      </div>

      <FalseFriendsTable entries={falseFriends} />
    </section>
  );
}
