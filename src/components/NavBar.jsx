import React from "react";
import styles from "../style.modules.css";

const NavBar = ({ op1, op2, op3, op4 }) => {
  return (
    <div >
      <ul className={styles.contenedor}>
        <li className={styles.lista}>{op1}</li>
        <li>{op2}</li>
        <li>{op3}</li>
        <li>{op4}</li>
      </ul>
    </div>
  );
};
export default NavBar;
