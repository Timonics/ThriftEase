import React from "react";
import { IoLogOut } from "react-icons/io5";
import { useMyContext } from "../../context/MyAppDataProvider";

type Props = {};

const LogOut = (props: Props) => {
  const { userLogout } = useMyContext();
  return (
    <div>
      <IoLogOut
        onClick={() => userLogout()}
        className="transition hover:text-appblue duration-300 ease-in-out cursor-pointer"
      />
    </div>
  );
};

export default LogOut;
