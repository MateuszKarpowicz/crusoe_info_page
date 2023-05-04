import React from 'react';
import "../global.css";
import graphicZakoImage from '../assets/Zakopane.jpg';

const GraphicZako = () => {
    return (
        <div className="graphic-zako-container">
            <img src={graphicZakoImage} alt="Graphic Krk" />
            <div className='graphic-content'>
            <a href="https://apartamenty-krakow.crusoe.info" target="_blank" rel="noopener noreferrer" className="goto-btn">Go to</a>
            <h2 className="graphic-text">Zakopane</h2>
            <button className="reservation-btn">Reservation</button>
            </div>
        </div>
    );
}

export default GraphicZako;