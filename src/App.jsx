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
import Contacto from "./components/pages/Contacto";
import UserContextProvider from "./components/context/UserContextProvider";
import User from "./components/pages/User";
import CartContextProvider from "./components/context/cartContext/CartContextProvider";

const App = () => {
  return (
    <div>
      {/* <PopUpBienvenidaList /> */}

      {/* <UserContextProvider> */}

      <CartContextProvider>
        <NavBarListContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/detalles/:id" element={<Detalles />} />
          <Route path="/categoria/:id" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/user" element={<User />} />
        </Routes>

        {/* <SliderHeroListContainer /> */}

        {/* <ItemListContainer /> */}

        <FooterListContainer />
      </CartContextProvider>
      {/* </UserContextProvider> */}
    </div>
  );
};

export default App;
