import React from "react";
import { useParams } from "react-router-dom";
import ContactoListContainer from "../seccionContacto/ContactoListContainer";

const Contacto = () => {
  const params = useParams();

  return (
    <div>
      <ContactoListContainer />
    </div>
  );
};

export default Contacto;
