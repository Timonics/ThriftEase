import React from "react";
import { Link } from "react-router-dom";
import { MdSell } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { useMyContext } from "../../context/MyAppDataProvider";
import LogOut from "../LogOut/LogOut";

const Nav: React.FC = () => {
  const { isAuthenticated, userLogout } = useMyContext();
  return (
    <div className="flex justify-between p-4">
      <Link to={"/"} className="font-black text-appgreen flex items-center">
        <MdSell />
        ThriftEase.
      </Link>
      <div className="space-x-8 font-light">
        {!isAuthenticated && (
          <Link
            to={"/login"}
            className="py-2 px-6 border-4 border-appdarkblue font-extrabold bg-appgreen text-appdarkblue transition ease-in-out duration-500 hover:bg-appblue"
          >
            Login
          </Link>
        )}
        {isAuthenticated && (
          <div className="flex gap-10 text-[25px] text-appdarkblue">
            <Link
              to=""
              className="transition hover:text-appblue duration-300 ease-in-out"
            >
              <IoNotifications />
            </Link>
            <LogOut />
          </div>
        )}
        {/* {isAuthenticated && (
          <IoNotifications className="text-[25px] transition hover:text-appgreen duration-500 ease-in-out text-appdarkblue" />
        )}
        {isAuthenticated && (
          <IoLogOut
            onClick={() => userLogout()}
            className="text-[25px] transition hover:text-appgreen duration-500 ease-in-out text-appdarkblue"
          />
        )} */}
      </div>
    </div>
  );
};

export default Nav;
