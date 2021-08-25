import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <NavLink to=''>Home</NavLink>
            <NavLink to='manage_team'>Manage Team</NavLink>
        </nav>
    )
}

export default NavBar;