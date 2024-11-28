import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthResponse, SignInParams } from "../types/api.types";
import { StorageService } from "../state/persistence";
import { signIn as signInApi } from "../api/auth.api";

// Define types for the context
interface AuthContextType {
  authToken: string | null;
  isAuthenticated: boolean;
  signIn: (credentials: SignInParams) => Promise<void>;
  signOut: () => Promise<void>;
}

// type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const loadToken = async () => {
      const token = await StorageService.getJWTToken();
      if (token) {
        setAuthToken(token);
        setIsAuthenticated(true);
      }
    };
    loadToken();
  }, []);

  const signIn = async (credentials: SignInParams) => {
    try {
      const response: AuthResponse = await signInApi(credentials);
      if (!response.token) {
        return;
      }
      setAuthToken(response.token);
      setIsAuthenticated(true);
      await StorageService.setJWTToken(response.token);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const signOut = async () => {
    setAuthToken(null);
    setIsAuthenticated(false);
    await StorageService.removeJWTToken();
  };

  return (
    <AuthContext.Provider
      value={{ authToken, isAuthenticated, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
};
