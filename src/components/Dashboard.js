import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard(){
  return (
    <div style={{textAlign:'center'}}>
      <h5>Track Your Expenses Here</h5>
      <Link to='/expenseTracker'><button>Expense Tracker</button></Link>
    </div>
  );
};

export default Dashboard;