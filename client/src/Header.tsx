import { Link, Outlet } from 'react-router'

const Header: React.FC = () => {
    return (
        <>
        <header>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/user/profile">Proile</Link></li>
                <li><Link to="/user/settings">Settings</Link></li>
            </ul>
        </header>
        <main>
            <Outlet />
        </main>
        </>
    )
}

export default Header;