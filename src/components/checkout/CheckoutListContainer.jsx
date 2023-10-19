import React, { useState, useEffect } from 'react'
import CheckoutList from './CheckoutList'
import { doc, getDoc, getFirestore } from "firebase/firestore";



const CheckoutListContainer = ({orderId}) => {

    const [comprobante, setComprobante]= useState([])
    const [compraRealizada, setCompraRealizada]=useState(false)
    
    /* const MySwal = withReactContent(Swal); */

    /* const compraRealizada = () => {
      const buttonHtml = `<button id="custom-button" class="btn btn-primary">Emitir recibo</button>`;
  
      MySwal.fire({
        title: <strong>Compra realizada exitosamente</strong>,
        html: `
        <i>Gracias por su compra</i><br><br> ${buttonHtml}`,
        icon: "success",
        showCloseButton: true,
        allowOutsideClick: false,
        showConfirmButton: false,
        
      });
  
      document.getElementById("custom-button").addEventListener("click", () => {
        addToCart();
        MySwal.close();
        
      });
      
    }; */

    const emitirRecibo=()=>{
        setCompraRealizada(!compraRealizada)
    }

    


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
                console.log(comprobante)
            })
            .catch((error) => console.log(error))
        }, [])
    
      /*   const mostrarRecibo=()=>{
    
    
        MySwal.fire({
          title: <strong>Recibo de compra</strong>,
          html: `<i> ${comprobante.id} </i><br><br>`,
          text: new Date(),
          showCloseButton: true,
          allowOutsideClick: false,
          
          
        });
      } */
        
  
      console.log(comprobante)
  return (
    <CheckoutList
    comprobante= {comprobante}
    emitirRecibo= {emitirRecibo}
    compraRealizada={compraRealizada}
    />
  )
}

export default CheckoutListContainer