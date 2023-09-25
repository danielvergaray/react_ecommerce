import React, { useEffect, useState } from 'react'
import useApiData from '../customHooks/useApiData'
import FiltradoCategorias from './FiltradoCategorias'

const FiltradoCategoriasContainer = () => {

    const [filtradoCategoria, setFiltradoCategoria] = useState([])
    const [categorias, setCategorias] = useState([])

    const [, products] = useApiData(
        "https://fakestoreapi.com/products"
    );

    const categoriaFiltrada = "jewelery"
    useEffect(() => {
    
        
    
        const elementosFiltrados = products.filter((producto) => (
    
            producto.category === categoriaFiltrada
    
        ))
        setCategorias(elementosFiltrados)

        
    }, [products])
    
   console.log(categorias)





return (
    <FiltradoCategorias categorias= {categorias}/>
)
}

export default FiltradoCategoriasContainer