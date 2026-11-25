import { useLocale } from "next-intl";
import { FcGoogle } from "react-icons/fc";

type AuthGoogleButtonProps = {
  label: string;
};

export function AuthGoogleButton({ label }: AuthGoogleButtonProps) {
  const locale = useLocale();
  const href = `/api/v1/auth/google?locale=${encodeURIComponent(locale)}`;

  return (
    <a className="auth-google-btn" href={href}>
      <FcGoogle className="auth-google-mark" size={20} aria-hidden />
      <span>{label}</span>
    </a>
  );
}
