import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../../Nav/Nav";
import SideCatNav from "../SideCatNav";
import SubCatHome from "../SubCatHome";

const Categories = () => {
  return (
    <div className="h-screen">
      <div className="h-[12%] w-full p-2">
        <Nav />
      </div>
      <div className="flex h-[88%]">
        <section className="w-1/4">
          <SideCatNav />
        </section>
        <section className="w-3/4 overflow-y-auto my-scrollbar h-auto">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Categories;
