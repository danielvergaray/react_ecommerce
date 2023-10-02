import React from 'react'
import emptyCart from "../../components/imagenes/emptyCart.png";
import styles from "../../style.module.css";

const CarritoVacioList = () => {
    return (
        <div className={styles.carritoVacioContainer}>
            <h1>Su Carrito se encuentra vacio</h1>
            <div className={styles.carritoVacioImgContainer}>
                <img src={emptyCart} alt="" />
            </div>
            <div>
                <button>Regresar</button>
            </div>

        </div>
    )
}

export default CarritoVacioList