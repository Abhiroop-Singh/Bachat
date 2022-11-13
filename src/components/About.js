import React from "react";
import "../app.css"
const About = () => {
  return (
    <section className="page-section bg-primary" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">We've got what you need!</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">
              Register in order to Avail Our Services
            </p>
            <a className="btn btn-light btn-xl" href="/register">
              Get Started!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
