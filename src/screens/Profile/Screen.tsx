import React from "react";
import { ContainerStyles } from "../../styles/GlobalStyles";
import { ThemedScreen, ThemedText } from "../../components/themed";
import { Button } from "react-native-paper";
import { useTheme } from "../../contexts/Theme/ThemeContext";

const ProfileScreen = () => {
  const { toggleTheme } = useTheme();
  return (
    <ThemedScreen style={ContainerStyles.centerizedContainer}>
      <ThemedText>Profile</ThemedText>
      <Button onPress={toggleTheme}>change theme</Button>
    </ThemedScreen>
  );
};

export default ProfileScreen;
