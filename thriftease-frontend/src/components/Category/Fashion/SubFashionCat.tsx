import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SubFashionCat = (props: Props) => {
  return (
    <div>
      <h1>Fashion & Apparels</h1>
      <p>
        Discover a diverse selection of fashion items in our Clothing &
        Accessories category. From stylish outfits to matching accessories, find
        everything you need to express your unique style. Filter through our
        options to find the perfect look for any occasion.
      </p>
      <h2></h2>
      <div>
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
