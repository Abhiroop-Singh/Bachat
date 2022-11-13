import React from "react"
import "../app.css"
import { Link } from "react-router-dom"

const Navbar = () => {

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav" style={{backgroundColor:'#00000082'}}>
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="/">
            Bachat
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#news">
                  News
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/login'>
                  SignIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
