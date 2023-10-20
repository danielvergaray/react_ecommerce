import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import styles from "../../style.module.css";

const NoticiasList = ({ dataNoticias, dataNoticiasSpiderman }) => {
    return (
        <div className={styles.contenedorNoticias}>
            {dataNoticiasSpiderman.map((noticia) => (
                <div className={styles.contenedorPrimeraNoticia} key={noticia.title} >
                    <Link to={noticia.video} target="_blank" className={styles.imagenPrimeraNoticiaContenedor}>
                        
                        <img className={styles.imagenPrimeraNoticia}
                            src={noticia.image} alt="" />
                    </Link>
                    <div className={styles.PrimeraNoticiaInformacion}>
                        <h2 className={styles.noticiasTitulo}>{noticia.title}</h2>
                        <p className={styles.noticiasParrafos}>{noticia.text1}</p>
                    </div>
                </div>
            ))}

            <div className={styles.contenedorNoticiasVarias}>
                {dataNoticias.map((noticia) => (
                    <div className={styles.contenedorNoticiasInferiores} key={noticia.title} >
                    <Link to={noticia.video} target="_blank" className={styles.imagenOtrasNoticiasContenedor}>
                        <img 
                            className={styles.imagenOtrasNoticias}
                            src={noticia.image} alt="" />
                    </Link>
                    <div className={styles.PrimeraNoticiaInformacion}>
                        <h2 className={styles.noticiasTitulo}>{noticia.title}</h2>
                        <p className={styles.noticiasParrafos}>{noticia.text1}</p>
                    </div>
                </div>

                    

                ))}
            </div>

        </div>
    );
};

export default NoticiasList;

