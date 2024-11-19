import React from "react";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import { useMyContext } from "../../context/MyAppDataProvider";

const CartList: React.FC = () => {
  const { cartProducts } = useMyContext();
  return <>{cartProducts.length ? <FilledCart /> : <EmptyCart />}</>;
};

export default CartList;
