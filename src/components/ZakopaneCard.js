import React from 'react';
import graphicZakoImage from '../assets/Zakopane.jpg';
import Graphic from './Graphic';

const ZakopaneCard = () => {
    return (
        <Graphic
            graphicId="graphicZako"
            imageSrc={graphicZakoImage}
            altText="Graphic Zako"
            linkUrl="https://apartamenty-krakow.crusoe.info"
            locationName="ZakopaneCard"
        />
    );
}

export default ZakopaneCard;
