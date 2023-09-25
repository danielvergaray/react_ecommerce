import React from 'react'
import styles from "../../style.module.css";
import BarraCategoriasContainer from './barraCategoriasContainer';

const BarraCategorias = ({ categorias }) => {


    return (
        <div>
            <h2 className={styles.tituloCategoria}>Categorias</h2>
            <ul className={styles.listaCategorias}>
                {categorias.map((producto) => (

                    <li  /* onClick={<BarraCategoriasContainer/>} */ className={styles.barraCategoriasItem} key={producto}>{producto}</li>

                ))}
            </ul>
        </div>

    );
};


export default BarraCategorias;