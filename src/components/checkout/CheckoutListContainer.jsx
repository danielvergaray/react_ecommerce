import React, { useState, useEffect } from "react";
import CheckoutList from "./CheckoutList";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import CustomSpinner from "../reutilizables/Spinner";

const CheckoutListContainer = ({ orderId }) => {
  const [showRecibo, setShowRecibo] = useState(false);

  const { logOut } = useContext(UserContext);
  const [loading, setLoading]= useState(true)

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
      .catch((error) => console.log(error))
      .finally(()=>{
        setLoading(false)
       })
      
  }, []);

  const emitirRecibo = () => {
    setCompraRealizada(!compraRealizada);
    setShowRecibo(!showRecibo);
    
  };

  
 
  return (
<div>


    {loading  ? (<CustomSpinner animation="border" message="Cargando..." />
    ): (
      <CheckoutList
      orderId={orderId}
      comprobante={comprobante}
      emitirRecibo={emitirRecibo}
      compraRealizada={compraRealizada}
      logOut={logOut}
      showRecibo={showRecibo}
      
    />
    )}
</div>
    
  );
};

export default CheckoutListContainer;





