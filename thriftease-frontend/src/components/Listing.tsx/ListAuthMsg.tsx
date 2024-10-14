import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const ListAuthMsg: React.FC = (props: Props) => {
  return (
    <div className="flex flex-col gap-5 items-center mt-28 w-full">
      <div className="w-3/5 p-8 flex flex-col justify-center items-center gap-8 product-background shadow-2xl shadow-slate-500">
        <h1 className="text-2xl text-appdarkblue font-bold text-center">
          Log in or Sign up to list your items
        </h1>
        <div className="flex gap-10">
          <Link
            to="/login"
            className="p-2 w-[120px] text-center text-appdarkblue bg-appgreen transition duration-500 ease-out hover:scale-125 hover:text-appgreen hover:bg-appdarkblue font-bold text-sm"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="p-2 w-[120px] text-center text-appdarkblue bg-appgreen transition duration-500 ease-out hover:scale-125 hover:text-appgreen hover:bg-appdarkblue font-bold text-sm"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListAuthMsg;
