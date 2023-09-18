import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "../../style.module.css";



const ItemList = ({ productos }) => {


    return (

        <div className={styles.contenedorTotal}>
            {productos.map((producto) => (
                <div className= {styles.cardsContainer}>
                    <div className={styles.containerImgCards}>
                        <img className={styles.imgProductos}
                        src={producto.image} />
                    </div>
                    <div className= {styles.cardsInfoContainer}>
                        <h2>{producto.title} </h2>
                        <p>{producto.description}</p>
                        <p>{producto.price} </p>
                        <button >Go somewhere</button>
                    </div>
                </div>
            ))}



        </div>




    )





    {/* <div className='row'>
            {productos.map((producto) => (
          <div className="col-6 col-md-4">
            <img className='card-img-top'
            
            src={producto.image} 
            alt= {producto.title} />
          <div>
            <h5 className="card-title">{producto.title} </h5>
          </div>
          </div> 
            ))}
        </div> */}

}

export default ItemList