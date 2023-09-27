import React from "react";
import styles from "../../style.module.css";
import { NavLink } from "react-router-dom";

const FooterList = ({ opciones }) => {
  return (
    <div className={styles.footer}>
      <ul className={styles.contenedorFooter}>
        {opciones.map((opcion, index) => (
          <NavLink key={index} className={styles.listaFooter}>
            {opcion}
          </NavLink>
        ))}

      </ul>
    </div>
  );
};
export default FooterList;
