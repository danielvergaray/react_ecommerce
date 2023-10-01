import React, { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

console.log("context", cart)

const addItem = (item, quantity) =>{
    setCart([
        ...cart,
        {
            item, quantity
        }
    ])
}

console.log(cart)
  const values = {
    cart,
    addItem
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
