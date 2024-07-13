import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <h1 className="hero-h1">
          new
          <span>
            <img src={hand_icon} alt="" className="hero-img" />
          </span>
          <br /> collections <br /> for everyone
        </h1>
        <div className="hero-latest-btn">
          <div>Latest Collections</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      
    </div>
  );
};
export default Hero;
