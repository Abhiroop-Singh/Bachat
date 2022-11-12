import React from "react";

const About = () => {
  return (
    <section className="page-section bg-primary" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">We've got what you need!</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">
              Start Bootstrap has everything you need to get your new website up
              and running in no time! Choose one of our open source, free to
              download, and easy to use themes! No strings attached!
            </p>
            <a className="btn btn-light btn-xl" href="#services">
              Get Started!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
