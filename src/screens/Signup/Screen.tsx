import { View, Text } from "react-native";
import React from "react";
import { ThemedText } from "../../components/themed";
import { ContainerStyles } from "../../styles/GlobalStyles";

const SignUpScreen = () => {
  return (
    <View style={ContainerStyles.centerizedContainer}>
      <ThemedText>SignUp Screen</ThemedText>
    </View>
  );
};

export default SignUpScreen;
