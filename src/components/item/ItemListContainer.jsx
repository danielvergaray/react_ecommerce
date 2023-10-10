import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import CustomSpinner from "../reutilizables/Spinner";
import useApiData from "../customHooks/useApiData";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, snapshotEqual, query, where } from "firebase/firestore"

const ItemListContainer = () => {

  const [items, setItems] = useState([])

  const [page, setPage] = useState(4);

  const [btnMas, setBtnMas] = useState(true);

  const { id } = useParams()


/*   const URL =
    id && id !== "TODOS"
      ? `https://fakestoreapi.com/products/category/${id}`
      : id === "TODOS"
        ? `https://fakestoreapi.com/products?limit=${page}`
        : `https://fakestoreapi.com/products?limit=${page}`;


  const [loading, products, error, items] = useApiData(URL); */

useEffect(() =>{
  const baseDatos= getFirestore();
  const itemCollection = collection(baseDatos, "productos")


const filtrado= query(itemCollection, where("category", "==", "Acción"))
/* getDocs(filtrado) */

  getDocs(itemCollection)
  .then(snapshot =>{
    const allData= snapshot.docs.map(document =>({id: document.id, ...document.data()}))
    console.log(allData)
    setItems(allData)
  })
}, [])


  useEffect(() => {
    /* setLoading(true)
    setTimeout(() => {
      getProducts(products)
    }, 1000) */
    if (page === 19) {
      setBtnMas(false);
    }
  }, [page]);

  useEffect(() => {
    if (URL === `https://fakestoreapi.com/products/category/jewelery` || URL === `https://fakestoreapi.com/products/category/men's clothing` || URL === `https://fakestoreapi.com/products/category/women's clothing` || URL === `https://fakestoreapi.com/products/category/electronics` || page === 20) {
      setBtnMas(false)
    } else {
      setBtnMas(true)
    }
  }, /* [products] */)

  const verMas = () => {

    if (page < 17) {
      setPage(page + 4);
    } else {
      setBtnMas(false);
      return;
    }
  };

  return (
    <div>
      {/* loading || */ items === null ? (
        <CustomSpinner animation="border" message="Cargando..." />
      ) : (
        <ItemList /* productos={products} */ productos={items} verMas={verMas} btnMas={btnMas} />
      )}
    </div>
  );
};

export default ItemListContainer;
