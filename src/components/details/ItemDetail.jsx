import React from "react";
import styles from "../../style.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CounterList from "../counter/CounterList";
import CounterListContainer from "../counter/CounterListContainer";

const ItemDetail = ({ item, onAdd, mensaje, count }) => {
  

  return (
    <div className={styles.contenedorProductos}>
      <div className={styles.contenedorDetalleProductos}>
        {/* <div className={styles.contenedorDetalleImg}>
          <img className={styles.imgProductosDetalle} src={item.image} />
        </div> */}
        <div className={styles.contenedorInfo}>
          <div className={styles.contenedorInfoProductos}>
            <h5 className={styles.tituloProductoDetalle}>{item.name}</h5>
            {/* <p className={styles.descripcionProductoDetalle}>{item.description}</p> */}
            <p className={styles.precioProductoDetalle}>$ {item.price}</p>
            <div className={styles.contenedorBtn}>
            <CounterListContainer onAdd={onAdd} mensaje={mensaje} />
              {/* <button onClick={() => {
                mensaje();
                onAdd();
              }} className="btn btn-primary">Agregar al Carrito</button> */}
              <ToastContainer /> {/* El toastify fue creado en el cartContinerProvider */}
              
            </div>
          </div>


        </div>
      </div>


    </div>
  );
};

export default ItemDetail;
