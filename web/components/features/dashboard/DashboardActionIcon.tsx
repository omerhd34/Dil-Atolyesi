import { cn } from "@/lib/utils";

export type DashboardActionKind =
  | "exam"
  | "quiz"
  | "subject"
  | "exercises"
  | "generalReview";

const actionIcons: Record<
  DashboardActionKind,
  { src: string; className?: string }
> = {
  exam: {
    src: "/dashboard/action-icons/exam.webp",
    className: "dark:invert",
  },
  quiz: {
    src: "/dashboard/action-icons/quiz.webp",
    className: "dark:invert",
  },
  subject: {
    src: "/dashboard/action-icons/subject.webp",
  },
  exercises: {
    src: "/dashboard/action-icons/exercises.webp",
    className: "dark:invert",
  },
  generalReview: {
    src: "/dashboard/action-icons/general-review.webp",
    className: "dark:invert",
  },
};

type DashboardActionIconProps = {
  kind: DashboardActionKind;
  className?: string;
};

export function DashboardActionIcon({
  kind,
  className,
}: DashboardActionIconProps) {
  const { src, className: kindClassName } = actionIcons[kind];

  return (
    <img
      src={src}
      alt=""
      aria-hidden
      width={16}
      height={16}
      decoding="async"
      className={cn("size-4 shrink-0 object-contain", kindClassName, className)}
    />
  );
}
