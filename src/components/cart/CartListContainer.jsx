import React, { useContext } from 'react'
import CartList from './CartList'
import CartContext from '../context/cartContext/CartContext'
import CarritoVacioListContainer from '../carritoVacio/CarritoVacioListContainer'

const CartListContainer = () => {
  const { cart } = useContext(CartContext)

console.log(cart)
  return (
    <div>
      {cart.length > 0 ? (
        <CartList cart={cart} />
      ) : (
        <CarritoVacioListContainer />
      )}
    </div>
  );
}

export default CartListContainer


