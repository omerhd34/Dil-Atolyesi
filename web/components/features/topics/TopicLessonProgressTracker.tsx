/* eslint-disable react-hooks/refs */
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Award, Clock } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  TOPIC_PROGRESS_CHANGED_EVENT,
  addTopicLessonViewMs,
  awardGrammarLessonTimePoints,
  getLessonViewRequiredMs,
  getTopicLessonViewMs,
  getTopicLessonViewRemainingMs,
  isLessonWaitWaivedByExam,
  markTopicLessonViewed,
} from "@/lib/topicProgressStorage";

type TopicLessonProgressTrackerProps = {
  topicId: string;
};

const TICK_MS = 1000;
const MAX_TICK_DELTA_MS = TICK_MS;

type LessonTrackerSnapshot = {
  earned: boolean;
  waivedByExam: boolean;
  spentMs: number;
};

function readLessonTrackerSnapshot(topicId: string): LessonTrackerSnapshot {
  const required = getLessonViewRequiredMs(topicId);
  if (required <= 0) {
    return { earned: true, waivedByExam: false, spentMs: 0 };
  }
  const spent = getTopicLessonViewMs(topicId);
  const remaining = getTopicLessonViewRemainingMs(topicId);
  if (remaining <= 0) {
    return {
      earned: true,
      waivedByExam: isLessonWaitWaivedByExam(topicId),
      spentMs: Math.min(spent, required),
    };
  }
  return {
    earned: false,
    waivedByExam: false,
    spentMs: Math.min(spent, required),
  };
}

function formatRemaining(ms: number): string {
  const totalSeconds = Math.ceil(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function formatRequiredMinutes(ms: number): string {
  const minutes = ms / 60_000;
  const rounded = Math.round(minutes * 10) / 10;
  const text = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  return text.replace(".", ",");
}

export function TopicLessonProgressTracker({
  topicId,
}: TopicLessonProgressTrackerProps) {
  const t = useTranslations("Topic");
  const requiredMs = getLessonViewRequiredMs(topicId);
  const [earned, setEarned] = useState(
    () => readLessonTrackerSnapshot(topicId).earned,
  );
  const [waivedByExam, setWaivedByExam] = useState(
    () => readLessonTrackerSnapshot(topicId).waivedByExam,
  );
  const [spentMs, setSpentMs] = useState(
    () => readLessonTrackerSnapshot(topicId).spentMs,
  );
  const [pointsEarned, setPointsEarned] = useState<number | null>(null);
  const [pointsAlreadyCounted, setPointsAlreadyCounted] = useState(false);
  const pointsRequestedRef = useRef(false);
  const completedThisSessionRef = useRef(false);
  const remainingMs = Math.max(0, requiredMs - spentMs);

  const requestLessonTimePoints = useCallback(
    async (skipIfWaived = false) => {
      if (pointsRequestedRef.current || skipIfWaived) {
        return;
      }
      pointsRequestedRef.current = true;
      const outcome = await awardGrammarLessonTimePoints(topicId);
      if (outcome.pointsEarned && outcome.pointsEarned > 0) {
        setPointsEarned(outcome.pointsEarned);
      } else if (outcome.pointsAlreadyCounted) {
        setPointsAlreadyCounted(true);
      }
    },
    [topicId],
  );

  useEffect(() => {
    const snapshot = readLessonTrackerSnapshot(topicId);
    setEarned(snapshot.earned);
    setWaivedByExam(snapshot.waivedByExam);
    setSpentMs(snapshot.spentMs);

    const required = getLessonViewRequiredMs(topicId);

    if (required <= 0) {
      const marked = markTopicLessonViewed(topicId);
      setEarned(true);
      setSpentMs(0);
      if (marked) {
        void requestLessonTimePoints();
      }
      return;
    }

    const spent = getTopicLessonViewMs(topicId);
    const initialRemaining = getTopicLessonViewRemainingMs(topicId);
    setSpentMs(Math.min(spent, required));

    if (initialRemaining <= 0) {
      const waived = isLessonWaitWaivedByExam(topicId);
      setWaivedByExam(waived);
      setEarned(true);
      if (!waived) {
        void requestLessonTimePoints(false);
      }
      return;
    }

    setWaivedByExam(false);
    setEarned(false);
    pointsRequestedRef.current = false;
    completedThisSessionRef.current = false;
    setPointsEarned(null);
    setPointsAlreadyCounted(false);

    let lastTick = Date.now();

    function flush(now: number, maxDeltaMs = MAX_TICK_DELTA_MS) {
      if (document.visibilityState !== "visible") {
        lastTick = now;
        return;
      }

      const delta = Math.min(Math.max(0, now - lastTick), maxDeltaMs);
      lastTick = now;
      if (delta <= 0) {
        return;
      }

      const { complete, newlyCompleted } = addTopicLessonViewMs(topicId, delta);
      setSpentMs(getTopicLessonViewMs(topicId));
      if (complete) {
        setEarned(true);
      }
      if (newlyCompleted) {
        completedThisSessionRef.current = true;
        void requestLessonTimePoints();
      }
    }

    const intervalId = window.setInterval(() => {
      flush(Date.now());
    }, TICK_MS);

    function onVisibility() {
      const now = Date.now();
      if (document.visibilityState === "visible") {
        lastTick = now;
        return;
      }
      flush(now, MAX_TICK_DELTA_MS);
    }

    function onProgressEvent() {
      const snapshot = readLessonTrackerSnapshot(topicId);
      setSpentMs(snapshot.spentMs);
      if (!snapshot.earned) {
        return;
      }
      setWaivedByExam(snapshot.waivedByExam);
      setEarned(true);
      if (!snapshot.waivedByExam) {
        void requestLessonTimePoints(false);
      }
    }

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener(TOPIC_PROGRESS_CHANGED_EVENT, onProgressEvent);

    return () => {
      flush(Date.now(), MAX_TICK_DELTA_MS);
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener(TOPIC_PROGRESS_CHANGED_EVENT, onProgressEvent);
    };
  }, [topicId, requiredMs, requestLessonTimePoints]);

  if (earned) {
    return (
      <Alert className="border-emerald-500/30 bg-emerald-500/10">
        <Clock aria-hidden />
        <AlertTitle>{t("lessonTimerDoneTitle")}</AlertTitle>
        <AlertDescription className="space-y-2">
          <p>
            {waivedByExam
              ? t("lessonTimerExamDoneBody")
              : completedThisSessionRef.current
                ? t("lessonTimerDoneBody")
                : t("lessonTimerAlreadyDoneBody")}
          </p>
          {pointsEarned != null && pointsEarned > 0 ? (
            <p className="inline-flex items-center gap-2 text-sm font-medium text-amber-800 dark:text-amber-200">
              <Award className="size-4 shrink-0" aria-hidden />
              {t("lessonTimerPointsEarned", { count: pointsEarned })}
            </p>
          ) : pointsAlreadyCounted && !waivedByExam ? (
            <p className="text-muted-foreground text-sm">
              {t("finishedPointsAlreadyCounted")}
            </p>
          ) : null}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert variant="warning">
      <Clock aria-hidden />
      <AlertTitle>{t("lessonTimerTitle")}</AlertTitle>
      <AlertDescription>
        {t("lessonTimerBody", {
          time: formatRemaining(remainingMs),
          minutes: formatRequiredMinutes(requiredMs),
        })}
      </AlertDescription>
    </Alert>
  );
}
