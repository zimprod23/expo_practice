// src/theme/ThemeProvider.tsx
import React, { createContext, useState, useContext } from "react";
import { DefaultTheme, DarkTheme, Theme } from "@react-navigation/native";
import {
  DefaultTheme as PaperDefaultTheme,
  MD3DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import { DarkThemeColors, LightThemeColors } from "../../state/static/index";

export const LightTheme = {
  ...DefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...PaperDefaultTheme.colors,
  },
};

export const AppDarkTheme = {
  ...DarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...DarkThemeColors,
  },
};

type Mode = "light" | "dark";

interface ThemeContextProps {
  theme: any;
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
