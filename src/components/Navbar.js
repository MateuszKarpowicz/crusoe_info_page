import React from 'react';
import topLong from '../assets/nav/top-left.png';
import topStripeTexture from '../assets/nav/top-stripe-texture.png';
import logo from '../assets/nav/logo.png';
import polishFlag from '../assets/nav/flag-polish.png';
import englishFlag from '../assets/nav/flag-english.png';
import '../global.css';

const Navbar = () => {
    const [language, setLanguage] = React.useState("PL");
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    }

    return (
        <div className="navbar-wrapper">
        <div className="navbar-container">
            <div className="top-stripe">
                <div className="top-stripe-texture">
                    <img src={topStripeTexture} alt="Top Stripe Texture" />
                </div>
                <div className="flags-container">
                    <div className="flag-english" onClick={() => changeLanguage("EN")}>
                        <img src={englishFlag} alt="English Flag"  />
                    </div>
                    <div className="flag-polish" onClick={() => changeLanguage("PL")}>
                        <img src={polishFlag} alt="Polski Flag" />
                    </div>
                </div>
            </div>
                <div className="top-long">
                    <img src={topLong} alt="Top Long" />
                </div>
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
        </div>
        </div>
    );
}

export default Navbar;
