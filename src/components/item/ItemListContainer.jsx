import React, { useEffect, useState, useContext } from "react";
import ItemList from "./ItemList";
import CustomSpinner from "../reutilizables/Spinner";
import useApiData from "../customHooks/useApiData";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, snapshotEqual, query, where } from "firebase/firestore"
import CartContext from '../context/cartContext/CartContext';

const ItemListContainer = () => {

  const { categorySelected } = useContext(CartContext)

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


const filtrado= query(itemCollection, where("category", "==", "Pelea"))
/* getDocs(filtrado) */

  getDocs(itemCollection)
  .then(snapshot =>{
    const allData= snapshot.docs.map(document =>({id: document.id, ...document.data()}))
    
    setItems(allData)
  })
}, [])






if(categorySelected==="Arcade"){
  useEffect(()=>{
    const db= getFirestore()
  
    const q= query(collection(db, "productos"),
    where("category", "==", "Arcade")
    )
    getDocs(q)
    .then(snapshot =>{
      const allData= snapshot.docs.map(document =>({id: document.id, ...document.data()}))
      
      setItems(allData)
    })
  
   
  })
}
else if (categorySelected==="Deportes"){
  useEffect(()=>{
    const db= getFirestore()
  
    const q= query(collection(db, "productos"),
    where("category", "==", "Deportes")
    )
    getDocs(q)
    .then(snapshot =>{
      const allData= snapshot.docs.map(document =>({id: document.id, ...document.data()}))
      
      setItems(allData)
    })
  
   
  })
}
else if (categorySelected==="Acción"){
  useEffect(()=>{
    const db= getFirestore()
  
    const q= query(collection(db, "productos"),
    where("category", "==", "Acción")
    )
    getDocs(q)
    .then(snapshot =>{
      const allData= snapshot.docs.map(document =>({id: document.id, ...document.data()}))
      
      setItems(allData)
    })
  
   
  })
}
else if (categorySelected==="Acción, Aventura"){
  useEffect(()=>{
    const db= getFirestore()
  
    const q= query(collection(db, "productos"),
    where("category", "==", "Acción, Aventura")
    )
    getDocs(q)
    .then(snapshot =>{
      const allData= snapshot.docs.map(document =>({id: document.id, ...document.data()}))
      
      setItems(allData)
    })
  
   
  })
}
else if (categorySelected==="Pelea"){
  useEffect(()=>{
    const db= getFirestore()
  
    const q= query(collection(db, "productos"),
    where("category", "==", "Pelea")
    )
    getDocs(q)
    .then(snapshot =>{
      const allData= snapshot.docs.map(document =>({id: document.id, ...document.data()}))
      
      setItems(allData)
    })
  
   
  },[])
}
else if (categorySelected==="Juegos De Rol"){
  useEffect(()=>{
    const db= getFirestore()
  
    const q= query(collection(db, "productos"),
    where("category", "==", "Juegos De Rol")
    )
    getDocs(q)
    .then(snapshot =>{
      const allData= snapshot.docs.map(document =>({id: document.id, ...document.data()}))
      
      setItems(allData)
    })
  
   
  })
}
else if (categorySelected==="Terror"){
  useEffect(()=>{
    const db= getFirestore()
  
    const q= query(collection(db, "productos"),
    where("category", "==", "Terror")
    )
    getDocs(q)
    .then(snapshot =>{
      const allData= snapshot.docs.map(document =>({id: document.id, ...document.data()}))
      
      setItems(allData)
    })
  
   
  })
}
else if (categorySelected==="Fantasía"){
  useEffect(()=>{
    const db= getFirestore()
  
    const q= query(collection(db, "productos"),
    where("category", "==", "Fantasía")
    )
    getDocs(q)
    .then(snapshot =>{
      const allData= snapshot.docs.map(document =>({id: document.id, ...document.data()}))
      
      setItems(allData)
    })
  
   
  })
} else{
  useEffect(() =>{
    const baseDatos= getFirestore();
    const itemCollection = collection(baseDatos, "productos")
  
  
  const filtrado= query(itemCollection, where("category", "==", "Pelea"))
  /* getDocs(filtrado) */
  
    getDocs(itemCollection)
    .then(snapshot =>{
      const allData= snapshot.docs.map(document =>({id: document.id, ...document.data()}))
      
      setItems(allData)
    })
  })
}




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
