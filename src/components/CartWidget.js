import { NavLink } from 'react-router-dom';

const CartWidget = () => {
    return (
        <NavLink to="/cart" className="btn btn-primary position-relative">
            Carro
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                4
                <span className="visually-hidden">unread messages</span>
            </span>
        </NavLink>

    )
}
export default CartWidget;