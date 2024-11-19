import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import introBackground from "../../assets/introBackground.jpg"

import Nav from "../Nav/Nav";
import WhatToExpect from "../Features/WhatToExpect";
import Note from "../Ribbon/Note";
import Footer from "../Footer/Footer";
import FirstPage from "./FirstPage";

const Intro: React.FC = () => {
  const loaded: boolean = true
  const [isFirstPage, setIsFirstPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsFirstPage(false);
    }, 1500);
  }, [loaded]);
  return (
    <>
      {isFirstPage ? (
        <FirstPage />
      ) : (
        <>
          <div className="absolute h-screen w-full -z-10">
            <img
              src={introBackground}
              alt=""
              className="object-cover h-full w-full"
            />
`            <div className="absolute h-full w-full inset-0 bg-black/75 " />
`          </div>
          <div className="p-4 shadow-slate-400 h-screen shadow-xl">
            <p className="p-2 font-black text-appgreen">ThriftEase.</p>
            <div className="flex flex-col justify-center items-center h-[420px] gap-5">
              <h1 className="text-7xl font-bold text-white/75">
                Welcome to{" "}
                <span className="text-8xl text-appgreen font-extrabold">
                  ThriftEase.
                </span>
              </h1>
              <p className="w-4/5 text-lg font-extralight text-center text-white/65">
                Discover a whole new way to buy and sell second-hand items.
                Whether you're looking for something unique or wanting to give
                your unused items a new home, ThriftEase makes it simple and
                seamless.
              </p>
              <div className="space-x-10 text-lg flex w-[50%] text-center justify-center mt-5">
                <Link
                  to="home"
                  className="border-4 flex items-center justify-center border-appgreen transition ease-in-out duration-300 hover:bg-gray-950 p-2 rounded- w-[30%] text-appgreen font-bold"
                >
                  Start Shopping
                </Link>
                <Link
                  className="p-2 flex items-center justify-center rounded- w-[30%] shadow-xl shadow-gray-950/20 bg-[#2ECC71] text-[#34495E] font-bold transition ease-in-out duration-300 hover:bg-appdarkblue hover:text-appgreen"
                  to={"register"}
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
      )}
    </>
  );
};

export default Intro;
