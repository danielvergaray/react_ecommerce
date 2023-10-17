import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import styles from "../../style.module.css";

const NoticiasList = ({ dataNoticias, dataNoticiasSpiderman }) => {
    return (
        <div className={styles.contenedorNoticias}>

            {dataNoticiasSpiderman.map((noticia) => (
                <div className={styles.contenedorPrimeraNoticia} key={noticia.title} >
                    <Link to={noticia.video} style={{ margin: "auto" }}>
                        <img
                            className={styles.imagenPrimeraNoticia}
                            variant="top"
                            src={noticia.image} alt="" />
                    </Link>
                    <div className={styles.PrimeraNoticiaInformacion}>
                        <h2>{noticia.title}</h2>
                        <p>{noticia.text1}</p>
                    </div>
                </div>
            ))}

            <div className={styles.contenedorNoticiasVarias}>
                {dataNoticias.map((noticia) => (
                    <div >
                        <Card key={noticia.title} style={{ width: '14rem', border: "none" }}>
                            <Link to={noticia.video}>
                                <Card.Img
                                    style={{ width: '700px', border: "none" }}
                                    variant="top"
                                    src={noticia.image} alt="" />
                            </Link>
                            <Card.Body>
                                <h2>{noticia.title}</h2>
                                <p>{noticia.text1}</p>
                            </Card.Body>
                        </Card>
                    </div>

                ))}
            </div>

        </div>
    );
};

export default NoticiasList;

