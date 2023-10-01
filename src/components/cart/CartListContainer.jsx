import React, { useContext } from 'react'
import CartList from './CartList'
import CartContext from '../context/cartContext/CartContext'

const CartListContainer = () => {
const {cart} = useContext(CartContext)


  return (
    <CartList cart={cart} />
  )
}

export default CartListContainer