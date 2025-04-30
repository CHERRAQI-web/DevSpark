import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import "./AjouterArticle.css";
export default function AjoutArticle() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    author: "",
    content: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const imagePath = URL.createObjectURL(files[0]);
      setForm({ ...form, imageUrl: imagePath });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.content || !form.imageUrl) return;
    setBlogs([form, ...blogs]);
    setForm({ title: "", author: "", content: "", imageUrl: "" });
  };
  return (
    <div id="#Ajout">
      <div className="App">
        <h1> Mon Poste</h1>

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

        {/* <section className="blog-list">
        <h2>Postes publiés</h2>
        <div className="blog-grid">
          {blogs.map((blog, i) => (
            <div className="blog-card" key={i}>
              <img src={blog.imageUrl} alt={blog.title} />
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p className="author">Par {blog.author}</p>
                <p>{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      </div>
    </div>
  );
}
