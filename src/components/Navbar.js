import React from 'react';
import NavbarImages from '../LazyComponents/NavbarImages';
import '../global.css';
import { useContext } from 'react';
import RegulaminPDF from './regulamin-crusoe.pdf';
import LanguageContext from './LanguageContext';

const Navbar = () => {
    const { language, changeLanguage } = useContext(LanguageContext);
    const handleButtonRegulamin = () => {
        window.open(RegulaminPDF, "_blank");
    };
    return (
        <div className="navbar-wrapper">
            <div className="navbar-container">
                <div className="top-stripe">
                    <div className="top-stripe-texture">
                        <NavbarImages type="topStripeTexture" />
                    </div>
                    <div className="flags-container">
                        <div className="flag-english" onClick={() => changeLanguage("EN")}>
                            <NavbarImages type="englishFlag" />
                        </div>
                        <div className="flag-polish" onClick={() => changeLanguage("PL")}>
                            <NavbarImages type="polishFlag" />
                        </div>
                    </div>
                </div>
                <div className="regulamin" onClick={handleButtonRegulamin}>
                    <span>Regulamin</span>
                </div>
                <div className="top-long top-long-unobstructive">
                    <NavbarImages type="topLong" />
                </div>
                <div className="logo">
                    <NavbarImages type="logo" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
