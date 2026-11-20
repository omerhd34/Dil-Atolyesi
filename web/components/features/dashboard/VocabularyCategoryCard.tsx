"use client";

import { useTranslations } from "next-intl";
import { BookOpen, PencilLine } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CardFooter } from "@/components/ui/Card";
import type { VocabularyCategory } from "@/data/vocabulary";
import { useVocabularySectionPercent } from "@/hooks/useVocabularySectionPercent";
import { getDistinctSecondaryTitle } from "@/lib/bilingualTitle";
import { EnglishUiHint } from "@/components/ui/EnglishUiHint";
import {
  DashboardItemCardHeader,
  dashboardItemTitleSecondary,
} from "@/components/features/dashboard/DashboardItemCardHeader";
import {
  DashboardProgressCard,
  dashboardItemCardFooterClass,
} from "@/components/features/dashboard/DashboardProgressCard";

type VocabularyCategoryCardProps = {
  category: VocabularyCategory;
  index: number;
  knownWordIds: ReadonlySet<string>;
  locked?: boolean;
};

export function VocabularyCategoryCard({
  category,
  index,
  knownWordIds,
  locked = false,
}: VocabularyCategoryCardProps) {
  const t = useTranslations("Dashboard");
  const titleEn = getDistinctSecondaryTitle(category.title, category.titleEn);
  const percent = useVocabularySectionPercent(category, knownWordIds);

  return (
    <DashboardProgressCard
      progress={percent}
      locked={locked}
      progressAriaLabel={t("vocabularyProgressAria", { progress: percent })}
    >
      <DashboardItemCardHeader
        indexBadge={
          <Badge variant="secondary">
            {t("vocabularyCategoryLabel", { index })}
          </Badge>
        }
        progressLabel={t("vocabularyProgress", { progress: percent })}
        locked={locked}
        title={category.title}
        titleSecondary={titleEn ? dashboardItemTitleSecondary(titleEn) : null}
      />

      <CardFooter className={dashboardItemCardFooterClass(2)}>
        {locked ? (
          <>
            <EnglishUiHint
              hint={t("vocabularyOpenCategoryHint")}
              wrapperClassName="w-full"
            >
              <Button type="button" variant="outline" size="sm" disabled>
                <BookOpen className="text-current" aria-hidden />
                {t("vocabularyOpenCategory")}
              </Button>
            </EnglishUiHint>
            <EnglishUiHint
              hint={t("vocabularyOpenExercisesHint")}
              wrapperClassName="w-full"
            >
              <Button type="button" variant="outline" size="sm" disabled>
                <PencilLine className="text-current" aria-hidden />
                {t("vocabularyOpenExercises")}
              </Button>
            </EnglishUiHint>
          </>
        ) : (
          <>
            <EnglishUiHint
              hint={t("vocabularyOpenCategoryHint")}
              wrapperClassName="w-full"
            >
              <ButtonLink
                href={`/panel/vocabulary/${category.id}`}
                variant="outline"
                size="sm"
              >
                <BookOpen className="text-current" aria-hidden />
                {t("vocabularyOpenCategory")}
              </ButtonLink>
            </EnglishUiHint>
            <EnglishUiHint
              hint={t("vocabularyOpenExercisesHint")}
              wrapperClassName="w-full"
            >
              <ButtonLink
                href={`/panel/vocabulary/${category.id}?tab=exercises`}
                variant="outline"
                size="sm"
              >
                <PencilLine className="text-current" aria-hidden />
                {t("vocabularyOpenExercises")}
              </ButtonLink>
            </EnglishUiHint>
          </>
        )}
      </CardFooter>
    </DashboardProgressCard>
  );
}
