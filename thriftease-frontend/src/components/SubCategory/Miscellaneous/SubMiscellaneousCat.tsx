import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SubMiscellaneousCat = (props: Props) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="space-y-1">
        <h1 className="text-4xl font-bold text-appgreen">Odds & Ends</h1>
        <p className="text-sm font-light text-appdarkblue/75">
          Explore our Odds & Ends category, where you'll find a treasure trove
          of unique items that don’t quite fit into any other category. From
          quirky collectibles to useful gadgets, this section is perfect for
          those seeking something special or unexpected. Filter through our
          diverse selection to discover hidden gems that cater to every taste
          and interest.
        </p>
      </div>
      <div className="flex gap-7 items-center justify-center">
        <NavLink to="">Antiques</NavLink>
        <NavLink to="">Art Prints</NavLink>
        <NavLink to="">Coins & Stamps</NavLink>
        <NavLink to="">Memorabilia</NavLink>
        <NavLink to="">Handmade Crafts</NavLink>
      </div>
    </div>
  );
};

export default SubMiscellaneousCat;
