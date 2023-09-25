import React, { useEffect } from 'react'
import useApiData from '../customHooks/useApiData'
import BarraCategorias from './barraCategorias';
import { useState } from 'react';

const BarraCategoriasContainer = () => {
    const [categoriasUnicas, setCategoriasUnicas] = useState(["TODOS"]);
    const [, products] = useApiData("https://fakestoreapi.com/products");

    useEffect(() => {
        if (products) {
            const categorias = [];

            // Iterar a través de los productos y agregar categorías únicas a "categorias"
            products.forEach(producto => {
                if (!categorias.includes(producto.category)) {
                    categorias.push(producto.category);
                }
            });

            // Actualizar el estado "categoriasUnicas" con las categorías únicas
            setCategoriasUnicas(["TODOS", ...categorias]);
        }
    }, [products]);

    return (

        <BarraCategorias categorias={categoriasUnicas}
            products={products}


        />


    )
}

export default BarraCategoriasContainer