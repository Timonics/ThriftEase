import React, { useEffect, useState } from "react";
import SubElectronicsCat from "./SubElectronicsCat";

import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { config } from "../../../config";
import SoldOut from "../../Badge/SoldOut";
import { Product } from "../../../interfaces/thriftease-interface";

type Props = {};

const ElectronicsCat = (props: Props) => {
  const api = config.dbURL;
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);

  const getElectronicsProducts = async () => {
    try {
      const categoryResponse = await axios.get(
        `${api}products/categories/electronics-and-gadgets`
      );
      setCategoryProducts(categoryResponse.data.products);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    getElectronicsProducts();
  }, []);

  const categoryProductsElements = categoryProducts.map((product) => (
    <Link to={""} className="relative shadow-slate-300/75 shadow-xl w-[220px]">
      <SoldOut />
      <img
        src=""
        alt=""
        className="w-full h-[130px] bg-slate-800 outline-transparent focus:outline-transparent border-transparent"
      />
      <div className="py-3 px-2 gap-2 flex flex-col product-background">
        <h2 className="font-semibold text-xs">{"Name: " + product.name}</h2>
        {/* <p className="text-xs font-light">{"Description: " + product}</p> */}
        <p className="text-sm font-extrabold">{"Price: $" + product.price}</p>
      </div>
    </Link>
  ));

  return (
    <div className="flex flex-col gap-7">
      <SubElectronicsCat />
      <div className="flex p-4 gap-10">{categoryProductsElements}</div>
    </div>
  );
};

export default ElectronicsCat;
