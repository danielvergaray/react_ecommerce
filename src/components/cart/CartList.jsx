import React, { useContext, useState } from "react";
import User from "../pages/User";
import { Link, NavLink } from "react-router-dom";
import styles from "../../style.module.css";
import { Button } from "react-bootstrap";
import CartContext from "../context/cartContext/CartContext";
import UserContext from "../context/UserContext";
import CustomSpinner from "../reutilizables/Spinner";

const CartList = ({
  cart,
  eliminarProducto,
  vaciarCarrito,
  logOut,
  userData,
  compraRealizada,
  loading,
  item2
}) => {
  const { precioTotal, productosTotales, addToCart, /* item2 */ } = useContext(CartContext);
  const { logActive, logged } = useContext(UserContext);

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

      <div className={styles.mainContenedorCarrito}>
        <div className={styles.carritoContainer}>
          <h1 className={styles.carritoTitulo}>
            Carrito ({productosTotales} productos)
          </h1>
          <div className={styles.vaciarCarritoBtnContainer}>
            <Button onClick={vaciarCarrito}>Vaciar carrito</Button>
          </div>

          {cart.map((producto) => (
            <div key={producto.id} className={styles.cardsProductosCarrito}>
              <div className={styles.productosImgContainerCarrito}>
                <img
                  src={producto.imageSmall}
                  className={styles.productosImgCarrito}
                />
              </div>
              <div className={styles.infoContainerCarrito}>
                <h2 className={styles.cardsTituloProductoCarrito}>
                  {producto.name}{" "}
                </h2>
                <p className={styles.cardsPrecioCarrito}>
                  Precio Online: {producto.price} $
                </p>
                <p>Cantidad: {producto.quantity} und</p>

                {/* {producto.quantity <= item2 ?
                  (<p>Cantidad: {producto.quantity} und</p> ):( <p>Cantidad: {item2} und</p>)
                } */}
                <p>
                  Total:{" "}
                  {Math.ceil(producto.price * producto.quantity * 100) / 100} ${" "}
                </p>
                <div className={styles.btnEliminarCarrito}>
                  <Button
                    onClick={() =>
                      eliminarProducto(producto.id, producto.quantity)
                    }
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <NavLink to="/productos" style={{ margin: "auto" }}>
            <Button>Regresar</Button>
          </NavLink>
        </div>

        <div className={styles.infoCompraContainer}>
          <h2>Resumen de la orden</h2>
          <div className={styles.infoCompraTotal}>
            <p>Productos: {productosTotales} Unidades </p>
            <p>Total: {precioTotal} $ </p>

            {logged  ? (
              <Link to="/Checkout/:orderId">
                <Button onClick={() => addToCart()}>Comprar</Button>
              </Link>
            ) : (
              <Link to="/user">
                <Button>Comprar</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
