import { useState } from 'react';

const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState(initial);


    const addCount = () => {
        if (count < (stock)) setCount(count + 1);
    }

    const removeCount = () => {
        if (count > (initial)) setCount(count - 1); 
    }

    const addToCart = () => {
        console.log("Se ha agregado productos, como pasar valores a otro componente." );
    }

    return (
      <>
        <div className="input-group">
            <a href={() => false} className="btn btn-default btn-number" onClick={removeCount}>
                <strong>-</strong>
            </a>
            <h1>{count}</h1>
            <a href={() => false} className="btn btn-default btn-number" onClick={addCount}>
                <strong>+</strong>
            </a>
        </div>
        <br/>
        <a href={() => false} type="button" className="btn btn-primary" onClick={addToCart}>Agregar al Carrito</a>
    </>

    )
}
export default ItemCount;