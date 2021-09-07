import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useState, useEffect } from "react";
import carouselBassin from "../assets/carousel-home/bassin.jpg";
import carouselSalon from "../assets/carousel-home/grand_salon.jpg";
import carouselInstruments from "../assets/carousel-home/instruments.jpg";
import carouselMalouiniere from "../assets/carousel-home/malouiniere.jpg";
import carouselNenuphare from "../assets/carousel-home/nenuphare.jpg";
import carouselChapelle from "../assets/carousel-home/chapelle.jpg";
import carouselBibliotheque from "../assets/carousel-home/bibliotheque.jpg";
import carouselNeige from "../assets/carousel-home/neige.jpg";
import carouselChambre from "../assets/carousel-home/chambre_rose.jpg";
import carouselFleurs from "../assets/carousel-home/fleurs.jpg";
import Receptions from "../assets/receptions.jpg";
import Patrimoine from "../assets/patrimoine-21.jpg";
import Automne from "../assets/automne-21.jpg";
import Event from "./Event.js";

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

function Home() {
    const size = useWindowSize();
    return (
        <div className="home-container">
            <div className="top-img-container">
                <div className="home-welcome-text-container">
                    <h1 id="welcome-message">Bienvenue à la Malouinière!</h1>
                    <div id="welcome-subtitle">
                        Invitez-vous au coeur d'une demeure d'armateurs
                        malouins.
                    </div>
                </div>
            </div>
            <div className="home-intro">
                <h1>La Ville Bague ouverte au public</h1>
                <p>
                    Un cadre magnifique à quelques minutes de Saint-Malo, une
                    demeure du temps des riches armateurs malouins, un parc de
                    plusieurs hectares avec son bassin, son colombier, sa
                    chapelle et son jardin à la française...
                </p>
            </div>
            <div className="home-visit">
                <h2>
                    La Ville Bague vous accueille pour une visite d'exception.
                </h2>
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
                    totalSlides={10}
                    visibleSlides={size < 900 ? 2 : size < 1300 ? 3 : 4}
                    isPlaying={true}
                    infinite={true}
                    interval={3000}
                    step={size > 1300 ? 2 : 1}
                >
                    <Slider>
                        <Slide index={0}>
                            <img
                                src={carouselBassin}
                                alt="bassin"
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
                                src={carouselInstruments}
                                alt="instruments"
                                className="img-polaroid"
                            />
                        </Slide>
                        <Slide index={3}>
                            <img
                                src={carouselMalouiniere}
                                alt="malouiniere"
                                className="img-polaroid"
                            />
                        </Slide>
                        <Slide index={4}>
                            <img
                                src={carouselNenuphare}
                                alt="nenuphare"
                                className="img-polaroid"
                            />
                        </Slide>
                        <Slide index={5}>
                            <img
                                src={carouselChapelle}
                                alt="chapelle"
                                className="img-polaroid"
                            />
                        </Slide>
                        <Slide index={6}>
                            <img
                                src={carouselBibliotheque}
                                alt="bibliotheque"
                                className="img-polaroid"
                            />
                        </Slide>
                        <Slide index={7}>
                            <img
                                src={carouselNeige}
                                alt="neige"
                                className="img-polaroid"
                            />
                        </Slide>
                        <Slide index={8}>
                            <img
                                src={carouselChambre}
                                alt="chambre"
                                className="img-polaroid"
                            />
                        </Slide>
                        <Slide index={9}>
                            <img
                                src={carouselFleurs}
                                alt="fleurs"
                                className="img-polaroid"
                            />
                        </Slide>
                    </Slider>
                </CarouselProvider>
                <p>
                    Faisant partie intégrante de l'histoire de Saint-Malo, les
                    malouinières sont uniques. En visitant une authentique
                    maison de corsaires et d'armateurs malouins du XVIIIè
                    siècle, vous découvrirez un endroit paisible à quelques
                    kilomètres de Saint-Malo, édifié dans le but d'échapper à la
                    ville pour un moment de repos. Vous aurez ainsi le loisir
                    d'admirer le parc avec son jardin à la française, de visiter
                    la chapelle et le pigeonnier de la demeure et également
                    l'intérieur de la malouinière avec son mobilier d'époque et
                    ses collections d'armes corsaires.
                </p>
            </div>
            <div className="home-other">
                <div className="home-other-left">
                    <h2>La Ville Bague vous propose également :</h2>
                    <h3>Réceptions, événements, location de gîtes...</h3>
                    <img
                        src={Receptions}
                        alt="receptions"
                        className="img-polaroid"
                    />
                    <p>
                        Pour réussir vos dîners, cocktail, séminaires...
                        Laissez-vous charmer par l'authenticité du parc ou des
                        intérieurs de la malouinière spécialement aménagés pour
                        l'occasion. Avec une vue imprenable sur le jardin, les
                        salons représentent un lieu d'exception pour toutes vos
                        réceptions.
                    </p>
                    <p>
                        Vous restez libre du choix de vos prestataires. Pour
                        plus de confort, nous pouvons vous recommander nos
                        prestataires partenaires.
                    </p>
                    <p>
                        La Ville Bague met également à votre disposition deux
                        gîtes pour compléter vos réceptions ou simplement pour
                        vous offrir un moment de repos. Situés à l'intérieur des
                        murs de la propriété, ces bâtiments de charme sont
                        disponibles à la location à la semaine ou au week-end.
                    </p>
                </div>
                <div className="home-other-right">
                    <h2>A LA UNE</h2>
                    <Event
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
                    <Event
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
            </div>
        </div>
    );
}

export default Home;
