import React from "react";
import styles from "../../style.module.css";
import { NavLink } from "react-router-dom";

const FooterList = ({ opciones }) => {
  return (
    <div className={styles.footer}>
      <ul className={styles.contenedorFooter}>
        {opciones.map((opcion, index) => (
          <NavLink key={index} className={({isActive}) => isActive ? `${styles.linkActive}`:`${styles.listaFooter}`} to={opcion}>
            {opcion}
          </NavLink>
        ))}

      </ul>
    </div>
  );
};
export default FooterList;
