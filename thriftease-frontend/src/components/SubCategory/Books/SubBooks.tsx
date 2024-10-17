import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const SubBooks = (props: Props) => {
  return (
    <div>
      <h1>Books & Stationery</h1>
      <p>
        Dive into a world of knowledge and creativity with our Books &
        Stationery selection. Whether you're looking for captivating reads or
        essential supplies for your workspace, we have it all. Filter through
        our collection to find the perfect book or stationery item to inspire
        your next idea.
      </p>
      <h2></h2>
      <div>
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
