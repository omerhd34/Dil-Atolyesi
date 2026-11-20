"use client";

import { useTranslations } from "next-intl";
import type { PhrasalVerbEntry } from "@/data/vocabulary/phrasalVerbs";
import { VerbFormSpeakButton } from "@/components/features/vocabulary/VerbFormSpeakButton";
import { Badge } from "@/components/ui/Badge";

type PhrasalVerbsTableProps = {
  entries: PhrasalVerbEntry[];
};

export function PhrasalVerbsTable({ entries }: PhrasalVerbsTableProps) {
  const t = useTranslations("Vocabulary");

  if (entries.length === 0) {
    return <p className="page-subtitle mt-0">{t("phrasalVerbsEmptyFilter")}</p>;
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm scrollbar-gutter-stable">
      <table className="w-full min-w-160 table-fixed border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th scope="col" className="w-[28%] px-4 py-3 font-semibold">
              {t("phrasalVerbsColVerb")}
            </th>
            <th scope="col" className="w-[22%] px-4 py-3 font-semibold">
              {t("phrasalVerbsColMeaning")}
            </th>
            <th
              scope="col"
              className="hidden w-[18%] px-4 py-3 font-semibold sm:table-cell"
            >
              {t("phrasalVerbsColType")}
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              {t("phrasalVerbsColExample")}
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr
              key={entry.id}
              className="border-b border-border/80 last:border-0 even:bg-muted/20"
            >
              <td className="px-4 py-3 align-top font-medium">
                <div className="flex items-center gap-2">
                  <VerbFormSpeakButton form={entry.phrase} />
                  <span>{entry.phrase}</span>
                </div>
              </td>
              <td className="px-4 py-3 align-top text-muted-foreground">
                {entry.meaningTr}
              </td>
              <td className="hidden px-4 py-3 align-top sm:table-cell">
                <Badge
                  variant={entry.separable ? "default" : "secondary"}
                  className="font-normal"
                >
                  {entry.separable
                    ? t("phrasalVerbsTypeSeparable")
                    : t("phrasalVerbsTypeInseparable")}
                </Badge>
              </td>
              <td className="px-4 py-3 align-top">
                <p>{entry.exampleEn}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {entry.exampleTr}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
