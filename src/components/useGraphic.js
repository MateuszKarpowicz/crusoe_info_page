import { useState, useEffect, useContext, useRef } from 'react';
import GraphicContext from './GraphicContext';

const useGraphic = (graphicId, locationName) => {
    const containerRef = useRef(null);
    const { activeGraphic, setActiveGraphic } = useContext(GraphicContext);
    const [displayedLocationName, setDisplayedLocationName] = useState(locationName);
    const isActive = activeGraphic === graphicId;

    const handleTouch = () => {
        setActiveGraphic(graphicId);
        setDisplayedLocationName(locationName);
    };



    useEffect(() => {
        if (window.innerWidth <= 732) {
            containerRef.current.addEventListener('touchstart', handleTouch);
        }

        return () => {
            if (window.innerWidth <= 732) {
                containerRef.current.removeEventListener('touchstart', handleTouch);
            }
        };
    }, [locationName, activeGraphic]);

    return { containerRef, isActive, setActiveGraphic, displayedLocationName };
};

export default useGraphic;
