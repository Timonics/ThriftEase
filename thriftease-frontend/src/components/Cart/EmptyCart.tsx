import React from "react";

import emptyCart from "../../assets/emptyCart.png";
import { Link } from "react-router-dom";

const EmptyCart: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-7">
      <img src={emptyCart} alt="empty cart" className="w-[280px]" />
      <h1 className="text-6xl font-bold text-appdarkblue">Your cart is empty</h1>
      <div className="flex flex-col gap-3 items-center mb-10">
        <p className="text-xs opacity-50">Explore our categories to purchase items</p>
        <Link to={"../category"} className="px-4 py-2 text-appdarkblue bg-appgreen font-bold text-sm transition duration-300 hover:scale-110 hover:bg-gray-950 hover:text-appgreen">Browse Items</Link>
      </div>
    </div>
  );
};

export default EmptyCart;
