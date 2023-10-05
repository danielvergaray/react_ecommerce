import React, { useContext } from "react";
import CarritoVacioList from './CarritoVacioList'
import UserContext from "../context/UserContext";
import CartContext from "../context/cartContext/CartContext";

const CarritoVacioListContainer = () => {

  const {logOut, userData} = useContext(UserContext);
  const {vaciarCarrito} = useContext(CartContext)

  return (
    <div>
      <CarritoVacioList 
      userData={userData}
      logOut= {logOut}
      vaciarCarrito= {vaciarCarrito}
      
      />
    </div>

  )
}

export default CarritoVacioListContainer