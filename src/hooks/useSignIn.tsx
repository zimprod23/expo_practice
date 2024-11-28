// import { useState } from "react";
// import { signIn } from "../api/auth.api"; // Import your sign-in function
// import { SignInParams, AuthResponse } from "../types/api.types"; // Import types

// export const useSignIn = () => {
//   const [authToken, setAuthToken] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const signInHandler = async (credentials: SignInParams) => {
//     setIsLoading(true);
//     setError(null);
//     console.log("From the upper handler");
//     try {
//       const response: AuthResponse = await signIn(credentials);
//       console.log("response", response);
//       setAuthToken(response.token); // Assuming your response has a `token`
//       setIsLoading(false);
//       // Handle successful sign-in, maybe navigate or update state
//       console.log("Sign-in successful:", response);
//     } catch (err) {
//       setIsLoading(false);
//       setError("Sign-in failed. Please try again.");
//       console.error("Error signing in:", err);
//     }
//   };

//   return { authToken, isLoading, error, signInHandler };
// };
