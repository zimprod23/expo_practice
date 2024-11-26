import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../screens/Profile";

const Stack = createNativeStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

export default ProfileStack;
