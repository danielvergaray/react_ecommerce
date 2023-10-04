import React from "react";
import User from "../pages/User";
import { Link } from "react-router-dom";
import styles from "../../style.module.css";
import { Button } from "react-bootstrap";

const CartList = ({ cart, eliminarProducto, vaciarCarrito, newUser, userData }) => {

  return (
    <div>
      <p>Bienvenido, {userData.user} </p>
      <div className={styles.mainContenedorCarrito}>
        <div className={styles.carritoContainer}>
          <h1 className={styles.CarritoTitulo}>
            Carrito ({cart.length} productos)
          </h1>
          <div className={styles.vaciarCarritoBtnContainer}>
            <Button onClick={vaciarCarrito}>Vaciar carrito</Button>
          </div>

          {cart.map((producto) => (
            <div
              key={producto.item.id}
              className={styles.cardsProductosCarrito}
            >
              <div className={styles.productosImgContainerCarrito}>
                <img
                  src={producto.item.image}
                  className={styles.productosImgCarrito}
                />
              </div>
              <div className={styles.infoContainerCarrito}>
                <h2 className={styles.cardsTituloProductoCarrito}>
                  {producto.item.title}{" "}
                </h2>
                <p className={styles.cardsPrecioCarrito}>
                  Precio Online: {producto.item.price} $
                </p>
                <p>Cantidad: 1</p>
                <div className={styles.btnEliminarCarrito}>
                  <Button onClick={() => eliminarProducto(producto.item.id)}>
                    Eliminar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.infoCompraContainer}>
          <h2>Resumen de la orden</h2>
          <div className={styles.infoCompraTotal}>
            <p>Productos: {cart.length}</p>
            <p>Total: </p>

            <Link to="/user">
              <Button>Comprar</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
