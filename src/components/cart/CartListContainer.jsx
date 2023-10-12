import React, { useContext, useState } from "react";
import CartList from "./CartList";
import CartContext from "../context/cartContext/CartContext";
import CarritoVacioListContainer from "../carritoVacio/CarritoVacioListContainer";
import UserContext from "../context/UserContext";
import CarritoVacioList from "../carritoVacio/CarritoVacioList";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const CartListContainer = () => {
  const { cart, removeItem, vaciarCarrito } = useContext(CartContext);
  const { userData, nombreUsuario } = useContext(UserContext);

  const [orderId, setOrderId] = useState("");

  const newUser = (e) => {
    nombreUsuario(e.target.value);
  };

  const addToCart = () => {
    const purchase = {
      buyer: {
        id: 1,
        name: "daniel",
        mail: "mail",
      },
      items: cart,
      date: new Date(),
      total: 1000,
    };

    console.log(purchase)
    /* const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, purchase)
      .then((res) => setOrderId(res.id))
      .catch((err) => console.log(err)); */
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
          addToCart= {addToCart}
        />
      ) : (
        <CarritoVacioListContainer userData={userData} />
      )}

      {orderId && <span>Orden creada: {orderId} </span>}
    </div>
  );
};

export default CartListContainer;
