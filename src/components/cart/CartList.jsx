import React, { useContext, useState } from "react";
import User from "../pages/User";
import { Link, NavLink } from "react-router-dom";
import styles from "../../style.module.css";
import { Button } from "react-bootstrap";
import CartContext from "../context/cartContext/CartContext";

const CartList = ({ cart, eliminarProducto, vaciarCarrito, logOut, userData, addToCart }) => {

  const { precioTotal } = useContext(CartContext);



  return (
    <div className={styles.contenedorBase}>
      <p className={styles.bienvenido}>Bienvenido {userData.user} </p>
      <NavLink to="/user" className={styles.contenedorCerrarSesion} onClick={() => { vaciarCarrito(), logOut() }}>
        <p>Cerrar sesión</p>
      </NavLink>
      <div className={styles.mainContenedorCarrito}>
        <div className={styles.carritoContainer}>
          <h1 className={styles.carritoTitulo}>
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
                <p>Total: {Math.ceil(producto.price * producto.quantity * 100) / 100} $ </p>
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
            <p>Total: {precioTotal}  </p>

            <Link to="/user">
              <Button>Comprar</Button>
            </Link>
            <Button onClick={addToCart}>Emitir orden</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
