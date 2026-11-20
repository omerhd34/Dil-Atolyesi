"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link, useRouter } from "@/i18n/navigation";
import { AUTH_ACCOUNT_PATH } from "@/lib/appPaths";
import { useAuthStore } from "@/store/authStore";

type VerifyEmailClientProps = {
  token: string | null;
};

const startedTokens = new Set<string>();

export function VerifyEmailClient({ token }: VerifyEmailClientProps) {
  const t = useTranslations("Auth");
  const router = useRouter();
  const existingUser = useAuthStore((state) => state.user);
  const verifyEmail = useAuthStore((state) => state.verifyEmail);
  const isLoading = useAuthStore((state) => state.isVerifyingEmail);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (existingUser) {
      router.replace("/atolye");
    }
  }, [existingUser, router]);

  useEffect(() => {
    if (!token) {
      setError(t("verifyInvalid"));
      return;
    }

    if (startedTokens.has(token) || existingUser) {
      return;
    }
    startedTokens.add(token);

    void (async () => {
      try {
        await verifyEmail({ token });
        setDone(true);
        router.replace("/atolye");
      } catch {
        startedTokens.delete(token);
        setError(t("verifyInvalid"));
      }
    })();
  }, [existingUser, router, t, token, verifyEmail]);

  if (error) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
        <p className="page-subtitle mt-0">
          <Link
            href={AUTH_ACCOUNT_PATH}
            className="font-medium text-brand-800 underline-offset-2 hover:underline dark:text-brand-400"
          >
            {t("enterWorkshop")}
          </Link>
        </p>
      </div>
    );
  }

  return (
    <p className="page-subtitle mt-0" aria-live="polite">
      {done
        ? t("verifySuccess")
        : isLoading || token
          ? t("verifyPending")
          : null}
    </p>
  );
}
