import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/Home";
import DetailsScreen from "../../screens/Details";
import { useTheme } from "../../contexts/Theme/ThemeContext";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.colors.background, // Dynamically change header background
        },
        headerTintColor: theme.colors.text,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
