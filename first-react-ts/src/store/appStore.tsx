import { create } from "zustand";

type AppState = {
  isActive: boolean;
  toggle: () => void;
};

export const useAppStore = create<AppState>()((set) => ({
  isActive: false,
  toggle: () => set((state) => ({ isActive: !state.isActive })),
}));