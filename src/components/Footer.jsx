import React from "react";
import "./FooterStyles.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaYoutube,
  FaInstagram,
  FaSpotify,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* FOOTER LINKE SEITE */}
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "whitesmoke", marginRight: "2rem" }}
            />
            <div>
              <p>Hamburg, Germany </p>
              <p>Ibiza, Spain</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "whitesmoke", marginRight: "2rem" }}
              />
              1-2323-343-456
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "whitesmoke", marginRight: "2rem" }}
              />
              info@gmail.com
            </h4>
          </div>
        </div>

        {/* FOOTER RECHTE SEITE */}
        <div className="right">
          <h4>About the company</h4>
          <p>
            This is Zcalacee. Co-operation with Sunlight-Records. Producer,
            Songwriter, Singer
          </p>
          <div className="social">
            <FaYoutube
              size={30}
              style={{ color: "whitesmoke", marginRight: "1rem" }}
            />
            <FaInstagram
              size={30}
              style={{ color: "whitesmoke", marginRight: "1rem" }}
            />
            <FaSpotify
              size={30}
              style={{ color: "whitesmoke", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
