import React, { useState } from "react";
import CartContext from "./CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    
    return cart.some(product => product.id === id);
  }
  const addItem = (item, quantity) => {

    if(isInCart(item.id)){
      let position=cart.findIndex(producto => producto.id===item.id)
      cart[position].quantity += quantity;
      setCart([...cart]);
    } else{
      setCart([...cart, {...item, quantity:quantity}])
    }
    
  }

  const removeItem = (id, quantity) => {

console.log(quantity)

if(quantity===1){
  const newCart = cart.filter((producto) => producto.id !== id);
  setCart(newCart);
} else {
  quantity= quantity-1
  console.log(quantity)
}


    
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
