import React from "react";
import Nav from "../Nav/Nav";
import SideNav from "../Nav/SideNav";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="h-screen home-background">
      <div className="h-[526px]">
        <div className="p-2">
          <Nav />
        </div>
        <div className="flex h-full">
          <section className="w-1/5">
            <SideNav />
          </section>
          <section className="w-4/5 overflow-y-auto my-scrollbar h-auto">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
