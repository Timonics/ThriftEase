import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SubSportsCat = (props: Props) => {
  return (
    <div>
      <h1>Sports & Outdoor</h1>
      <p>
        Gear up for your next adventure with our Sports & Outdoor collection.
        From fitness equipment to outdoor essentials, find everything you need
        to stay active and explore the great outdoors. Use the filters to
        discover the best gear for your sporting needs.
      </p>
      <h2></h2>
      <div>
        <NavLink to="">Exercise Equipment</NavLink>
        <NavLink to="">Camping Gear</NavLink>
        <NavLink to="">Cycling</NavLink>
        <NavLink to="">Outdoor Furniture</NavLink>
        <NavLink to="">Sports Apparel</NavLink>
      </div>
    </div>
  );
};

export default SubSportsCat;
