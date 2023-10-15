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


    const [products, setProducts]= useState([])

    useEffect(() =>{
        const baseDatos= getFirestore();
        const itemCollection = collection(baseDatos, "productos")
      
      
        
      const filtrado= query(itemCollection, where("category", "==", "Acción"))
      /* getDocs(filtrado) */
      
        getDocs(filtrado)

        .then(snapshot =>{
          const allData= snapshot.docs.map(document =>({id: document.id, ...document.data()}))
          
          setProducts(allData)
        })
      }, [])

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