// theme/theme-provider.tsx
"use client";

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
  useTheme as useNextTheme,
} from "next-themes";
import { createContext, useContext } from "react";

interface ThemeContextValue {
  theme: "light" | "dark" | "system" | undefined;
  setTheme: (theme: "light" | "dark" | "system") => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// This is the inner content provider that depends on NextThemesProvider
function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const { theme: nextTheme, setTheme: nextSetTheme } = useNextTheme();
  const theme = nextTheme as ThemeContextValue["theme"];

  const setTheme: ThemeContextValue["setTheme"] = (newTheme) => {
    nextSetTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// This is the top-level ThemeProvider you use in layout.tsx
export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </NextThemesProvider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
