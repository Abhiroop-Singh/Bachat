import React from "react";
import "./card.css";
const Influencers = () => {
  return (
    <section id="card">
      <br />
      <br />
      <div className="container-card">
        <div className="contacts" b>
          <div className="contact-card">
            <img
              src={require("../assets/img/influencers/rachna phadke.png")}
            ></img>
            <br />
            <h3><a href="https://twitter.com/rachana_ranade" target="blank"style={{color:"black"}}>Rachna Ranade</a></h3>
            <br />
          </div>
          <div className="contact-card">
            <img
              src={require("../assets/img/influencers/shwetabh gangwar.jpg")}
            ></img>
            <br />
            <h3><a href="https://twitter.com/shwetabhgangwr" target="blank" style={{color:"black"}}>Shwetabh Gangwar</a></h3>
            <br />
          </div>
          <div className="contact-card">
            <img
              src={require("../assets/img/influencers/warren buffet.jpg")}
            ></img>
            <br />
            <h3><a href="https://twitter.com/warrenbuffett" target="blank"style={{color:"black"}}>Warren Buffet</a></h3>
            <br />
          </div>
          <div className="contact-card">
            <img src={require("../assets/img/influencers/deepak.png")}></img>
            <br />
            <h3><a href="https://twitter.com/coachdeepak_" target="blank"style={{color:"black"}}>Deepak Bajaj</a></h3>
            <br />
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};

export default Influencers;
