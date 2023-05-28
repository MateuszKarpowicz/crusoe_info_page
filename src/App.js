import React from 'react';
import { useState } from 'react';
import './reset.css'
import './global.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import GraphicContext from './components/GraphicContext';
import Footer from "./components/Footer";
import LanguageContext from "./components/LanguageContext";

import graphicKrkImage from './assets/graphic/krakow.webp';
import graphicPrimoImage from './assets/graphic/primosten.webp';
import graphicZakoImage from './assets/graphic/zakopane.webp';
import graphicKrkMob from './assets/graphic/krakow2.webp';

function App() {
    const [activeGraphic, setActiveGraphic] = useState(null);
    const imageSrcKrk = window.innerWidth <= 1000 ? graphicKrkMob : graphicKrkImage;
    const [language, setLanguage] = useState("EN");
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };


    return (
        <div className="App">
            <div className="main-container">

                <LanguageContext.Provider value={{ language, changeLanguage }}>

                <Navbar  />
                <div className="graphics-container">
                    <GraphicContext.Provider value={{ activeGraphic, setActiveGraphic }}>
                        <Card
                            graphicId="graphicKrk"
                            imageSrc={imageSrcKrk}
                            altText="Graphic Krk"
                            linkUrl="https://apartamenty-krakow.crusoe.info"
                            linkUrl2="https://apartamenty-krakow.crusoe.info/reservation"
                            locationName="Kraków"
                            className="graphic-krk"
                        />
                        <Card
                            graphicId="graphicPrimo"
                            imageSrc={graphicPrimoImage}
                            altText="Graphic Primo"
                            linkUrl="https://apartaments-primosten.crusoe.info"
                            linkUrl2="https://apartaments-primosten.crusoe.info/reservation"
                            locationName="Primošten"
                            className="graphic-primo"
                        />
                        <Card
                            graphicId="graphicZako"
                            imageSrc={graphicZakoImage}
                            altText="Graphic Zako"
                            linkUrl="https://apartament-zakopane.crusoe.info"
                            linkUrl2="https://apartament-zakopane.crusoe.info/reservation"
                            locationName="Zakopane"
                            className="graphic-zako"
                        />
                    </GraphicContext.Provider>
                </div>
                <Footer />
                </LanguageContext.Provider>
            </div>
        </div>
    );
}

export default App;