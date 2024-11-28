import {
  AuthResponse,
  ForgotPasswordParams,
  ForgotPasswordResponse,
  SignInParams,
  SignUpParams,
} from "../types/api.types";

const simulateApiCall = (delay: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, delay));
};

export const signIn = async (params: SignInParams): Promise<AuthResponse> => {
  const { email, password } = params;
  await simulateApiCall(1500);
  return {
    token: "jwt-token-12345",
    user: { id: "1", email },
  };
};

export const signUp = async (params: SignUpParams): Promise<AuthResponse> => {
  const { email, password, username } = params;
  await simulateApiCall(2000);
  return {
    token: "jwt-token-67890",
    user: { id: "2", email, name: username || "New User" },
  };
};

export const forgotPassword = async (
  params: ForgotPasswordParams
): Promise<ForgotPasswordResponse> => {
  const { email } = params;
  await simulateApiCall(1000);
  return {
    message: `Password reset link sent to ${email}`,
  };
};
