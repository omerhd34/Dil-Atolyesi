"use client";

import { KeyRound, LogIn, UserPlus } from "lucide-react";
import type { AuthMode } from "@/components/features/auth/auth-types";
import { cn } from "@/lib/utils";

type AuthCardNavProps = {
  mode: AuthMode;
  loginLabel: string;
  registerLabel: string;
  passwordChangeLabel: string;
  onSwitch: (mode: AuthMode) => void;
};

export function AuthCardNav({
  mode,
  loginLabel,
  registerLabel,
  passwordChangeLabel,
  onSwitch,
}: AuthCardNavProps) {
  return (
    <ul className="auth-card-nav" aria-label={loginLabel}>
      <span className="auth-card-nav-active-bar" aria-hidden />
      <li
        className={cn(
          "auth-card-nav-item password",
          mode === "sifre" && "is-active",
        )}
      >
        <button
          type="button"
          className="auth-card-nav-btn"
          onClick={() => onSwitch("sifre")}
        >
          <KeyRound className="size-5" aria-hidden />
          <span>{passwordChangeLabel}</span>
        </button>
      </li>
      <li
        className={cn(
          "auth-card-nav-item signin",
          mode === "giris" && "is-active",
        )}
      >
        <button
          type="button"
          className="auth-card-nav-btn"
          onClick={() => onSwitch("giris")}
        >
          <LogIn className="size-5" aria-hidden />
          <span>{loginLabel}</span>
        </button>
      </li>
      <li
        className={cn(
          "auth-card-nav-item signup",
          mode === "kayit" && "is-active",
        )}
      >
        <button
          type="button"
          className="auth-card-nav-btn"
          onClick={() => onSwitch("kayit")}
        >
          <UserPlus className="size-5" aria-hidden />
          <span>{registerLabel}</span>
        </button>
      </li>
    </ul>
  );
}
