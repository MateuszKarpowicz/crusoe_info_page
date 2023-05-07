import React from 'react';
import '../reset.css'
import '../global.css';
import SocialBlock from '../assets/SocialBlock.svg';
import { ReactSVG } from 'react-svg';
import FooterRightGraphic from '../assets/footer-right-graphic.png';



const Footer = () => {

    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-social-block">
                    <ReactSVG className="footer-social-svg" src={SocialBlock} />
                </div>
            </div>
            <div className="footer-right-graphic">
                <img src={FooterRightGraphic} alt="footer-right-graphic" />
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