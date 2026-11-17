import { getTranslations } from "next-intl/server";
import {
  LessonPartBlock,
  SectionExamples,
} from "@/components/features/topics/LessonPartBlock";
import { LessonIntroBlock } from "@/components/features/topics/LessonIntroBlock";
import { LessonParagraph } from "@/components/features/topics/LessonParagraph";
import { LessonSectionHeader } from "@/components/features/topics/LessonSectionHeader";
import { LessonSoundParts } from "@/components/features/topics/LessonSoundParts";
import type { TopicLesson, TopicLessonPart } from "@/data/grammar/types";

type TopicLessonViewProps = {
  lesson: TopicLesson;
  intro: string;
};

function LessonBlock({
  id,
  title,
  titleEn,
  paragraphs = [],
  examples,
  examplesTitle,
  parts,
  examplesLabel,
}: {
  id: string;
  title?: string;
  titleEn?: string;
  paragraphs?: string[];
  examples?: TopicLessonPart["examples"];
  examplesTitle?: string;
  parts?: TopicLessonPart[];
  examplesLabel: string;
}) {
  return (
    <section
      id={`section-${id}`}
      aria-labelledby={title ? `heading-${id}` : undefined}
      className="dashboard-panel scroll-mt-24 space-y-4"
    >
      {title ? (
        <LessonSectionHeader
          id={id}
          title={title}
          titleEn={titleEn}
          paragraphs={paragraphs}
          as="h2"
        />
      ) : null}

      {paragraphs.length > 0 ? (
        <div className="space-y-3">
          {paragraphs.map((paragraph) => (
            <LessonParagraph key={paragraph} text={paragraph} />
          ))}
        </div>
      ) : null}

      <SectionExamples
        section={{ examples, examplesTitle }}
        defaultTitle={examplesLabel}
      />

      {parts && parts.length >= 4 ? (
        <LessonSoundParts parts={parts} defaultExamplesTitle={examplesLabel} />
      ) : (
        parts?.map((part) => (
          <LessonPartBlock
            key={part.id}
            part={part}
            defaultExamplesTitle={examplesLabel}
          />
        ))
      )}
    </section>
  );
}

export async function TopicLessonView({ lesson, intro }: TopicLessonViewProps) {
  const t = await getTranslations("Topic");
  const examplesLabel = t("examples");
  const hasRootContent = Boolean(
    lesson.title ||
    (lesson.paragraphs && lesson.paragraphs.length > 0) ||
    (lesson.examples && lesson.examples.length > 0),
  );

  return (
    <div className="space-y-8">
      {intro ? <LessonIntroBlock text={intro} /> : null}

      {hasRootContent ? (
        <LessonBlock
          id="lesson"
          title={lesson.title}
          titleEn={lesson.titleEn}
          paragraphs={lesson.paragraphs}
          examples={lesson.examples}
          examplesTitle={lesson.examplesTitle}
          parts={lesson.parts}
          examplesLabel={examplesLabel}
        />
      ) : (
        lesson.parts?.map((part) => (
          <LessonBlock
            key={part.id}
            id={part.id}
            title={part.title}
            titleEn={part.titleEn}
            paragraphs={part.paragraphs}
            examples={part.examples}
            examplesTitle={part.examplesTitle}
            parts={part.parts}
            examplesLabel={examplesLabel}
          />
        ))
      )}
    </div>
  );
}