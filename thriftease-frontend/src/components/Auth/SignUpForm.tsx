import React, { ChangeEvent, FormEvent, useState } from "react";
import Logo from "../Badge/Logo";

import { FaArrowLeft } from "react-icons/fa6";
import { useMyContext } from "../../context/MyAppDataProvider";
import axios from "axios";
import { config } from "../../config";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "../../interfaces/thriftease-interface";

type Props = {};

const SignUpForm: React.FC = (props: Props) => {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUserProfile } = useMyContext();
  const [registerFormData, setRegisterFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const api = config.dbURL;
    try {
      const formData = {
        name: registerFormData.firstName + " " + registerFormData.lastName,
        email: registerFormData.email,
        password: registerFormData.password,
      };

      const registerResponse = await axios.post(
        `${api}users/register`,
        formData
      );

      const userData: UserProfile = registerResponse.data.user;

      setUserProfile(userData);
      setIsAuthenticated(true);
      navigate("/home")
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const { setIsSignUpFormOpen } = useMyContext();

  return (
    <div className="p-4 bg-slate-100 shadow-2xl shadow-black/60 space-y-7 w-2/5">
      <Logo />
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <button
          className="flex gap-1 text-xs font-light items-center w-fit text-appdarkblue hover:text-appgreen"
          onClick={() => setIsSignUpFormOpen(false)}
        >
          <FaArrowLeft />
          Go Back
        </button>
        <h1 className="text-2xl font-bold text-appdarkblue">
          Fill in your details to register.
        </h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={registerFormData.firstName}
            className="w-1/2"
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={registerFormData.lastName}
            className="w-1/2"
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={registerFormData.email}
        />
        <div className="flex gap-4">
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={registerFormData.password}
            className="w-1/2"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            name="confirmPassword"
            value={registerFormData.confirmPassword}
            className="w-1/2"
          />
        </div>
        <button className="text-appdarkblue font-bold bg-appgreen transition duration-500 ease-in-out hover:bg-appdarkblue hover:text-appgreen p-2 mt-2">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
