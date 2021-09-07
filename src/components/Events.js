import { Link } from "react-router-dom";
import EventHome from "./EventHome.js";
import Patrimoine from "../assets/events/small/patrimoine-21.jpg";
import Automne from "../assets/events/small/automne-21.jpg";

function Events() {
    return (
        <div className="events-container">
            <div className="top-link">
                <p>
                    <Link to="/">Accueil</Link> / Prestations / Evénements
                </p>
            </div>
            <div className="events-intro">
                <h1>Evénements</h1>
            </div>
            <div className="events-details">
                <div className="events-details-main">
                    <EventHome
                        title="Journées du Patrimoine :"
                        img={Patrimoine}
                        description={
                            <>
                                La Malouinière sera ouverte pour les Journées du
                                Patrimoine les
                                <strong> 18 et 19 septembre</strong> prochains.
                                Visites guidées en continu sans réservation
                                <strong> de 10h à 12h</strong> et
                                <strong> de 14h30 à 17h30</strong>.
                            </>
                        }
                    />
                    <EventHome
                        title="Marché d'Automne :"
                        img={Automne}
                        description={
                            <>
                                La Malouinière organise, les
                                <strong>
                                    {" "}
                                    25 et 26 septembre 2021 de 10h à 18h
                                </strong>{" "}
                                un Marché d'Automne. Artisans d'Art et locaux,
                                pépiniériste et métiers de bouche seront
                                présents en nombre.
                            </>
                        }
                    />
                </div>
                <div className="events-details-others">
                    <h2>Evénements passés</h2>
                    <EventHome
                        title="Journées du Patrimoine :"
                        img={Patrimoine}
                        description={
                            <>
                                La Malouinière sera ouverte pour les Journées du
                                Patrimoine les
                                <strong> 18 et 19 septembre</strong> prochains.
                                Visites guidées en continu sans réservation
                                <strong> de 10h à 12h</strong> et
                                <strong> de 14h30 à 17h30</strong>.
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    );
}
export default Events;
