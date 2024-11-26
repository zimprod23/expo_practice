import { View, Text } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./tabs";
import { useTheme } from "../contexts/Theme/ThemeContext";
import { StatusBar } from "expo-status-bar";

const AppNavigator = () => {
  const { theme, isDarkMode } = useTheme();

  const [isAuthenticated, setisAuthenticated] = useState(true);
  return (
    <NavigationContainer theme={theme}>
      {isAuthenticated ? <TabNavigator /> : <></>}
      <StatusBar style={isDarkMode ? "dark" : "light"} />
    </NavigationContainer>
  );
};

export default AppNavigator;
