import React from "react";
import "./app.css";
import Login from './components/Login';
import Homepage from "./components/Homepage/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<SignUp/>} />
        {/* <Navbar />
      <Masthead />
      <About />
      <Services />
      <PortfolioImgs />
    <Footer /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;