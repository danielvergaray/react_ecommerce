import React from 'react'
import NavBarList from './NavBarList'

const NavBarListContainer = () => {
    
    const datosNavBar = {
        
        opcionesMenu:["/", "Productos", "Noticias", "Iniciar sesión"],

    }



  return (
    <NavBarList opciones= {datosNavBar.opcionesMenu}/>
  )
}

export default NavBarListContainer