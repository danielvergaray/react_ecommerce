import React from "react";
import styles from "../style.module.css";

const NavBar = ({ opciones }) => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.contenedor}>
        {opciones.map((opcion, index) => (
          <li key={index} className={styles.lista}>
            {opcion}
          </li>
        ))}

      </ul>
    </div>
  );
};
export default NavBar;
