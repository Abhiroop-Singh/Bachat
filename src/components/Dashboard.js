import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    useEffect(() => {
      if(!localStorage.getItem("email")){
        navigate("/login")
      }
    }, [])
    
    const navigate = useNavigate();
  const [monthlyIncome, setmonthlyIncome] = useState("");
  const [monthlyExpense, setmonthlyExpense] = useState("");
  const [date, setdate] = useState("");

  const getData = async () => {
    const email = localStorage.getItem('email');
    const data = { email }
    const res = await fetch("/api/fetchData", {
      method: "POST",
      headers: {
        //always use this
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const finalData = await res.json();
    console.log(finalData);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem("email");
    const data = { email, monthlyIncome, monthlyExpense, date }
    const res = await fetch("/api/addData", {
      method: "POST",
      headers: {
        //always use this
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const check = await res.json();
    if (!check.success) {
      toast.error(check.error, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Records saved successfully", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setmonthlyExpense("");
      setmonthlyIncome("");

      setdate("");
    }

  };

  const handleChange = (e) => {
    if (e.target.name === "monthlyIncome") {
      setmonthlyIncome(e.target.value);
      console.log(monthlyIncome);
    }
    else if (e.target.name === "monthlyExpense") {
      setmonthlyExpense(e.target.value)
      console.log(monthlyExpense);
    }
    else {
      setdate(e.target.value);
    }
  }
  const handleLogout=()=>{
    localStorage.removeItem("email");
    navigate("/")
  }

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container">
        <fieldset>
          <legend>Expenses</legend>
          <form method="post" autoComplete="on" onSubmit={handleSubmit}>
            <div className="kalava">
              <h6>Monthly Income: </h6>
              <input type="number" name="monthlyIncome" id="monthlyIncome" value={monthlyIncome} onChange={handleChange} />
            </div>
            <div className="kalava">
              <h6>Expenditure</h6>
              <input type="number" name="monthlyExpense" id="monthlyExpense" value={monthlyExpense} onChange={handleChange} />
            </div>
            <div className="kalava">
              <h6>Date</h6>
              <input type="date" name="date" id="date" value={date} onChange={handleChange} />
            </div>
            <div className="kalava">
              <button type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>
          <button  onClick={handleLogout}>LogOut</button>
          </form>
        </fieldset>

      </div>
    </>
  );
};

export default Dashboard;