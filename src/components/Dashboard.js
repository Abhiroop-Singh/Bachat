import React, { useState } from "react";
import './dash.css'
import Playlist from "./Playlist";
import { Link } from "react-router-dom";
import Influencers from "./Influencers";
import Footer from "./Footer";

function Dashboard(){
  return (
    <div style={{textAlign:'center',marginTop:'2rem'}}>
      <h1>Dashboard</h1>
      <br/>
      <br/>
      <div className="expense-div"  id="arre">
      <h5 style={{marginBottom:'1rem'}}>Track Your Expenses Here</h5>
      <Link to='/expenseTracker'><button type="button" className="btn btn-primary">Expense Tracker</button></Link>
      </div>
      <br/>
      <br/>
      <h2>
        <u>Financial Advices</u>
      </h2>
      <Playlist />
      <br/>
      <br/>
      <h2>
        <u>Learn From Financial Advisors</u>
      </h2>
      <br/>
      <Influencers/>
      <Footer/>
    </div>
  );
};

export default Dashboard;