import { Link } from "react-router-dom";

function Contacts() {
    return (
        <div className="contacts-container">
            <div className="top-link">
                <p>
                    <Link to="/">Accueil</Link> / Prestations / Contacts
                </p>
            </div>
            <div className="contacts-intro">
                <h1>Renseignements et Accès</h1>
            </div>
            <div className="contacts-details">
                <div className="contacts-details-left">
                    <h2>Coordonnées</h2>
                    <h3>Malouinière de la Ville Bague</h3>
                    <p>
                        35350 - Saint Coulomb<br></br>Tél. :{" "}
                        <a href="tel:+33299890087" title="Téléphone">
                            02.99.89.02.17
                        </a>{" "}
                        <br />
                        Portable :{" "}
                        <a href="tel:+33699401879" title="Téléphone">
                            06.99.40.18.79
                        </a>{" "}
                        <br />
                        email :{" "}
                        <a href="mailto:la-ville-bague@netcourrier.com">
                            la-ville-bague@netcourrier.com
                        </a>{" "}
                        <br />
                        site : <a href="index.html">www.la-ville-bague.com</a>
                        <br />
                        <br /> coordonnées GPS :{" "}
                        <a href="https://www.google.com/maps/place/Malouini%C3%A8re+de+la+Ville-Bague/@48.6732425,-1.9804495,12.5z/data=!4m5!3m4!1s0x0:0x27d63f6241ba2b12!8m2!3d48.67964!4d-1.92221?hl=fr-FR">
                            48°40'41.9"N 1°55'11.8"W
                        </a>
                    </p>
                    <h2>Jours et horaires d'ouverture</h2>
                    <p>
                        Ouvert de début avril (vacances de Pâques) jusqu'à fin
                        septembre. 2 visites guidées par jour à 14h30 et 16h00.
                        Fermé le mercredi sauf juillet et août. Ouvert aux
                        groupes toute l'année sur rendez-vous.
                    </p>
                </div>
                <div className="contact-details-right">
                    <h2>En venant de Saint-Malo ou Cancale</h2>
                    <p>
                        <iframe
                            title="contacts-map"
                            width="90%"
                            height="320"
                            frameborder="0"
                            scrolling="yes"
                            marginheight="0"
                            marginwidth="0"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10537.520833158991!2d-1.919579!3d48.679095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x27d63f6241ba2b12!2sMalouini%C3%A8re%20de%20la%20Ville-Bague!5e0!3m2!1sfr!2sus!4v1631265937536!5m2!1sfr!2sus"
                        ></iframe>
                        <br />
                        <small></small>
                    </p>
                    <p>
                        Face à l’église de Saint coulomb, prendre la direction
                        de la mairie par la rue de la mairie (tourner à gauche
                        face à l’église puis de nouveau tout de suite à gauche à
                        la patte d’oie). Poursuivre tout droit en direction des
                        plages sur une distance d’environ 800 mètres jusqu’au
                        mur d’enceinte de la Ville-Bague.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
