import { NavigatorScreenParams } from "@react-navigation/native";
import { Person } from "../state/static/sampleData";

// Define the parameter list for HomeStack
export type HomeStackParamList = {
  Home: undefined; // No parameters for HomeScreen
  Details: { person: Person }; // Replace 'id' with the actual parameter(s) for DetailsScreen
};

export type TabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  ProfileStack: undefined; // No parameters for ProfileStack
};
