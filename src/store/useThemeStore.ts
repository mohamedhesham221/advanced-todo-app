import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type StateType = {
  theme: string;
  toggleTheme: () => void;
};
const HTML_Document = document.documentElement;
export const useThemeStore = create<StateType>()(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () => {
        set((state: { theme: string }) => ({
          theme:
            state.theme === "light"
              ? (HTML_Document.setAttribute("data-theme", "dark"), "dark")
              : (HTML_Document.setAttribute("data-theme", "light"), "light"),
        }));
      },
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
