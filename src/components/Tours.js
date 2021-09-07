import Visites from "../assets/visites.jpg";

function Tours() {
    return (
        <div className="tours-container">
            <div className="top-link">
                <p>
                    <a href="index.html">Accueil</a> / Prestations / Visites
                    guidées
                </p>
            </div>
            <div className="tours-intro">
                <h1>Les Visites guidées</h1>
                <h3>
                    Les visites sont <u>uniquement guidées</u> et ont lieu tous
                    les jours, <u>sans réservation</u>, pendant la saison : de
                    début avril (vacances de Pâques) jusqu'à la fin des vacances
                    de la Toussaint (voir horaires ci-dessous).
                </h3>
                <h3>Fermé le mercredi sauf en juillet et en août.</h3>
                <h3>
                    La visite libre du parc ou des intérieurs n'est pas
                    autorisée.
                </h3>
                <p className="p-alert">
                    <u>Dernière mise à jour le 6 septembre 2021</u>: Suite aux
                    dernières annonces gouvernementales, le pass sanitaire est
                    obligatoire. La visite guidée pour les particuliers
                    s'effectue dans le strict respect des règles sanitaires en
                    vigueur. Le port du masque reste recommandé en extérieur et
                    est obligatoire dans les interieurs. Du gel hydroalcoolique
                    est à disposition et les groupes sont divisés en cas de
                    surnombre.
                </p>
            </div>
            <div className="tours-details">
                <div className="tours-left">
                    <h2>PARTICULIERS</h2>
                    <h3>Horaires des visites:</h3>
                    <p>
                        <u>De début avril au 30 septembre</u> :<br></br>2
                        visites guidées par jour :<strong> 14h30</strong> et
                        <strong> 16h00 </strong>
                        (durée: 1h30)
                    </p>
                    <p>
                        <u>
                            Du 1er octobre à la fin des vacances de la Toussaint
                        </u>
                        :<br></br> 1 visite guidée par jour :
                        <strong> 15h00 </strong>(durée: 1h30)
                    </p>
                    <h3>Tarifs:</h3>
                    <p>
                        - Adulte : <strong>9,00€</strong> par personne<br></br>-
                        Enfant/Etudiant : <strong>4,50€</strong>
                    </p>
                    <h2>GROUPES</h2>
                    <p>
                        Visites possibles <u>toute l'année</u> sur rendez-vous.
                        <br></br>
                        Tarif goupes (15 personnes) : <strong>8,00€</strong>
                    </p>
                </div>
                <div className="tours-right">
                    <img src={Visites} alt="visites" className="img-polaroid" />
                    <p>
                        Après un long travail de retauration qui continue encore
                        aujourd'hui, la Malouinière de la Ville Bague a retrouvé
                        son lustre d'antan. Aujourd'hui, elle s'ouvre à vous
                        pour un moment de détente tout en vous plongeant dans
                        l'univers des armateurs malouins de l'époque du Roi
                        Soleil.
                    </p>
                    <p>
                        Le parc à la française ombragé, son colombier carré et
                        sa chapelle seront l'occasion d'un instant de flânerie
                        et s'ouvriront sur le corps de logis principal. Vous
                        pourrez notamment y découvrir l'histoire insolite du
                        papier peint panoramique de la Manufacture Dufour et
                        Leroy, exemplaire exceptionnel dans sa version
                        intégrale, classé monument historique.
                    </p>
                    <p>
                        Le mobilier d'époque et les nombreux objets de marine
                        chinés aux quatre coins du monde vous transporteront
                        trois siècles en arrière.
                    </p>
                    <p>
                        Vous pourrez également admirer une collection d'armes
                        corsaires ainsi qu'une exposition sur les arts de la
                        table.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tours;
