import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../../Nav/Nav";
import SideCatNav from "../SideCatNav";

const Categories = () => {
  return (
    <div className="h-screen">
      <div className="h-[12%] w-full p-2">
        <Nav />
      </div>
      <div className="flex h-[88%]">
        <section className="w-1/5">
          <SideCatNav />
        </section>
        <section className="w-4/5 overflow-y-auto my-scrollbar h-auto px-4">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default Categories;
