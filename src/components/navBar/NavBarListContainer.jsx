import React from 'react'
import NavBarList from './NavBarList'

const NavBarListContainer = () => {
    
    const datosNavBar = {
        
        opcionesMenu:["Inicio", "Productos", "Promociones", "Noticias"],

    }



  return (
    <NavBarList opciones= {datosNavBar.opcionesMenu}/>
  )
}

export default NavBarListContainer