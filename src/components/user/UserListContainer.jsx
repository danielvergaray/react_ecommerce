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

  const { inicioSesion, nombreUsuario, logged } = useContext(UserContext);

  const { cart } = useContext(CartContext);

  const [showCart, setShowCart] = useState(false);
  const [validation, setValidation] = useState(false);
  const [login, setLogin] = useState(false);

  const getUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const validacionDatos = () => {
    if (userData.user && userData.pass) {
      setValidation(true);

      setShowCart(true);
      setLogin(true); // FALTA HACER QUE NO SE MUESTRE el LOGIN CUANDO YA SE HAYA Loggeado

      // Guardar datos de inicio de sesión en sessionStorage
      localStorage.setItem("usuario", userData.user);
      localStorage.setItem("contraseña", userData.pass);

      // Actualizar el nombre de usuario en el contexto
      nombreUsuario(userData.user);
    }
  };


  
  return (
    <div>
      {!logged ? (
        <UserList
          userData={userData}
          getUserData={getUserData}
          validation={validacionDatos}
          inicioSesion={inicioSesion}
        /* mensaje={mensaje} */
        />
      ) : (
        <>
          {cart.length === 0 ? <CarritoVacioList /> : <CartListContainer />}
          {!logged && <UserList userData={userData} getUserData={getUserData}
            validation={validacionDatos}
            inicioSesion={inicioSesion}
          />}
        </>
      )}
    </div>
  );
};

export default UserListContainer;
