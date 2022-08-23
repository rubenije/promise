import React,{useState, useEffect}  from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList"
import { DummyApi } from '../data/DummyApi';

const ItemListContainer = ({saludo}) => {

    const [productos, setListadoProductos] = useState([]);
    useEffect(() => {

        async function callDummyApi () {
            const response = await DummyApi.getProducts(); 
            const jsonParsed = await response.json();
            setListadoProductos(jsonParsed.products);
            // https://dummyjson.com/products?limit=50
        }
        callDummyApi();
    }, []);


    //const [listaProductos, setListaProductos]=useState([])
    const [cargando, setCargando] = useState(false)

    

    return (
        <div className="container bg-white">
            <div className="row">
            {cargando ? <p>Cargando...</p> : <ItemList listaProductos={productos}/>}
            </div>
            
        </div>
    )
}
export default ItemListContainer;