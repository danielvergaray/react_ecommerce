import React from 'react'
import { useParams } from 'react-router-dom'
import NoticiasListContainer from '../noticias/NoticiasListContainer'

const Noticias = () => {
    const params= useParams()
  return (
    <div>
        <NoticiasListContainer/>
    </div>
  )
}

export default Noticias