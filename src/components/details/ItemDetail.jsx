import React from "react";
import styles from "../../style.module.css";

const ItemDetail = ({ item }) => {
    
  return (
    <div className={styles.contenedorDetalleProductos} >
      <h5 className={styles.cardsTituloProducto}>{item.title}</h5>
      <img className={styles.productosImg} src={item.image} />
      <p>{item.description}</p>
      <p>Precio: {item.price}</p>
      <p>{item.category}</p>
    </div>
  );
};

export default ItemDetail;
