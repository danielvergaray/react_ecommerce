import React, { useState } from "react";
import "./App.css";
import NavBarListContainer from "./components/navBar/NavBarListContainer";
import FooterListContainer from "./components/footer/FooterListContainer";
import SliderHeroListContainer from "./components/silderHero/SliderHeroListContainer";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PopUpBienvenidaList from "./components/ventanaBievenida/popUpBienvenidaList";
import ItemListContainer from "./components/item/ItemListContainer";

const App = () => {
 

  return (
    <div>
      <PopUpBienvenidaList />
      
      <NavBarListContainer/>
      
      <SliderHeroListContainer/>
      
      <ItemListContainer/>

      <FooterListContainer/>
    </div>
  );
};

export default App;
