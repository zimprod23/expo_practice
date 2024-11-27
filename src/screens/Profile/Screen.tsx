import React from "react";
import { ContainerStyles } from "../../styles/GlobalStyles";
import { ThemedScreen, ThemedText } from "../../components/themed";

const ProfileScreen = () => {
  return (
    <ThemedScreen style={ContainerStyles.centerizedContainer}>
      <ThemedText>Profile</ThemedText>
    </ThemedScreen>
  );
};

export default ProfileScreen;
