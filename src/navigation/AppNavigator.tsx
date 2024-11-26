import { View, Text } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./tabs";
import { useTheme } from "../contexts/Theme/ThemeContext";

const AppNavigator = () => {
  const { theme } = useTheme();

  const [isAuthenticated, setisAuthenticated] = useState(true);
  return (
    <NavigationContainer theme={theme}>
      {isAuthenticated ? <TabNavigator /> : <></>}
    </NavigationContainer>
  );
};

export default AppNavigator;
