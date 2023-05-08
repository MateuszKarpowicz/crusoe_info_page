import React from 'react';
import '../reset.css'
import '../global.css';
import SocialBlock from './SocialBlock.js';
import footerBackGround from '../assets/footer/footer-background.png';
import footerBottomRight from '../assets/footer/footer-bottom-right.png';



const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-background">
                    <img className="footer-background-img" src={footerBackGround} alt="footer-background" />
                </div>
                <SocialBlock />
            </div>
            <div className="footer-bottom-right">
                <img className="footer-bottom-right-img" src={footerBottomRight} alt="footer-bottom-right" />
            </div>
                <div className="slogan-footer">
                    <h2 className="slogan-footer-txt-up">Magificence.</h2>
                    <p1 className="slogan-footer-txt-mid">The world with <b>CRUSOE</b>.</p1>
                    <p2 className="slogan-footer-txt-down">The greatest luxury is traveling and staying happy.</p2>
                </div>
            </div>
    );
};



export default Footer;