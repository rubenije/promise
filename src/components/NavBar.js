import CartWidget from "./CartWidget"
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white">
            <div className="container-fluid p-0"> <a className="navbar-brand text-uppercase fw-800"><span className="border-red pe-2">CODER</span>HOUSE</a> <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="myNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="fas fa-bars"></span> </button>
                <div className="collapse navbar-collapse" id="myNav">
                    <div className="navbar-nav ms-auto"> 
                        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' } aria-current="page">All</NavLink> 
                        <NavLink to="/category/1" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Smartphones</NavLink> 
                        <NavLink to="/category/2" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Laptops</NavLink> 
                        <NavLink to="/category/3" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Fragrances</NavLink> 
                        <NavLink to="/category/4" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Skincare</NavLink> 
                        <NavLink to="/category/5" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Groceries</NavLink>
                        <NavLink to="/category/6" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Home Decoration</NavLink>
                    </div>
                </div>
            </div>
            <CartWidget></CartWidget>
        </nav>
        
    )
}
  
  export default NavBar;