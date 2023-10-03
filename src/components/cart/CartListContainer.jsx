import React, { useContext } from 'react'
import CartList from './CartList'
import CartContext from '../context/cartContext/CartContext'
import CarritoVacioListContainer from '../carritoVacio/CarritoVacioListContainer'

const CartListContainer = () => {
  const { cart, removeItem, vaciarCarrito } = useContext(CartContext)


  return (
    <div>
      {cart.length > 0 ? (
        <CartList cart={cart} 
        eliminarProducto={removeItem}
        vaciarCarrito= {vaciarCarrito}
        />
      ) : (
        <CarritoVacioListContainer />
      )}
    </div>
  );
}

export default CartListContainer


