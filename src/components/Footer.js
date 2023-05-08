import React from 'react';
import '../reset.css';
import '../global.css';
import SocialBlock from './SocialBlock.js';
import { Suspense, lazy } from 'react';

const FooterImages = lazy(() => import('../LazyComponents/FooterImages'));

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-background">
                    <Suspense fallback={<div>Loading...</div>}>
                        <FooterImages type="background" />
                    </Suspense>
                </div>
                <SocialBlock />
            </div>
            <div className="footer-bottom-right">
                <Suspense fallback={<div>Loading...</div>}>
                    <FooterImages type="bottomRight" />
                </Suspense>
            </div>
            <div className="slogan-footer">
                <h2 className="slogan-footer-txt-up">Magificence.</h2>
                <p1 className="slogan-footer-txt-mid">
                    The world with <b>CRUSOE</b>.
                </p1>
                <p2 className="slogan-footer-txt-down">
                    The greatest luxury is traveling and staying happy.
                </p2>
            </div>
        </div>
    );
};

export default Footer;



