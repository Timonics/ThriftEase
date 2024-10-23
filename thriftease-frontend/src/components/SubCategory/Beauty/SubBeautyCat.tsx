import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SubBeautyCat = (props: Props) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="space-y-1">
        <h1 className="text-4xl font-bold text-appgreen">Beauty & Health</h1>
        <p className="text-sm font-light text-appdarkblue/75">
          Elevate your self-care routine with our Beauty & Health collection.
          From skincare essentials to wellness products, discover everything you
          need to look and feel your best. Filter through our range to find the
          perfect items to enhance your beauty and well-being.
        </p>
      </div>
      <div className="flex gap-7 items-center justify-center">
        <NavLink to="">Skincare</NavLink>
        <NavLink to="">Haircare</NavLink>
        <NavLink to="">Makeup</NavLink>
        <NavLink to="">Fragrances</NavLink>
        <NavLink to="">Grooming Tools</NavLink>
      </div>
    </div>
  );
};

export default SubBeautyCat;
