import React, { useState, useEffect } from "react";
import CheckoutList from "./CheckoutList";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import UserContext from "../context/UserContext";


const CheckoutListContainer = ({ orderId }) => {
  const [showRecibo, setShowRecibo] = useState(false);

  const { logOut } = useContext(UserContext);
  

  const [comprobante, setComprobante] = useState([]);
  const [compraRealizada, setCompraRealizada] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const orderDoc = doc(db, "orders", orderId);
    getDoc(orderDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setComprobante({
            id: snapshot.id,
            ...snapshot.data(),
          });
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const emitirRecibo = () => {
    setCompraRealizada(!compraRealizada);
    setShowRecibo(!showRecibo);
  };
  console.log(comprobante);
  return (
    <CheckoutList
      orderId={orderId}
      comprobante={comprobante}
      emitirRecibo={emitirRecibo}
      compraRealizada={compraRealizada}
      logOut={logOut}
      showRecibo={showRecibo}
      
    />
  );
};

export default CheckoutListContainer;
