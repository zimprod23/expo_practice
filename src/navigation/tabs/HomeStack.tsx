import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/Home";
import DetailsScreen from "../../screens/Details";
import { TransitionPresets } from "@react-navigation/bottom-tabs";
import { HomeStackParamList } from "../../types/navigation.types";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        options={{
          presentation: "modal",
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.ShiftTransition,
        }}
        name="Details"
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
