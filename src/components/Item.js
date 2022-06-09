import React from 'react';
//import ItemCount from "./ItemCount"
import Rating from "./Rating"

const Item = ({producto}) => {
    const {id, title, thumbnail, price, stock, rating} = producto 


    return (
        <>
            <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                <a href={() => false} to={`/detalle/${id}`}>
                    <div className="product"> <img src={thumbnail} alt={title} />
                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                            <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                            <li className="icon mx-3"><span className="far fa-heart"></span></li>
                            <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                        </ul>
                    </div>
                </a>
                
                <div className="title pt-4 pb-1">{title}</div>
                <Rating rating={rating}/>
                <div className="stock">Stock: {stock}</div>
                <div className="price">${price}</div>
                
                
                
            </div>
        </>
    )
    //<div className="tag bg-red">sale</div><ItemCount stock={stock} initial={1}></ItemCount>
}
export default Item