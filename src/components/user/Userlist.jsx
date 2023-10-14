import React from "react";
import styles from "../../style.module.css";
import "react-toastify/dist/ReactToastify.css";
import { BiUser } from "react-icons/bi";

const UserList = ({ getUserData, validation, inicioSesion, userData }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (userData.user !== "" && userData.pass !== "") {
      validation();
      inicioSesion();
    } else {
      console.log("ingrese campos");
    }
  };

  return (
    <form
      onSubmit={handleClick}
      onChange={getUserData}
      action=""
      className={styles.formularioContainerCarrito}
    >
      <div className={styles.formularioIniciarSesion}>
        <h1>Iniciar Sesión</h1>

        <div className={styles.formularioRecuadroCarrito}>
          
          <label htmlFor="text"><BiUser/></label>
          
          <input 
            type="text"
            name="user"
            id="email"
            placeholder="  Usuario"
            onChange={getUserData}
            required
          />
        </div>

        <div className={styles.formularioRecuadroCarrito}>
          <label htmlFor="name"></label>
          <input
            type="password"
            name="pass"
            id="name"
            onChange={getUserData}
            placeholder="  Contraseña"
            required
          />
        </div>

        <div className={styles.CartBtnContainer}>
          <button className="btn btn-primary" type="submit">
            Continuar
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserList;
