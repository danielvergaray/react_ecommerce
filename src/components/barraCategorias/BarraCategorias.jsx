import {React, useContext} from 'react'
import styles from "../../style.module.css";
/* import BarraCategoriasContainer from './barraCategoriasContainer'; */
import { NavLink } from 'react-router-dom';
import CartContext from '../context/cartContext/CartContext';



const BarraCategorias = ({ categorias}) => {

    const { seleccionarCategoria } = useContext(CartContext)
    return (
        <div>
            <h2 className={styles.tituloCategoria}>Categorias</h2>
            <ul className={styles.listaCategorias}>
                <NavLink to="/productos/" className= {( { isActive} ) => isActive  ? `${styles.linkActive}`: `${styles.barraCategoriasItem}`}>Todos</NavLink>
                {categorias.map((categoria) => (

                    <NavLink onClick={()=>seleccionarCategoria(categoria)}  to={`/categoria/${categoria}`}  className= {( { isActive} ) => isActive  ? `${styles.linkActive}`: `${styles.barraCategoriasItem}`} key={categoria}>{categoria}</NavLink>

                ))}
            </ul>
        </div>

    );
};


export default BarraCategorias;