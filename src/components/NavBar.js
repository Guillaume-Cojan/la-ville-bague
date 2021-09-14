import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import Hamburger from "../assets/hamburger.png";
import Eng from "../assets/uk.png";

function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="navbar-container">
                    <Navbar.Brand className="navbar-left">
                        <NavLink id="navbar-main-title" to="/">
                            LA VILLE BAGUE
                        </NavLink>
                        <a
                            href="http://www.saintcoulomb.com/"
                            id="navbar-subtitle"
                            target="_blank"
                            rel="noreferrer"
                        >
                            SAINT-COULOMB
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        className="hamburger-menu"
                    >
                        <img src={Hamburger} alt="menu" />
                    </Navbar.Toggle>
                    <Navbar.Collapse className="navbar-right">
                        <Nav className="navbar-links">
                            <NavLink className="navlink-home" to="/">
                                Accueil
                            </NavLink>
                            <Dropdown className="d-inline mx-2">
                                <Dropdown.Toggle
                                    id="dropdown-autoclose-true"
                                    variant="success"
                                    className="navlink"
                                >
                                    Le lieu
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <NavLink
                                            className="navlink"
                                            to="/compagnie_indes"
                                        >
                                            La Compagnie des Indes
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <NavLink
                                            className="navlink"
                                            to="/construction_malouinieres"
                                        >
                                            La construction des malouinières
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <NavLink
                                            className="navlink"
                                            to="/histoire_ville_bague"
                                        >
                                            L'Histoire de la Ville Bague
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <NavLink
                                            className="navlink"
                                            to="/jacques_chauveau"
                                        >
                                            Jacques Chauveau
                                        </NavLink>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="success"
                                    className="navlink"
                                >
                                    Prestations
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <NavLink
                                            className="navlink"
                                            to="/visites"
                                        >
                                            Visites guidées
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <NavLink
                                            className="navlink"
                                            to="/receptions"
                                        >
                                            Réceptions
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <NavLink
                                            className="navlink"
                                            to="/gites"
                                        >
                                            Locations de gîtes
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <NavLink
                                            className="navlink"
                                            to="/evenements"
                                        >
                                            Evénements
                                        </NavLink>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <NavLink className="navlink" to="/galerie">
                                Galerie
                            </NavLink>
                            <NavLink className="navlink" to="/contacts">
                                Contacts
                            </NavLink>
                        </Nav>
                        <Nav>
                            <img
                                src={Eng}
                                alt="eng-flag"
                                className="eng-flag"
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
