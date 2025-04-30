import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Navbar from "./components/NavBar/NavBar"; // Adjust if it's actually 'Navbar'
import Footer from "./components/Footer";
import SectionHero from "./components/SectionHero";
import Body from "./components/Body";
import QuiSommesnous from "./components/QuiSommesnous";
import Contact from "./components/Contact";
import AjoutArticle from "./AjoutArticle";

// Home content
function Home() {
  return (
    <>
      <SectionHero />
      <Body />
      <QuiSommesnous />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/*"
        element={
          <>
            <Navbar />
            <main>
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="créeblog" element={<AjoutArticle />} />
              </Routes>
            </main>
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
