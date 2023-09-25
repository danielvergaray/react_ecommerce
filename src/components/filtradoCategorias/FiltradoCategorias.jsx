import React from 'react'
import useApiData from '../customHooks/useApiData'
import styles from "../../style.module.css";
import { Link } from 'react-router-dom';

const FiltradoCategorias = ({ categorias }) => {

const [, products] = useApiData(
  "https://fakestoreapi.com/products"
); 

  return (

    <div>
      {products.map((producto) => (

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

  )
}
  export default FiltradoCategorias