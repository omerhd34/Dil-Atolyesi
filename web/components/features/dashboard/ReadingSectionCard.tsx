"use client";

import { useTranslations } from "next-intl";
import { BookOpen, PencilLine } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CardFooter } from "@/components/ui/Card";
import type { ReadingSection } from "@/data/readings/types";
import { useReadingSectionPercent } from "@/hooks/useReadingProgress";
import { getDistinctSecondaryTitle } from "@/lib/bilingualTitle";
import { READING_SECTION_ANCHORS } from "@/lib/readingSectionTab";
import { EnglishUiHint } from "@/components/ui/EnglishUiHint";
import {
  DashboardItemCardHeader,
  dashboardItemTitleSecondary,
} from "@/components/features/dashboard/DashboardItemCardHeader";
import {
  DashboardProgressCard,
  dashboardItemCardFooterClass,
} from "@/components/features/dashboard/DashboardProgressCard";

type ReadingSectionCardProps = {
  section: ReadingSection;
  index: number;
  locked?: boolean;
};

export function ReadingSectionCard({
  section,
  index,
  locked = false,
}: ReadingSectionCardProps) {
  const t = useTranslations("Dashboard");
  const tReading = useTranslations("Reading");
  const titleEn = getDistinctSecondaryTitle(section.title, section.titleEn);
  const percent = useReadingSectionPercent(section);

  return (
    <DashboardProgressCard
      progress={percent}
      locked={locked}
      progressAriaLabel={tReading("sectionProgressAria", { progress: percent })}
    >
      <DashboardItemCardHeader
        indexBadge={
          <Badge variant="secondary">
            {tReading("sectionLabel", { index })}
          </Badge>
        }
        progressLabel={t("vocabularyProgress", { progress: percent })}
        locked={locked}
        title={section.title}
        titleSecondary={titleEn ? dashboardItemTitleSecondary(titleEn) : null}
      />

      <CardFooter className={dashboardItemCardFooterClass(2)}>
        {locked ? (
          <>
            <EnglishUiHint
              hint={tReading("openTextHint")}
              wrapperClassName="w-full"
            >
              <Button type="button" variant="outline" size="sm" disabled>
                <BookOpen className="text-current" aria-hidden />
                {tReading("openText")}
              </Button>
            </EnglishUiHint>
            <EnglishUiHint
              hint={tReading("openPracticeHint")}
              wrapperClassName="w-full"
            >
              <Button type="button" variant="outline" size="sm" disabled>
                <PencilLine className="text-current" aria-hidden />
                {tReading("openPractice")}
              </Button>
            </EnglishUiHint>
          </>
        ) : (
          <>
            <EnglishUiHint
              hint={tReading("openTextHint")}
              wrapperClassName="w-full"
            >
              <ButtonLink
                href={`/atolye/reading/${section.id}`}
                variant="outline"
                size="sm"
              >
                <BookOpen className="text-current" aria-hidden />
                {tReading("openText")}
              </ButtonLink>
            </EnglishUiHint>
            <EnglishUiHint
              hint={tReading("openPracticeHint")}
              wrapperClassName="w-full"
            >
              <ButtonLink
                href={`/atolye/reading/${section.id}#${READING_SECTION_ANCHORS.practice}`}
                variant="outline"
                size="sm"
              >
                <PencilLine className="text-current" aria-hidden />
                {tReading("openPractice")}
              </ButtonLink>
            </EnglishUiHint>
          </>
        )}
      </CardFooter>
    </DashboardProgressCard>
  );
}
