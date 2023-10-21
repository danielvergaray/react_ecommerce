import { doc, getDoc, getFirestore, updateDoc, writeBatch } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CheckoutListContainer from '../checkout/CheckoutListContainer'

const Checkout = () => {

const { orderId }= useParams()



  return (
    <CheckoutListContainer orderId={orderId} />
  )
}

export default Checkout