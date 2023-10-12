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
          <img className={styles.imgProductosDetalle} src={item.imagenFull} />
        </div>
        <div className={styles.contenedorInfo}>
          <div className={styles.contenedorInfoProductos}>
            <h5 className={styles.tituloProductoDetalle}>{item.name}</h5>
            <div className={styles.contenedorCategoria}>
              <p className={styles.categoriaProducto}>{item.category} </p>
              <p className={styles.categoriaProducto}>{item.device} </p>
            </div>
            <p className={styles.precioProductoDetalle}>US$ {item.price}</p>
            <p className={styles.descripcionJuego}>
              Hogwarts Legacy es un RPG de acción en un mundo abierto ambientado
              en el universo de los libros de Harry Potter
            </p>
            <div className={styles.contenedorBtn}>
              <CounterListContainer onAdd={onAdd} mensaje={mensaje} />
              <ToastContainer />{" "}
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.contenedorInfoJuego}>
        <h2>HOla</h2>
        <p>
          Incluye la misión de la Tienda de Hogsmeade encantada, que te da
          acceso a una mazmorra adicional, el set cosmético del Comerciante y
          una tienda de Hogsmeade en el juego. Hogwarts Legacy es un RPG de
          acción en un mundo abierto ambientado en el universo de los libros de
          Harry Potter. Embárcate en una aventura que te llevará por lugares
          nuevos y conocidos, mientras descubres animales mágicos, personalizas
          tu personaje, elaboras pociones, dominas hechizos, mejoras tus
          talentos y te conviertes en el mago que siempre has querido ser.
          Disfruta de Hogwarts en el siglo XIX. Tu personaje es un estudiante
          que tiene la clave de un antiguo secreto que amenaza con destruir el
          mundo mágico. Haz aliados, lucha contra magos tenebrosos y decide el
          destino del mundo mágico. Crea tu propio legado. Escribe tu propia
          historia.
        </p>
      </div> */}
    </div>
  );
};

export default ItemDetail;
