import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { MdSell } from "react-icons/md";

import { LoginData } from "../../interfaces/thriftease-interface";
import axios from "axios";
import { config } from "../../config";
import Logo from "../Badge/Logo";
import Oauth from "./Oauth";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const api = config.dbURL;
    try {
      const logResponse = await axios.post(`${api}users/login`, loginData);
      alert("Sign in successful");
      navigate("/home");
    } catch (err: any) {
      console.log("Error: ", console.log(err.response.data.message));
    }
  };

  return (
    <div className="h-screen auth-background flex items-center justify-center">
      <div className="w-[35%] bg-slate-100 shadow-2xl shadow-black/60 flex flex-col p-2">
        <Logo />
        <div className="flex flex-col items-center p-4 gap-3">
          <form
            className="flex flex-col gap-2 w-full p-2"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-bold text-appdarkblue">
              Login to your account
            </h1>
            <input
              type="text"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={loginData.email}
              className=""
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={loginData.password}
              className=""
            />
            <button className="bg-appgreen p-2 font-extrabold mt-2 text-appdarkblue transition duration-300 ease-in-out hover:bg-appdarkblue hover:text-appgreen">
              Sign in
            </button>
            <p className="text-start w-full text-xs underline underline-offset-1 font-semibold text-appdarkblue">
              Forgot Password
            </p>
          </form>
          <p className="text-xs text-appdarkblue/85">
            Don't have a{" "}
            <span className="text-appgreen font-bold text-sm ">ThriftEase.</span>{" "}
            account?{" "}
            <Link to="/register" className="underline underline-offset-1 text-appdarkblue font-bold">
              Sign up
            </Link>
          </p>
          <p className="text-xs text-appdarkblue/50">or</p>
          <Oauth />
        </div>
      </div>
    </div>
  );
};

export default Login;
