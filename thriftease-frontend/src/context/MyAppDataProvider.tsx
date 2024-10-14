import React, { createContext, useContext, useState } from "react";
import {
  MyAppProviderProps,
  MyAppContext,
  UserProfile,
} from "../interfaces/thriftease-interface";

const MyContext = createContext<MyAppContext | undefined>(undefined);

const MyAppDataProvider: React.FC<MyAppProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: 0,
    name: "",
    email: "",
  });
  const contextValues = {
    isAuthenticated,
    setIsAuthenticated,
    isSignUpFormOpen,
    setIsSignUpFormOpen,
    userProfile,
    setUserProfile,
  };

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyAppDataProvider");
  }
  return context;
};

export default MyAppDataProvider;
