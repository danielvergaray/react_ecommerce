import React from 'react'
import ContactoList from './ContactoList'

const ContactoListContainer = () => {

    const preventSubmit = (event) =>{
        event.preventDefault()
        console.log("prevent")
        
    }

  return (
    <ContactoList funcionPrevenir={preventSubmit} />
  )
}

export default ContactoListContainer