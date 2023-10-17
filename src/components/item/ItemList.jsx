import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "../../style.module.css";
import { Link } from 'react-router-dom';
import Detalles from '../pages/Detalles';
import BarraCategoriasContainer from '../barraCategorias/BarraCategoriasContainer';



const ItemList = ({ productos, verMas, btnMas }) => {



    return (
        <div className={styles.seccionProductosContenedor} >

            <div className={styles.barraCategoriasContenedor}>

                <BarraCategoriasContainer />
            </div>

            <div className={styles.seccionProductosProductos}>

                <div className={styles.productosContainer}>
                    {productos.map((producto) => (

                        <Card key={producto.id} style={{ width: '14rem', border: "none" }}>

                            <Link to={`/detalles/${producto.id}`}>
                                <Card.Img
                                    style={{ borderRadius: "10px", maxWidth: "100%", height: "auto" }}
                                    variant="top"
                                    src={producto.imageSmall}
                                />
                            </Link>
                            <Card.Body>
                                <Card.Title>{producto.name}</Card.Title>
                                <Card.Text>{producto.price} $</Card.Text>

                            </Card.Body>
                            {/* <h2 className={styles.cardsTituloProducto}>{producto.name} </h2> <br /> */}
                            {/* <p className={styles.cardsPrecio}>{producto.price} $</p> */}
                            {/* <div className={styles.btnProductos}>
                                <Link to={`/detalles/${producto.id}`}>
                                    <button className="btn btn-primary">Ver más</button>
                                </Link>
                            </div> */}
                        </Card>






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
