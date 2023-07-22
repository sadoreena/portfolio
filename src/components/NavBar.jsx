import React from 'react';
import { Link } from 'react-scroll';
import '../styles.css';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="App" smooth={true} duration={500}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="button-container">

        <Link className="about-button" to="about-me" smooth={true} duration={500}>
          About
        </Link>

        <Link className="work-button" to="my-work" smooth={true} duration={500}>
          Work
        </Link>

        <Link className="contact-button" to="contact-me" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
