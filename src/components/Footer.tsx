import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-quote">
        <p>
          "Empowering smarter workplaces with innovative solutions – InTech."
        </p>
      </div>
      <div className="footer-links">
        <div className="quick-links">
          <h3 className="h3">Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <address>
            Green Arcade 1, 2 And 3, Thmey Village, Chambak Commune, Phnom
            Srouch District, Kampong Speu Province, Cambodia
            <br />
            012 345 678
          </address>
          <div className="social-icons">
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} className="social-icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
