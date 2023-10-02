import React from 'react'
import User from '../pages/User'
import { Link } from 'react-router-dom'

const CartList = ({ cart }) => {
  return (
    <div>
      {
        cart.map(producto => (
          <div key={producto.item.id}>
            <p>{producto.item.title} </p>
            <p>{producto.item.price} </p>
          </div>
        ))
      }
      <Link to="/user">
        <button>Comprar</button>
      </Link>

    </div>
  )
}

export default CartList