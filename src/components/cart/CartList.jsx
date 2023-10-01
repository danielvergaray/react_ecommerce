import React from 'react'

const CartList = ({cart}) => {
  return (
    <div>
        {
            cart.map(producto =>(
                <div>
                    <p>{producto.item.title} </p>
                    <p>{producto.item.price} </p>
                </div>
            ))
        }
    </div>
  )
}

export default CartList