import type { PointsEventReason } from "@/lib/points/reasons";

export type AwardPointsActivityResult = {
  awarded: boolean;
  amount: number;
};

let awardChain: Promise<void> = Promise.resolve();

export async function awardPointsActivityAsync(
  reason: PointsEventReason,
  sourceKey: string,
): Promise<AwardPointsActivityResult | null> {
  if (typeof window === "undefined") {
    return null;
  }

  const run = async (): Promise<AwardPointsActivityResult | null> => {
    const { useAuthStore } = await import("@/store/authStore");
    const token = useAuthStore.getState().accessToken;
    if (!token) {
      return null;
    }

    const { apiRequest } = await import("@/lib/apiClient");
    try {
      const data = await apiRequest<AwardPointsActivityResult>(
        "/points/record",
        {
          method: "POST",
          accessToken: token,
          body: { reason, sourceKey },
        },
      );
      const { usePointsStore } = await import("@/store/pointsStore");
      if (data.awarded) {
        void usePointsStore.getState().fetchPoints({ force: true });
      }
      return data;
    } catch {
      return null;
    }
  };

  const resultPromise = awardChain.then(run);
  awardChain = resultPromise.then(() => undefined);
  return resultPromise;
}

export function awardPointsActivity(
  reason: PointsEventReason,
  sourceKey: string,
): void {
  void awardPointsActivityAsync(reason, sourceKey);
}
