import React from "react";
import Nav from "../Nav/Nav";
import SideNav from "../Nav/SideNav";
import HomeBody from "./HomeBody";

const Home: React.FC = () => {
  return (
    <div className="h-screen home-background">
      <div className="h-[510px]">
        <div className="p-4">
          <Nav />
        </div>
        <div className="flex h-full">
          <section className="w-1/4">
            <SideNav />
          </section>
          <section className="w-3/4">
            <HomeBody />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
