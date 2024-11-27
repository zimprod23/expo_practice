import { View as DefaultView } from "react-native";
import {
  ColorName,
  ThemeProps,
  useThemeColor,
} from "../../hooks/useThemeColor";

type ViewProps = ThemeProps & ColorName & DefaultView["props"];
export default function View(props: ViewProps) {
  const { style, lightColor, darkColor, colorName, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    colorName
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
