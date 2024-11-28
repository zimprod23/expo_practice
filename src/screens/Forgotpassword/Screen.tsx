import { View, Text } from "react-native";
import React from "react";
import { ThemedText } from "../../components/themed";
import { ContainerStyles } from "../../styles/GlobalStyles";

const ForgotPassword = () => {
  return (
    <View style={ContainerStyles.centerizedContainer}>
      <ThemedText>Forgot Password</ThemedText>
    </View>
  );
};

export default ForgotPassword;
