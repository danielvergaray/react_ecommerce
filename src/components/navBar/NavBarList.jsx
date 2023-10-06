import React from "react";
import styles from "../../style.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const NavBarList = ({ opciones, logged, userData, cart }) => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.contenedor}>
        {opciones.map((opcion, index) => (
          <NavLink key={index} className={({ isActive }) => isActive ? `${styles.linkActive}` : `${styles.lista}`} to={opcion}>
            {index === 0 ? "Inicio" : opcion}
          </NavLink>
        ))}
        {/* <NavLink className={styles.nombreUsuario} to="/user">
          {!logged ? "Iniciar sesión" : userData.user}
        </NavLink> */}
        {!logged ? (<NavLink className={styles.nombreUsuario} to="/user" >
          Iniciar sesión
        </NavLink>) : 
        <NavLink className={styles.nombreUsuario} to="/user" > 
        <p><CgProfile /></p>
        <p>{userData.user}</p>
          
        </NavLink>}

        {cart.length>0 ? (<NavLink to="/carrito"><FaShoppingCart />
        <li className={styles.lista}></li></NavLink>): <NavLink to="/carritoVacio"><FaShoppingCart />
        <li className={styles.lista}></li></NavLink>}
        
        {/* <li className={styles.lista}>
          <NavLink to={"carrito"}><FaShoppingCart /></NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default NavBarList;
