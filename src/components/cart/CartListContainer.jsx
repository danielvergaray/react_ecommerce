import React, { useContext, useState } from "react";
import CartList from "./CartList";
import CartContext from "../context/cartContext/CartContext";
import CarritoVacioListContainer from "../carritoVacio/CarritoVacioListContainer";
import UserContext from "../context/UserContext";
import CarritoVacioList from "../carritoVacio/CarritoVacioList";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Checkout from "../pages/Checkout";

const CartListContainer = () => {
  const { cart, removeItem, vaciarCarrito, precioTotal } = useContext(CartContext);
  const { userData, nombreUsuario } = useContext(UserContext);
  
  const [orderId, setOrderId] = useState("");
  

  const newUser = (e) => {
    nombreUsuario(e.target.value);
  };
  const MySwal = withReactContent(Swal);

  const compraRealizada = () => {
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
    /* setCart([]); */
  };
  
  const mostrarRecibo=()=>{


    MySwal.fire({
      title: <strong>Recibo de compra</strong>,
      html: `<i> recibo </i><br><br>`,
      text: new Date(),
      showCloseButton: true,
      allowOutsideClick: false,
      
      
    });
  }
  
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

    console.log(purchase);
    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, purchase)
      .then((res) => setOrderId(res.id))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {cart.length > 0 ? (
        <CartList
          cart={cart}
          eliminarProducto={removeItem}
          vaciarCarrito={vaciarCarrito}
          newUser={newUser}
          userData={userData}
          compraRealizada={compraRealizada}
          
        />
      ) : (
        <CarritoVacioListContainer userData={userData} />
      )}

      {orderId && <Checkout orderId= {orderId} />}
    </div>
  );
};

export default CartListContainer;
