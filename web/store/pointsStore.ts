"use client";

import { create } from "zustand";
import { apiRequest } from "@/lib/apiClient";
import { useAuthStore } from "@/store/authStore";
import type { PointsSummaryPayload } from "@/types/api";

type QueryStatus = "idle" | "loading" | "success" | "error";

type PointsState = {
  data: PointsSummaryPayload | undefined;
  status: QueryStatus;
  error: string | null;
  fetchPoints: (options?: { force?: boolean }) => Promise<void>;
  clear: () => void;
};

function authToken(): string | null {
  return useAuthStore.getState().accessToken;
}

export const usePointsStore = create<PointsState>((set, get) => ({
  data: undefined,
  status: "idle",
  error: null,

  fetchPoints: async (options) => {
    const token = authToken();
    if (!token) {
      set({ data: undefined, status: "idle", error: null });
      return;
    }

    if (!options?.force && get().status === "loading") {
      return;
    }

    set({ status: "loading", error: null });
    try {
      const data = await apiRequest<PointsSummaryPayload>("/points", {
        accessToken: token,
      });
      set({ data, status: "success", error: null });
    } catch (error) {
      set({
        status: "error",
        error: error instanceof Error ? error.message : "Puanlar yüklenemedi",
      });
    }
  },

  clear: () => {
    set({ data: undefined, status: "idle", error: null });
  },
}));
