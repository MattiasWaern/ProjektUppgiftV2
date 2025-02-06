import React from "react";
import ProgressBar from "./ProgressBar";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>Hej! Jag är <span className="highlight">Mattias Waern</span> 👋</h1>
          <p>
            Jag är en passionerad <span className="highlight">webbutvecklare</span> med erfarenhet av 
            att bygga moderna och responsiva webbapplikationer. 
            Jag älskar att arbeta med <strong>React, JavaScript och CSS</strong>.
          </p>
          <p>
            Förutom kodning är jag också intresserad av <span className="highlight">Game-design</span> och 
            hur man skapar vackra användarupplevelser.
          </p>

        {/*  Progressbars */}
          <h3>Färdigheter</h3>
            <ProgressBar skill="HTML" percentage={100} />
            <ProgressBar skill="CSS" percentage={85} />
            <ProgressBar skill="JavaScript" percentage={70} />
            <ProgressBar skill="React" percentage={50} />

          {/*  Knappar för CV och kontakt */}
          <div className="button-container">
            <a href="/cv.pdf" className="btn primary-btn" download> Ladda ner CV</a>
            <a href="/contact" className="btn secondary-btn"> Kontakta mig</a>
          </div>

          {/*  Sociala medier */}
          <div className="social-icons">
            <a href="https://github.com/ditt-github" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://linkedin.com/in/ditt-linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="mailto:ditt-email@example.com">
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>

        {/* 🔹 Profilbild */}
        <div className="about-image">
          <img src="profilepicture.jpg" alt="Profilbild" />
        </div>
      </div>
    </section>
  );
};

export default About;
