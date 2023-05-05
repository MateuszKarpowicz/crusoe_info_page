import React from 'react';
import graphicPrimoImage from '../assets/Primosten.jpg';
import Graphic from './Graphic';

const GraphicPrimo = () => {
    return (
        <Graphic
            graphicId="graphicPrimo"
            imageSrc={graphicPrimoImage}
            altText="Graphic Primo"
            linkUrl="https://apartamenty-krakow.crusoe.info"
            locationName="Primošten"
        />
    );
}

export default GraphicPrimo;
