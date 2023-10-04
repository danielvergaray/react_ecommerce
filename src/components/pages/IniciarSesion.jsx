import React from 'react'
import { useParams } from 'react-router-dom'
import User from './User';
const IniciarSesion = () => {
    const params = useParams();
  return (
    <User/>
  )
}

export default IniciarSesion