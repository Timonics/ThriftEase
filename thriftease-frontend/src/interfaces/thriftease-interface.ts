import { ReactNode } from "react";

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

export interface UserInfo {
  id: number;
  name: string;
  email: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  owner: UserInfo;
}

export interface ProductInfo {
  name: string;
  categoryId: number;
  subCategoryId: number;
  ownerId: number;
  price: number;
}
