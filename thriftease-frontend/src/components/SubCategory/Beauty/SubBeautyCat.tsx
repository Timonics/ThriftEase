import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SubBeautyCat = (props: Props) => {
  return (
    <div>
      <h1>Beauty & Health</h1>
      <p>
        Elevate your self-care routine with our Beauty & Health collection. From
        skincare essentials to wellness products, discover everything you need
        to look and feel your best. Filter through our range to find the perfect
        items to enhance your beauty and well-being.
      </p>
      <h2></h2>
      <div>
        <NavLink to="">Skincare</NavLink>
        <NavLink to="">Haircare</NavLink>
        <NavLink to="">Makeup</NavLink>
        <NavLink to="">Fragrances
        </NavLink>
        <NavLink to="">Grooming Tools
        </NavLink>
      </div>
    </div>
  );
};

export default SubBeautyCat;
