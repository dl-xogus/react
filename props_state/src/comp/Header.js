/* Header.js */
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <NavLink to='/'>홈</NavLink>
            <NavLink to='/sub/web'>서브</NavLink>
        </header>
    )
}

export default Header