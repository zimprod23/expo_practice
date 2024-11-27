import { View as DefaultView } from "react-native";
import { ThemeProps, useThemeColor } from "../../hooks/useThemeColor";

type ViewProps = ThemeProps & DefaultView["props"];

export default function Screen(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
