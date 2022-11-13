import React from 'react'
import Navbar from "../Navbar";
import Masthead from "../Masthead";
import Footer from "../Footer";
import About from "../About";
import '../../app.css'
import NewsCard from '../NewsCard';

function homepage() {
  return (
    <>
    <Navbar/>
    <Masthead/>
    <NewsCard/>
    <About/>
    <Footer/>
    </>
  )
}

export default homepage