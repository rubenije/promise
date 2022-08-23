import { Link } from 'react-router-dom'

export default function Users () {
    return (
        <div className="page">
            <h1>Users</h1>  
            <div>
                <Link to="/">Home</Link>&nbsp;&nbsp;
                <Link to="/about-us">About</Link>&nbsp;&nbsp;
                <Link to="/contact">Contact</Link>&nbsp;&nbsp;
                <Link to="/users">Users</Link>&nbsp;&nbsp;
            </div>
        </div>
    )
}