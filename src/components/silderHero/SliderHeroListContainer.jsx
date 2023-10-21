import React from "react";
import SliderHeroList from "./SliderHeroList";
import mortalkombatImage from "../../components/imagenes/mortalkombat1.jpg";
import fifa24 from "../../components/imagenes/fifa24.jpg";
import nba24k from "../../components/imagenes/nba24k.jpg";
import mortalkombatImageMobile from "../../components/imagenes/mortalkombat1Mobile.jpg";
import fifa24Mobile from "../../components/imagenes/fifa24Mobile.jpg";
import nba24kMobile from "../../components/imagenes/nba24kMobile.jpg";

const SliderHeroListContainer = () => {
  const datosSliderHero = {
    imagenesHero: [
      {
        image: mortalkombatImage,
        title: "Mortal Kombat 1 | 19 de  septiembre",
        subTitle:
          "NetherRealm Studios marca el comienzo de una nueva era en esta emblemática franquicia de pelea con un reinicio completo que cambiará el mundo como lo conocemos",
        subTitleMobile: "NetherRealm Studios marca el comienzo de una nueva era ...",
        interval: 5500,
        enlace: "/detalles/D2Zdv6p04ECHVwdwLNox",
        imageMobile: mortalkombatImageMobile,
      },
      {
        image: fifa24,
        title: "EA Sports FC 24 | 29 de  septiembre",
        subTitle:
          "Disfruta de una nueva era del mejor deporte del mundo con una autenticidad increíble en la cancha. EA SPORTS FC™ 24 es el comienzo del futuro del fútbol.",
        subTitleMobile:
          "Disfruta de una nueva era del mejor deporte del mundo con ...",
        interval: 5500,
        enlace: "/detalles/fFytYmfb045ZAKDaw851",
        imageMobile: fifa24Mobile,
      },
      {
        image: nba24k,
        title: "NBA 2K24",
        subTitle:
          "Disfruta de un juego más reactivo y elementos visuales más pulidos cuando juegues con tus equipos favoritos de la NBA y WNBA en NBA 2K24.",
          subTitleMobile:
          "Disfruta de un juego más reactivo y elementos visuales más pulidos cuando ...",
        interval: 5500,
        enlace: "/detalles/wJs3Dnticv3n069bOSdD",
        imageMobile: nba24kMobile,
      },
    ],
  };

  return <SliderHeroList imagenesHero={datosSliderHero.imagenesHero} />;
};

export default SliderHeroListContainer;
