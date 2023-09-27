import React from 'react'
import styles from "../../style.module.css";
import BarraCategoriasContainer from './barraCategoriasContainer';
import { NavLink } from 'react-router-dom';

const BarraCategorias = ({ categorias }) => {


    return (
        <div>
            <h2 className={styles.tituloCategoria}>Categorias</h2>
            <ul className={styles.listaCategorias}>
                {categorias.map((categoria) => (

                    <NavLink to={`/categoria/${categoria}`}  className= {( { isActive} ) => isActive  ? `${styles.linkActive}`: `${styles.barraCategoriasItem}`} key={categoria}>{categoria}</NavLink>

                ))}
            </ul>
        </div>

    );
};


export default BarraCategorias;