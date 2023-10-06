import React from 'react'
import { useParams } from 'react-router-dom'
import CarritoVacioListContainer from '../carritoVacio/CarritoVacioListContainer';
const CarritoVacio = () => {
    const params = useParams();
  return (
    <CarritoVacioListContainer/>
  )
}

export default CarritoVacio