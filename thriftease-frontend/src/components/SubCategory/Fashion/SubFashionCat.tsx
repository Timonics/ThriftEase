import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SubFashionCat = (props: Props) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="space-y-1">
        <h1 className="text-4xl font-bold text-appgreen">Fashion & Apparels</h1>
        <p className="text-sm font-light text-appdarkblue/75">
          Discover a diverse selection of fashion items in our Clothing &
          Accessories category. From stylish outfits to matching accessories,
          find everything you need to express your unique style. Filter through
          our options to find the perfect look for any occasion.
        </p>
      </div>
      <div className="flex gap-7 items-center justify-center">
        <NavLink to="">Men’s Clothing</NavLink>
        <NavLink to="">Women’s Clothing</NavLink>
        <NavLink to="">Footwear</NavLink>
        <NavLink to="">Handbags & Accessories</NavLink>
        <NavLink to="">Watches & Jewelry</NavLink>
        <NavLink to="">Kids’ Clothing</NavLink>
      </div>
    </div>
  );
};

export default SubFashionCat;
