import React from "react";
import "./SectionHero.css";

const SectionHero = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">Développe ta meilleure version</h1>
          <p className="hero-description">
            Le développement personnel commence ici. Accède à des conseils
            pratiques, des outils efficaces et des inspirations quotidiennes
            pour évoluer, réussir et t’épanouir pleinement dans ta vie
            personnelle et professionnelle.
          </p>
          <a href="#" className="btn margin-right-sm">
            Voir les Articles &darr;
          </a>
          <div className="delivered-articles">
            <div className="deliverd-images">
              <img src="/Imags/face1.jpg" alt="photo" />
              <img src="/Imags/face2.jpg" alt="photo" />
              <img src="/Imags/face3.jpg" alt="photo" />
              <img src="/Imags/face4.jpg" alt="photo" />
              <img src="/Imags/face5.jpg" alt="photo" />
              <img src="/Imags/face6.jpg" alt="photo" />
            </div>
            <p className="deliverd-text">
              <strong>250 000+</strong> personnes développées l'année dernière !
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <img
            src="public/Imags/HeroImage.png"
            className="hero-img"
            alt="Personne développée"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
