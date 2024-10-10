import React from "react";
import { Link } from "react-router-dom";
import SoldOut from "../Badge/SoldOut";

type Props = {};

const Products = (props: Props) => {
  const elementArr = [...Array(6).keys()];

  const ele = elementArr.map((element) => (
    <Link to={""} className="relative rounded-xl shadow-xl">
      <SoldOut />
      <img
        src=""
        alt=""
        className="w-full h-[120px] bg-slate-300 outline-transparent focus:outline-transparent border-transparent rounded-t-xl"
      />
      <div className="py-3 px-2 gap-2 flex flex-col home-background rounded-b-xl">
        <h2 className="font-semibold ">{"Name: " + element}</h2>
        <p className="text-xs font-light">{"Description: " + element}</p>
        <p className="text-sm font-extrabold">{"Price: $" + element}</p>
      </div>
    </Link>
  ));

  return (
    <div className="w-[90%] p-7 flex flex-col gap-7">
      <h1 className="text-4xl font-bold text-appgreen">
        Check out our featured products
      </h1>
      <div className="grid grid-cols-3 gap-12">{ele}</div>
    </div>
  );
};

export default Products;
