import React, { useContext } from "react";
import CartList from "./CartList";
import CartContext from "../context/cartContext/CartContext";
import CarritoVacioListContainer from "../carritoVacio/CarritoVacioListContainer";
import UserContext from "../context/UserContext";
import CarritoVacioList from "../carritoVacio/CarritoVacioList";


const CartListContainer = () => {
  const { cart, removeItem, vaciarCarrito } = useContext(CartContext);
  const { userData ,nombreUsuario  } = useContext(UserContext);

const newUser=(e)=>{
  nombreUsuario(e.target.value)
}
console.log(cart)

  return (
    <div>
      {cart.length > 0 ? (
        <CartList
          cart={cart}
          eliminarProducto={removeItem}
          vaciarCarrito={vaciarCarrito}
          newUser={newUser}
          userData={userData}
        />
      ) : (
        <CarritoVacioListContainer 
        userData={userData}/>
      )}
    </div>
  );
};

export default CartListContainer;
