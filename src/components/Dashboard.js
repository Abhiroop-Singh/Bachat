import React from "react";
import "./dash.css";

const Dashboard = () => {
  return (
    <div className="container">
      <fieldset>
        <legend>Expenses</legend>
        <form action="" method="post" autoComplete="on">
          <div className="kalava">
            <h6>Monthly Income</h6>
            <input type="number" name="" id="" />
          </div>
          <div className="kalava">
            <h6>Expenditure</h6>
            <input type="number" name="" id="" />
          </div>
          <div className="kalava">
            <h6>Date</h6>
            <input type="date" name="" id="" />
          </div>
          <div className="kalava">
            <button type="submit"> Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Dashboard;
