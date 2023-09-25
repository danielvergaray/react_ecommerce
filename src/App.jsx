import React, { useState } from "react";
import "./App.css";
import NavBarListContainer from "./components/navBar/NavBarListContainer";
import FooterListContainer from "./components/footer/FooterListContainer";
import SliderHeroListContainer from "./components/silderHero/SliderHeroListContainer";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PopUpBienvenidaList from "./components/ventanaBievenida/popUpBienvenidaList";
import ItemListContainer from "./components/item/ItemListContainer";
import Home from "./components/pages/Home";
import Detalles from "./components/pages/Detalles";
import Productos from "./components/pages/Productos";
import { Route, Routes } from "react-router-dom";
import FiltradoCategoriasContainer from "./components/filtradoCategorias/FiltradoCategoriasContainer";

const App = () => {
  return (
    <div>
      <PopUpBienvenidaList />

      <NavBarListContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/detalles/:id" element={<Detalles/>}   />  
      </Routes>

      {/* <SliderHeroListContainer /> */}

      {/* <ItemListContainer /> */}

      <FooterListContainer />

      <FiltradoCategoriasContainer/>
    </div>
  );
};

export default App;
