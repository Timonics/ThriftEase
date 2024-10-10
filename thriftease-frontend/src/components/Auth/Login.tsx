import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import googleLogo from "../../assets/googleLogo.png";
import { FaFacebook } from "react-icons/fa";

import { FormData } from "../../interfaces/thriftease-interface";
import axios from "axios";
import { config } from "../../config";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const api = config.dbURL;
    try {
      const logResponse = await axios.post(`${api}users/login`, formData);
      alert("Sign in successful");
      navigate("/");
    } catch (err: any) {
      console.log("Error: ", console.log(err.response.data.message));
    }
  };

  return (
    <div className="h-screen auth-background flex items-center justify-center">
      <div className="w-[35%] bg-slate-100 shadow-2xl shadow-black/60 flex flex-col p-2">
        <Link to={"/home"} className="font-black mt-1 text-appgreen">
          ThriftEase.
        </Link>
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
              value={formData.email}
              className="outline-none p-2 border-b-2 border-appgreen/50 bg-slate-100"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={formData.password}
              className="outline-none p-2 border-b-2 border-appgreen/50 bg-slate-100"
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
            <span className="text-appgreen font-bold text-sm">ThriftEase.</span>{" "}
            account?{" "}
            <span className="underline underline-offset-1 text-appdarkblue font-bold">
              Sign up
            </span>
          </p>
          <p className="text-xs text-appdarkblue/50">or</p>
          <div className="w-full flex flex-col gap-2 px-2 mb-1">
            <div className="p-3 w-full text-center border-2 border-slate-200 bg-white font-semibold flex gap-3 justify-center items-center">
              <img src={googleLogo} alt="google logo" width={27} height={27} />
              Sign in with Google
            </div>
            <div className="p-3 border-2 border-[#c3d0f6] bg-[#3b5998] w-full text-center text-[#f7f7f7] font-semibold flex gap-3 justify-center items-center">
              <FaFacebook size={18} />
              Sign in with Facebook
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
