import React from "react";
import User from "../pages/User";
import { Link, NavLink } from "react-router-dom";
import styles from "../../style.module.css";
import { Button } from "react-bootstrap";

const CartList = ({ cart, eliminarProducto, vaciarCarrito, logOut, userData }) => {

  return (
    <div className={styles.contenedorBase}>
      <p className={styles.bienvenido}>Bienvenido {userData.user} </p>
      <NavLink to="/user" className={styles.contenedorCerrarSesion} onClick={() => { vaciarCarrito(), logOut() }}>
        <p>Cerrar sesión</p>
      </NavLink>
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
              key={producto.id}
              className={styles.cardsProductosCarrito}
            >
              <div className={styles.productosImgContainerCarrito}>
                <img
                  src={producto.image}
                  className={styles.productosImgCarrito}
                />
              </div>
              <div className={styles.infoContainerCarrito}>
                <h2 className={styles.cardsTituloProductoCarrito}>
                  {producto.title}{" "}
                </h2>
                <p className={styles.cardsPrecioCarrito}>
                  Precio Online: {producto.price} $
                </p>
                <p>Cantidad: {producto.quantity}</p>
                <div className={styles.btnEliminarCarrito}>
                  <Button onClick={() => eliminarProducto(producto.id, producto.quantity)}>
                    Eliminar
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <NavLink to="/productos" style={{margin:"auto"}}>
            <Button>Regresar</Button>
          </NavLink>
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
