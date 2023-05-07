import React from 'react';
import { useState } from 'react';
import './reset.css'
import './global.css';
import Navbar from './components/Navbar';
import KrakowCard from './components/KrakowCard';
import PrimostenCard from './components/PrimostenCard';
import ZakopaneCard from './components/ZakopaneCard';
import GraphicContext from './components/GraphicContext';
import Footer from "./components/Footer";

function App() {
    const [activeGraphic, setActiveGraphic] = useState(null);

    return (
        <div className="App">
            <div className="main-container">
                <Navbar />
                <div className="graphics-container">
                <GraphicContext.Provider value={{ activeGraphic, setActiveGraphic }}>
                    <KrakowCard />
                    <ZakopaneCard />
                    <PrimostenCard />
                </GraphicContext.Provider>
                </div>
                <Footer />
        </div>
        </div>
    );
}

export default App;
