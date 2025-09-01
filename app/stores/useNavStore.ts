import { create } from "zustand";

type NavState = {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
};

export const useNavStore = create<NavState>((set) => ({
  currentTab: "",
  setCurrentTab: (tab: string) => set({ currentTab: tab }),
}));
