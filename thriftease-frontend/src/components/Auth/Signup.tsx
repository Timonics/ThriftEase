import React from "react";
import { useMyContext } from "../../context/MyAppDataProvider";
import Logo from "../Badge/Logo";

import Oauth from "./Oauth";
import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";

type Props = {};

const Signup: React.FC = (props: Props) => {
  const { isSignUpFormOpen, setIsSignUpFormOpen } = useMyContext();
  return (
    <div className="h-screen auth-background flex items-center justify-center ">
      {!isSignUpFormOpen ? (
        <div className="p-2 bg-slate-100 shadow-2xl shadow-black/60">
          <Logo />
          <div className="flex flex-col gap-3 mt-5 p-4">
            <h1 className="text-2xl font-bold text-appdarkblue pb-2">
              Create your{" "}
              <span className="text-appgreen font-extrabold">ThriftEase.</span>{" "}
              account
            </h1>
            <Oauth />
            <p className="text-sm text-center text-appdarkblue/50">or</p>
            <button
              className="p-2 mx-2 text-lg font-bold text-appdarkblue bg-appgreen text-center transition duration-500 ease-in-out hover:bg-appdarkblue hover:text-appgreen"
              onClick={() => setIsSignUpFormOpen(true)}
            >
              Sign Up with your Email
            </button>
            <p className="text-xs text-appdarkblue/85 text-center mt-2">
              Do you have a{" "}
              <span className="text-appgreen font-bold text-sm ">
                ThriftEase.
              </span>{" "}
              account?{" "}
              <Link
                to="/login"
                className="underline underline-offset-1 text-appdarkblue font-bold text-sm"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <SignUpForm />
      )}
    </div>
  );
};

export default Signup;
