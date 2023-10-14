import React, { useState } from "react";
import CartContext from "./CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [precioTotal, setPrecioTotal] = useState(0);

  const calcularPrecioTotal = () => {
    let total = 0;
    cart.forEach((producto) => {
      total = (producto.price * producto.quantity) + total;
    });
    setPrecioTotal(total);
  };

  const isInCart = (id) => {
    
    return cart.some(product => product.id === id);
  }
  const addItem = (item, quantity) => {
    
    if(isInCart(item.id)){
      let position=cart.findIndex(producto => producto.id===item.id)
      cart[position].quantity += quantity;
      setCart([...cart]);
      calcularPrecioTotal();
    } else{
      setCart([...cart, {...item, quantity:quantity}])
      calcularPrecioTotal();
    }
    
  }

  const removeItem = (id) => {

    const newCart = cart.filter((producto) => producto.id !== id);
    setCart(newCart);
    calcularPrecioTotal();
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
    calcularPrecioTotal();
  }
    

  const values = {
    cart,
    addItem,
    mensaje,
    removeItem,
    vaciarCarrito,
    precioTotal
    
  };

  
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
