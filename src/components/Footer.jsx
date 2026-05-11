import React from 'react';
import { Gamepad2, MapPin, Phone, Mail, Star } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Footer.css';

import cLineImg from '../assets/images/c-line.png';
import nvidiaImg from '../assets/images/nvidia.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top-logo-container">
        <div className="logo-box">
          <Gamepad2 className="logo-icon" size={20} />
          <div className="logo-text">
            <span className="logo-title">J M</span>
            <span className="logo-subtitle">Store</span>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-content">

        <div className="footer-col footer-left">
          <p className="footer-text">
            JM Store © 2022 - 2024 An affiliate<br />
            with RajMaskey & AshimNeupane
          </p>

          <div className="logo-box footer-left-logo">
            <Gamepad2 className="logo-icon" size={20} />
            <div className="logo-text">
              <span className="logo-title">J M</span>
              <span className="logo-subtitle">Store</span>
            </div>
          </div>

          <p className="footer-text">
            JM Store Inc © 2022 - 2023<br />
            An Raj's Company.
          </p>

          <div className="footer-image-container footer-banner-container">
            <img src={cLineImg} alt="Blocked by your bank? Buy from Parcel" className="footer-img" />
          </div>
        </div>

        <div className="footer-col footer-middle">
          <div className="contact-item">
            <MapPin size={18} className="contact-icon" />
            <span>Biratnagar 5, Pokhara 17<br />Nepal</span>
          </div>
          <div className="contact-item">
            <Phone size={18} className="contact-icon" />
            <span>+977 9822789260</span>
          </div>
          <div className="contact-item">
            <Mail size={18} className="contact-icon" />
            <span>contact@rajmaskey.com.np</span>
          </div>
        </div>

        <div className="footer-col footer-right">
          <h3 className="footer-heading">About us</h3>
          <p className="footer-text">
            JMStore or ParcelNepal is Nepal based digital marketplace that specializes in the sale of videogames, game-keys, and gaming-related products.
          </p>

          <div className="social-icons">
            <div className="social-icon"><FaFacebookF size={20} /></div>
            <div className="social-icon"><FaTwitter size={20} /></div>
            <div className="social-icon"><FaLinkedinIn size={20} /></div>
            <div className="social-icon"><FaGithub size={20} /></div>
          </div>

          <div className="trustpilot-review">
            See our reviews on <Star size={16} className="trustpilot-star" fill="#00b67a" color="#00b67a" /> <strong>Trustpilot</strong>
          </div>

          <div className="footer-image-container nvidia-container">
            <img src={nvidiaImg} alt="NVIDIA Inception Program" className="footer-img" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
