import React from "react";
import "../global.css";
import graphicPrimoImage from "../assets/Primosten.jpg";

const GraphicPrimo = () => {
return (
    <div className="graphic-primo-container">
      <img src={graphicPrimoImage} alt="Graphic Krk" />
      <div className='graphic-content'>
        <a href="https://apartamenty-krakow.crusoe.info" target="_blank" rel="noopener noreferrer" className="goto-btn">Go to</a>
        <h2 className="graphic-text">Primošten</h2>
        <button className="reservation-btn">Reservation</button>
        </div>
        </div>
  );

}

export default GraphicPrimo;