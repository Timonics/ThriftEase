import React from "react";
import { NavLink, useLocation } from "react-router-dom";

type Props = {};

const SubElectronicsCat = (props: Props) => {
  return (
    <div>
      <h1>Electronics & Gadgets</h1>
      <p>
        Welcome to the Electronics & Gadgets section of ThriftEase! Discover a
        wide range of pre-owned tech items that fit your budget and lifestyle.
        Whether you're looking for the latest smartphones, laptops, or
        accessories, you'll find quality products at unbeatable prices.
      </p>
      <h2>Explore SubCategories</h2>
      <div>
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
