import React, { useState } from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Tack för ditt meddelande!");
    setFormData({ name: "", email: "", message: "" }); // Rensar formuläret
  };

  return (
    <div className="contact-container">
      <h2>Kontakta mig</h2>
      <p>Har du frågor eller vill samarbeta? Skicka ett meddelande!</p>

      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>dinemail@example.com</span>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>+46 123 456 789</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>Stockholm, Sverige</span>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Ditt namn" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Din e-post" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Ditt meddelande" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
};

export default Contact;
