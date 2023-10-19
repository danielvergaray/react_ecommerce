import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button } from "react-bootstrap";
import UserContext from "../UserContext";
import { useContext } from "react";
import { collection, addDoc, getFirestore, snapshotEqual, doc, getDocs } from "firebase/firestore"
import { useNavigate } from "react-router-dom";



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

  const navigate = useNavigate()

  const addToCart = () => {
    const purchase = {
      buyer: {
        id: 1,
        name: userData.user,
        
      },
      items: cart,
      date: new Date(),
      total: precioTotal,
    };

    
    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, purchase)
      .then((res) => navigate('/Checkout/'+ res.id)) /* Redirijo hacia checkout */
      .catch((err) => console.log(err));
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };
  const addItem = (item, quantity) => {
    
    let currentStock;

    if (quantity <= item.stock) {
      if (isInCart(item.id)) {
        let position = cart.findIndex((producto) => producto.id === item.id);
        cart[position].quantity += quantity;
        setCart([...cart]);
       
        currentStock = item.stock - quantity;
       
        calcularPrecioTotal();
      } else {
        setCart([...cart, { ...item, quantity: quantity }]);
        
        currentStock = item.stock - quantity;
      
        calcularPrecioTotal();
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

  /* const MySwal = withReactContent(Swal); */
  const [categories, setCategories]= useState([])

  useEffect(() => {
    const baseDatos = getFirestore();
    const itemCollection = collection(baseDatos, "categorias")



    getDocs(itemCollection)
        .then(snapshot => {
            const allData = snapshot.docs.map(document => ({ id: document.id, ...document.data() }))

            setCategories(allData)
        })
}, [])




  
  const values = {
    cart,
    addItem,
    mensaje,
    removeItem,
    vaciarCarrito,
    precioTotal,
    productosTotales,
    addToCart,
    categories
   
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;