import React, { useEffect } from "react";
import styles from "../../style.module.css";
import { useContext } from "react"; 
import CartContext from '../../components/context/cartContext/CartContext' 

const CounterList = ({ incrementar, disminuir, count, onAdd, mensaje, reiniciarContador, item }) => {
  const { cart } = useContext(CartContext); 

  const stockFull = cart.some((cartItem) => {   
    return cartItem.id === item.id && cartItem.quantity >= item.stock; 
  });

  useEffect(() => {
    stockFull
  }, [disminuir, incrementar, count, onAdd]) 


  console.log(stockFull, "esto")
  return (
    <>
      {
        !stockFull?  
        <div>
          <div className={styles.contenedorBotones} style={{ textAlign: "left" }}>
        <button className={styles.btnMasMenos} onClick={disminuir}>-</button>
        <span style={{ padding:"0 5px",margin:" auto 0" , width:"min-content"}}>{count} </span>
        <button className={styles.btnMasMenos} onClick={incrementar}>+</button>
        <div className={styles.contenedorBtnAgregar}>
          <button  className="btn btn-primary"
            onClick={() => {
              mensaje();
              onAdd(count);
              reiniciarContador()
            }}

          >
            Agregar al Carrito
          </button>
        </div>
      </div>

        </div>:  
        <div style={{backgroundColor:"red", width:"fit-content"}}>No hay stock disponible!</div>  
      }

    </>
  );
};

export default CounterList;