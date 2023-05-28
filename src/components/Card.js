import React from 'react';
import Graphic from './Graphic';

const Card = ({ graphicId, imageSrc, altText, linkUrl, linkUrl2, locationName, className }) => {
    return (
        <Graphic
            graphicId={graphicId}
            imageSrc={imageSrc}
            altText={altText}
            linkUrl={linkUrl}
            linkUrl2={linkUrl}
            locationName={locationName}
            className={className}
        />
    );
}

export default Card;
