import React from "react";
import { NavLink, useLocation } from "react-router-dom";

type Props = {};

const SubElectronicsCat = (props: Props) => {
  const location = useLocation();
  const activeLink = new URLSearchParams(location.search).get("subcategory");

  return (
    <div className="flex flex-col gap-7">
      <div className="space-y-1">
        <h1 className="text-4xl font-bold text-appgreen">
          Electronics & Gadgets
        </h1>
        <p className="text-sm font-light text-appdarkblue/75">
          Welcome to the Electronics & Gadgets section of ThriftEase! Discover a
          wide range of pre-owned tech items that fit your budget and lifestyle.
          Whether you're looking for the latest smartphones, laptops, or
          accessories, you'll find quality products at unbeatable prices.
        </p>
      </div>
      {/* <h2 className="text-sm underline">Shop by specific item-type</h2> */}
      <div className="flex gap-5 items-center justify-center p-2">
        <NavLink
          to="?subcategory=smartphone"
          className={`p-2 relative ${
            activeLink === "smartphone" ? "border-active font-bold" : "border-inactive hover:bg-slate-300/15 font-light"
          }`}
        >
          Smartphones
        </NavLink>
        <NavLink
          to="?subcategory=laptops"
          className={`p-2 relative ${
            activeLink === "laptops" ? "border-active font-bold" : "border-inactive hover:bg-slate-300/15 font-light"
          }`}
        >
          Laptops
        </NavLink>
        <NavLink
          to="?subcategory=tablets"
          className={`p-2 relative ${
            activeLink === "tablets" ? "border-active font-bold" : "border-inactive hover:bg-slate-300/15 font-light"
          }`}
        >
          Tablets
        </NavLink>
        <NavLink
          to="?subcategory=accessories"
          className={`p-2 relative ${
            activeLink === "accessories" ? "border-active font-bold" : "border-inactive hover:bg-slate-300/15 font-light"
          }`}
        >
          Accessories
        </NavLink>
        <NavLink
          to="?subcategory=camera"
          className={`p-2 relative ${
            activeLink === "camera" ? "border-active font-bold" : "border-inactive hover:bg-slate-300/15 font-light"
          }`}
        >
          Cameras & Photography
        </NavLink>
        <NavLink
          to="?subcategory=gaming"
          className={`p-2 relative ${
            activeLink === "gaming" ? "border-active font-bold" : "border-inactive hover:bg-slate-300/15 font-light"
          }`}
        >
          Gaming Consoles
        </NavLink>
      </div>
    </div>
  );
};

export default SubElectronicsCat;
