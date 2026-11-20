"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { WorkshopLoading } from "@/components/features/dashboard/WorkshopLoading";
import { LearnMissedDayNotificationWatcher } from "@/components/features/dashboard/LearnMissedDayNotificationWatcher";
import { QuizReadyNotificationWatcher } from "@/components/features/dashboard/QuizReadyNotificationWatcher";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { useRouter } from "@/i18n/navigation";
import { AUTH_ACCOUNT_PATH } from "@/lib/appPaths";
import { useAuthStore } from "@/store/authStore";

type WorkshopGateProps = {
  children: React.ReactNode;
};

export function WorkshopGate({ children }: WorkshopGateProps) {
  const t = useTranslations("Dashboard");
  const user = useAuthStore((state) => state.user);
  const status = useAuthStore((state) => state.status);
  const router = useRouter();
  const ready = status === "authenticated" && Boolean(user);

  useEffect(() => {
    if (status === "anonymous") {
      router.replace(AUTH_ACCOUNT_PATH);
    }
  }, [router, status]);

  if (status === "unknown") {
    return <WorkshopLoading />;
  }

  if (!ready) {
    return (
      <div className="mx-auto flex min-h-[50vh] max-w-md flex-col items-center justify-center gap-4 p-6 text-center">
        <p className="page-subtitle mt-0">{t("loginRequired")}</p>
        <ButtonLink href={AUTH_ACCOUNT_PATH}>{t("goLogin")}</ButtonLink>
      </div>
    );
  }

  return (
    <>
      <QuizReadyNotificationWatcher />
      <LearnMissedDayNotificationWatcher />
      {children}
    </>
  );
}
