import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import mortalkombatImage from "./components/imagenes/mortalkombat1.jpg";
import fifa24 from "./components/imagenes/fifa24.jpg";
import nba24k from "./components/imagenes/nba24k.jpg";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import IngresoNombre from "./components/IngresarNombre";

const App = () => {
  const datosApp = {
    opcionesMenu: ["Inicio", "Productos", "Promociones", "Noticias"],
    opcionesFooter: ["Contactanos", "Tiendas", "Ayuda", "Reportar un problema"],
    imagenesHero: [
      {
        image: mortalkombatImage,
        title: "Mortal Kombat 1 | 19 de  septiembre",
        subTitle: "NetherRealm Studios marca el comienzo de una nueva era en esta emblemática franquicia de pelea con un reinicio completo que cambiará el mundo como lo conocemos",
        interval: 1500,
      },
      {
        image: fifa24,
        title: "EA Sports FC 24 | 29 de  septiembre",
        subTitle:
          "Disfruta de una nueva era del mejor deporte del mundo con una autenticidad increíble en la cancha. EA SPORTS FC™ 24 es el comienzo del futuro del fútbol.",
        interval: 1500,
      },
      {
        image: nba24k,
        title: "NBA 2K24",
        subTitle: "Disfruta de un juego más reactivo y elementos visuales más pulidos cuando juegues con tus equipos favoritos de la NBA y WNBA en NBA 2K24.",
        interval: 1500,
      },
    ],
  };

  const [nombre, setNombre] = useState("");
  const [mostrarSaludo, setMostrarSaludo] = useState(false);

  // ingreso de nombre del usuario
  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  // para mostrar el saludo
  const mostrarSaludoFuncion = () => {
    setMostrarSaludo(true);
  };
  0;

  return (
    <div>
      <IngresoNombre />
      <NavBar opciones={datosApp.opcionesMenu} />
      <Slider imagenesHero={datosApp.imagenesHero} />
      <Footer opciones={datosApp.opcionesFooter} />
    </div>
  );
};

export default App;
