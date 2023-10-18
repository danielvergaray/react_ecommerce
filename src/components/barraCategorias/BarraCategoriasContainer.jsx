import React, { useEffect } from 'react'
import useApiData from '../customHooks/useApiData'
import BarraCategorias from './barraCategorias';
import { useState } from 'react';
import { collection, getDocs, getFirestore, snapshotEqual, query, where } from "firebase/firestore"
import ItemListContainer from '../item/ItemListContainer';

const BarraCategoriasContainer = () => {
    const [categoriasUnicas, setCategoriasUnicas] = useState([/* "TODOS" */]);
    /* const [, products] = useApiData("https://fakestoreapi.com/products"); */

    const [products, setProducts] = useState([])

    

    useEffect(() => {
        const baseDatos = getFirestore();
        const itemCollection = collection(baseDatos, "productos")


       /*  const filtrado = query(itemCollection, where("category", "==", "Acción")) */
        /* getDocs(filtrado) */

        getDocs(itemCollection)
            .then(snapshot => {
                const allData = snapshot.docs.map(document => ({ id: document.id, ...document.data() }))

                setProducts(allData)
            })
    }, [])


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
            setCategoriasUnicas([/* "TODOS" */, ...categorias]);
        }
    }, [products]);


    


    return (
       
            <BarraCategorias categorias={categoriasUnicas}
                /* seleccionarCategoria={seleccionarCategoria} */
            />

            
    )
}

export default BarraCategoriasContainer