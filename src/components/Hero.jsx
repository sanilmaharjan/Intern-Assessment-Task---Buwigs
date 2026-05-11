import React from 'react';
import './Hero.css';
import heroBanner from '../assets/images/hero_banner.png';
import eaLogo from '../assets/images/ea_logo.png';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-left">
        <img src={heroBanner} alt="Hero Banner" className="hero-img" />
      </div>
      
      <div className="hero-right">
        <img src={eaLogo} alt="EA Logo" className="hero-img" />
      </div>
    </section>
  );
};

export default Hero;

