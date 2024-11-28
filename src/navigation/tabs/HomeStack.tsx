import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/Home";
import DetailsScreen from "../../screens/Details";
import { TransitionPresets } from "@react-navigation/bottom-tabs";
import { HomeStackParamList } from "../../types/navigation.types";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Group screenOptions={({ navigation }) => ({})}>
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
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStack;
