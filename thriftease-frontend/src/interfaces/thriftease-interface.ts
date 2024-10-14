import { ReactNode, SetStateAction } from "react";

export interface LoginData {
  email: string;
  password: string;
}

export interface ErrorResponse {
  message: string;
}

export interface MyAppContext {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  isSignUpFormOpen: boolean;
  setIsSignUpFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

export interface UserProfile {
  id: number;
  name: string;
  email: string;
}

export interface MyAppProviderProps {
  children: ReactNode;
}
