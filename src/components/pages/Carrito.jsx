import React from 'react'
import { useParams } from 'react-router-dom'
import CartListContainer from '../cart/CartListContainer';
const Carrito = () => {
    const params = useParams();
  return (
    <CartListContainer/>
  )
}

export default Carrito