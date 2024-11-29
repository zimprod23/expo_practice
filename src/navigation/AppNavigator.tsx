import { PaperProvider } from "react-native-paper";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./tabs";
import { useTheme } from "../contexts/Theme/ThemeContext";
import { StatusBar } from "expo-status-bar";
import AuthStackNavigator from "./stacks/AuthStackNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation.types";
import { useAuthContext } from "../contexts/AuthContext";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { theme, isDarkMode } = useTheme();

  const { isAuthenticated } = useAuthContext();
  return (
    <NavigationContainer theme={theme}>
      <PaperProvider theme={theme}>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          {isAuthenticated ? (
            <RootStack.Screen name="TabNavigator" component={TabNavigator} />
          ) : (
            <RootStack.Screen name="AuthStack" component={AuthStackNavigator} />
          )}
        </RootStack.Navigator>
        <StatusBar style={isDarkMode ? "dark" : "light"} />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;
