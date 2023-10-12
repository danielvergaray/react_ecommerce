import React from "react";
import styles from "../../style.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CounterList from "../counter/CounterList";
import CounterListContainer from "../counter/CounterListContainer";

const ItemDetail = ({ item, onAdd, mensaje, count }) => {
  return (
    <div className={styles.contenedorProductos}>
      <div className={styles.contenedorDetalleProductos}>
        <div className={styles.contenedorDetalleImg}>
          <img className={styles.imgProductosDetalle} src={item.imageFull} />
        </div>
        <div className={styles.contenedorInfo}>
          <div className={styles.contenedorInfoProductos}>
            <h5 className={styles.tituloProductoDetalle}>{item.name}</h5>
            <div className={styles.contenedorCategoria}>
              <p className={styles.categoriaProducto}>{item.category} </p>
              <p className={styles.categoriaProducto}>{item.device} </p>
            </div>
            <p className={styles.precioProductoDetalle}>US$ {item.price}</p>
            <p className={styles.descripcionJuego}>{item.description}</p>
            <div className={styles.contenedorBtn}>
              <CounterListContainer onAdd={onAdd} mensaje={mensaje} />
              <ToastContainer />{" "}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ItemDetail;
