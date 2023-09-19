import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import styles from "../../style.module.css";

function CustomSpinner({ animation, message }) {
  return (
    <div className= {styles.spinnerContainer}>
      <Spinner animation={animation} role="status">
        <span className="visually-hidden">{message}</span>
      </Spinner>
    </div>

  );
}

export default CustomSpinner;