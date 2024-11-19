import React from "react";
import { useMyContext } from "../../context/MyAppDataProvider";
import { Link } from "react-router-dom";
import { Product } from "../../interfaces/thriftease-interface";

const FilledCart: React.FC = () => {
  const { cartProducts, setCartProducts } = useMyContext();

  const handleRemoveCartProduct = (product: Product) => {
    const newCartArr = cartProducts.filter(
      (cartProduct) => cartProduct.id !== product.id
    );
    setCartProducts(newCartArr);
  };

  const cartProductsElements = cartProducts.map((product) => (
    <div
      key={product.id}
      className="flex gap-5 p-4 home-background rounded-xl shadow-xl items-center"
    >
      <div className="w-[80px] h-[80px] bg-slate-300 rounded-lg"></div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-[10px] font-light">{product.description}</p>
        <p className="text-xs font-semibold">₦{product.price}</p>
      </div>
      <div className="flex flex-col ml-auto mr-5 gap-3 text-center text-xs font-semibold">
        <button
          className="bg-red-600 text-red-950 p-2 rounded-md w-[150px] transition duration-300 hover:scale-110 hover:bg-red-700"
          onClick={() => handleRemoveCartProduct(product)}
        >
          Remove Product
        </button>
        <Link
          to={""}
          className="bg-appblue text-appdarkblue p-2 rounded-md w-[150px] transition duration-300 hover:scale-110 hover:bg-[#80a6d3]"
        >
          Product Details
        </Link>
      </div>
    </div>
  ));

  return (
    <div className="relative h-full">
      <h1 className="text-6xl font-bold text-appdarkblue">My Cart</h1>
      <div className="flex flex-col gap-5 p-4">{cartProductsElements}</div>
      {/* <Link
        to={""}
        className="fixed bottom-0 w-[79%] p-4 text-center text-xl text-appgreen bg-gray-950 font-bold transition duration-500 ease-in-out hover:text-appdarkblue hover:bg-appblue"
      >
        Proceed to Checkout
      </Link> */}
    </div>
  );
};

export default FilledCart;
