import React from "react";
import Cookies from "js-cookie";
import { useMyContext } from "../../context/MyAppDataProvider";
import { Link } from "react-router-dom";

const DashBoard: React.FC = () => {
  const { userProfile } = useMyContext();
  const userNameArr = userProfile.name.split(" ");
  const initials = userNameArr
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex flex-col gap-5 p-4">
      <div className="text-5xl text-appdarkblue font-bold">
        Welcome, {userProfile.name.split(" ")[1]}
      </div>
      <div className="flex p-4 items-center justify-around">
        <div className="flex p-6 gap-5 product-background items-center rounded-xl shadow-xl">
          <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center text-3xl font-bold bg-gray-950 text-appgreen">
            {!userProfile.id ? "" : initials}
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">{userProfile.name}</h2>
            <p className="text-sm">{userProfile.email}</p>
          </div>
        </div>
        <div className="p-6 h-[108px] w-[320px] product-background rounded-xl shadow-xl space-y-1">
          <h1 className="text-3xl font-bold ">My Earnings</h1>
          <p className="text-xl">₦</p>
        </div>
      </div>
      <div className="h-[300px] rounded-xl gap-2 bg-gray-950/40 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">You don't have any listed items</h1>
        <p className="text-xs font-light">let's fix that</p>
        <Link
          to={"../listing"}
          className="py-2 px-4 text-sm font-bold bg-appgreen text-appdarkblue transition duration-500 ease-out hover:bg-appblue hover:text-appdarkblue rounded-lg"
        >
          List your item
        </Link>
      </div>
    </div>
  );
};

export default DashBoard;
