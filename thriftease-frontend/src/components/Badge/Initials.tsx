import React from "react";
import { useMyContext } from "../../context/MyAppDataProvider";

const Initials: React.FC = () => {
  const { userProfile } = useMyContext();

  const userNameArr = userProfile.name.split(" ");
  const initials = userNameArr
    .map((name) => name[0])
    .join("")
    .toUpperCase();
  return (
    <div className="font-bold w-[28px] h-[28px] flex items-center justify-center text-[11px] rounded-full bg-gray-950 text-appgreen">
      {initials}
    </div>
  );
};

export default Initials;