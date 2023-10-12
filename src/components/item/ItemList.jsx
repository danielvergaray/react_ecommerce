import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "../../style.module.css";
import { Link } from 'react-router-dom';
import Detalles from '../pages/Detalles';
import BarraCategoriasContainer from '../barraCategorias/barraCategoriasContainer';



const ItemList = ({ productos, verMas, btnMas }) => {



    return (
        <div className={styles.seccionProductosContenedor} >

            <div className={styles.barraCategoriasContenedor}>
        
        <BarraCategoriasContainer/>
            </div>

            <div className={styles.seccionProductosProductos}>
                
                <div className={styles.productosContainer}>
                    {productos.map((producto) => (

                        <div key={producto.id} className={styles.cardsProductos}>
                            <div className={styles.productosImgContainer}>
                                <img src={producto.imagenSmall} className={styles.productosImg} />
                            </div>
                            <h2 className={styles.cardsTituloProducto}>{producto.name} </h2>
                            <p className={styles.cardsPrecio}>{producto.price} $</p>
                            <div className={styles.btnProductos}>
                                <Link to={`/detalles/${producto.id}`}>
                                    <button className="btn btn-primary">Ver más</button>
                                </Link>
                            </div>
                        </div>






                    ))}
                </div>

                <div className={styles.btnVerMas}>
                    {btnMas && <button className='btn btn-primary' onClick={verMas}>Ver más productos</button>}
                </div>
            </div>


        </div>
    );



}

export default ItemList
