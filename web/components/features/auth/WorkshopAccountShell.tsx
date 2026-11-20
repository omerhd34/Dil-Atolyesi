import type { ReactNode } from "react";

type WorkshopAccountShellProps = {
  children: ReactNode;
};

export function WorkshopAccountShell({ children }: WorkshopAccountShellProps) {
  return (
    <div className="auth-shell">
      <div className="auth-shell-main">{children}</div>
    </div>
  );
}
