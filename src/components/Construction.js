import { Link } from "react-router-dom";
import Architecture from "../assets/architecture.jpg";

function Construction() {
    return (
        <div className="construction-container">
            <div className="top-link">
                <p>
                    <Link to="/">Accueil</Link> / Le lieu / La construction des
                    malouinières
                </p>
            </div>
            <div className="construction-intro">
                <h1>La construction des malouinières</h1>
                <p>
                    La prospérité de Saint-Malo date des XV et XVIèmes siècles,
                    époque où commence le déclin de Saint-Servan. Sous les
                    guerres du Roi Soleil, l'aventure maritime de Saint-Malo
                    prend son envol. La guerre de course enrichit les corsaires,
                    les prises étant partagées également entre le roi,
                    l'armateur et l'équipage. Dans le même temps, le commerce
                    maritime se développe: au trafic de la Compagnie des Indes
                    s'ajoute le commerce avec les Pays-Bas (Delft), l'Italie
                    (marbre), le Chili et le Pérou (métaux précieux), l'Espagne
                    (cuir), sans oublier le commerce triangulaire Afrique –
                    Antilles – Europe (trafic d'esclaves). L'architecture se
                    développe aussi sous l'influence de Garangeau et des
                    techniques de la construction navale (charpentes des
                    chapelles en forme de coques de bateaux).
                </p>
            </div>
            <div className="company-details">
                <div className="construction-details-first">
                    <img
                        src={Architecture}
                        alt="architecture"
                        className="img-polaroid"
                    />
                    <div className="construction-details-paragraphs">
                        <p>
                            L'architecture malouine des années 1710 est très
                            nettement représentative de la marque des ingénieurs
                            du Roi (Garangeau, disciple de Vauban et son
                            équipe). Cela confère à la ville de Saint-Malo une
                            unité et une majesté classique, mais aussi une
                            austérité presque militaire. L'utilisation du granit
                            de Chausey était systématique. Les toits sont très
                            hauts, les cheminées servent à raidir les pignons.
                            Jusqu'au XVII ème siècle, les ouvertures sont
                            percées selon les besoins. Au XVIIIème siècle, elles
                            sont symétriques et alignées (architecture
                            militaire). Les négociants rentabilisent leurs
                            investissements en louant des appartements. Certains
                            firent même construire de véritables hôtels avec
                            cour, jardin, écuries, magasins; ainsi, Guillaume
                            Eon rue Saint-Vincent et François-August Magon de la
                            Lande, rue d'Asfeld.
                        </p>
                        <p>
                            Jusqu'au début du XVIII ème siècle, les bourgeois
                            malouins se contentaient de réaménager sommairement
                            le logis traditionnel de la ferme qu'ils avaient
                            achetée ou de petits manoirs (Limoëlou, Le Parc, La
                            Coudre). Ces résidences se multiplièrent sur
                            l'ensemble du territoire du Clos Poulet, puis
                            s'étendirent vers l'ouest et vers le sud, vers
                            Dinard (manoir de Haux, Montmarin, St Busq). Des
                            terrains furent gagnés sur la mer, permettant le
                            développement urbain de Saint-Malo. C'est aux
                            alentours de 1710 que naît véritablement un nouveau
                            type de résidences secondaires que l'on peut
                            désormais désigner par l'expression de « malouinière
                            » (la Giclais, le Lupin, la Chipaudière, la Balue,
                            le Bosc, Hôtel d'Asfeld). Le style de Garangeau est
                            très net.
                        </p>
                    </div>
                </div>
                <h2>
                    «Les malouinières constituent un nouveau type de demeure
                    noble non seulement par l'ordonnance architecturale du
                    logis, mais aussi par l'organisation générale très ordonnée
                    des éléments traditionnels de la résidence aristocratique :
                    parc enclos de grands murs, colombier, chapelle, communs...
                    »
                </h2>
                <p>--Mme F. Hammon</p>
                <p>
                    La plupart des malouinières furent construites entre 1680 et
                    1730, dans un rayon de douze kilomètres autour de
                    Saint-Malo, par les armateurs malouins voulant échapper à
                    l'univers congestionné de la ville (20000 habitants en 1750
                    – 2500 aujourd'hui) tout en restant assez proches (deux
                    heures à cheval) pour pouvoir s'occuper de leurs navires et
                    de leurs cargaisons. Elles sont situées à l'intérieur du
                    «Clos Poulet» qui signifie pays d'Aleth (région malouine) du
                    nom du camp gallo-romain de la citadelle de Saint-Servan,
                    point de départ vers la Cornouaille où l'on chargeait
                    l'étain.
                </p>
                <p>
                    Ces propriétés étaient entourées de quelques hectares de
                    terres, acquises au coup par coup, ce qui permettait
                    d'agrandir le domaine. Il existe plusieurs dizaines de
                    malouinières dans les environs de Saint-Malo et dans tout le
                    pays de Rance.
                </p>
                <p>
                    On retrouve ce phénomène autour d'autres grands ports comme
                    Nantes, Bordeaux ou Marseille. Cela était dû à la
                    surpopulation intra-muros ainsi qu'au manque d'hygiène et
                    impliquait de fréquents déménagements, y compris le
                    mobilier, du linge, de la vaisselle...
                </p>
            </div>
        </div>
    );
}

export default Construction;
