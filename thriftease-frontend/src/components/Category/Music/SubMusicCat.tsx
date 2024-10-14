import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SubMusicCat = (props: Props) => {
  return (
    <div>
      <h1>Music & Instruments</h1>
      <p>
        Unleash your creativity with our Music & Instruments collection. Whether
        you're a seasoned musician or just starting out, explore a range of
        instruments and accessories to match your passion. Use the filters to
        find the perfect gear to create your next masterpiece.
      </p>
      <h2></h2>
      <div>
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
