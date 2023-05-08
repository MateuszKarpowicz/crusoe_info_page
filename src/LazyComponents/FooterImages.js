import React from 'react';
import footerBackGround from '../assets/footer/footer-background.png';
import footerBottomRight from '../assets/footer/footer-bottom-right.png';

const FooterImages = ({ type }) => {
    if (type === "background") {
        return (
            <img className="footer-background-img" src={footerBackGround} alt="footer-background" />
        );
    } else if (type === "bottomRight") {
        return (
            <img className="footer-bottom-right-img" src={footerBottomRight} alt="footer-bottom-right" />
        );
    } else {
        return null;
    }
};

export default FooterImages;
