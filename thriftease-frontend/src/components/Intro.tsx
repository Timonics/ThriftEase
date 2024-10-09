import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav/Nav";
import WhatToExpect from "./Features/WhatToExpect";
import Note from "./Ribbon/Note";
import Footer from "./Footer/Footer";

const Intro = () => {
  return (
    <>
      <div className="p-4 bg-[#f0f4ef] shadow-slate-300 shadow-xl">
        <Nav />
        <div className="flex flex-col justify-center items-center  h-[420px] gap-5">
          <h1 className="text-7xl font-extrabold text-[#2ECC71]">
            ThriftEase!
          </h1>
          <p className="w-4/5 text-lg font text-center text-[#2C3E50] opacity-65">
            Discover a whole new way to buy and sell second-hand items. Whether
            you're looking for something unique or wanting to give your unused
            items a new home, ThriftEase makes it simple and seamless.
          </p>
          <div className="space-x-5 text-lg flex w-[50%] text-center justify-center mt-5">
            <Link
              to="home"
              className="border-4 flex items-center justify-center border-[#2ECC71] p-2 rounded-xl w-[30%] text-[#2ECC71] font-bold"
            >
              Start Shopping
            </Link>
            <Link
              className="p-2 flex items-center justify-center rounded-xl w-[30%] shadow-xl bg-[#2ECC71] text-[#34495E] font-bold"
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
