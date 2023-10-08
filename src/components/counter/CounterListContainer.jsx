import React, { useState } from 'react'
import CounterList from './CounterList'
import ItemDetailContainer from '../details/ItemDetailContainer'

const CounterListContainer = ({onAdd, mensaje}) => {

const [count, setCount]= useState(1)

const increment= ()=>{
    setCount(count+1)
}
const decrement= ()=>{
    if(count>1){
        setCount(count-1)
    }
}

  return (
    <div>
        <CounterList
        incrementar={increment}
        disminuir= {decrement}
        count= {count}
        onAdd= {onAdd}
        mensaje= {mensaje}
         />

        {/* <ItemDetailContainer
        count= {count}
        /> */}
    </div>
    
  )
}

export default CounterListContainer