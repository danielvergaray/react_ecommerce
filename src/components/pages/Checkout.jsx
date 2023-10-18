import { doc, getDoc, getFirestore, updateDoc, writeBatch } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Checkout = () => {

const { orderId }= useParams

const updateorder =()=>{

    const [comprobante, setComprobante]= useState([])

    useEffect(()=>{
        const db = getFirestore()
        const orderDoc = doc(db, "orders", orderId)
        getDoc(orderDoc)
        .then((res)=> {
            const list = res.docs.map((product)=>{
                return{
                    id:product.id,
                    ...product.data()
                }
            })
            setComprobante(list)
        })
        .catch((error) => console.log(error))
    }, [])

    const mostrarRecibo=()=>{


    MySwal.fire({
      title: <strong>Recibo de compra</strong>,
      html: `<i> ${comprobante.id} </i><br><br>`,
      text: new Date(),
      showCloseButton: true,
      allowOutsideClick: false,
      
      
    });
  }
    
    
}

  return (
    <div>Checkout</div>
  )
}

export default Checkout