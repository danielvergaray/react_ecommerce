import { React, useContext } from "react";
import styles from "../../style.module.css";
/* import BarraCategoriasContainer from './barraCategoriasContainer'; */
import { NavLink } from "react-router-dom";
import CartContext from "../context/cartContext/CartContext";
import Dropdown from "react-bootstrap/Dropdown";

const BarraCategorias = ({ categorias }) => {
  const { seleccionarCategoria } = useContext(CartContext);
  return (
    <div>
      <h2 className={styles.tituloCategoria}>Categorias</h2>
      <ul className={styles.listaCategorias}>
        <NavLink
          to="/productos/"
          className={({ isActive }) =>
            isActive
              ? `${styles.linkActiveCategorias}`
              : `${styles.barraCategoriasItem}`
          }
        >
          Todos
        </NavLink>
        {categorias.map((categoria) => (
          <NavLink
            /* onClick={() => seleccionarCategoria(categoria)} */
            to={`/categoria/${categoria.category}`}
            className={({ isActive }) =>
              isActive
                ? `${styles.linkActiveCategorias}`
                : `${styles.barraCategoriasItem}`
            }
            key={categoria.category}
          >
            {categoria.category}
          </NavLink>
        ))}
      </ul>

      <Dropdown  className={styles.listaCategoriasMobile}>
        <Dropdown.Toggle style={{backgroundColor:"black"}} variant="success" id="dropdown-basic">
          <NavLink
            to="/productos/"
            className={({ isActive }) =>
              isActive
                ? `${styles.linkActiveCategorias}`
                : `${styles.barraCategoriasItem}`
            }
          >
            Todos
          </NavLink>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {categorias.map((categoria) => (
            <NavLink
              to={`/categoria/${categoria.category}`}
              className={({ isActive }) =>
                isActive
                  ? `${styles.linkActiveCategorias}`
                  : `${styles.barraCategoriasItem}`
              }
              key={categoria.category}
            >
              <Dropdown.Item href="#/action-1" >
                {categoria.category}
              </Dropdown.Item>
            </NavLink>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* <Dropdown className={styles.listaCategoriasMobile}>
        <div>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
          
          <Dropdown.Menu></Dropdown.Menu>
         
        </div>
      </Dropdown> */}
    </div>
  );
};

export default BarraCategorias;
