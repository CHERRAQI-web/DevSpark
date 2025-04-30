import React from 'react';
import './Contact.css';
import { NavLink } from 'react-router-dom';

const Contact = () => {

  return (
    <div className="contact-container">
      <form className="contact-form">
        <h2 className="contact-title">Contactez-Nous</h2>

        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" placeholder="Votre nom" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Votre email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Votre message" required></textarea>

        <NavLink to="/">
       <button type="submit" >Envoyer</button>
       </NavLink>
  

  
</form>
    </div>
  );
};

export default Contact;
