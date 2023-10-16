import React, { useEffect, useState } from 'react'
import useApiData from '../customHooks/useApiData'
import FiltradoCategorias from './FiltradoCategorias'
import { collection, getDocs, getFirestore, snapshotEqual, query, where } from "firebase/firestore"

const FiltradoCategoriasContainer = () => {

    const [filtradoCategoria, setFiltradoCategoria] = useState([])
    const [categorias, setCategorias] = useState([])

    /* const [, products] = useApiData(
        "https://fakestoreapi.com/products"
    ); */







return (
    <FiltradoCategorias categorias= {categorias}/>
)
}

export default FiltradoCategoriasContainer