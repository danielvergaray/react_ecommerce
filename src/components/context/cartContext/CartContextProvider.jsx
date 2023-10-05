import React, { useState } from "react";
import CartContext from "./CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addItem = (item, quantity) => {
    setCart([
      ...cart,
      {
        item, quantity
      }
    ])
  }

  const removeItem = (id) => {

    const newCart = cart.filter((producto) => producto.item.id !== id);
    setCart(newCart);
  }

  const isInCart = (id) => {
    cart.find((producto) => producto.item.id === id)
  }

  const mensaje = () => {
    toast.success('Producto agregado exitosamente', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }


  const vaciarCarrito = () =>{
    setCart([]);
    
  }
    

  const values = {
    cart,
    addItem,
    mensaje,
    removeItem,
    vaciarCarrito
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
