import React from 'react';
import topLong from '../assets/Top-long.png';
import logo from '../assets/Logo.png';
import polishFlag from '../assets/Polski.png';
import englishFlag from '../assets/English.png';
import '../global.css';

const Navbar = () => {
    const [language, setLanguage] = React.useState("PL");
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    }

    return (
        <div className="navbar-container">
            <div className="top-stripe">
                <div className="flags">
                <div className="flag english" onClick={() => changeLanguage("EN")}>
                <img src={englishFlag} alt="English Flag" />
            </div>
            <div className="flag polish" onClick={() => changeLanguage("PL")}>
                <img src={polishFlag} alt="Polish Flag" />
            </div>
            </div>
            </div>
            
            <div className="top-long">
                <img src={topLong} alt="Top Long" />
            </div>
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            
            <div className="slogan">
                <h1>Magnificence.</h1>
                <p>The world with <b><strong>CRUSOE</strong></b>. The greatest luxury is traveling and staying happy.</p>
            </div>
            {/* Reszta struktury navbara */}
        </div>
    );
}

export default Navbar;
