import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav/Nav";
import WhatToExpect from "./Features/WhatToExpect";
import Note from "./Ribbon/Note";
import Footer from "./Footer/Footer";

const Intro: React.FC = () => {
  return (
    <>
      <div className="p-4 bg-[#f0f4ef] shadow-slate-300 shadow-xl">
        <Nav />
        <div className="flex flex-col justify-center items-center h-[420px] gap-5">
          <h1 className="text-6xl font-bold text-appdarkblue">
            Welcome to <span className="text-7xl text-appgreen font-extrabold">ThriftEase.</span>
          </h1>
          <p className="w-4/5 text-lg font-light text-center text-appdarkblue/60">
            Discover a whole new way to buy and sell second-hand items. Whether
            you're looking for something unique or wanting to give your unused
            items a new home, ThriftEase makes it simple and seamless.
          </p>
          <div className="space-x-10 text-lg flex w-[50%] text-center justify-center mt-5">
            <Link
              to="home"
              className="border-4 flex items-center justify-center border-appgreen transition ease-in-out duration-300 hover:bg-appdarkblue p-2 rounded- w-[30%] text-appgreen font-bold"
            >
              Start Shopping
            </Link>
            <Link
              className="p-2 flex items-center justify-center rounded- w-[30%] shadow-xl shadow-gray-950/20 bg-[#2ECC71] text-[#34495E] font-bold transition ease-in-out duration-300 hover:bg-appdarkblue hover:text-appgreen"
              to={""}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <WhatToExpect />
      <Note />
      <Footer />
    </>
  );
};

export default Intro;
