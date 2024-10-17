import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SubAutoCat = (props: Props) => {
  return (
    <div>
      <h1>Automobiles & Accessories</h1>
      <p>
        Rev up your lifestyle with our Automobile category, featuring a wide
        selection of vehicle accessories, parts, and tools. Whether you're a car
        enthusiast or simply looking to enhance your ride, our collection has
        something for everyone. Use our filters to easily find the items that
        best suit your automotive needs.
      </p>
      <h2></h2>
      <div>
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
