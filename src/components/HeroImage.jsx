import React from "react";
import "./HeroImageStyles.css";
import IntroImg from "../images/gitarrist.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>SINGER & SONGWRITER</p>
        <h1>ZCALACEE</h1>
        <div>
          <Link to="/music" className="btn">
            MUSIC
          </Link>
          <Link to="/contact" className="btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
