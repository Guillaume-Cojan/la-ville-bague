import { Link } from "react-router-dom";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useState, useEffect } from "react";
import carouselFour from "../assets/carousel-receptions/fours.jpg";
import carouselHelico from "../assets/carousel-receptions/helico.jpg";
import carouselBouquet from "../assets/carousel-receptions/bouquet.jpg";
import carouselVoiture from "../assets/carousel-receptions/voiture.jpg";
import carouselCuisine from "../assets/carousel-receptions/cuisine.jpg";
import carouselTables from "../assets/carousel-receptions/tables.jpg";
import carouselEclairage from "../assets/carousel-receptions/eclairage.jpg";
import carouselGarage from "../assets/carousel-receptions/garage.jpg";
import Cocktail from "../assets/cocktail.jpg";

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
function Receptions() {
    const size = useWindowSize();
    return (
        <div className="receptions-container">
            <div className="top-link">
                <p>
                    <Link to="/">Accueil</Link> / Prestations / Réceptions
                </p>
            </div>
            <div className="receptions-intro">
                <h1>Réceptions</h1>
                <div className="receptions-details">
                    <div className="receptions-details-left">
                        <img
                            src={Cocktail}
                            alt="cocktail"
                            className="img-polaroid"
                        />
                    </div>
                    <div className="receptions-details-right">
                        <p>
                            A quelques minutes de Saint-Malo, au cœur d’un parc
                            de 4 hectares, la Malouinière de la Ville Bague
                            saura vous surprendre par son atmosphère à la fois
                            calme, chaleureuse et familliale : tout ici concourt
                            à rendre votre événement inoubliable !
                        </p>

                        <p>
                            Pour réussir vos dîners, cocktails, anniversaires,
                            séminaires d'entreprises... Les réceptions
                            organisées à la Malouinière vous laisseront un
                            souvenir unique en se déroulant à l'intérieur, dans
                            l'authenticité et le charme des salons spécialement
                            aménagés pour l'occasion et vous offrant une vue
                            imprenable sur le parc. Pour des raisons de
                            logistique et de sécurité, la capacité d'accueil est
                            limitée à 70 personnes dans les salons.
                        </p>
                        <p>
                            Nous laissons libre court à votre imagination pour
                            faire de ce jour un événement unique. Ainsi, vous
                            restez libre du choix de vos prestataires. Pour plus
                            de confort, nous pouvons également vous recommander
                            nos prestataires partenaires.
                        </p>
                    </div>
                </div>
            </div>
            <div className="receptions-decorative">
                <div className="receptions-quote">
                    <h3>
                        Chaque événement étant unique, vous pouvez nous
                        contacter et prendre rendez-vous pour nous faire part de
                        votre projet. Nous nous efforcerons de vous proposer un
                        devis entièrement personnalisé correspondant au plus
                        près à vos attentes.
                    </h3>
                </div>
                <div className="receptions-carousel">
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
                                    src={carouselFour}
                                    alt="fours"
                                    className="img-polaroid"
                                />
                            </Slide>
                            <Slide index={1}>
                                <img
                                    src={carouselHelico}
                                    alt="helico"
                                    className="img-polaroid"
                                />
                            </Slide>
                            <Slide index={2}>
                                <img
                                    src={carouselBouquet}
                                    alt="bouquet"
                                    className="img-polaroid"
                                />
                            </Slide>
                            <Slide index={3}>
                                <img
                                    src={carouselVoiture}
                                    alt="voiture"
                                    className="img-polaroid"
                                />
                            </Slide>
                            <Slide index={4}>
                                <img
                                    src={carouselCuisine}
                                    alt="cuisine"
                                    className="img-polaroid"
                                />
                            </Slide>
                            <Slide index={5}>
                                <img
                                    src={carouselTables}
                                    alt="tables"
                                    className="img-polaroid"
                                />
                            </Slide>
                            <Slide index={6}>
                                <img
                                    src={carouselEclairage}
                                    alt="eclairage"
                                    className="img-polaroid"
                                />
                            </Slide>
                            <Slide index={7}>
                                <img
                                    src={carouselGarage}
                                    alt="garage"
                                    className="img-polaroid"
                                />
                            </Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
            </div>
        </div>
    );
}

export default Receptions;
