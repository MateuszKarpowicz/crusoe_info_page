import React from 'react';
import graphicKrkImage from '../assets/KR.png';
import Graphic from './Graphic';

const GraphicKrk = () => {
    return (
        <Graphic
            graphicId="graphicKrk"
            imageSrc={graphicKrkImage}
            altText="Graphic Krk"
            linkUrl="https://apartamenty-krakow.crusoe.info"
            locationName="Kraków"
        />
    );
}

export default GraphicKrk;