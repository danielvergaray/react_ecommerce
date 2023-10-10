import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import useApiData from "../customHooks/useApiData";
import CartContext from "../context/cartContext/CartContext";
import { doc, getDoc, getFirestore, snapshotEqual } from "firebase/firestore"


const ItemDetailContainer = ({ id, count }) => {
  /* const [, item] = useApiData(`https://fakestoreapi.com/products/${id}`); */
  /* Se deja un espacio vacio antes de item ya que en useApiData estoy retornando el valor products de segundo (despues de loading), el espacio vacio se deja para que loading se asigne a la nada */

  const onAdd =(quantity)=>{
   addItem(item, quantity)
  }

  const [item, setItem] = useState(null)

  const { addItem, mensaje } = useContext(CartContext)

  useEffect(() => {
    const baseDatos = getFirestore()

    const baseDatosRef = doc(baseDatos, "productos", id) /* Nombre de la coleccion en firebase */
    
    getDoc(baseDatosRef)
    .then((snapshot) => {
      if(snapshot.exists()){
        setItem({
          id: snapshot.id,
          ...snapshot.data()
        })
      }
    })
    .catch((error) => console.log(error))

  }, [])


  const removeProduct = () => {
    removeItem(item)
  }


  return <>{item !== null && <ItemDetail item={item} onAdd={onAdd} mensaje={mensaje} count={count} removeProduct={removeProduct} />}</>;
};

export default ItemDetailContainer;
