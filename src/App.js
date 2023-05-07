import React from 'react';
import { useState } from 'react';
import './reset.css'
import './global.css';
import Navbar from './components/Navbar';
import Krakow from './components/Krakow';
import Primosten from './components/Primosten';
import Zakopane from './components/Zakopane';
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
                    <Krakow />
                    <Zakopane />
                    <Primosten />
                </GraphicContext.Provider>
                </div>
                <Footer />
        </div>
        </div>
    );
}

export default App;
