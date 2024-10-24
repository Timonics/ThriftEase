import React, { createContext, useContext, useEffect, useState } from "react";
import {
  MyAppProviderProps,
  MyAppContext,
  UserProfile,
  Category,
} from "../interfaces/thriftease-interface";
import { config } from "../config";
import axios from "axios";

const MyContext = createContext<MyAppContext | undefined>(undefined);

const MyAppDataProvider: React.FC<MyAppProviderProps> = ({ children }) => {
  const dbURL = config.dbURL;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 0,
      name: "",
    },
  ]);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: 0,
    name: "",
    email: "",
  });

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${dbURL}categories`);
      setCategories(response.data.categories);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const contextValues = {
    isAuthenticated,
    setIsAuthenticated,
    isSignUpFormOpen,
    setIsSignUpFormOpen,
    userProfile,
    setUserProfile,
    categories,
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
