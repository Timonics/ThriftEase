import React from "react";
import { NavLink, useLocation } from "react-router-dom";

type Props = {};

const SubElectronicsCat = (props: Props) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="space-y-1">
        <h1 className="text-4xl font-bold text-appgreen">Electronics & Gadgets</h1>
        <p className="text-sm font-light text-appdarkblue/75">
          Welcome to the Electronics & Gadgets section of ThriftEase! Discover a
          wide range of pre-owned tech items that fit your budget and lifestyle.
          Whether you're looking for the latest smartphones, laptops, or
          accessories, you'll find quality products at unbeatable prices.
        </p>
      </div>
      {/* <h2 className="text-sm font-medium underline">Shop by specific item-type</h2> */}
      <div className="flex gap-7 items-center justify-center">
        <NavLink to="?subcategory=smartphone">Smartphones</NavLink>
        <NavLink to="?subcategory=laptops">Laptops</NavLink>
        <NavLink to="?subcategory=tablets">Tablets</NavLink>
        <NavLink to="?subcategory=accessories">Accessories</NavLink>
        <NavLink to="?subcategory=camera">Cameras & Photography</NavLink>
        <NavLink to="?subcategory=gaming">Gaming Consoles</NavLink>
      </div>
    </div>
  );
};

export default SubElectronicsCat;
