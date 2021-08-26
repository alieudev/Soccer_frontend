import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='nav-bar'>
            <NavLink className='nav-link' to='' style={{textDecoration: 'none', color: 'black'}}>Home</NavLink>
            |
            <NavLink className='nav-link' to='/manage_team' style={{textDecoration: 'none', color: 'black'}}>Manage Team</NavLink>
        </nav>
    )
}

export default NavBar;