import React from 'react'
import ItemListContainer from '../item/ItemListContainer'
import { useParams } from 'react-router'

const Home = () => {
  const params = useParams()
  
  return (
    <div>
      <ItemListContainer/>
    </div>
  )
}

export default Home