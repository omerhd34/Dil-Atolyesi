"use client";

import { create } from "zustand";
import type { VocabularyLevel } from "@/data/vocabulary";

type VocabularyUiState = {
  selectedLevel: VocabularyLevel;
  setSelectedLevel: (level: VocabularyLevel) => void;
};

export const useVocabularyUiStore = create<VocabularyUiState>((set) => ({
  selectedLevel: "A1",
  setSelectedLevel: (level) => set({ selectedLevel: level }),
}));
