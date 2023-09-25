import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import CustomSpinner from "../reutilizables/Spinner";
import useApiData from "../customHooks/useApiData";

const ItemListContainer = () => {

  const [page, setPage] = useState(4);

  const [btnMas, setBtnMas] = useState(true);

  const [loading, products, error, items] = useApiData(
    `https://fakestoreapi.com/products?limit=${page}`
  );

 

  useEffect(() => {
    /* setLoading(true)
    setTimeout(() => {
      getProducts(products)
    }, 1000) */
    if (page === 20) {
      setBtnMas(false);
    }
  }, [page]);

  const verMas = () => {
    if (page < 17) {
      setPage(page + 4);
    } else {
      setBtnMas(false);
      return;
    }
  };

  return (
    <div>
      {loading || items === null ? (
        <CustomSpinner animation="border" message="Cargando..." />
      ) : (
        <ItemList productos={products} verMas={verMas} btnMas={btnMas} />
      )}
    </div>
  );
};

export default ItemListContainer;
