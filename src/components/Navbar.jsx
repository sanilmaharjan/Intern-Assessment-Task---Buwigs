import React from 'react';
import { Gamepad2, Search, ShoppingCart } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-top">
        <div className="navbar-logo">
          <div className="logo-box">
            <Gamepad2 className="logo-icon" size={24} />
            <div className="logo-text">
              <span className="logo-title">J M</span>
              <span className="logo-subtitle">Store</span>
            </div>
          </div>
        </div>

        <div className="navbar-search">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder="Search store" className="search-input" />
          </div>
        </div>

        <div className="navbar-actions">
          <button className="cart-button" aria-label="Cart">
            <ShoppingCart size={24} />
          </button>
          <button className="sign-in-button">Sign in</button>
        </div>
      </div>

      <nav className="navbar-bottom">
        <ul className="nav-links">
          <li><a href="#discovery" className="active">Discovery</a></li>
          <li><a href="#browse">Browse</a></li>
          <li><a href="#news">News</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
