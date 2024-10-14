import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SubHomeCat = (props: Props) => {
  return (
    <div>
      <h1>Home & Living</h1>
      <p>
        Transform your living space with our curated selection of Home & Living
        essentials. From furniture to decorative pieces, find everything you
        need to create a cozy and stylish home. Use our filters to easily browse
        through items that match your taste and elevate your space to the next
        level.
      </p>
      <h2></h2>
      <div>
        <NavLink to="">Furniture</NavLink>
        <NavLink to="">Home Décor
        </NavLink>
        <NavLink to="">Kitchenware</NavLink>
        <NavLink to="">Bedding & Linens
        </NavLink>
        <NavLink to="">Lighting
        </NavLink>
      </div>
    </div>
  );
};

export default SubHomeCat;
