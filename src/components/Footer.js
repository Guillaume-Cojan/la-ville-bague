import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-sections">
                <div className="footer-section">
                    <h3>A propos</h3>
                    <div className="footer-inner-section">
                        <div>
                            La Ville Bague est une propriété privée inscrite au
                            titre des monuments historiques.
                        </div>
                        <Link className="footer-link" to="/">
                            Page d'accueil
                        </Link>
                        <Link className="footer-link" to="/">
                            Informations légales
                        </Link>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Bonnes adresses</h3>
                    <div className="footer-inner-section">
                        <a
                            href="https://www.chipaudiere.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-link"
                        >
                            Malouinière de la Chipaudière
                        </a>
                        <a
                            href="https://www.la-bardoulais.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-link"
                        >
                            Malouinière de la Bardoulais
                        </a>
                        <a
                            href="http://www.musee-jacques-cartier.fr/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-link"
                        >
                            Musée Jacques Cartier
                        </a>
                        <a
                            href="http://www.petit-be.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-link"
                        >
                            Le fort du Petit Bé
                        </a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Suivez-nous</h3>
                    <div className="footer-inner-section">
                        <a
                            href="https://www.facebook.com/LaVilleBague/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-link"
                        >
                            suivez-nous sur facebook
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UC_VtQ2P70o-oxbZAqq_m5Mw"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-link"
                        >
                            abonnez-vous à notre chaîne
                        </a>
                        <a
                            href="https://www.tripadvisor.fr/Attraction_Review-g1898962-d4548204-Reviews-Malouiniere_de_la_Ville_Bague-Saint_Coulomb_Ille_et_Vilaine_Brittany.html"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-link"
                        >
                            votre avis est précieux!
                        </a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Contacts</h3>
                    <div className="footer-inner-section">
                        <div>
                            <h4>Téléphone :</h4>
                            <a href="tel:+33699401879" title="Téléphone">
                                06.99.40.18.79
                            </a>
                        </div>
                        <div>
                            <h4>Email :</h4>
                            <a
                                href="mailto:la-ville-bague@netcourrier.com"
                                title="Email"
                            >
                                la-ville-bague@netcourrier.com
                            </a>
                        </div>
                        <div>
                            <h4>Adresse :</h4>
                            <p>
                                Malouinière de la Ville Bague 35350 Saint
                                Coulomb
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                Copyright © 2016 La Ville-Bague. Tous droits réservés.
            </div>
        </div>
    );
}

export default Footer;
