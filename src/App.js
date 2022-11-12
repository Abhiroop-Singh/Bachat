import React from "react";
import "./app.css";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Masthead from "./components/Masthead";
import Navbar from "./components/Navbar";
import About from "./components/About";
import PortfolioImgs from "./components/PortfolioImgs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Masthead />
      <About />
      <Services />
      <PortfolioImgs />
      <Footer />
    </div>
  );
}

export default App;
