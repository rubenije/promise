import React from "react"
import Item from "./Item"

const ItemList = ({listaProductos}) => {

    return (
        <>
            {listaProductos.map((producto) =><Item key={producto.id} producto={producto}/>)}
        </>
    )

}
export default ItemList