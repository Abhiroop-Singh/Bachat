import React from "react";
import "../app.css"

const Masthead = () => {
  return (
    <div>
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">
                Your First Step Towards Financial Literacy
              </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">
                Track your expense and learn how to invest
              </p>
              <a className="btn btn-primary btn-xl" href="#news">
                Read Latest News
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Masthead;
