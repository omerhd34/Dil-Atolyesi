import { WorkshopGate } from "@/components/features/dashboard/WorkshopGate";

export const instant = false;

export default function WorkshopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WorkshopGate>{children}</WorkshopGate>;
}
