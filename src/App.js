import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";

import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import { Home } from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Services from "./components/services/Services";
import { useState, useEffect } from "react";
import Projects from "./components/projects/Projects";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Router>
        <Navigation isTopOfPage={isTopOfPage} />
        <Home />
        <About />
        <Services />
        <Projects/>
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
