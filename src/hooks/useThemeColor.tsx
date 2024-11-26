import { useTheme } from "../contexts/Theme/ThemeContext";
import Colors from "../styles/Colors";

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  // const theme = useColorScheme() ?? "light";
  const { mode } = useTheme();
  const colorFromProps = props[mode];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[mode][colorName];
  }
}
