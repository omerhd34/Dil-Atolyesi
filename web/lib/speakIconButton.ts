import { cn } from "@/lib/utils";

export const speakIconButtonMotionClassName =
  "speak-icon-button hover:text-red-600 dark:hover:text-red-400";

export const speakIconButtonClassName = cn(
  speakIconButtonMotionClassName,
  "text-brand-500 dark:text-brand-400",
);

export function speakIconButtonClasses(className?: string) {
  return cn(speakIconButtonClassName, className);
}

export function speakIconButtonMotionClasses(className?: string) {
  return cn(speakIconButtonMotionClassName, className);
}
