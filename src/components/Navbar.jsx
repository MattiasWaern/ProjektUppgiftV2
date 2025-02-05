import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h1>Min Portfolio</h1>
      <ul>
        <li><Link to="/">Om mig</Link></li>
        <li><Link to="/projects">Projekt</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
      </ul>
      <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Ljusläge" : "🌙 Mörkerläge"}
      </button>
    </nav>
  );
}

export default Navbar;
