// src/theme/ThemeProvider.tsx
import React, { createContext, useState, useContext } from "react";
import { DefaultTheme, DarkTheme, Theme } from "@react-navigation/native";
import { DarkThemeColors, LightThemeColors } from "../../state/static/index";

export const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export const AppDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};

type Mode = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  isDarkMode: boolean;
  mode: Mode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mode, setMode] = useState<Mode>(isDarkMode ? "dark" : "light");

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    setMode((prev) => (prev == "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: isDarkMode ? AppDarkTheme : LightTheme,
        toggleTheme,
        isDarkMode,
        mode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
