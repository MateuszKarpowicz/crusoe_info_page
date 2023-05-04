import React from 'react';
import "../global.css";
import graphicKrkImage from '../assets/KR.png';

const GraphicKrk = () => {
    return (
        <div className="graphic-krk-container">
            <img src={graphicKrkImage} alt="Graphic Krk" />
            <a href="https://apartamenty-krakow.crusoe.info" target="_blank" rel="noopener noreferrer" className="goto-btn">Go to</a>
            <h2 className="graphic-text">Kraków</h2>
            <button className="reservation-btn">Reservation</button>
        </div>
    );
}

export default GraphicKrk;
