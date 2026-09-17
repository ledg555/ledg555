import { create } from "zustand";

interface AppState {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const useStore = create<AppState>((set) => ({
  isDarkTheme: false,
  toggleTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
}));

export default useStore;
