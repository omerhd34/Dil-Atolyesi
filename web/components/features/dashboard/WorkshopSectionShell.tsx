import { DashboardStatsBar } from "@/components/features/dashboard/DashboardStatsBar";

type WorkshopSectionShellProps = {
  children: React.ReactNode;
  showStatsBar?: boolean;
};

export function WorkshopSectionShell({
  children,
  showStatsBar = true,
}: WorkshopSectionShellProps) {
  return (
    <div className="page-shell">
      {showStatsBar ? <DashboardStatsBar /> : null}
      {children}
    </div>
  );
}
