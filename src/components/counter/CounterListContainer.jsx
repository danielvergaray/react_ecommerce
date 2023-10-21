import React, { useState } from 'react'
import CounterList from './CounterList'
import ItemDetailContainer from '../details/ItemDetailContainer'
import CartContext from '../context/cartContext/CartContext'
import { useContext } from 'react'

const CounterListContainer = ({onAdd, mensaje, item}) => {

const {mensajeSinStock}=useContext(CartContext)  
const [count, setCount]= useState(1)

/* const increment= ()=>{
    setCount(count+1)
}
const decrement= ()=>{
    if(count>1){
        setCount(count-1)
    }
} */

const increment= ()=>{
  if(count<item.stock){
    setCount(count+1)
  } else {
    mensajeSinStock()
  }
  
}
const decrement= ()=>{
  if(count>1){
      setCount(count-1)
  }
}
const reiniciarContador=()=>{
  setCount(1)
}

  return (
    <div>
        <CounterList
        incrementar={increment}
        disminuir= {decrement}
        count= {count}
        onAdd= {onAdd}
        mensaje= {mensaje}
        reiniciarContador={reiniciarContador}
         />

        {/* <ItemDetailContainer
        count= {count}
        /> */}
    </div>
    
  )
}

export default CounterListContainer