import React, { useState } from "react";
import "./App.css";
import NavBarListContainer from "./components/navBar/NavBarListContainer";
import FooterListContainer from "./components/footer/FooterListContainer";
import SliderHeroListContainer from "./components/silderHero/SliderHeroListContainer";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import IngresoNombre from "./components/IngresarNombre";


const App = () => {
 

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
      
      <NavBarListContainer/>
      
      <SliderHeroListContainer/>
      
      <FooterListContainer/>
    </div>
  );
};

export default App;
