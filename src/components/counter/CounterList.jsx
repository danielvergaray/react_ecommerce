import React from "react";
import styles from "../../style.module.css";

const CounterList = ({ incrementar, disminuir, count, onAdd, mensaje }) => {
  return (
    <>
      <div className={styles.contenedorBotones} style={{ textAlign: "left" }}>
        <button className={styles.btnMasMenos} onClick={incrementar}>+</button>
        <span style={{ padding:"0 5px",margin:" auto 0" , width:"min-content"}}>{count} </span>
        <button className={styles.btnMasMenos} onClick={disminuir}>-</button>
        <div className={styles.contenedorBtnAgregar}>
          <button  className="btn btn-primary"
            onClick={() => {
              mensaje();
              onAdd(count);
            }}
           
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterList;
