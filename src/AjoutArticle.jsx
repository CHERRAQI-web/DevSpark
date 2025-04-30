import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import "./AjouterArticle.css";

export default function AjoutArticle() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.content || !form.image) return;

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("author", form.author);
    formData.append("content", form.content);
    formData.append("image", form.image);

    try {
      const res = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        alert("Article ajouté avec succès !");
        setForm({ title: "", author: "", content: "", image: null });
      } else {
        alert("Erreur lors de l'ajout.");
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  return (
    <div className="App">
      <h1>Mon Poste</h1>
      <form className="blog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Titre"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Auteur"
          value={form.author}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Contenu"
          value={form.content}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <button type="submit">Ajouter Poste</button>
      </form>
    </div>
  );
}
