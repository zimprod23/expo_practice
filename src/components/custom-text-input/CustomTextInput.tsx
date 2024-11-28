import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface CustomInputProps {
  value: string;
  placeholder: string;
  onChange: (text: string) => void;
  secureTextEntry?: boolean; // Indicates if it's a password field
  errorMessage?: string;
  style?: object; // Allows custom styles for input container
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  placeholder,
  onChange,
  secureTextEntry = false,
  errorMessage,
  style = {},
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.wrapper, style]}>
      <View
        style={[
          styles.container,
          { borderColor: errorMessage ? "red" : "#e8e8e8" },
        ]}
      >
        <TextInput
          value={value}
          onChangeText={(text) => onChange(text)}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !showPassword}
          style={styles.input}
          placeholderTextColor="#8e8e8e" // Makes placeholder visible in all themes
        />

        {secureTextEntry && (
          <TouchableOpacity
            style={styles.eyeIconContainer}
            onPress={() => setShowPassword(!showPassword)}
          >
            <MaterialIcons
              name={showPassword ? "visibility" : "visibility-off"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>

      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 8,
    width: "100%",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: "95%",
    alignSelf: "center",
  },
  input: {
    flex: 1,
    paddingLeft: 5,
    color: "#000", // Ensures text color is readable
  },
  eyeIconContainer: {
    padding: 5,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
    paddingLeft: 10,
  },
});

export default CustomInput;
