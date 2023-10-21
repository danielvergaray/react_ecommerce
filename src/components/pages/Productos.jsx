import React from 'react'
import ItemListContainer from '../item/ItemListContainer'
import { useParams } from 'react-router-dom'

const Productos = () => {
  const {id} = useParams()
  
  return (
    <div>
      <ItemListContainer id={id}/>
    </div>
  )
}

export default Productos