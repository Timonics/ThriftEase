import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SubMiscellaneousCat = (props: Props) => {
  return (
    <div>
      <h1>Odds & Ends</h1>
      <p>
        Explore our Odds & Ends category, where you'll find a treasure trove of
        unique items that don’t quite fit into any other category. From quirky
        collectibles to useful gadgets, this section is perfect for those
        seeking something special or unexpected. Filter through our diverse
        selection to discover hidden gems that cater to every taste and
        interest.
      </p>
      <h2></h2>
      <div>
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
