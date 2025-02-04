import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tack för ditt meddelande, ${name}!`);
  };

  return (
    <div className="content">
      <h1>Kontakt</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Namn" value={name} onChange={(e) => setName(e.target.value)} />
        <textarea placeholder="Ditt meddelande" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
}

export default Contact;
