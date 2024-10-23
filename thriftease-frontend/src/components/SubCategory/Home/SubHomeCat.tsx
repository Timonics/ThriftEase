import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SubHomeCat = (props: Props) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="space-y-1">
        <h1 className="text-4xl font-bold text-appgreen">Home & Living</h1>
        <p className="text-sm font-light text-appdarkblue/75">
          Transform your living space with our curated selection of Home &
          Living essentials. From furniture to decorative pieces, find
          everything you need to create a cozy and stylish home. Use our filters
          to easily browse through items that match your taste and elevate your
          space to the next level.
        </p>
      </div>
      <div className="flex gap-7 items-center justify-center">
        <NavLink to="">Furniture</NavLink>
        <NavLink to="">Home Décor</NavLink>
        <NavLink to="">Kitchenware</NavLink>
        <NavLink to="">Bedding & Linens</NavLink>
        <NavLink to="">Lighting</NavLink>
      </div>
    </div>
  );
};

export default SubHomeCat;
