// NavbarImages.js
import React from 'react';
import topLong from '../assets/nav/top-left.png';
import topStripeTexture from '../assets/nav/top-stripe-texture.png';
import logo from '../assets/nav/logo.png';
import polishFlag from '../assets/nav/flag-polish.png';
import englishFlag from '../assets/nav/flag-english.png';

const NavbarImages = ({ type }) => {
    switch (type) {
        case 'topLong':
            return <img src={topLong} alt="Top Long" />;
        case 'topStripeTexture':
            return <img src={topStripeTexture} alt="Top Stripe Texture" />;
        case 'logo':
            return <img src={logo} alt="Logo" />;
        case 'polishFlag':
            return <img src={polishFlag} alt="Polski Flag" />;
        case 'englishFlag':
            return <img src={englishFlag} alt="English Flag" />;
        default:
            return null;
    }
};

export default NavbarImages;
