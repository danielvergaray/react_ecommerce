import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
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
  console.log(comprobante.total);

  console.log(showRecibo)
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
          <div className={styles.checkoutContenedorBotones}>
            <Link to="/">
              <Button className={styles.btnCheckout}>Ir al inicio</Button>
            </Link>
            <Link to="/user">
              <Button onClick={() => logOut()} className={styles.btnCheckout}>
                Cerrar Sesión
              </Button>
            </Link>

            <Button className={styles.btnCheckout} onClick={emitirRecibo}>
              Emitir Recibo
            </Button>
          </div>
        </div>
      )}

      {compraRealizada & showRecibo ? (
        <div className={styles.checkoutReciboContainer}>
          <h2>Recibo de compra</h2>
          <p>Número comprobante : {orderId} </p>
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
                <p>{producto.name}</p>
                <p>{producto.price} $</p>
                <p>{producto.quantity} Und </p>
                <p>{producto.quantity * producto.price} $ </p>
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
      )}
    </div>
  );
};

export default CheckoutList;
