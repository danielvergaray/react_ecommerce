import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "../../style.module.css";
import { NavLink } from "react-router-dom";

const SliderHeroList = ({ imagenesHero }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        className={styles.carouselDesktop}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {imagenesHero.map((imagen) => (
          <Carousel.Item key={imagen.image} interval={imagen.interval}>
            <img
              className={`d-block w-100 ${styles.fullheight}`}
              src={imagen.image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className={styles.textoLeft}>{imagen.title}</h3>
              <p className={styles.textoLeft}>{imagen.subTitle}</p>
              <NavLink to={imagen.enlace}>
                <button className={styles.btnMasInformacion}>
                  Más Información
                </button>
              </NavLink>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Carousel
        className={styles.carouselMobile}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {imagenesHero.map((imagen) => (
          <Carousel.Item key={imagen.image} interval={imagen.interval}>
            <img
              className={`d-block w-100 ${styles.sliderImgMobile}`}
              src={imagen.imageMobile}
              alt="First slide"
            />

            <Carousel.Caption>
              <div className={styles.contenedorInfoMobile}>
                <h3 className={styles.tituloCarouselMobile}>{imagen.title}</h3>
                <p className={styles.textoCarouselMobile}>
                  {imagen.subTitleMobile}
                </p>
              </div>

              <NavLink to={imagen.enlace}>
                <button className={styles.btnMasInformacionMobile}>
                  Más Información
                </button>
              </NavLink>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderHeroList;
