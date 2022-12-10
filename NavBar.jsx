
import "./Navbar.css";

import { CartWidget } from "../cartWidget/CartWidget";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="container-logo">
                <img className="logo-navbar"
                    src="https://res.cloudinary.com/drbpixswh/image/upload/v1669503647/hw4zfajdmli4t7zicqlv.png"
                    alt="" />

            </div>
            <ul className="navbar">
                <li className="navbar-item">Todos</li>
                <li className="navbar-item">Casas</li>
                <li className="navbar-item">Departamentos</li>
                <li className="navbar-item">Lotes</li>
            </ul>

            <CartWidget />

        </div>

    )

}
export default NavBar;