import React from 'react'
import FooterList from './FooterList'

const FooterListContainer = () => {

    const datosFooter= {

        opcionesFooter: ["Contactanos", "Tiendas", "Ayuda", "Reportar un problema"],
    }

  return (
    <FooterList opciones= {datosFooter.opcionesFooter} />
  )
}

export default FooterListContainer;