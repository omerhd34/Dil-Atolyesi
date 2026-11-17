import { LessonBoldText } from "@/components/features/topics/LessonBoldText";
import { cn } from "@/lib/utils";

type LessonParagraphProps = {
  text: string;
  className?: string;
};

export function LessonParagraph({ text, className }: LessonParagraphProps) {
  return (
    <p
      className={cn(
        "text-md leading-relaxed text-brand-700 dark:text-brand-300",
        className,
      )}
    >
      <LessonBoldText text={text} />
    </p>
  );
}
