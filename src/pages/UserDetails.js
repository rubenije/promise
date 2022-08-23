import { Link, NavLink } from 'react-router-dom'

/*
App 
    > UserDetails (page) 
        > UserDetailsCopntainer (comp / ajax)
            > UserDetails (comp)
*/
import UserDetailsContainer from '../components/UserDetailsContainer/UserDetailsContainer'


export default function UserDetails () {
    return (
        <div>
            <UserDetailsContainer></UserDetailsContainer>
        </div>
    )
}