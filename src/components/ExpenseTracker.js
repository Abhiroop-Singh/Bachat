import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import './dash.css'
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("email")) {
            navigate("/login")
        }
    }, [])

    const [monthlyIncome, setmonthlyIncome] = useState("");
    const [userName, setUserName] = useState("");
    const [monthlyExpense, setmonthlyExpense] = useState("");
    const [date, setdate] = useState("");
    const [data, setdata] = useState([]);

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
        setUserName(finalData.user);
        setdata(finalData.data);
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
    const handleLogout = () => {
        localStorage.removeItem("email");
        navigate("/")
    }

    let mahina = [
        "",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

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
                <div id="asn">

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
                            <span id='spn1'>

                                <button type="submit" onSubmit={handleSubmit}>Submit</button>
                            </span>
                            <span>
                                <button onClick={handleLogout} id="spn2">LogOut</button>
                            </span>
                        </form>
                    </fieldset>
                </div>
                <div id="tabbox" style={{ marginTop: '5rem' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>{userName}'s Monthly Expense :</h3>
                    <table>
                        <thead>
                            <tr>
                                <th className="mo">Month</th>
                                <th className="ye">Year</th>
                                <th className="ms">Monthly Savings</th>
                                <th className="me">Monthly Expenses</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr>
                                    <td width="342.05px">
                                        {mahina[parseInt(item.date.slice(5, 7))]}
                                    </td>
                                    <td>{item.date.slice(0, 4)}</td>
                                    <td>₹{item.monthlyIncome - item.monthlyExpense}</td>
                                    <td>₹{item.monthlyExpense}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Dashboard;