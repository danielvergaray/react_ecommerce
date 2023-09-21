import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import CustomSpinner from '../reutilizables/Spinner';
import useApiData from '../customHooks/useApiData';


const ItemListContainer = () => {


  /* const [products, setProducts] = useState([]); */
  const [page, setPage] = useState(8);
  /* const [loading, setLoading] = useState(true) */
  const [btnMas, setBtnMas] = useState(true)


  const [items, products, loading, error] = useApiData(`https://fakestoreapi.com/products?limit=${page}`)

  /* const getProducts = () => {
    fetch(`https://fakestoreapi.com/products?limit=${page}`)
      .then((infoApi) => infoApi.json())
      .then((infoApiJson) => setProducts(infoApiJson))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false)
      })

  } */

  useEffect(() => {
    /* setLoading(true)
    setTimeout(() => {
      getProducts(products)
    }, 1000) */
    if (page === 20) {
      setBtnMas(false)
    }
  }, [page])



  const verMas = () => {
    if (page < 17) {
      setPage(page + 4);
    } else {
      setBtnMas(false)
      return
    }

  }





  return (
    <div>

      {items !== null &&
        <ItemList
          productos={products}
          verMas={verMas}
          btnMas={btnMas}


        />}
      {loading && <CustomSpinner
        animation="border"
        message="Cargando..."

      />}
    </div>

  )
}

export default ItemListContainer