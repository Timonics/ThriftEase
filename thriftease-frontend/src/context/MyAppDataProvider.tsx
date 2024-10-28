import React, { createContext, useContext, useEffect, useState } from "react";
import {
  MyAppProviderProps,
  MyAppContext,
  UserProfile,
  Category,
  LoginData,
} from "../interfaces/thriftease-interface";
import { config } from "../config";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const MyContext = createContext<MyAppContext | undefined>(undefined);

const MyAppDataProvider: React.FC<MyAppProviderProps> = ({ children }) => {
  const dbURL = config.dbURL;
  const navigate = useNavigate();
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

  //fetching all categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${dbURL}categories`);

      //setting the category state
      setCategories(response.data.categories);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  //running fetchCategories() on first app render
  useEffect(() => {
    fetchCategories();
  }, []);

  //user login logic
  const loginUser = async (userCredientials: LoginData) => {
    try {
      const logResponse = await axios.post(
        `${dbURL}users/login`,
        userCredientials
      );
      console.log(logResponse.data.user);
      const { id, name, email } = logResponse.data.user;
      const userData: UserProfile = { id, name, email };

      setIsAuthenticated(true);
      setUserProfile(userData);

      //setting cookie to store user profile for session persistance
      Cookies.set("userProfile", JSON.stringify(userData), { expires: 1 });
    } catch (err: any) {
      console.log("Error: ", console.log(err.response.data.message));
    } finally {
      navigate("/home");
    }
  };

  //fetching stored profile from cookie
  const profile = Cookies.get("userProfile");
  //parsing profile string into JSON and setting userprofile state as long as the profile cookie is true
  useEffect(() => {
    if (profile) {
      const loggedUserProfile = JSON.parse(profile);
      setUserProfile(loggedUserProfile);
      setIsAuthenticated(true)
    }
  }, []);

  //user logout login
  const userLogout = async () => {
    try {
      const response = await axios.post(`${dbURL}users/logout`);

      Cookies.remove("userProfile");
      setIsAuthenticated(false);
      setUserProfile({
        id: 0,
        name: "",
        email: "",
      });
    } catch (err: any) {
      console.log("Error: ", console.log(err.response.data.message));
    } finally {
      navigate("/home");
    }
  };

  const contextValues = {
    isAuthenticated,
    setIsAuthenticated,
    isSignUpFormOpen,
    setIsSignUpFormOpen,
    userProfile,
    setUserProfile,
    categories,
    loginUser,
    userLogout,
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
