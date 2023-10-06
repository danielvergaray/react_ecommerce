import React from 'react'
import NavBarList from './NavBarList'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import CartContext from '../context/cartContext/CartContext'

const NavBarListContainer = () => {

  const { logged, userData } = useContext(UserContext)
  const {cart} = useContext(CartContext)
  
  const datosNavBar = {

    opcionesMenu: ["/", "Productos", "Noticias"],
    
  }



  return (
    
     <NavBarList opciones={datosNavBar.opcionesMenu}
     logged={logged}
     userData={userData}
     cart= {cart} />
  )
}

export default NavBarListContainer