import React, { useState } from "react";
import {
  Pressable,
  Animated,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  bgColor?: string;
  bgColorPressed?: string;
  textColor?: string;
  textColorPressed?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  bgColor = "#1E90FF",
  bgColorPressed = "#344563",
  textColor = "white",
  textColorPressed = "white",
}) => {
  const [pressOpacity] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.timing(pressOpacity, {
      toValue: 0.8,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(pressOpacity, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? bgColorPressed : bgColor },
      ]}
    >
      {({ pressed }) => (
        <Animated.Text
          style={[
            styles.text,
            {
              opacity: pressOpacity,
              color: pressed ? textColorPressed : textColor,
            },
          ]}
        >
          {title}
        </Animated.Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 20,
    width: "95%",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CustomButton;
