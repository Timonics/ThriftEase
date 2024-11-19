import React from "react";
import { useMyContext } from "../../context/MyAppDataProvider";
import CartList from "./CartList";
import CartAuthMsg from "./CartAuthMsg";

const Cart: React.FC = () => {
  const { isAuthenticated } = useMyContext();
  return (
    <div className="h-full p-1">
      {isAuthenticated ? <CartList /> : <CartAuthMsg />}
    </div>
  );
};

export default Cart;
