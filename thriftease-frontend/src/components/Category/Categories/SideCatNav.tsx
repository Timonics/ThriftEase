import React from "react";
import { NavLink } from "react-router-dom";

import { HiDevicePhoneMobile } from "react-icons/hi2";
import { GiAmpleDress } from "react-icons/gi";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { PiBooks } from "react-icons/pi";
import { IoMdFootball } from "react-icons/io";
import { TbMusic } from "react-icons/tb";
import { GiLipstick } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { FiPackage } from "react-icons/fi";
import { useMyContext } from "../../../context/MyAppDataProvider";

const SideNav: React.FC = () => {
  const { categories } = useMyContext();

  const sideNavElements = categories.map((category) => {
    const icons = [
      { id: 1, icon: <HiDevicePhoneMobile size={17} /> },
      { id: 2, icon: <GiAmpleDress size={17} /> },
      { id: 3, icon: <HiOutlineHomeModern size={17} /> },
      { id: 4, icon: <PiBooks size={17} /> },
      { id: 5, icon: <IoMdFootball size={17} /> },
      { id: 6, icon: <TbMusic size={17} /> },
      { id: 7, icon: <GiLipstick size={17} /> },
      { id: 8, icon: <IoCarSportSharp size={17} /> },
      { id: 9, icon: <FiPackage size={17} /> },
    ];

    const filteredIcon = icons.filter((icon) => icon.id === category.id);

    const iconElement = filteredIcon.map((icon) => (
      <div key={icon.id}>{icon.icon}</div>
    ));

    const categoryName = category.name.split(" ");
    categoryName[1] = "-and-";
    const categoryNamePath = categoryName.join("").toLowerCase();
    return (
      <NavLink
        key={category.id}
        end
        to={`/categories/${categoryNamePath}`}
        className={({ isActive }) =>
          isActive
            ? "p-2 sidenav-background flex gap-1 items-center font-semibold pl-5 text-[11px]"
            : "p-2 flex gap-1 items-center font-semibold pl-5 text-[11px] transition duration-300 ease-out hover:bg-slate-100/75"
        }
      >
        {iconElement}
        {category.name}
      </NavLink>
    );
  });

  return (
    <div className="flex flex-col h-full w-full gap-1.5 text-appdarkblue">
      {sideNavElements}
    </div>
  );
};

export default SideNav;
