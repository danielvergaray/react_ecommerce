import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    user: "",
    pass: "",
  });

  const nombreUsuario = (newUser) => {
    setUserData({
      ...userData,
      user: newUser
    });
  };

  const inicioSesion = () => {
    console.log("Iniciaste sesion");

    toast.success("Inicio de sesión exitoso", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const values = {
    userData,
    inicioSesion,
    nombreUsuario
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
