"use client";

import { useTranslations } from "next-intl";
import type { LucideIcon } from "lucide-react";
import {
  BookA,
  BookOpen,
  ChevronRight,
  ClipboardCheck,
  Headphones,
  Mic,
  PencilLine,
  PenLine,
  Play,
  SpellCheck2,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { DashboardStatHeader } from "@/components/features/dashboard/DashboardStatHeader";
import { useContinueActivities } from "@/hooks/useContinueActivity";
import { quickContinueActivitiesForDisplay } from "@/lib/quickContinueActivities";
import { navigateWorkshopHref } from "@/hooks/useWorkshopHash";
import { resolveContinueActivityDisplay } from "@/lib/resolveContinueActivity";
import type { ContinueActivity } from "@/lib/continueActivityStorage";
import { cn } from "@/lib/utils";

function continueActivityIcon(activity: ContinueActivity): LucideIcon {
  switch (activity.kind) {
    case "vocabulary_quiz":
    case "topic_exam":
      return ClipboardCheck;
    case "vocabulary_exercises":
    case "topic_exercises":
    case "combined_exercise":
    case "reading_exercises":
    case "listening_exercises":
    case "writing_exercises":
    case "speaking_exercises":
      return PencilLine;
    case "vocabulary_category":
    case "vocabulary_reference":
    case "vocabulary_reference_exercises":
      return BookA;
    case "reading_text":
      return BookOpen;
    case "listening_audio":
      return Headphones;
    case "writing_model":
      return PenLine;
    case "speaking_model":
      return Mic;
    case "skill_hub":
      switch (activity.skill) {
        case "listening":
          return Headphones;
        case "writing":
          return PenLine;
        case "speaking":
          return Mic;
        case "topics":
          return SpellCheck2;
        case "vocabulary":
          return BookA;
        case "reading":
        default:
          return BookOpen;
      }
    case "topic_lesson":
      return SpellCheck2;
    default:
      return BookOpen;
  }
}

function ContinueActivityRow({
  activity,
  goLabel,
  labels,
}: {
  activity: ContinueActivity;
  goLabel: string;
  labels: Parameters<typeof resolveContinueActivityDisplay>[1];
}) {
  const display = resolveContinueActivityDisplay(activity, labels);
  const Icon = continueActivityIcon(activity);

  return (
    <li className="notification-list-item">
      <Link
        href={activity.href}
        className="quick-continue-row-link group flex min-w-0 items-center gap-3 rounded-xl px-1 py-1.5 hover:bg-(--glass-btn) focus-visible:bg-(--glass-btn) focus-visible:outline-none"
        aria-label={`${goLabel}: ${display.title}`}
        onClick={(event) => {
          if (navigateWorkshopHref(activity.href)) {
            event.preventDefault();
          }
        }}
      >
        <span
          className="quick-continue-row-icon inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-(--glass-btn) text-brand-800 shadow-[inset_0_0_0_1px_var(--glass-line)] group-hover:bg-(--glass-btn-hover) group-hover:text-sky-700 dark:text-brand-100 dark:group-hover:text-sky-200"
          aria-hidden
        >
          <Icon className="size-4" strokeWidth={1.75} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="quick-continue-row-title block truncate text-sm font-semibold text-brand-950 group-hover:text-sky-700 dark:text-brand-100 dark:group-hover:text-sky-300">
            {display.title}
          </span>
          <span className="mt-0.5 block text-xs text-brand-600 dark:text-brand-400">
            {display.kindLabel}
          </span>
        </span>
        <ChevronRight
          className="quick-continue-chevron size-4 shrink-0 text-brand-400 group-hover:text-brand-800 dark:text-brand-400 dark:group-hover:text-brand-100"
          aria-hidden
        />
      </Link>
    </li>
  );
}

type QuickContinueCardProps = {
  className?: string;
};

export function QuickContinueCard({ className }: QuickContinueCardProps = {}) {
  const t = useTranslations("Dashboard");
  const tNav = useTranslations("AppNav");
  const storedActivities = useContinueActivities();
  const activities = quickContinueActivitiesForDisplay(storedActivities);

  const labels = {
    vocabularyQuiz: t("quickContinueKindQuiz"),
    vocabularyReferenceTitles: {
      "today-worked": tNav("vocabularyStudiedToday"),
      "known-words": tNav("vocabularyKnown"),
      verbs: tNav("vocabularyVerbs"),
      "false-friends": tNav("vocabularyFalseFriends"),
      "phrasal-verbs": tNav("vocabularyPhrasalVerbs"),
      prepositions: tNav("vocabularyPrepositions"),
    },
    combinedExercise: t("combinedExerciseTitle"),
    skillReading: tNav("reading"),
    skillListening: tNav("listening"),
    skillWriting: tNav("writing"),
    skillSpeaking: tNav("speaking"),
    skillTopics: tNav("topics"),
    skillVocabulary: tNav("vocabulary"),
    skillHubInnerTitles: {
      vocabulary: t("vocabularyTitle"),
      topics: t("topicsTitle"),
      reading: t("skillReadingTitle"),
      listening: t("skillListeningTitle"),
      writing: t("skillWritingTitle"),
      speaking: t("skillSpeakingTitle"),
    },
    fallbackTitle: t("quickContinueFallback"),
  };

  return (
    <article className={cn("workshop-card workshop-card--stat", className)}>
      <DashboardStatHeader>
        <p className="workshop-card__label text-base">
          <Play className="size-5" aria-hidden />
          {t("quickContinue")}
        </p>
      </DashboardStatHeader>

      <ul className="mt-2 flex flex-1 flex-col justify-start gap-0.5">
        {activities.map((activity, index) => (
          <ContinueActivityRow
            key={`${activity.kind}:${activity.href}:${activity.skill ?? index}`}
            activity={activity}
            goLabel={t("quickContinueGo")}
            labels={labels}
          />
        ))}
      </ul>
    </article>
  );
}
