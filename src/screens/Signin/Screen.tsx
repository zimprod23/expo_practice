import { Text, View, StyleSheet, Pressable } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox, Divider, TextInput } from "react-native-paper";
import CustomButton from "../../components/custom-button";
import { useThemeColor } from "../../hooks/useThemeColor";
import {
  SignInSchema,
  SignInSchemaType,
} from "../../utils/validation/SignInValidation";
import React, { useEffect } from "react";
import { ThemedText } from "../../components/themed";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  AuthStackParamList,
  RootStackParamList,
} from "../../types/navigation.types";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../../contexts/AuthContext";
import { SignInParams } from "../../types/api.types";

type AuthStackNavigationProp = NativeStackScreenProps<
  AuthStackParamList,
  "SignIn"
>;
type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// type RootStackNavigationProp = NativeStackScreenProps<RootStackParamList>;

export default function App({ navigation }: AuthStackNavigationProp) {
  const tint = useThemeColor({}, "tint");
  const [checked, setChecked] = React.useState(false);
  const navigationState = useNavigation<RootStackNavigationProp>();
  const { signIn, isAuthenticated } = useAuthContext();

  useEffect(() => {
    if (isAuthenticated) {
      navigationState.navigate("TabNavigator", {
        screen: "HomeStack",
        params: { screen: "Home" },
      });
    }
  }, [isAuthenticated]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit: SubmitHandler<SignInSchemaType> = (
    data: SignInSchemaType
  ) => {
    console.log(data as SignInParams);
    signIn(data as SignInParams);
  };

  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const navigateToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  useEffect(() => {
    console.log(navigationState.getState());
  }, []);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View style={styles.inputContainer}>
            <TextInput
              textColor={tint}
              mode="outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              activeOutlineColor={error ? "red" : tint}
              style={[styles.input]}
              placeholderTextColor={tint}
            />
          </View>
        )}
        name="email"
      />
      {errors.email && (
        <Text style={{ color: "#ff8566" }}>{errors.email.message}</Text>
      )}

      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View style={styles.inputContainer}>
            <TextInput
              mode="outlined"
              textColor={tint}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              activeOutlineColor={error ? "red" : tint}
              style={[styles.input]}
              placeholderTextColor={tint}
              secureTextEntry
            />
          </View>
        )}
        name="password"
      />
      {errors.password && (
        <Text style={{ color: "#ff8566" }}>{errors.password.message}</Text>
      )}
      <Pressable onPress={navigateToForgotPassword}>
        <Text style={{ color: "lightblue", textDecorationLine: "underline" }}>
          Forgot your password? Reset it now!
        </Text>
      </Pressable>
      <CustomButton title="Sign In" onPress={handleSubmit(onSubmit)} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <Checkbox
          uncheckedColor={tint}
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <ThemedText>Agree to the terms and conditions</ThemedText>
      </View>
      <Divider style={{ backgroundColor: tint, marginVertical: 6 }} />
      <Pressable onPress={navigateToSignUp}>
        <Text style={{ color: "lightblue", textDecorationLine: "underline" }}>
          Dont have an account? Sign Up
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  inputContainer: {
    paddingVertical: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 4,
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
});
