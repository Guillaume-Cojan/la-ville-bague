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
                <div className="navbar-links-container">
                    <button
                        type="button"
                        className="btn-navbar-primary"
                        data-toggle="collapse"
                        data-target=".nav-collapse"
                    >
                        MENU
                        <span className="icon-chevron-down icon-white"></span>
                    </button>
                    <div className="nav-collapse">
                        <ul className="nav-pills">
                            <li className="dropdown active">
                                <a href="index.html">Accueil</a>
                            </li>
                            <li className="dropdown">
                                {" "}
                                <a className="dropdown-toggle">
                                    Le lieu <b class="caret"></b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="compagnie_indes.html">
                                            La Compagnie des Indes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="construction_malouinieres.html">
                                            La construction des malouinières
                                        </a>
                                    </li>
                                    <li>
                                        <a href="histoire_ville_bague.html">
                                            L'Histoire de la Ville Bague
                                        </a>
                                    </li>
                                    <li>
                                        <a href="jacques_chauveau.html">
                                            Jacques Chauveau
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                {" "}
                                <a className="dropdown-toggle">
                                    Prestations<b class="caret"></b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="visites_guidees.html">
                                            Visites guidées
                                        </a>
                                    </li>
                                    <li>
                                        <a href="receptions.html">Réceptions</a>
                                    </li>
                                    <li>
                                        <a href="location_gites.html">
                                            Location de gîtes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="evenements.html">Evénements</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="galerie.html">Galerie</a>
                            </li>
                            <li className="dropdown">
                                <a href="contacts.html">Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
