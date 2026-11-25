import { DashboardStatsBar } from "@/components/features/dashboard/DashboardStatsBar";

type WorkshopSectionShellProps = {
  children: React.ReactNode;
};

export function WorkshopSectionShell({ children }: WorkshopSectionShellProps) {
  return (
    <div className="page-shell">
      <DashboardStatsBar />
      {children}
    </div>
  );
}
