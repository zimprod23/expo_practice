import { View as DefaultView } from "react-native";
import { ThemeProps, useThemeColor } from "../../hooks/useThemeColor";

export type ViewProps = ThemeProps & DefaultView["props"];

export function Screen(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
