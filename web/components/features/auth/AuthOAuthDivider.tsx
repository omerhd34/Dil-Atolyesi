type AuthOAuthDividerProps = {
  label: string;
};

export function AuthOAuthDivider({ label }: AuthOAuthDividerProps) {
  return (
    <div className="auth-oauth-divider" role="separator" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
