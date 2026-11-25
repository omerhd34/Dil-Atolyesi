"use client";

import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Link2, Lock, LogIn, Mail, User, UserPlus } from "lucide-react";
import { AuthCardHero } from "@/components/features/auth/AuthCardHero";
import { AuthCardNav } from "@/components/features/auth/AuthCardNav";
import { AuthEmailField } from "@/components/features/auth/AuthEmailField";
import { AuthFloatingField } from "@/components/features/auth/AuthFloatingField";
import { AuthFormMessage } from "@/components/features/auth/AuthFormMessage";
import { AuthPasswordToggle } from "@/components/features/auth/AuthPasswordToggle";
import { AuthRememberMe } from "@/components/features/auth/AuthRememberMe";
import { AuthSubmitButton } from "@/components/features/auth/AuthSubmitButton";
import { AuthTabs } from "@/components/features/auth/AuthTabs";
import type { AuthMode } from "@/components/features/auth/auth-types";
import { useRouter } from "@/i18n/navigation";
import { getApiErrorCode } from "@/lib/apiClient";
import { migrateLocalStorageKey } from "@/lib/clientStorageKeys";
import { AUTH_ACCOUNT_PATH } from "@/lib/appPaths";
import { createLoginSchema, createRegisterSchema } from "@/lib/authValidation";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/authStore";

export type { AuthMode };

type WorkshopAccountAuthProps = {
  initialMode?: AuthMode;
};

export function WorkshopAccountAuth({
  initialMode = "giris",
}: WorkshopAccountAuthProps) {
  const t = useTranslations("Auth");
  const router = useRouter();
  const authStatus = useAuthStore((state) => state.status);
  const authUser = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const register = useAuthStore((state) => state.register);
  const isLoggingIn = useAuthStore((state) => state.isLoggingIn);
  const isRegistering = useAuthStore((state) => state.isRegistering);

  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    password?: string | boolean;
    confirmPassword?: string;
    terms?: string;
  }>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
  const [forgotNotice, setForgotNotice] = useState<string | null>(null);
  const [loginPressed, setLoginPressed] = useState(false);

  const isLoading = isLoggingIn || isRegistering;

  function pulseLoginButton() {
    setLoginPressed(false);
    window.requestAnimationFrame(() => {
      setLoginPressed(true);
    });
  }

  useEffect(() => {
    if (authStatus === "authenticated" && authUser) {
      router.replace("/atolye");
      return;
    }

    const remembered = window.localStorage.getItem(
      migrateLocalStorageKey("remember-email"),
    );
    if (remembered) {
      setEmail(remembered);
      setRememberMe(true);
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get("mod") === "kayit") {
      setMode("kayit");
    }
    if (window.location.search) {
      router.replace(AUTH_ACCOUNT_PATH);
    }
  }, [authStatus, authUser, router]);

  const loginSchema = useMemo(
    () =>
      createLoginSchema({
        emailRequired: t("errors.emailRequired"),
        emailInvalid: t("errors.emailInvalid"),
        passwordRequired: t("errors.passwordRequired"),
      }),
    [t],
  );

  const registerSchema = useMemo(
    () =>
      createRegisterSchema({
        emailRequired: t("errors.emailRequired"),
        emailInvalid: t("errors.emailInvalid"),
        passwordRequired: t("errors.passwordRequired"),
        passwordMin: t("errors.passwordMin"),
      }),
    [t],
  );

  function switchMode(next: AuthMode) {
    setMode(next);
    setFormError(null);
    setFieldErrors({});
    setSubmittedEmail(null);
    setForgotNotice(null);
    setConfirmPassword("");
    setAcceptedTerms(false);
    setShowPassword(false);
    setShowConfirmPassword(false);
  }

  async function onLoginSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    pulseLoginButton();
    setFormError(null);

    const parsed = loginSchema.safeParse({ email, password });
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      setFieldErrors({
        email: flat.email?.[0],
        password: flat.password?.[0] ? true : undefined,
      });
      return;
    }

    setFieldErrors({});

    try {
      const rememberKey = migrateLocalStorageKey("remember-email");
      if (rememberMe) {
        window.localStorage.setItem(rememberKey, parsed.data.email);
      } else {
        window.localStorage.removeItem(rememberKey);
      }

      await login(parsed.data);
      router.push("/atolye");
    } catch (error) {
      const code = getApiErrorCode(error);
      if (code === "EMAIL_NOT_VERIFIED") {
        setFormError(t("errors.emailNotVerified"));
        return;
      }
      if (code === "INVALID_CREDENTIALS") {
        setFieldErrors({ password: true });
        setFormError(t("errors.invalidCredentials"));
        return;
      }
      setFormError(t("errors.generic"));
    }
  }

  async function onRegisterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    if (!acceptedTerms) {
      setFieldErrors({ terms: t("errors.termsRequired") });
      return;
    }

    const parsed = registerSchema.safeParse({ name, email, password });
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      const passwordMessage = flat.password?.[0];
      setFieldErrors({
        email: flat.email?.[0],
        password:
          passwordMessage === t("errors.passwordRequired")
            ? true
            : passwordMessage,
      });
      return;
    }

    if (password !== confirmPassword) {
      setFieldErrors({ confirmPassword: t("errors.passwordMismatch") });
      return;
    }

    setFieldErrors({});

    try {
      const payload = {
        email: parsed.data.email,
        password: parsed.data.password,
        ...(parsed.data.name ? { name: parsed.data.name } : {}),
      };
      const result = await register(payload);
      setSubmittedEmail(result.email);
    } catch (error) {
      if (getApiErrorCode(error) === "EMAIL_EXISTS") {
        setFormError(t("errors.emailExists"));
        return;
      }
      setFormError(t("errors.generic"));
    }
  }

  function onForgotSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setForgotNotice(null);
    const parsed = registerSchema.pick({ email: true }).safeParse({ email });
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      setFieldErrors({ email: flat.email?.[0] });
      return;
    }
    setFieldErrors({});
    setForgotNotice(t("forgotSoon"));
  }

  return (
    <div
      className={cn(
        "auth-split",
        mode === "kayit" && "is-register",
        mode === "sifre" && "is-reset",
      )}
    >
      <div className="auth-split-card auth-card">
        <AuthCardNav
          mode={mode}
          loginLabel={t("submitLogin")}
          registerLabel={t("promoRegister")}
          passwordChangeLabel={t("navPasswordChange")}
          onSwitch={switchMode}
        />

        <AuthCardHero
          mode={mode}
          copy={{
            heroWelcomeBack: t("heroWelcomeBack"),
            heroSignInHint: t("heroSignInHint"),
            heroJoinToday: t("heroJoinToday"),
            heroSignUpHint: t("heroSignUpHint"),
            forgotTitle: t("forgotTitle"),
            heroForgotHint: t("heroForgotHint"),
          }}
        />

        <AuthTabs
          mode={mode}
          ariaLabel={t("loginTitle")}
          loginLabel={t("submitLogin")}
          registerLabel={t("promoRegister")}
          onSwitch={switchMode}
        />

        <div className="auth-card-form">
          <div className="auth-card-forms">
            <form
              className="split-form login-form signin"
              onSubmit={onLoginSubmit}
              noValidate
              aria-hidden={mode !== "giris"}
            >
              <div className="split-form-head auth-form-head-sr">
                <h1>{t("loginTitle")}</h1>
              </div>

              <AuthEmailField
                name="email"
                label={t("email")}
                value={email}
                onChange={setEmail}
                error={fieldErrors.email}
                autoFocus={mode === "giris"}
                startIcon={<Mail className="size-4" aria-hidden />}
              />

              <AuthFloatingField
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                label={t("password")}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                error={fieldErrors.password}
                startIcon={<Lock className="size-4" aria-hidden />}
                endIcon={
                  <AuthPasswordToggle
                    show={showPassword}
                    hideLabel={t("hidePassword")}
                    showLabel={t("showPassword")}
                    onToggle={() => setShowPassword((value) => !value)}
                  />
                }
              />

              <div className="split-meta">
                <AuthRememberMe
                  checked={rememberMe}
                  label={t("rememberMe")}
                  onChange={setRememberMe}
                />
              </div>

              {formError && mode === "giris" ? (
                <AuthFormMessage>{formError}</AuthFormMessage>
              ) : null}

              <AuthSubmitButton
                className="auth-submit-dark"
                pressed={loginPressed}
                disabled={isLoading}
                onPressAnimationEnd={() => setLoginPressed(false)}
              >
                <LogIn className="size-4" aria-hidden />
                {t("submitLogin")}
              </AuthSubmitButton>
            </form>

            {submittedEmail ? (
              <div
                className="split-form signup register-form"
                role="status"
                aria-hidden={mode !== "kayit"}
              >
                <div className="split-form-head">
                  <h1>{t("checkEmailTitle")}</h1>
                  <p>{t("checkEmailBody", { email: submittedEmail })}</p>
                </div>
                <AuthSubmitButton
                  type="button"
                  className="auth-submit-dark"
                  onClick={() => switchMode("giris")}
                >
                  <LogIn className="size-4" aria-hidden />
                  {t("goLogin")}
                </AuthSubmitButton>
              </div>
            ) : (
              <form
                className="split-form signup register-form"
                onSubmit={onRegisterSubmit}
                noValidate
                aria-hidden={mode !== "kayit"}
              >
                <div className="split-form-head auth-form-head-sr">
                  <h1>{t("registerTitle")}</h1>
                </div>

                <AuthFloatingField
                  name="name"
                  type="text"
                  autoComplete="name"
                  label={t("nameOptional")}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  startIcon={<User className="size-4" aria-hidden />}
                />

                <AuthEmailField
                  name="email"
                  label={t("email")}
                  value={email}
                  onChange={setEmail}
                  error={fieldErrors.email}
                  startIcon={<Mail className="size-4" aria-hidden />}
                />

                <AuthFloatingField
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  label={t("password")}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  error={fieldErrors.password}
                  startIcon={<Lock className="size-4" aria-hidden />}
                  endIcon={
                    <AuthPasswordToggle
                      show={showPassword}
                      hideLabel={t("hidePassword")}
                      showLabel={t("showPassword")}
                      onToggle={() => setShowPassword((value) => !value)}
                    />
                  }
                />

                <AuthFloatingField
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  label={t("confirmPassword")}
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  error={fieldErrors.confirmPassword}
                  startIcon={<Lock className="size-4" aria-hidden />}
                  endIcon={
                    <AuthPasswordToggle
                      show={showConfirmPassword}
                      hideLabel={t("hidePassword")}
                      showLabel={t("showPassword")}
                      onToggle={() => setShowConfirmPassword((value) => !value)}
                    />
                  }
                />

                <div className="agreements">
                  <label className="check">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(event) =>
                        setAcceptedTerms(event.target.checked)
                      }
                    />
                    <span>{t("agreeTerms")}</span>
                  </label>
                  {fieldErrors.terms ? (
                    <AuthFormMessage>{fieldErrors.terms}</AuthFormMessage>
                  ) : null}
                </div>

                {formError && mode === "kayit" ? (
                  <AuthFormMessage>{formError}</AuthFormMessage>
                ) : null}

                <AuthSubmitButton
                  className="auth-submit-dark"
                  disabled={isLoading}
                >
                  <UserPlus className="size-4" aria-hidden />
                  {t("submitRegister")}
                </AuthSubmitButton>
              </form>
            )}

            <form
              className="split-form reset-form reset"
              onSubmit={onForgotSubmit}
              noValidate
              aria-hidden={mode !== "sifre"}
            >
              <div className="split-form-head auth-form-head-sr">
                <h1>{t("forgotTitle")}</h1>
              </div>

              <AuthEmailField
                name="resetEmail"
                label={t("email")}
                value={email}
                onChange={setEmail}
                error={fieldErrors.email}
                autoFocus={mode === "sifre"}
                startIcon={<Mail className="size-4" aria-hidden />}
              />

              {forgotNotice ? (
                <AuthFormMessage tone="info">{forgotNotice}</AuthFormMessage>
              ) : null}

              <AuthSubmitButton className="auth-submit-dark">
                <Link2 className="size-4" aria-hidden />
                {t("submitForgot")}
              </AuthSubmitButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
