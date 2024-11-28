import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types/navigation.types";
import SignInScreen from "../../screens/Signin";
import SignUpScreen from "../../screens/Signup";
import ForgotPasswordScreen from "../../screens/Forgotpassword";

const Stack = createNativeStackNavigator<AuthStackParamList>(); // Pass the type to Stack Navigator

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
