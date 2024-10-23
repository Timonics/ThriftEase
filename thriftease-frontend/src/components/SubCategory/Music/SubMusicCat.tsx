import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SubMusicCat = (props: Props) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="space-y-1">
        <h1 className="text-4xl font-bold text-appgreen">
          Music & Instruments
        </h1>
        <p className="text-sm font-light text-appdarkblue/75">
          Unleash your creativity with our Music & Instruments collection.
          Whether you're a seasoned musician or just starting out, explore a
          range of instruments and accessories to match your passion. Use the
          filters to find the perfect gear to create your next masterpiece.
        </p>
      </div>
      <div className="flex gap-7 text-sm items-center justify-center">
        <NavLink to="">Musical Instruments</NavLink>
        <NavLink to="">Audio Equipment</NavLink>
        <NavLink to="">Music Accessories</NavLink>
        <NavLink to="">Music Merchandise</NavLink>
        <NavLink to="">Music Software</NavLink>
        <NavLink to="">Music CDs & Vinyls</NavLink>
      </div>
    </div>
  );
};

export default SubMusicCat;
