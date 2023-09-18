import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';









const ItemListContainer = () => {


    const [products, setProducts]= useState([]);
    const getProducts= () => {
        fetch('https://fakestoreapi.com/products')
        .then((infoApi) => infoApi.json())
        .then((infoApiJson) => setProducts(infoApiJson))
        .catch((error) => console.log(error))
        
    }
    
    useEffect(() => {
        getProducts(products)
        

    }, [])
    
    
    console.log(products)


  return (
    <ItemList productos= {products} />
  )
}

export default ItemListContainer