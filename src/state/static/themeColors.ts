import { LightTheme } from "../../contexts/Theme/ThemeContext";

export const LightThemeColors = {
  background: "#F5F5F5",
  card: "#FFFFFF",
  headerBackground: "#E0E0E0",
  text: "#212121",
  textSecondary: "#757575",
  primary: "#6200EE",
  secondary: "#03DAC5",
  danger: "#B00020",
  border: "#E0E0E0",
  shadow: "#00000033",
};
export const DarkThemeColors = {
  background: "#121212",
  card: "#1E1E1E",
  headerBackground: "#000000",
  text: "#FFFFFF",
  textSecondary: "#BDBDBD",
  primary: "#BB86FC",
  secondary: "#03DAC5",
  danger: "#CF6679",
  border: "#292929",
  shadow: "#000000AA",
};

export type ThemeColors = keyof typeof LightTheme &
  keyof typeof DarkThemeColors;
