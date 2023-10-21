import React from 'react'
import ContactoList from './ContactoList'
import { useState } from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ContactoListContainer = () => {

const [formularioEnviado, setFormularioEnviado]= useState(false)
const MySwal = withReactContent(Swal);

const enviarFormulario=()=>{

  setFormularioEnviado(true)

  MySwal.fire({
    title: <strong>Operacion realizada</strong>,
    html: <i>El mensaje ha sido enviado</i>,
    icon: 'success',
    timer:4000
  })
}


    const preventSubmit = (event) =>{
        event.preventDefault()
        console.log("prevent")
        
    }

  return (
    <ContactoList 
    funcionPrevenir={preventSubmit}
    enviarFormulario= {enviarFormulario}
    
    />
  )
}

export default ContactoListContainer