import React, { useContext, useState } from "react";
import CartListContainer from "../cart/CartListContainer";
import UserList from "./Userlist";
import UserContext from "../context/UserContext";

const UserListContainer = () => {
  const [userData, setUserData] = useState({
    user: "",
    pass: "",
  });


/*   const {userData}= useContext(UserContext) */

  const [showCart, setShowCart]= useState(false)  
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
    }
  };

  return (
    <div>
      {showCart && login ? (<CartListContainer />) : 
      <UserList getUserData={getUserData} 
      validation={validacionDatos} />}

    </div>
  );
};

export default UserListContainer;
