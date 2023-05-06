import React from 'react';
import "../global.css";
import GraphicContext from "./GraphicContext";

const Graphic = ({ graphicId, imageSrc, altText, linkUrl, locationName }) => {
    const containerRef = React.useRef(null);
    const { activeGraphic, setActiveGraphic } = React.useContext(GraphicContext);
    const [displayedLocationName, setDisplayedLocationName] = React.useState(locationName);
    const isActive = activeGraphic === graphicId;

    const handleTouch = () => {
        setActiveGraphic(graphicId);
        setDisplayedLocationName(locationName);
    };

    React.useEffect(() => {
        if (window.innerWidth <= 732) {
            containerRef.current.addEventListener("touchstart", handleTouch);
        }

        return () => {
            if (window.innerWidth <= 732) {
                containerRef.current.removeEventListener("touchstart", handleTouch);
            }
        };
    }, [locationName]);

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
                </div>
            }
        </div>
    );
}

export default Graphic;
