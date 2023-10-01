import React from 'react'
import styles from "../../style.module.css";

const UserList = ({getUserData, validation}) => {

  const handleClick = (e) => {
    e.preventDefault();
    
  };


  return (
    <form onSubmit={handleClick} onChange={getUserData}
      /* onSubmit={handleClick} */ action=""
      className={styles.formularioContainerCarrito}
    >
      <h1>Iniciar Sesión</h1>

      <div className={styles.formularioRecuadroCarrito}>
        <label htmlFor="text">Usuario</label>
        <input type="text" name="user" id="email" /* onChange={formData} */ />
      </div>

      <div className={styles.formularioRecuadroCarrito}>
        <label htmlFor="name">Contraseña</label>
        <input type="text" name="pass" id="name" /* onChange={formData} */ />
      </div>

      <div className={styles.CartBtnContainer}>
        <button onClick={validation}
          className="btn btn-primary"
          type="submit"
          /*  onClick={handleClick} */
        >
          Continuar
        </button>
        {/* {showModal && <CustomModal />} */}
      </div>
    </form>
  )
}

export default UserList