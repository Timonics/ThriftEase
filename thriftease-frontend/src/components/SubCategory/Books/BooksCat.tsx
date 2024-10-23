import React, { useEffect, useState } from "react";
import SubBooksCat from "./SubBooks";
import axios from "axios";
import { config } from "../../../config";
import { Link } from "react-router-dom";
import { Product } from "../../../interfaces/thriftease-interface";
import SoldOut from "../../Badge/SoldOut";

type Props = {};

const BooksCat = (props: Props) => {
  const api = config.dbURL;
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);

  const getBookProducts = async () => {
    try {
      const categoryResponse = await axios.get(
        `${api}products/categories/fashion-and-apparels`
      );
      setCategoryProducts(categoryResponse.data.products);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    getBookProducts();
  }, []);

  const bookProductsElements = categoryProducts.map((product) => (
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
      <SubBooksCat />
      <div className="flex p-4 gap-10">{bookProductsElements}</div>
    </div>
  );
};

export default BooksCat;
