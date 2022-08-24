import { Link, NavLink } from 'react-router-dom'
import Navbar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';



export default function Home () {
    return (
        <div className="page">
            <Navbar></Navbar>
            <ItemListContainer/>
        </div>
    )
}
