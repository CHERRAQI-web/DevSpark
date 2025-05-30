
import { useState } from "react";
import "./body.css";
import image1 from "./Images/Image1.png";
import image2 from "./Images/Image2.png";
import image3 from "./Images/Image3.png";
import image4 from "./Images/Image4.png";
import image5 from "./Images/Image5.png";

export default function Body() {
  const [expanded, setExpanded] = useState({});

  const articles = [
    {
      title: "Prendre confiance en soi",
      author: "CHERRAQI AZIZA",
      content:
        "La confiance se construit avec le temps, en sortant régulièrement de sa zone de confort. Chaque petite victoire compte.",
      imageUrl: image1,
    },
    {
      title: "Routine matinale efficace",
      author: "CHERRAQI AZIZA",
      content:
        "Une routine matinale bien pensée améliore la concentration et réduit le stress. Quelques minutes suffisent pour faire la différence.",
      imageUrl: image2,
    },
    {
      title: "Savoir dire non",
      author: "CHERRAQI AZIZA",
      content:
        "Dire non, c’est se dire oui à soi-même. C’est un acte de respect envers ses limites et son énergie.",
      imageUrl: image3,
    },
    {
      title: "Le pouvoir de l'écriture",
      author: "CHERRAQI AZIZA",
      content:
        "Tenir un journal permet de mieux comprendre ses émotions et de clarifier ses pensées. C’est un outil puissant de développement personnel.",
      imageUrl: image4,
    },
    {
      title: "Déconnecter pour mieux avancer",
      author: "CHERRAQI AZIZA",
      content:
        "Prendre du recul face au numérique améliore la productivité, le sommeil et les relations humaines.",
      imageUrl: image5,
    }, 
  ];

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      
<div id="postes">
    <h1 className="blog-title" >Les Postes de Développement Personnel</h1>

    <div className="blog-grid">
      {articles.map((article, index) => {
        const isExpanded = expanded[index];
        const preview = article.content.slice(0, 80) + "...";

        return (
          <div className="blog-card" key={index}>
            <img src={article.imageUrl} alt={article.title} />
            <div className="blog-content">
              <h3 className="titre">{article.title}</h3>
              <p className="author">Par {article.author}</p>
              <p>{isExpanded ? article.content : preview}</p>
              <button onClick={() => toggleReadMore(index)} className="read-more-button">
                {isExpanded ? "Lire moins" : "Lire la suite"}
              </button>
            </div>
          </div>
        );
      })}
    </div></div></>
  );
}
