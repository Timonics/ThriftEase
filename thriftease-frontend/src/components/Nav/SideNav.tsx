import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="flex flex-col h-full w-full px-4 gap-1.5 text-appdarkblue">
      <NavLink
        to={"/home"}
        className="p-2 flex gap-1 items-center font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
      >
        Home
      </NavLink>
      <NavLink
        to={""}
        className="p-2 font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
      >
        Browse Items
      </NavLink>
      <NavLink
        to={""}
        className="p-2 font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
      >
        My Cart
      </NavLink>
      <NavLink
        to={""}
        className="p-2 font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
      >
        Sell an Item
      </NavLink>
      <NavLink
        to={""}
        className="p-2 font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
      >
        DashBoard
      </NavLink>
      <NavLink
        to={""}
        className="p-2 font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
      >
        Category
      </NavLink>
      <NavLink
        to={""}
        className="p-2 font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
      >
        Premium-Deals
      </NavLink>
      <div className="absolute bottom-4 flex-col flex gap-1.5 w-[290px]">
        <NavLink
          to={""}
          className="p-2 font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
        >
          Account
        </NavLink>
        <NavLink
          to={""}
          className="p-2 font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
        >
          Help & Support
        </NavLink>
        <NavLink
          to={""}
          className="p-2 font-semibold pl-5 text-xs transition duration-300 ease-out hover:bg-slate-100/75"
        >
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default SideNav;
