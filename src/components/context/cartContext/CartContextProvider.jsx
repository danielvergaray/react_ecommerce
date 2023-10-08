import React, { useState } from "react";
import CartContext from "./CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    
    return cart.some(product => product.id === id);
  }
  const addItem = (item, id, quantity) => {

    if(isInCart(id)){
      let position=cart.findIndex(producto => producto.item.id===id)
      cart[position].quantity += quantity;
      setCart([...cart]);
    } else{
      setCart([...cart, {...item, quantity:quantity}])
    }
    
    /* setCart([
      ...cart,
      {
        
        item, quantity
        
      }
    ]) */
    
  }

  const removeItem = (id) => {

    const newCart = cart.filter((producto) => producto.item.id !== id);
    setCart(newCart);
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
