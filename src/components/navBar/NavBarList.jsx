import React from "react";
import styles from "../../style.module.css";
import { FaShoppingCart } from "react-icons/fa";

const NavBarList = ({ opciones }) => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.contenedor}>
        {
        opciones.map((opcion, index) => (
          <li key={index} className={styles.lista}>
            {opcion}
          </li>
        ))
        }
        <li className={styles.lista}>
          <FaShoppingCart />
        </li>
      </ul>
    </div>
  );
};

export default NavBarList;