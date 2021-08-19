import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useState, useEffect } from "react";
import carouselBassin from "../assets/carousel/bassin.jpg";
import carouselSalon from "../assets/carousel/grand_salon.jpg";
import carouselInstruments from "../assets/carousel/instruments.jpg";
import carouselMalouiniere from "../assets/carousel/malouiniere.jpg";
import carouselNenuphare from "../assets/carousel/nenuphare.jpg";
import carouselChapelle from "../assets/carousel/chapelle.jpg";
import carouselBibliotheque from "../assets/carousel/bibliotheque.jpg";
import carouselNeige from "../assets/carousel/neige.jpg";
import carouselChambre from "../assets/carousel/chambre_rose.jpg";
import carouselFleurs from "../assets/carousel/fleurs.jpg";

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
        </div>
    );
}

export default Home;
