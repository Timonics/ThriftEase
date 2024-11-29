import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";

import { TbHome } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { TbShoppingCart } from "react-icons/tb";
import { MdOutlineSell } from "react-icons/md";
import { TbLayoutDashboard } from "react-icons/tb";
import { TbCategory } from "react-icons/tb";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TbHelp } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";
import { useMyContext } from "../../context/MyAppDataProvider";
import Initials from "../Badge/Initials";

const SideNav: React.FC = () => {
  const { userProfile } = useMyContext();

  return (
    <div className="flex flex-col h-full w-full gap-1.5 text-appdarkblue">
      <NavLink
        end
        to={"/home"}
        className={({ isActive }) =>
          isActive
            ? "p-2 sidenav-background flex gap-1 items-center font-semibold pl-5 text-xs"
            : "p-2 flex gap-1 items-center font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
        }
      >
        <TbHome size={17} />
        Home
      </NavLink>
      <NavLink
        to={"search"}
        className={({ isActive }) =>
          isActive
            ? "p-2 sidenav-background flex gap-1 items-center font-semibold pl-5 text-xs"
            : "p-2 flex gap-1 items-center font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
        }
      >
        <BiSearchAlt size={17} />
        Browse Items
      </NavLink>
      <NavLink
        to={"dashboard"}
        className={({ isActive }) =>
          isActive
            ? "p-2 sidenav-background flex gap-1 items-center font-semibold pl-5 text-xs"
            : "p-2 flex gap-1 items-center font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
        }
      >
        <TbLayoutDashboard size={17} />
        DashBoard
      </NavLink>
      <NavLink
        to={"listing"}
        className={({ isActive }) =>
          isActive
            ? "p-2 sidenav-background flex gap-1 items-center font-semibold pl-5 text-xs"
            : "p-2 flex gap-1 items-center font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
        }
      >
        <MdOutlineSell size={17} />
        Sell an Item
      </NavLink>
      <NavLink
        to={"cart"}
        className={({ isActive }) =>
          isActive
            ? "p-2 sidenav-background flex gap-1 items-center font-semibold pl-5 text-xs"
            : "p-2 flex gap-1 items-center font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
        }
      >
        <TbShoppingCart size={17} />
        My Cart
      </NavLink>
      <NavLink
        to={"category"}
        className={({ isActive }) =>
          isActive
            ? "p-2 sidenav-background flex gap-1 items-center font-semibold pl-5 text-xs"
            : "p-2 flex gap-1 items-center font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
        }
      >
        <TbCategory size={17} />
        Category
      </NavLink>
      <div className="mt-auto flex-col flex gap-1.5 mb-4">
        {userProfile.id !== 0 && (
          <NavLink
            to={"../account"}
            className={({ isActive }) =>
              `flex gap-1 text-xs font-semibold p-2 ${
                userProfile.name ? "pl-3" : "pl-4"
              } ${isActive ? "sidenav-background" : ""}`
            }
          >
            <div className="flex gap-1 items-center">
              {userProfile.name ? (
                <Initials />
              ) : (
                <MdOutlineAccountCircle size={17} />
              )}
              Account
            </div>
          </NavLink>
        )}
        <NavLink
          to={"../help-and-support"}
          className="p-2 flex gap-1 items-center font-semibold pl-4 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
        >
          <TbHelp size={17} />
          Help & Support
        </NavLink>
        <NavLink
          to={"../settings"}
          className="p-2 flex gap-1 items-center font-semibold pl-4 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
        >
          <TbSettings size={17} />
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default SideNav;
