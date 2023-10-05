import React from 'react'
import NavBarList from './NavBarList'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const NavBarListContainer = () => {

  const { logged, userData } = useContext(UserContext)
  
  const datosNavBar = {

    opcionesMenu: ["/", "Productos", "Noticias"],
    
  }



  return (
    
     <NavBarList opciones={datosNavBar.opcionesMenu}
     logged={logged}
     userData={userData} />
  )
}

export default NavBarListContainer