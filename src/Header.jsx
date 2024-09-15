import React from "react";
import './Header.css';

function Header({ setSection }) {
  return (
    <header>
      <nav id="navBar">
        <h1>Portfolio</h1>
        <a onClick={(e) => {e.preventDefault(); setSection('About')}} href="#">About Me</a>
        <a onClick={(e) => {e.preventDefault(); setSection('Projects')}} href="#">My Projects</a>
        <a onClick={(e) => {e.preventDefault(); setSection('Certificates')}} href="#">My Certificates</a>
        <a onClick={(e) => {e.preventDefault(); setSection('Contact')}} href="#">Contact Me</a>
      </nav>
    </header>
  );
}

export default Header;
