import React, { useState, useEffect } from 'react'
import CheckoutList from './CheckoutList'
import { doc, getDoc, getFirestore } from "firebase/firestore";

const CheckoutListContainer = ({orderId}) => {

    const [comprobante, setComprobante]= useState([])
    const [compraRealizada, setCompraRealizada]=useState(false)
    console.log(orderId)
    useEffect(()=>{
      const db = getFirestore()
      const orderDoc = doc(db, "orders", orderId)
      getDoc(orderDoc)
      .then((snapshot) => {
        if(snapshot.exists()){
          setComprobante({
            id: snapshot.id,
            ...snapshot.data()
          })
        }
      })
      .catch((error) => console.log(error))
  
    }, [])

    const emitirRecibo=()=>{
        setCompraRealizada(!compraRealizada)
        console.log("compraRealizada")
    }
    console.log(comprobante)
  return (
    <CheckoutList
    orderId= {orderId}
    comprobante= {comprobante}
    emitirRecibo= {emitirRecibo}
    compraRealizada={compraRealizada}
    />
  )
}

export default CheckoutListContainer