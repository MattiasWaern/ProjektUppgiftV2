import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Om mig</Link></li>
        <li><Link to="/projects">Projekt</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
