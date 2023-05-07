import React from 'react';
import '../global.css';
import useGraphic from './useGraphic';

const Graphic = ({ graphicId, imageSrc, altText, linkUrl, locationName }) => {
    const { containerRef, isActive, setActiveGraphic, displayedLocationName } = useGraphic(graphicId, locationName);

    return (
        <div ref={containerRef} className={`graphic-container-item ${!isActive ? 'graphic-disabled' : 'graphic-enabled'}`} onClick={() => setActiveGraphic(graphicId)}>
            <img src={imageSrc} alt={altText} />
            <div className='graphic-content'>
                <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="goto-btn">Go to</a>
                <h2 className="graphic-text">{locationName}</h2>
                <button className="reservation-btn">Reservation</button>
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
