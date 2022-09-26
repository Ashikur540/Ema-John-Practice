import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className="header">
          <img src={logo} alt="" className="logo" />
          <div className="nav-links">
              <a href="http://">Shop</a>
              <a href="http://">Orders</a>
              <a href="http://">Inventory</a>
              <a href="http://">About</a>
          </div>
        </nav>
    );
};

export default Header;