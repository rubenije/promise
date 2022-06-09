import React,{useState, useEffect}  from 'react'
import ItemList from "./ItemList"
import { getData } from "../data/products"

const ItemListContainer = ({saludo}) => {

    const [listaProductos, setListaProductos]=useState([])
    const [cargando, setCargando] = useState(false)

    //async await
    const getProducts = async () =>{
        try{
            setCargando(true)
            const respuesta = await getData
            setListaProductos(respuesta)
        }catch(error){
            console.log(error)
        }finally{
            setCargando(false)
        }
    }

    useEffect(()=>{
        getProducts()
    }, [])

    //console.log(listaProductos);

    return (
        <div className="container bg-white">
            <div className="row">
            {cargando ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}
            </div>
            
        </div>
    )
}
export default ItemListContainer;