import React from "react";
import About from "../components/About";
import PortfolioImgs from "../components/PortfolioImgs";
import Services from "../components/Services";
import Masthead from "../components/Masthead";

const home = () => {
  return (
    <div>
      <Masthead />
      <About />
      <Services />
      <PortfolioImgs />
    </div>
  );
};

export default home;
