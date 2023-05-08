import React from 'react';
import { useState } from 'react';
import './reset.css'
import './global.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import GraphicContext from './components/GraphicContext';
import Footer from "./components/Footer";

import graphicKrkImage from './assets/graphic/krakow.png';
import graphicPrimoImage from './assets/graphic/primosten.jpg';
import graphicZakoImage from './assets/graphic/zakopane.jpg';
import graphicKrkMob from './assets/graphic/krakow.jpg';

function App() {
    const [activeGraphic, setActiveGraphic] = useState(null);
    const imageSrcKrk = window.innerWidth <= 1000 ? graphicKrkMob : graphicKrkImage;


    return (
        <div className="App">
            <div className="main-container">
                <Navbar />
                <div className="graphics-container">
                    <GraphicContext.Provider value={{ activeGraphic, setActiveGraphic }}>
                        <Card
                            graphicId="graphicKrk"
                            imageSrc={imageSrcKrk}
                            altText="Graphic Krk"
                            linkUrl="https://apartamenty-krakow.crusoe.info"
                            locationName="Kraków"
                            className="graphic-krk"
                        />
                        <Card
                            graphicId="graphicPrimo"
                            imageSrc={graphicPrimoImage}
                            altText="Graphic Primo"
                            linkUrl="https://apartamenty-krakow.crusoe.info"
                            locationName="Primošten"
                            className="graphic-primo"
                        />
                        <Card
                            graphicId="graphicZako"
                            imageSrc={graphicZakoImage}
                            altText="Graphic Zako"
                            linkUrl="https://apartamenty-krakow.crusoe.info"
                            locationName="Zakopane"
                            className="graphic-zako"
                        />
                    </GraphicContext.Provider>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;