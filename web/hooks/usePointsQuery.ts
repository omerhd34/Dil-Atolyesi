"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { usePointsStore } from "@/store/pointsStore";

export function usePointsQuery() {
  const status = useAuthStore((state) => state.status);
  const data = usePointsStore((state) => state.data);
  const queryStatus = usePointsStore((state) => state.status);
  const fetchPoints = usePointsStore((state) => state.fetchPoints);

  useEffect(() => {
    if (status !== "authenticated") {
      usePointsStore.getState().clear();
      return;
    }
    void fetchPoints();
  }, [status, fetchPoints]);

  return {
    data,
    isLoading: queryStatus === "loading" || queryStatus === "idle",
    isError: queryStatus === "error",
    isSuccess: queryStatus === "success",
    refetch: () => fetchPoints({ force: true }),
  };
}
