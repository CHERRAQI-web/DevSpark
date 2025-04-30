import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import SectionHero from './components/SectionHero';
import Body from './components/Body';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <NavBar />
      <SectionHero />
      <Body />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
