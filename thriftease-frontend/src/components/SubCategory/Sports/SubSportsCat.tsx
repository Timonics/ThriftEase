import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SubSportsCat = (props: Props) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="space-y-1">
        <h1 className="text-4xl font-bold text-appgreen">Sports & Outdoor</h1>
        <p className="text-sm font-light text-appdarkblue/75">
          Gear up for your next adventure with our Sports & Outdoor collection.
          From fitness equipment to outdoor essentials, find everything you need
          to stay active and explore the great outdoors. Use the filters to
          discover the best gear for your sporting needs.
        </p>
      </div>
      <div className="flex gap-7 items-center justify-center">
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
