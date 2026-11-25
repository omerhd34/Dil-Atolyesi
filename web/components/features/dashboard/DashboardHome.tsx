"use client";

import { DashboardStatsBar } from "@/components/features/dashboard/DashboardStatsBar";
import { WorkshopLegacyHashRedirect } from "@/components/features/dashboard/WorkshopLegacyHashRedirect";

export function DashboardHome() {
  return (
    <div className="page-shell">
      <WorkshopLegacyHashRedirect />
      <DashboardStatsBar />
    </div>
  );
}
