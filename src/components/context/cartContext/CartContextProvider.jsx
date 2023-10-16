import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [currentStock, setCurrentStock] = useState(0)
  const [precioTotal, setPrecioTotal] = useState(0);

  const calcularPrecioTotal = () => {
    let total = 0;
    cart.forEach((producto) => {
      total += Math.ceil(producto.price * producto.quantity * 100) / 100;
      total = parseFloat(total.toFixed(2));
    });
    setPrecioTotal(total);
  };

  const isInCart = (id) => {

    return cart.some(product => product.id === id);
  }
  const addItem = (item, quantity) => {
    console.log(item)
    const nuevoStock = currentStock
    setCurrentStock(nuevoStock)

    if (quantity <= item.stock) {


      if (isInCart(item.id)) {
        let position = cart.findIndex(producto => producto.id === item.id)
        cart[position].quantity += quantity;
        setCart([...cart]);
        const nuevoStock = item.stock - quantity
        setCurrentStock(nuevoStock)
        calcularPrecioTotal();
      } else {
        setCart([...cart, { ...item, quantity: quantity }])
        const nuevoStock = item.stock - quantity
        setCurrentStock(nuevoStock)
        calcularPrecioTotal();
        console.log(quantity)
        console.log(item.stock)
        console.log(nuevoStock)
        console.log(currentStock)
      }
    } else {
      alert("producto escaso")
    }




  }

  const removeItem = (id) => {

    const newCart = cart.filter((producto) => producto.id !== id);
    setCart(newCart);
    calcularPrecioTotal();
  }

  const [categorySelected, setCategorySelected] = useState("")

  const seleccionarCategoria = (categoria) => {
    setCategorySelected(categoria)
    console.log(categorySelected)
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

  const vaciarCarrito = () => {
    setCart([]);
    calcularPrecioTotal();
  }
  useEffect(() => {
    calcularPrecioTotal();
  }, [cart])

  const values = {
    cart,
    addItem,
    mensaje,
    removeItem,
    vaciarCarrito,
    precioTotal,
    seleccionarCategoria,
    categorySelected

  };


  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
