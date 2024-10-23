import React from "react";
import { Link } from "react-router-dom";
import SoldOut from "../Badge/SoldOut";

type Props = {};

const Products: React.FC = (props: Props) => {
  const elementArr = [...Array(6).keys()];

  const ele = elementArr.map((element, index) => (
    <Link
      key={index}
      to={""}
      className="relative shadow-slate-500 shadow-2xl rounded-xl"
    >
      <SoldOut />
      <img
        src=""
        alt=""
        className="w-full h-[130px] bg-slate-800 outline-transparent focus:outline-transparent border-transparent rounded-t-xl"
      />
      <div className="py-3 px-2 gap-2 flex flex-col product-background rounded-b-xl">
        <h2 className="font-semibold ">{"Name: " + element}</h2>
        <p className="text-xs font-light">{"Description: " + element}</p>
        <p className="text-sm font-extrabold">{"Price: $" + element}</p>
      </div>
    </Link>
  ));

  return (
    <div className=" p-7 flex flex-col gap-7">
      <h1 className="text-[43px] font-bold text-appgreen">
        Check out our featured products
      </h1>
      <div className="grid grid-cols-3 gap-10 gap-y-12">{ele}</div>
    </div>
  );
};

export default Products;
