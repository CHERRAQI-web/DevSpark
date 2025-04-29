import "./App.css";
import Body from "./components/body";
import React from "react";
import Footer from "./components/Footer";
import SectionHero from "./components/SectionHero";
import Navbar from "./components/Navbar/Navbar";
import { TbLayoutNavbar } from "react-icons/tb";

function App() {
  return (
    <div className="app">
    <Navbar/>
      <main>
        <SectionHero></SectionHero>
        <Body />
      </main>

      {/* Add the Footer component at the bottom of your page */}
      <Footer />
    </div>
  );
}

export default App;
