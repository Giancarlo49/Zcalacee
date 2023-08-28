import "./MusicCardStyles.css";

import React from "react";
import { Link } from "react-router-dom";

const MusicCard = () => {
  return (
    <div className="music">
      <div className="card-container">
        <div className="card belalim">
          <h3>Zcalacee</h3>
          <span className="bar"></span>
          <p className="artist">Zcalacee feat. Ziya</p>
          <p>Belalim 2023</p>

          <p></p>
          <p></p>

          <a
            href="https://open.spotify.com/intl-de/track/7vOXTKAUtEtjbj0QZbojHA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            PLAY
          </a>
        </div>
        <div className="card galerie">
          <h3>Zcalacee</h3>
          <span className="bar"></span>
          <p className="artist">Zcalacee feat. Momo</p>
          <p>Galerie</p>

          <p></p>
          <p></p>

          <a
            href="https://open.spotify.com/intl-de/track/3MO40EQ3yCWS5gSQNLxmDk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            PLAY
          </a>
        </div>
        <div className="card poladior">
          <h3>Zcalacee</h3>
          <span className="bar"></span>
          <p className="artist">Zcalacee</p>
          <p>Poladior</p>

          <p></p>
          <p></p>

          <a
            href="https://open.spotify.com/intl-de/album/3b8YjBSZyievZdIIU3rgG6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            PLAY
          </a>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
