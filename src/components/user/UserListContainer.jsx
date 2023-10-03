import React, { useContext, useState } from "react";
import CartListContainer from "../cart/CartListContainer";
import UserList from "./Userlist";
import UserContext from "../context/UserContext";
import CartContext from "../context/cartContext/CartContext";
import CarritoVacioList from "../carritoVacio/CarritoVacioList";


const UserListContainer = () => {
  const [userData, setUserData] = useState({
    user: "",
    pass: "",
  });

  const { inicioSesion } = useContext(UserContext)

  const { cart } = useContext(CartContext)

  const [showCart, setShowCart] = useState(false)
  const [validation, setValidation] = useState(false);
  const [login, setLogin] = useState(false)

  const getUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const validacionDatos = () => {
    if (userData.user && userData.pass) {
      setValidation(true);
      console.log("bienvenido");
      setShowCart(true)
      setLogin(true) // FALTA HACER QUE NO SE MUESTRE el LOGIN CUANDO YA SE HAYA Loggeado

      // Guardar datos de inicio de sesión en sessionStorage
      sessionStorage.setItem("usuario", userData.user);
      sessionStorage.setItem("contraseña", userData.pass);

      
    }
  };


  return (
    <div>
      {sessionStorage.length === 0 ? (
        <UserList getUserData={getUserData} 
        validation={validacionDatos} 
        inicioSesion= {inicioSesion}
        />
      ) : (
        <>
          {cart.length === 0 ? <CarritoVacioList /> : <CartListContainer />}
        </>
      )}
    </div>
  );
};

export default UserListContainer;
