/*
    1.- Obtener el id que vino por param
    2.- voy a llamar al Endpoint para traer datos del usuario
    3.- mostrar los datos usando el componente UserDetails
*/

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DummyApi } from '../data/DummyApi';

import ItemCount from '../components/ItemCount';


export default function UserDetailsContainer () {

    const { idProducto } = useParams();
    const [producto, setProducto] = useState([]);

    useEffect(() => {

        async function callDummyApi () {
            const response = await DummyApi.getProductsInfo(idProducto); 
            const jsonParsed = await response.json();
            console.log(jsonParsed);
            setProducto(jsonParsed);
            // https://dummyjson.com/products/1
        }
        callDummyApi();
    }, [idProducto]);

    return (
        <>
            <div className="container pt-4 mt-4">
                <div className="row">
                    <div className="col-12 col-md-12">
                        DETALLE DEL PRODUCTO
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-md-6">
                        <img src={producto.thumbnail} alt={producto.title} className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h1>{producto.title}</h1>
                        <h5 className="valor">${producto.price}</h5>
                        <p>{producto.description}</p>
                        <span>Stock: {producto.stock}</span>
                        <br/><br/><br/>
                        <ItemCount stock={10} initial={1}></ItemCount>
                    </div>
                </div>
                
            </div>
        
        </>

    )
}