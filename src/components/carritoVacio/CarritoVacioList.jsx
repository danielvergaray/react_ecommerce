import React, { useContext } from "react";
import emptyCart from "../../components/imagenes/emptyCart.png";
import styles from "../../style.module.css";
import { Button } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";



const CarritoVacioList = ({logOut, vaciarCarrito}) => {
    const {userData} = useContext(UserContext);

    return (

        <div className={styles.contenedorBaseCarritoVacio}> 
            <p className={styles.bienvenido}>Bienvenido, {userData.user} </p>
            <NavLink to="/user" className={styles.contenedorCerrarSesion} onClick={() => { vaciarCarrito(), logOut() }}>
                <p>Cerrar sesión</p>
            </NavLink>
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