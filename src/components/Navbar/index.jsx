import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-logo">
        <img src="/LOGO.png" alt="Logo de l'application" />
            </div>
        <ul className="navbar-menu">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">A propos</Link></li>
        </ul>
        </nav>
    )
}

export default Navbar