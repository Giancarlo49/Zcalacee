import "./MusicCardStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const MusicCard = () => {
  return (
    <div className="music">
      <div className="card-container">
        <div className="card">
          <h3>Zcalacee - Belalim 2023</h3>
          <span className="bar"></span>
          <img src="../src/images/belalim.jpg" />
          <Link
            to="https://open.spotify.com/intl-de/track/7vOXTKAUtEtjbj0QZbojHA"
            className="btn"
          >
            PLAY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
