import { Link } from "react-router-dom";
import Plan from "../assets/plan_gites.jpg";
import Gite1 from "../assets/cottages/gite_1.jpg";
import Gite2 from "../assets/cottages/gite_2.jpg";
import Gite3 from "../assets/cottages/gite_3.jpg";
import Gite4 from "../assets/cottages/gite_4.jpg";
import Gite5 from "../assets/cottages/gite_5.jpg";
import Gite6 from "../assets/cottages/gite_6.jpg";
import Gite7 from "../assets/cottages/gite_7.jpg";
import Gite8 from "../assets/cottages/gite_8.jpg";
import Gite9 from "../assets/cottages/gite_9.jpg";
import Gite10 from "../assets/cottages/gite_10.jpg";

function Cottages() {
    return (
        <div className="cottages-container">
            <div className="top-link">
                <p>
                    <Link to="/">Accueil</Link> / Prestations / Location de
                    gîtes
                </p>
            </div>
            <div className="cottages-intro">
                <h1>Les gîtes</h1>
                <h3>
                    La Ville-Bague met à votre disposition deux gîtes à louer
                    situés dans le parc de la propriété à la semaine ou
                    week-end.
                </h3>
            </div>
            <div className="cottages-details">
                <div className="cottages-details-left">
                    <h2>Localisation</h2>
                    <p>
                        Les deux gîtes sont situés à l'intérieur du parc de la
                        Malouinière de la Ville Bague, à 1,5 km de la plage des
                        chevrets et à environ 10 minutes en voiture de
                        Saint-Malo intra-muros.
                    </p>
                    <a
                        href="https://www.google.com/maps/place/Malouini%C3%A8re+de+la+Ville-Bague/@48.6779141,-1.9213915,16z/data=!4m8!3m7!1s0x0:0x27d63f6241ba2b12!5m2!4m1!1i2!8m2!3d48.6781876!4d-1.9199135?hl=fr-FR"
                        title="plan"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Plan} alt="plan" className="img-polaroid" />
                    </a>

                    <p>
                        A proximité : Le port de Cancale : 6 km Saint-Malo
                        intra-muros : 10 km Dinard : 19 km Dinan : 35 km Le Mont
                        Saint-Michel : 45 km Rennes : 70 km
                    </p>
                    <h2>Equipements</h2>
                    <p>
                        Chaque gîte dispose des équipements de confort suivants:
                        - Lave linge - Planche et fer à repasser - Lave vaiselle
                        - cuisinière - réfrigérateur - Four - Four micro-ondes -
                        Grille-pain - Cafetière - Téléviseur - Lecteur DVD -
                        Place de parking privative
                    </p>
                    <h2>Accès Internet</h2>
                    <p>Un hotspot Wifi est disponible en accès libre.</p>
                    <h2>Disponibilités</h2>
                    <p>
                        Pour consulter le calendrier des disponibilités et les
                        tarifs selon la saison, merci de bien vouloir nous
                        contacter ou vous rendre sur:
                    </p>
                    <a
                        href="https://www.booking.com/hotel/fr/malouiniere-de-la-ville-bague.fr.html"
                        title="booking"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://www.booking.com/malouiniere-de-la-ville-bague
                    </a>
                </div>
                <div className="cottages-details-right">
                    <div className="cottage-pics">
                        <img
                            src={Gite1}
                            alt="grand-gite"
                            className="img-polaroid-gites"
                        />
                        <img
                            src={Gite2}
                            alt="grand-gite"
                            className="img-polaroid-gites"
                        />
                        <img
                            src={Gite3}
                            alt="grand-gite"
                            className="img-polaroid-gites"
                        />
                        <img
                            src={Gite4}
                            alt="grand-gite"
                            className="img-polaroid-gites"
                        />
                        <img
                            src={Gite5}
                            alt="grand-gite"
                            className="img-polaroid-gites"
                        />
                        <img
                            src={Gite6}
                            alt="grand-gite"
                            className="img-polaroid-gites"
                        />
                    </div>
                    <p>
                        Le grand gîte peut accueillir jusqu'à 12 personnes, il
                        dispose : de 3 chambres doubles et d'un dortoir
                        permettant de coucher 6 personnes supplémentaires
                        (notamment des enfants), de 3 salles de bains avec
                        douches ou baignoires, d'un grand séjour (avec coin
                        télévision + lecteur dvd), d'une cuisine toute équipée
                        (électroménager, lave-vaiselle, lave-linge...), d'un
                        coin jardin réservé.
                    </p>
                    <div className="cottage-pics">
                        <img
                            src={Gite7}
                            alt="petit-gite"
                            className="img-polaroid-gites"
                        />
                        <img
                            src={Gite8}
                            alt="petit-gite"
                            className="img-polaroid-gites"
                        />
                        <img
                            src={Gite9}
                            alt="petit-gite"
                            className="img-polaroid-gites"
                        />
                        <img
                            src={Gite10}
                            alt="petit  -gite"
                            className="img-polaroid-gites"
                        />
                    </div>
                    <p>
                        Le petit gîte peut quant à lui accueillir 6 personnes
                        avec ses 2 chambres, 2 salles de bain, son salon et sa
                        cuisine.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Cottages;
