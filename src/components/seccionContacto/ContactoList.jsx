import React, { useEffect, useState } from "react";
import CustomModal from "../reutilizables/CustomModal";
import styles from "../../style.module.css";
import Button from "react-bootstrap/Button";
import ImgContacto3 from "../../components/imagenes/ImgContacto3.jpg";

const ContactoList = ({ funcionPrevenir }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const formData = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = () => {
    setShowModal(true);
    console.log("enviar datos");
  };

  const handleClick = () => {
    funcionPrevenir();
  };

  return (
    <form action="" className={styles.formularioContainer}>
        <h1>FORMULARIO DE CONTACTO</h1>
      <div className={styles.formularioInfo}>
        <div className={styles.formularioRecuadro}>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" onChange={formData} />
        </div>
        <div className={styles.formularioRecuadro}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={formData} />
        </div>
        <div className={styles.formularioRecuadro}>
          <label htmlFor="message">Mensaje</label>
          <textarea
            type="text"
            name="message"
            id="message"
            onChange={formData}
          />
        </div>
        <div className={styles.formularioBtnContainer}>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleClick}
          >
            Enviar
          </button>
          {showModal && <CustomModal />}
        </div>
      </div>
    </form>
  );
};

export default ContactoList;
