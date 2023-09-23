import React from "react";
import ItemDetail from "./ItemDetail";
import useApiData from "../customHooks/useApiData";

const ItemDetailContainer = ({ id }) => {
  const [, item] = useApiData(`https://fakestoreapi.com/products/${id}`);
  /* Se deja un espacio vacio antes de item ya que en useApiData estoy retornando el valor products de segundo (despues de loading), el espacio vacio se deja para que loading se asigne a la nada */

  return <>{item !== null && <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
