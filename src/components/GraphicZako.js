import React from 'react';
import graphicZakoImage from '../assets/Zakopane.jpg';
import Graphic from './Graphic';

const GraphicZako = () => {
    return (
        <Graphic
            graphicId="graphicZako"
            imageSrc={graphicZakoImage}
            altText="Graphic Zako"
            linkUrl="https://apartamenty-krakow.crusoe.info"
            locationName="Zakopane"
        />
    );
}

export default GraphicZako;
