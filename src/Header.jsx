import React from "react";
import './Header.css';

function Header({ setSection }) {
  return (
    <header>
      <nav id="navBar">
        <h1>Portfolio</h1>
        <a 
          onClick={(e) => {
            e.preventDefault();
            setSection('About');
          }} 
          href="#"
          aria-label="About Me"
        >
          About Me
        </a>
        <a 
          onClick={(e) => {
            e.preventDefault();
            setSection('Projects');
          }} 
          href="#"
          aria-label="My Projects"
        >
          My Projects
        </a>
        <a 
          onClick={(e) => {
            e.preventDefault();
            setSection('Certificates');
          }} 
          href="#"
          aria-label="My Certificates"
        >
          My Certificates
        </a>
        <a 
          onClick={(e) => {
            e.preventDefault();
            setSection('Contact');
          }} 
          href="#"
          aria-label="Contact Me"
        >
          Contact Me
        </a>
      </nav>
    </header>
  );
}

export default Header;
