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

    const handleOutsideTouch = (e) => {
        if (activeGraphic && containerRef.current && !containerRef.current.contains(e.target)) {
            setActiveGraphic(-1);
        }
    };


    useEffect(() => {
        if (window.innerWidth <= 732) {
            containerRef.current.addEventListener('touchstart', handleTouch);
            document.addEventListener('touchstart', handleOutsideTouch);
        }

        return () => {
            if (window.innerWidth <= 732) {
                containerRef.current.removeEventListener('touchstart', handleTouch);
                document.removeEventListener('touchstart', handleOutsideTouch);
            }
        };
    }, [locationName]);

    return { containerRef, isActive, setActiveGraphic, displayedLocationName };
};



export default useGraphic;
