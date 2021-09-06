import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <a href="index.html" id="navbar-main-title">
                    LA VILLE BAGUE
                </a>
                <a href="http://www.saintcoulomb.com/" id="navbar-subtitle">
                    SAINT-COULOMB
                </a>
            </div>
            <div className="navbar-right">
                <li>
                    <Link className="navlink-home" to="/">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link className="navlink" to="/">
                        Le lieu
                    </Link>
                </li>
                <li>
                    <Link className="navlink" to="/visites">
                        Prestations
                    </Link>
                </li>
                <li>
                    <Link className="navlink" to="/">
                        Galerie
                    </Link>
                </li>
                <li>
                    <Link className="navlink" to="/">
                        Contacts
                    </Link>
                </li>
                <div>FR</div>
                <div>EN</div>
            </div>
        </div>
    );
}

export default Navbar;
