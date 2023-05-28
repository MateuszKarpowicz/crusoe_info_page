import React from 'react';
import '../global.css';
import useGraphic from './useGraphic';
import LanguageContext from './LanguageContext.js';
import { useContext } from 'react';

const Graphic = ({ graphicId, imageSrc, altText, linkUrl, linkUrl2, locationName, className }) => {
    const { containerRef, isActive, setActiveGraphic, displayedLocationName } = useGraphic(graphicId, locationName);
    const { language } = useContext(LanguageContext);

    const reservationText = language === "PL" ? "Rezerwacja" : "Reservation";

    return (
        <div
            ref={containerRef}
            className={`graphic-container-item ${!isActive ? 'graphic-disabled' : 'graphic-enabled'} ${className}`}
            onClick={() => setActiveGraphic(graphicId)}
        >
            <div className="background" style={{ backgroundImage: `url(${imageSrc})` }}></div>

            <div className='graphic-content'>
                <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="goto-btn">Go to</a>
                <h2 className="graphic-text">{locationName}</h2>
                <a href={linkUrl2} target="_blank" rel="noopener noreferrer" className="reservation-btn">{reservationText}</a>
            </div>
            {!isActive &&
                <div className="graphic-overlay">
                    <div className="overlay-content">
                        <h2 className="go-to-overlay">Go to</h2>
                        <h2 className={locationName === "Kraków" ? "extra-margin" : ""}><span>{displayedLocationName}</span></h2>
                    </div>
                </div>}
        </div>
    );
};

export default Graphic;
