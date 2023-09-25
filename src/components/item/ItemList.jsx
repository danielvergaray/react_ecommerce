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
                <div className={styles.tituloContainer}>
                    <h1 className={styles.titulo}>Productos</h1>
                </div>
                <div className={styles.productosContainer}>
                    {productos.map((producto) => (

                        <div key={producto.id} className={styles.cardsProductos}>
                            <div className={styles.productosImgContainer}>
                                <img src={producto.image} className={styles.productosImg} />
                            </div>
                            <h2 className={styles.cardsTituloProducto}>{producto.title} </h2>
                            <p className={styles.cardsPrecio}>Precio Online: {producto.price} $</p>
                            <div className={styles.btnProductos}>
                                <Link to={`/detalles/${producto.id}`}>
                                    <button className="btn btn-primary">Ver más</button>
                                </Link>
                            </div>
                        </div>






                    ))}
                </div>

                <div className={styles.btnVerMas}>
                    {btnMas && <button className='btn btn-primary' onClick={verMas}>Ver más</button>}
                </div>
            </div>


        </div>
    );



}

export default ItemList
