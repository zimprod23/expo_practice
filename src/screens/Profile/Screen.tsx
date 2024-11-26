import React from "react";
import { Screen } from "../../components/themed/ThemedScreen";
import { Text } from "../../components/themed/ThemedText";
import { View } from "react-native";
import { ContainerStyles } from "../../styles/GlobalStyles";

const ProfileScreen = () => {
  return (
    <Screen style={ContainerStyles.centerizedContainer}>
      <Text>Profile</Text>
    </Screen>
  );
};

export default ProfileScreen;
