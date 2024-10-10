import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between p-4">
      <Link to={"/"} className="font-black text-appgreen">
        ThriftEase.
      </Link>
      <div className="space-x-8 font-light">
        <Link to={"/login"} className="font-bold text-white/70">
          Log in
        </Link>
        <Link
          to={"/register"}
          className="py-2 px-5 border-4 border-appdarkblue font-extrabold bg-appgreen text-appdarkblue transition ease-in-out duration-500 hover:bg-appblue"
        >
          Register
        </Link>
        <Link to={"cart"}>Cart</Link>
      </div>
    </div>
  );
};

export default Nav;
