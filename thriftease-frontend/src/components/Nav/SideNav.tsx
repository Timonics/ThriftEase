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

const SideNav: React.FC = () => {
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
      <div className="absolute bottom-4 flex-col flex gap-1.5 w-[290px]">
        <Link
          to={""}
          className="p-2 flex gap-1 items-center font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
        >
          <MdOutlineAccountCircle size={17} />
          Account
        </Link>
        <Link
          to={""}
          className="p-2 flex gap-1 items-center font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
        >
          <TbHelp size={17} />
          Help & Support
        </Link>
        <Link
          to={""}
          className="p-2 flex gap-1 items-center font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
        >
          <TbSettings size={17} />
          Settings
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
