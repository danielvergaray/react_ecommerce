import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "./UserContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const UserContextProvider = ({ children }) => {
  /* const userLogin= JSON.parse(localStorage.getItem("logged")) || false */

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

  const [logged, setLogged] = useState(false)

  const logOut = () => {
    setUserData({
      user: "",
      pass: "",
    })

  }

  useEffect(() => {
    localStorage.setItem("logged", JSON.stringify(logged))
  }, [logged])

  const MySwal = withReactContent(Swal)



  const inicioSesion = () => {
  

    setLogged(true)

    MySwal.fire({
      title: <strong>Bienvenido!</strong>,
      html: <i>Inicio de sesión exitoso</i>,
      icon: 'success',
      timer:2000
    })

  };

  const values = {
    userData,
    inicioSesion,
    nombreUsuario,
    logged,
    logOut
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;