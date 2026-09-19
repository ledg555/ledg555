import { create } from "zustand";

interface ThemeStore {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;
  return document.documentElement.classList.contains("dark");
};

export const useThemeStore = create<ThemeStore>((set) => ({
  isDarkTheme: getInitialTheme(),
  toggleTheme: () =>
    set((state) => {
      const nextIsDark = !state.isDarkTheme;

      if (nextIsDark) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      }

      return { isDarkTheme: nextIsDark };
    }),
}));
