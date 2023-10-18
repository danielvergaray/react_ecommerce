import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button } from "react-bootstrap";
import UserContext from "../UserContext";
import { useContext } from "react";
import { collection, addDoc, getFirestore, snapshotEqual, doc, getDoc } from "firebase/firestore"


const CartContextProvider = ({ children }) => {

  const {userData}= useContext(UserContext)

  const [comprobante, setComprobante]= useState([])

  const [cart, setCart] = useState([]);

  const [precioTotal, setPrecioTotal] = useState(0);
  const [productosTotales, setProductosTotales] = useState(0);

  const calcularPrecioTotal = () => {
    let total = 0;
    let totalProductos = 0;
    cart.forEach((producto) => {
      total += Math.ceil(producto.price * producto.quantity * 100) / 100;
      total = parseFloat(total.toFixed(2));
      totalProductos += producto.quantity;
    });
    setPrecioTotal(total);
    setProductosTotales(totalProductos);
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };
  const addItem = (item, quantity) => {
    /* const nuevoStock = currentStock */
    /* setCurrentStock(nuevoStock) */

    let currentStock;

    if (quantity <= item.stock) {
      if (isInCart(item.id)) {
        let position = cart.findIndex((producto) => producto.id === item.id);
        cart[position].quantity += quantity;
        setCart([...cart]);
        /* const nuevoStock = item.stock - quantity */
        currentStock = item.stock - quantity;
        /* setCurrentStock(nuevoStock) */
        calcularPrecioTotal();
      } else {
        setCart([...cart, { ...item, quantity: quantity }]);
        /* const nuevoStock = item.stock - quantity */
        currentStock = item.stock - quantity;
        /* setCurrentStock(nuevoStock) */
        calcularPrecioTotal();
        /* console.log(quantity)
        console.log(item.stock)
        console.log(nuevoStock)*/
        /* console.log(currentStock)  */
      }
    } else {
      alert("producto escaso");
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter((producto) => producto.id !== id);
    setCart(newCart);
    calcularPrecioTotal();
  };


  const mensaje = () => {
    toast.success("Producto agregado exitosamente", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const vaciarCarrito = () => {
    setCart([]);
    calcularPrecioTotal();
  };
  useEffect(() => {
    calcularPrecioTotal();
  }, [cart]);

  const MySwal = withReactContent(Swal);

  /* const compraRealizada = () => {
    const buttonHtml = `<button id="custom-button" class="btn btn-primary">Emitir recibo</button>`;

    MySwal.fire({
      title: <strong>Compra realizada exitosamente</strong>,
      html: `
      <i>Gracias por su compra</i><br><br> ${buttonHtml}`,
      icon: "success",
      showCloseButton: true,
      allowOutsideClick: false,
      showConfirmButton: false,
      
    });

    document.getElementById("custom-button").addEventListener("click", () => {
      addToCart();
      MySwal.close();
      mostrarRecibo();
    });
    setCart([]);
  }; */

 /*  const addToCart = () => {
    const purchase = {
      buyer: {
        id: 1,
        name: userData.user,
        
      },
      items: cart,
      date: new Date(),
      total: precioTotal,
    };

    console.log(purchase);
    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, purchase)
      .then((res) => setOrderId(res.id))
      .catch((err) => console.log(err));
  }; */

  /* useEffect(() => {  
    const baseDatos = getFirestore()

    const baseDatosRef = doc(baseDatos, "orders", id) 
    
    getDoc(baseDatosRef)
    .then((res)=> {
      const list = res.docs.map((product)=>{
          return{
              id:product.id,
              ...product.data()
          }
      })
      setComprobante(list)
  })
    .catch((error) => console.log(error))

  }, []) */

  /* const mostrarRecibo=()=>{


    MySwal.fire({
      title: <strong>Recibo de compra</strong>,
      html: `<i> ${comprobante.id} </i><br><br>`,
      text: new Date(),
      showCloseButton: true,
      allowOutsideClick: false,
      
      
    });
  } */

  const values = {
    cart,
    addItem,
    mensaje,
    removeItem,
    vaciarCarrito,
    precioTotal,
    productosTotales,
    /* compraRealizada, */
    /* addToCart, */
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
