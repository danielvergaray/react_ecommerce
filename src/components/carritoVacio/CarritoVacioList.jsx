import React from 'react'
import emptyCart from "../../components/imagenes/emptyCart.png";
import styles from "../../style.module.css";
import { Button } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";



const CarritoVacioList = ({userData, logOut, vaciarCarrito}) => {
    console.log(userData)
    return (

        <div className={styles.contenedorBase}> 
            <p className={styles.bienvenido}>Bienvenido, {userData.user} </p>
            <NavLink to="/user" className={styles.contenedorCerrarSesion} onClick={() => { vaciarCarrito(), logOut() }}>
                <p>Cerrar sesión</p>
            </NavLink>
            <div className={styles.carritoVacioContainer}>
                <h1>Su Carrito se encuentra vacio</h1>
                <div className={styles.carritoVacioImgContainer}>
                    <img src={emptyCart} alt="" />
                </div>
                <div>
                    <Button>Regresar</Button>
                </div>

            </div>

        </div>


    )
}

export default CarritoVacioList