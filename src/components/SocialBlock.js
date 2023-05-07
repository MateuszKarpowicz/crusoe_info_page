import React from 'react';
import socialBlock from '../assets/footer/socialblock.png';

const SocialBlock = () => {
    const handleButtonClickTopLeft = () => {
        window.open("https://www.instagram.com/crusoe_travel/", "_blank");
    };

    const handleButtonClickTopRight = () => {
        window.open("https://www.facebook.com/Crusoeapartamenty/?locale=pl_PL", "_blank");
    };

    const handleButtonClickBottomLeft = () => {
        window.location.href = "tel:+48885398888";
    };

    const handleButtonClickBottomRight = () => {
        window.location.href = "mailto:info@crusoe.info";
    };

    return (
        <div className="footer-social-block">
            <img
                className="footer-social-img"
                src={socialBlock}
                alt="Social Block"
                useMap="#socialblockmap"
                width="78"
                height="78"
            />
            <map name="socialblockmap">
                <area shape="rect" coords="0, 0, 39, 39" alt="Top-Left Button" onClick={handleButtonClickTopLeft} />
                <area shape="rect" coords="39, 0, 78, 39" alt="Top-Right Button" onClick={handleButtonClickTopRight} />
                <area shape="rect" coords="0, 39, 39, 78" alt="Bottom-Left Button" onClick={handleButtonClickBottomLeft} />
                <area shape="rect" coords="39, 39, 78, 78" alt="Bottom-Right Button" onClick={handleButtonClickBottomRight} />
            </map>
        </div>
    );
};

export default SocialBlock;
