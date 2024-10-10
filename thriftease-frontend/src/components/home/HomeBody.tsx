import React from "react";
import { Link } from "react-router-dom";
import Products from "../FeaturedProducts/Products";
import Explore from "../Category/Explore";

const HomeBody: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="font-extrabold text-[40px] leading-[48px] mt-4 text-appdarkblue">
          Buy, Sell, and Negotiate for Second-Hand Treasures!
        </h1>
        <p className="text-sm w-[90%] font-light text-appdarkblue/75 leading-6">
          At <span className="font-bold text-appgreen">ThriftEase.</span>, we
          make it easy for you to find great deals on second-hand items or sell
          your own pre-loved belongings. Whether you’re looking to save money on
          quality products or make some extra cash by selling items you no
          longer need, you've come to the right place!
        </p>
      </div>
      <Explore />
      <Products />
    </div>
  );
};

export default HomeBody;
