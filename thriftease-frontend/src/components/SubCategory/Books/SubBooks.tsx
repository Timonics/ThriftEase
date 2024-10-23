import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SubBooks = (props: Props) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="space-y-1">
        <h1 className="text-4xl font-bold text-appgreen">Books & Stationery</h1>
        <p className="text-sm font-light text-appdarkblue/75">
          Dive into a world of knowledge and creativity with our Books &
          Stationery selection. Whether you're looking for captivating reads or
          essential supplies for your workspace, we have it all. Filter through
          our collection to find the perfect book or stationery item to inspire
          your next idea.
        </p>
      </div>
      <div className="flex gap-7 items-center justify-center">
        <NavLink to="">Fiction Books</NavLink>
        <NavLink to="">Textbooks</NavLink>
        <NavLink to="">Notebooks</NavLink>
        <NavLink to="">Magazines</NavLink>
        <NavLink to="">Planners & Journals</NavLink>
      </div>
    </div>
  );
};

export default SubBooks;
