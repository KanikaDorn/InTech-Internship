import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="http://192.168.0.77:8000/_nuxt/intech_logo-clear.BqQbyHg-.png"
          alt="Logo"
          className="logo-image"
        />
      </div>
      <ul className="navbar-links">
        <li>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("products");
            }}
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <button className="request-demo-button">Request Demo</button>
      </div>
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
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
