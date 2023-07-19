import React from 'react';
import '../styles.css';
import logo from '../assets/logo.png'


const NavBar = () => {
  return (
    <nav className="navbar">
      
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </a>
      </div>

      <div className="button-container">
        <ul className="button">
          <li className="about-button">
            <a href="/about">About</a>
          </li>
          <li className="work-button">
            <a href="/work">Work</a>
          </li>
          <li className="contact-button">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
