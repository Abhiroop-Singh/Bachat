import React from 'react'
import Navbar from "../Navbar";
import Masthead from "../Masthead";
import Services from "../Services";
import Footer from "../Footer";
import About from "../About";
import PortfolioImgs from "../PortfolioImgs";

function homepage() {
  return (
    <>
    <Navbar/>
    <Masthead/>
    <About/>
    <Services/>
    <PortfolioImgs/>
    <Footer/>
    </>
  )
}

export default homepage