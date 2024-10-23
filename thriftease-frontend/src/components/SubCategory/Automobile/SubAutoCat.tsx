import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SubAutoCat = (props: Props) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="space-y-1">
        <h1 className="text-4xl font-bold text-appgreen">
          Automobiles & Accessories
        </h1>
        <p className="text-sm font-light text-appdarkblue/75">
          Rev up your lifestyle with our Automobile category, featuring a wide
          selection of vehicle accessories, parts, and tools. Whether you're a
          car enthusiast or simply looking to enhance your ride, our collection
          has something for everyone. Use our filters to easily find the items
          that best suit your automotive needs.
        </p>
      </div>
      <div className="flex gap-7 items-center justify-center">
        <NavLink to="">Car Accessories</NavLink>
        <NavLink to="">Motorcycle Parts</NavLink>
        <NavLink to="">Tires & Wheels</NavLink>
        <NavLink to="">Car Electronics</NavLink>
        <NavLink to="">Tools & Equipment</NavLink>
      </div>
    </div>
  );
};

export default SubAutoCat;
