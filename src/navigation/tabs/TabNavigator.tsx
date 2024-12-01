import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/Theme/ThemeContext";
import { TabParamList } from "../../types/navigation.types";
import { Pressable, View } from "react-native";
import { useAuthContext } from "../../contexts/AuthContext";
import PlacesScreen from "../../screens/Places";

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const { theme } = useTheme();
  const { signOut } = useAuthContext();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          // backgroundColor: theme.colors.background,
        },

        tabBarActiveTintColor: theme.colors.text,
        tabBarInactiveTintColor: "gray",
      }}
      initialRouteName="HomeStack"
    >
      <Tab.Group
        screenOptions={({ navigation }) => ({
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerRight: () => (
            <Pressable
              style={{ padding: 5, marginRight: 10 }}
              onPress={() => {
                signOut();
              }}
            >
              <Ionicons name="log-out-outline" size={35} color={"red"} />
            </Pressable>
          ),
        })}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            title: "Profile",

            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Places"
          component={PlacesScreen}
          options={{
            title: "Places",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="nature-people" size={size} color={color} />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default TabNavigator;
