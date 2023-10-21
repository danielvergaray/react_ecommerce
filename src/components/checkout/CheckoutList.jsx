import React from "react";
import styles from "../../style.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const CheckoutList = ({
  comprobante,
  emitirRecibo,
  compraRealizada,
  orderId,
  logOut,
  showRecibo,

}) => {
console.log(comprobante.items)
console.log(comprobante)
  return (
    <div
    className={showRecibo ? styles.containerCheckoutBoleta : styles.containerCheckout}
    >
      {!showRecibo && (
        <div className={styles.containerCompra}>
          <h1>¡Gracias por tu compra!</h1>
          <div className={styles.checkmark}>✔️</div>
          <p className={styles.textoCheckout}>
            Tu pedido ha sido confirmado. Estamos procesando tu compra y te
            enviaremos una confirmación por correo electrónico.
          </p>
          <p>Order Id: {orderId} </p>
          <div className={styles.checkoutContenedorBotones}>
            <Link to="/">
              <Button className={styles.btnCheckout}>Ir al inicio</Button>
            </Link>
            <Link to="/user">
              <Button onClick={() => logOut()} className={styles.btnCheckout}>
                Cerrar Sesión
              </Button>
            </Link>

            {/* <Button className={styles.btnCheckout} onClick={emitirRecibo}>
              Emitir Recibo
            </Button> */}
          </div>
        </div>
      )}

      {/* {compraRealizada & showRecibo ? (
        <div className={styles.checkoutReciboContainer}>
          <h2>Recibo de compra</h2>
          <p style={{margin:"0 10px", fontWeight:"bolder"}}>Número comprobante : {orderId} </p>
          <div className={styles.checkoutReciboitemTitulos}>
            <span></span>
            <p>Item</p>
            <p>Precio Unitario</p>
            <p>Cantidad </p>
            <p>Total</p>
          </div>
          {comprobante.items.map((producto) => (
            <div className={styles.checkoutRecibo} key={producto.id}>
              <div className={styles.checkoutReciboitem}>
                <img
                  src={producto.imageSmall}
                  alt={producto.name}
                  className={styles.checkoutImgProducto}
                />
                <p className= {styles.checkoutTextoInfo}>{producto.name}</p>
                <p className= {styles.checkoutTextoInfo}>{producto.price} $</p>
                <p className= {styles.checkoutTextoInfo}>{producto.quantity} Und </p>
                <p className= {styles.checkoutTextoInfo}>{producto.quantity * producto.price} $ </p>

                <div className={styles.checkoutItemsInfoMobile}>
                  <p className= {styles.checkoutItemTitulo}>{producto.name}</p>
                  <p>Precio: {producto.price} $</p>
                  <p>Cantidad: {producto.quantity} Und </p>
                  <p>Total: {producto.quantity * producto.price} $ </p>
                </div>
              </div>
              
            </div>
            
          ))}
          <p>Total= {comprobante.total} $ </p>
          <div className={styles.checkoutContenedorBotones}>
            <Link to="/">
              <Button className={styles.btnCheckout}>Ir al inicio</Button>
            </Link>
            <Link to="/user">
              <Button onClick={() => logOut()} className={styles.btnCheckout}>
                Cerrar Sesión
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default CheckoutList;