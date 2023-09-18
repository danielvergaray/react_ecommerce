import React from "react";
import styles from "../../style.module.css";

const FooterList = ({ opciones }) => {
  return (
    <div >
      <ul className={styles.contenedorFooter}>
        {opciones.map((opcion, index) => (
          <li key={index} className={styles.lista}>
            {opcion}
          </li>
        ))}

      </ul>
    </div>
  );
};
export default FooterList;
