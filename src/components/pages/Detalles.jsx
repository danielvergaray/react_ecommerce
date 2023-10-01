import React from 'react'
import ItemDetailContainer from '../details/ItemDetailContainer'
import { useParams } from 'react-router'

const Detalles = () => {
  const { id } = useParams()
  
  return (
    <div>
      <ItemDetailContainer id={id}/>
    </div>
  )
}

export default Detalles