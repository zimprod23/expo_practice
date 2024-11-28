import { NavigatorScreenParams } from "@react-navigation/native";
import { Person } from "../state/static/sampleData";

export type HomeStackParamList = {
  Home: undefined;
  Details: { person: Person };
};

export type TabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  ProfileStack: undefined;
};

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  TabNavigator: NavigatorScreenParams<TabParamList>;
};
