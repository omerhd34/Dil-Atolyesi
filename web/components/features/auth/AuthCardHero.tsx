"use client";

import type { AuthMode } from "@/components/features/auth/auth-types";

type AuthCardHeroCopy = {
  heroWelcomeBack: string;
  heroSignInHint: string;
  heroJoinToday: string;
  heroSignUpHint: string;
  forgotTitle: string;
  heroForgotHint: string;
};

type AuthCardHeroProps = {
  mode: AuthMode;
  copy: AuthCardHeroCopy;
};

export function AuthCardHero({ mode, copy }: AuthCardHeroProps) {
  return (
    <div className="auth-card-hero" data-mode={mode}>
      <div className="auth-card-hero-bg" aria-hidden />
      <div className="auth-card-hero-inner">
        <div className="auth-card-hero-content signin">
          <h2>{copy.heroWelcomeBack}</h2>
          <p>{copy.heroSignInHint}</p>
        </div>
        <div className="auth-card-hero-content signup">
          <h2>{copy.heroJoinToday}</h2>
          <p>{copy.heroSignUpHint}</p>
        </div>
        <div className="auth-card-hero-content reset">
          <h2>{copy.forgotTitle}</h2>
          <p>{copy.heroForgotHint}</p>
        </div>
      </div>
    </div>
  );
}
