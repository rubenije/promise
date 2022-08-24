import { Link, NavLink } from 'react-router-dom'
import Navbar from '../components/NavBar';
import UserDetailsContainer from '../components/UserDetailsContainer';

export default function Product () {
    return (
        <div className="page">
            <Navbar></Navbar>
            <UserDetailsContainer/>
        </div>
    )
}
