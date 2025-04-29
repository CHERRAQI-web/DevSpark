import "./App.css";
import Body from "./components/body";
import React from "react";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div className="app">
      {/* Your other components */}
      <main>
        <Body />
      </main>

      {/* Add the Footer component at the bottom of your page */}
      <Footer />
    </div>
  );
}

export default App;
