import React, { useEffect, useState } from "react";

const useApiData = (url, page) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  /* const [page, setPage] = useState(8); */

  const getProducts = () => {
    fetch(url)
      .then((infoApi) => infoApi.json())
      .then((infoApiJson) => setProducts(infoApiJson))
      .catch((error) => setError(true))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getProducts(products);
    /* setTimeout(() => {
      getProducts(products);
    }, 1000); */
    /* if (page === 20) {
            setBtnMas(false)
        } */
  }, [url, page]);

  return [loading, products, error];
};

export default useApiData;
