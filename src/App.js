import React from 'react';
import './reset.css'
import './global.css';
import Navbar from './components/Navbar';
import GraphicKrk from './components/GraphicKrk';
import GraphicPrimo from './components/GraphicPrimo';
import GraphicZako from './components/GraphicZako';

function App() {
    return (
        <div className="App">
            <div className="main-container">
                <div className="navbar-wrapper" style={{zIndex: 10}}>
                <div className="navbar-container">
                <Navbar />
                </div>
                </div>
                <div className="graphics-container">
                    <GraphicKrk />
                    <GraphicPrimo />
                    <GraphicZako />
                </div>
            </div>
            {/* Reszta struktury strony */}
        </div>
    );
}

export default App;
