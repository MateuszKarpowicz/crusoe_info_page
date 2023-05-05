import React from 'react';
import { useState } from 'react';
import './reset.css'
import './global.css';
import Navbar from './components/Navbar';
import GraphicKrk from './components/GraphicKrk';
import GraphicPrimo from './components/GraphicPrimo';
import GraphicZako from './components/GraphicZako';
import GraphicContext from './components/GraphicContext';
import Footer from "./components/Footer";

function App() {
    const [activeGraphic, setActiveGraphic] = useState(null);

    return (
        <div className="App">
            <div className="main-container">
                <div className="navbar-wrapper" style={{zIndex: 10}}>
                <Navbar />
                </div>
                <div className="graphics-container">
                <GraphicContext.Provider value={{ activeGraphic, setActiveGraphic }}>
                    <GraphicKrk />
                    <GraphicPrimo />
                    <GraphicZako />
                </GraphicContext.Provider>
                </div>
                </div>
        </div>
    );
}

export default App;
