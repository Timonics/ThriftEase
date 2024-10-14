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

const SideNav: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full gap-1.5 text-appdarkblue">
      <NavLink
        end
        to={"/categories/electronics-and-gadgets"}
        className={({ isActive }) =>
          isActive
            ? "p-2 sidenav-background flex gap-1 items-center font-semibold pl-5 text-[11px]"
            : "p-2 flex gap-1 items-center font-semibold pl-5 text-[11px] transition duration-300 ease-out hover:bg-slate-100/75"
        }
      >
        <HiDevicePhoneMobile size={17} />
        Electronics & Gadgets
      </NavLink>
      <NavLink
        to={"/categories/fashion-and-apparels"}
        className={({ isActive }) =>
          isActive
            ? "p-2 sidenav-background flex gap-1 items-center font-semibold pl-5 text-[11px]"
            : "p-2 flex gap-1 items-center font-semibold pl-5 text-[11px] transition duration-300 ease-out hover:bg-slate-100/75"
        }
      >
        <GiAmpleDress size={17} />
        Fashion & Apparels
      </NavLink>
      <NavLink
        to={"/categories/home-and-living"}
        className={({ isActive }) =>
          isActive
            ? "p-2 sidenav-background flex gap-1 items-center font-semibold pl-5 text-[11px]"
            : "p-2 flex gap-1 items-center font-semibold pl-5 text-[11px] transition duration-300 ease-out hover:bg-slate-100/75"
        }
      >
        <HiOutlineHomeModern size={17} />
        Home & Living
      </NavLink>
      <NavLink
        to={"/categories/books-and-stationery"}
        className={({ isActive }) =>
          isActive
            ? "p-2 sidenav-background flex gap-1 items-center font-semibold pl-5 text-[11px]"
            : "p-2 flex gap-1 items-center font-semibold pl-5 text-[11px] transition duration-300 ease-out hover:bg-slate-100/75"
        }
      >
        <PiBooks size={17} />
        Books & Stationery
      </NavLink>
      <NavLink
        to={"/categories/sports-and-outdoor"}
        className={({ isActive }) =>
          isActive
            ? "p-2 sidenav-background flex gap-1 items-center font-semibold pl-5 text-[11px]"
            : "p-2 flex gap-1 items-center font-semibold pl-5 text-[11px] transition duration-300 ease-out hover:bg-slate-100/75"
        }
      >
        <IoMdFootball size={17} />
        Sports & Outdoor
      </NavLink>
      <NavLink
        to={"/categories/music-and-instruments"}
        className={({ isActive }) =>
          isActive
            ? "p-2 sidenav-background flex gap-1 items-center font-semibold pl-5 text-[11px]"
            : "p-2 flex gap-1 items-center font-semibold pl-5 text-[11px] transition duration-300 ease-out hover:bg-slate-100/75"
        }
      >
        <TbMusic size={17} />
        Music & Instruments
      </NavLink>
      <NavLink
        to={"/categories/beauty-and-health"}
        className={({ isActive }) =>
          isActive
            ? "p-2 sidenav-background flex gap-1 items-center font-semibold pl-5 text-[11px]"
            : "p-2 flex gap-1 items-center font-semibold pl-5 text-[11px] transition duration-300 ease-out hover:bg-slate-100/75"
        }
      >
        <GiLipstick size={17} />
        Beauty & Health
      </NavLink>
      <NavLink
        to={"/categories/automobiles"}
        className={({ isActive }) =>
          isActive
            ? "p-2 sidenav-background flex gap-1 items-center font-semibold pl-5 text-[11px]"
            : "p-2 flex gap-1 items-center font-semibold pl-5 text-[11px] transition duration-300 ease-out hover:bg-slate-100/75"
        }
      >
        <IoCarSportSharp size={17} />
        Automobiles & Accessories
      </NavLink>
      <NavLink
        to={"/categories/miscellaneous"}
        className={({ isActive }) =>
          isActive
            ? "p-2 sidenav-background flex gap-1 items-center font-semibold pl-5 text-[11px]"
            : "p-2 flex gap-1 items-center font-semibold pl-5 text-[11px] transition duration-300 ease-out hover:bg-slate-100/75"
        }
      >
        <FiPackage size={17} />
        Odds & Ends
      </NavLink>
    </div>
  );
};

export default SideNav;
