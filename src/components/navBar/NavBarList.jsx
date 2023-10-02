import React from "react";
import styles from "../../style.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const NavBarList = ({ opciones }) => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.contenedor}>
        {opciones.map((opcion, index) => (
          <NavLink key={index} className={( { isActive} ) => isActive ? `${styles.linkActive}` : `${styles.lista}`} to={opcion}>
            {index === 0 ? "Inicio" : opcion}
          </NavLink>
        ))}
        <li className={styles.lista}>
          <NavLink to={"carrito"}><FaShoppingCart /></NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBarList;
