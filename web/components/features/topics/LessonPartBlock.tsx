"use client";

import { LessonExampleCarousel } from "@/components/features/topics/LessonExampleCarousel";
import { LessonParagraph } from "@/components/features/topics/LessonParagraph";
import { LessonSectionHeader } from "@/components/features/topics/LessonSectionHeader";
import type { TopicLessonPart } from "@/data/grammar/types";

function SectionExamples({
  section,
  defaultTitle,
}: {
  section: Pick<TopicLessonPart, "examples" | "examplesTitle">;
  defaultTitle: string;
}) {
  if (!section.examples || section.examples.length === 0) {
    return null;
  }

  return (
    <LessonExampleCarousel
      title={section.examplesTitle ?? defaultTitle}
      examples={section.examples}
    />
  );
}

export function LessonPartBlock({
  part,
  defaultExamplesTitle,
}: {
  part: TopicLessonPart;
  defaultExamplesTitle: string;
}) {
  return (
    <div
      id={`section-${part.id}`}
      aria-labelledby={`heading-${part.id}`}
      className="scroll-mt-24 space-y-3 border-t border-border pt-4"
    >
      <LessonSectionHeader
        id={part.id}
        title={part.title}
        titleEn={part.titleEn}
        paragraphs={part.paragraphs}
      />

      {part.paragraphs.length > 0 ? (
        <div className="space-y-3">
          {part.paragraphs.map((paragraph) => (
            <LessonParagraph key={paragraph} text={paragraph} />
          ))}
        </div>
      ) : null}

      <SectionExamples section={part} defaultTitle={defaultExamplesTitle} />
    </div>
  );
}

export { SectionExamples };