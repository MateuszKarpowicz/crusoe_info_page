import React from 'react';
import NavbarImages from '../LazyComponents/NavbarImages';
import '../global.css';
import { useContext } from 'react';

import LanguageContext from './LanguageContext';

const Navbar = () => {
    const { language, changeLanguage } = useContext(LanguageContext);

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
