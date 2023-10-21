import React, { useContext } from "react";
import emptyCart from "../../components/imagenes/emptyCart.png";
import styles from "../../style.module.css";
import { Button } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";



const CarritoVacioList = ({logOut, vaciarCarrito}) => {
    const {userData, logActive, logged} = useContext(UserContext);

    return (

        <div className={styles.contenedorBase}> 
            <div className={styles.contenedorIniciarSesionSuperior}>
      <p className={styles.bienvenido}>Bienvenido {userData.user} </p>
        {!logged ? (
          <NavLink
            to="/user"
            className={
              styles.contenedorCerrarSesion
            } /* onClick={() => { vaciarCarrito(), logOut() }} */
          >
            <p>Iniciar sesión</p>
          </NavLink>
        ) : (
          <NavLink
            to="/user"
            className={styles.contenedorCerrarSesion}
            onClick={() => {
              vaciarCarrito(), logOut();
            }}
          >
            <p>Cerrar sesión</p>
          </NavLink>
        )}
      </div>
            <div className={styles.carritoVacioContainer}>
                <h1>Su Carrito se encuentra vacio</h1>
                <div className={styles.carritoVacioImgContainer}>
                    <img src={emptyCart} alt="" />
                </div>
                <NavLink to="/productos">
                    <Button>Regresar</Button>
                </NavLink>

            </div>

        </div>


    )
}

export default CarritoVacioList