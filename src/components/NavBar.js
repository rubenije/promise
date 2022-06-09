import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white">
            <div className="container-fluid p-0"> <a className="navbar-brand text-uppercase fw-800" href={() => false}><span className="border-red pe-2">New</span>Product</a> <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="myNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="fas fa-bars"></span> </button>
                <div className="collapse navbar-collapse" id="myNav">
                    <div className="navbar-nav ms-auto"> <a className="nav-link active" aria-current="page" href={() => false}>All</a> <a className="nav-link" href={() => false}>Women's</a> <a className="nav-link" href={() => false}>Men's</a> <a className="nav-link" href={() => false}>Kid's</a> <a className="nav-link" href={() => false}>Accessories</a> <a className="nav-link" href={() => false}>Cosmetics</a> </div>
                </div>
            </div>
            <CartWidget></CartWidget>
        </nav>
        
    )
}
  
  export default NavBar;