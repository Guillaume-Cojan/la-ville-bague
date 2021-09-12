import { Link } from "react-router-dom";
import Parc from "../assets/parc.jpg";
import Papier from "../assets/papier.jpg";
import Chapelle from "../assets/chapelle.jpg";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useState, useEffect } from "react";
import carouselHerbe from "../assets/carousel-restauration/herbe.jpg";
import carouselSalon from "../assets/carousel-restauration/salon.jpg";
import carouselRampe from "../assets/carousel-restauration/rampe.jpg";
import carouselEscalier from "../assets/carousel-restauration/escalier.jpg";
import carouselEchafaudage from "../assets/carousel-restauration/echafaudage.jpg";
import carouselPelouse from "../assets/carousel-restauration/pelouse.jpg";
import carouselPapier from "../assets/carousel-restauration/papier.jpg";
import carouselBassin from "../assets/carousel-restauration/bassin.jpg";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState(undefined);
    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}
function History() {
    const size = useWindowSize();
    return (
        <div className="history-container">
            <div className="top-link">
                <p>
                    <Link to="/">Accueil</Link> / Le lieu / L'Histoire de la
                    Ville Bague
                </p>
            </div>
            <div className="history-intro">
                <h1>La Malouinière</h1>

                <img src={Parc} alt="parc" className="img-polaroid" />
                <p>
                    En 1715, la Ville Bague a été construite par Guillaume Eon,
                    neveu de Julien Eon. La famille Eon, riches négociants
                    malouins, avait ouvert de nombreux comptoirs à l'étranger et
                    notamment à Cadix.
                </p>
            </div>
            <div className="history-details">
                <p>
                    Un manoir plus modeste se tenait à l'emplacement de
                    l'actuelle malouinière. Le pigeonnier, la chapelle et les
                    murs sont donc antérieurs (fin du XVII ème siècle).
                    Propriété successive des familles Éon (en 1670), Magon
                    seigneurs de la Chipaudière (en 1676), Éon (en 1776). En
                    1768, Julie Marie Eon du Vieux Chastel épouse Jonathas de
                    Penfentenyo, Marquis de Cheffontaines. Le marquis de
                    Cheffontaines devient propriétaire de la Ville Bague en
                    1789.
                </p>
                <div className="history-details-restauration">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={
                            size > 700
                                ? 60
                                : size > 600
                                ? 80
                                : size > 480
                                ? 100
                                : 125
                        }
                        totalSlides={8}
                        visibleSlides={size < 900 ? 2 : size < 1300 ? 3 : 4}
                        isPlaying={true}
                        infinite={true}
                        interval={3000}
                        step={size > 1300 ? 2 : 1}
                    >
                        <Slider>
                            <Slide index={0}>
                                <img
                                    src={carouselHerbe}
                                    alt="herbe"
                                    className="img-polaroid"
                                />
                            </Slide>
                            <Slide index={1}>
                                <img
                                    src={carouselSalon}
                                    alt="salon"
                                    className="img-polaroid"
                                />
                            </Slide>
                            <Slide index={2}>
                                <img
                                    src={carouselRampe}
                                    alt="rampe"
                                    className="img-polaroid"
                                />
                            </Slide>
                            <Slide index={3}>
                                <img
                                    src={carouselEscalier}
                                    alt="escalier"
                                    className="img-polaroid"
                                />
                            </Slide>
                            <Slide index={4}>
                                <img
                                    src={carouselEchafaudage}
                                    alt="echafaudage"
                                    className="img-polaroid"
                                />
                            </Slide>
                            <Slide index={5}>
                                <img
                                    src={carouselPelouse}
                                    alt="pelouse"
                                    className="img-polaroid"
                                />
                            </Slide>
                            <Slide index={6}>
                                <img
                                    src={carouselPapier}
                                    alt="papier"
                                    className="img-polaroid"
                                />
                            </Slide>
                            <Slide index={7}>
                                <img
                                    src={carouselBassin}
                                    alt="bassin"
                                    className="img-polaroid"
                                />
                            </Slide>
                        </Slider>
                    </CarouselProvider>
                    <p>
                        Avec la Révolution, la maison fut abandonnée par ses
                        propriétaires émigrés. La rampe d'origine, fondue en
                        1794, fut remplacée en 1980 par celle d'une malouinière
                        en démolition du quartier de la Madeleine à Saint-Malo.
                        Après la révolution, la propriété passe à la famille
                        Esnoul Le Sénéchal qui l'occupe de 1892 à 1946. En 1975,
                        Jacques Chauveau et sa femme Madeleine achètent la
                        propriété et entreprennent en vingt ans un long travail
                        de restauration de la Malouinière et du parc. Sans
                        subventions mais grâce à la loi Malraux, la Ville Bague
                        retrouve sa splendeur grâce au travail de Jean-François
                        Chauvel, jardinier en chef depuis 1980 et est
                        aujourd'hui ouvert au public qui vient du monde entier
                        admirer ce fleuron de l'architecture malouine.
                    </p>
                </div>
                <h2>Le papier peint panoramique</h2>
                <div className="history-details-paper">
                    <p>
                        Le papier peint du grand salon date de 1820 (manufacture
                        Dufour et Leroy) et représente l'arrivée de Pizarre chez
                        les Incas. Il fut posé dans les salons de la Ville Bague
                        à la demande de Hiacynthe de Penfentenio, marquis de
                        Cheffontaines et de son épouse Julie-Marie-Rose Eon à
                        leur retour d'exil. Exemplaire exceptionnel dans sa
                        version intégrale, ce panoramique est classé monument
                        historique. Il fut déposé et vendu en 1972 et retrouvé à
                        vendre sur le marché de l'art en 1976. Très endommagé,
                        il a été restauré par les Beaux-Arts à Paris qui, par
                        chance, en possédaient un autre exemplaire intact au
                        musée des arts décoratifs.
                    </p>
                    <img
                        src={Papier}
                        alt="papier_peint"
                        className="img-polaroid"
                    />
                </div>
                <h2>La chapelle Sainte-Sophie</h2>
                <div className="history-details-chapel">
                    <img
                        src={Chapelle}
                        alt="chapelle"
                        className="img-polaroid"
                    />
                    <p>
                        Construite en 1690 par Julien Eon, Sieur de la Ville
                        Bague, et consacrée par l'évêque de Dol en 1695, la
                        chapelle Sainte-Sophie date de l'ancien manoir qui se
                        tenait à la place de l'actuelle malouinière. On dit
                        qu'elle est semi-enclose car elle est en partie
                        extérieure à la propriété. Elle possède deux entrées,
                        une pour la famille Eon et une autre pour les habitants
                        du village de Saint Coulomb. Cette chapelle servait de
                        remise à pommes de terre dans les années 1960 et était
                        dans un état de délabrement avancé à la limite de la
                        démolition. La toiture fut restaurée par les ouvriers
                        des bâtiments de France qui ont conservé l'ancien
                        plafond en forme de coque de navire inversée. Le retable
                        provient de la chapelle Notre-Dame de Lorette à
                        Saint-Servan. Le dallage en marbre de Carrare date du
                        XVIII ème siècle.
                    </p>
                </div>
                <h2>Le pigeonnier carré</h2>
                <div className="history-details-pigeon">
                    <p>
                        Construit fin XVIIe siècle, il n'était encore qu'une
                        orangerie car Juilen Eon n'était pas anobli. Or, le
                        colombier est le principal privilège de la noblesse,
                        signe extérieur de richesse. En 1715, Guillaume Eon fait
                        surélever cette orangerie qui devient donc un colombier
                        possédant trois cent vingt boulins, ce qui correspondait
                        à cent soixante hectares, la réglementation étant très
                        stricte (deux pigeons par hectare).
                    </p>
                </div>
            </div>
        </div>
    );
}

export default History;
