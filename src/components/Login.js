import React, { useEffect } from "react";
import { useState } from "react";
import "./login.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  useEffect(() => {

  }, [])
   const handleClick = async (e) => {
   
    e.preventDefault();

    const data = { email, password };
    if (email.length === 0 || password.length === 0) {
      toast.error("Email or password cannot be blank", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    const res = await fetch("/api/signin", {
      method: "POST",
      headers: {
    
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const check = await res.json();

    if (check.success) {
      localStorage.setItem("email", email);
      setemail("");
      setpassword("");
      toast.success("Successfully logged in", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        let url = "http://localhost:3000/Dashboard";
      window.location.href = url;
       
      }, 3000);

    
    } else if (!check.success) {
      toast.error(check.error, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setemail("");
      setpassword("");
    }
  };


  const onChange = (req) => {
    if (req.target.name === "email") {
      setemail(req.target.value);
    } else if (req.target.name === "password") {
      setpassword(req.target.value);
    }
  };
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
    <div className="text-center">
      <main className="form-signin w-100 m-auto">
        <form>
          <div className="form-floating">
            <input
             type="email"
             className="form-control"
             value={email}
             id="email"
             name="email"
             placeholder="name@example.com"
             onChange={onChange}
             autoComplete="off"
             required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              value={password}
              id="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-dark" onClick={handleClick}>
              Sign in
            </button>
          <p className="mt-5 mb-3 text-muted">&copy;2022</p>
        </form>
      </main>
    </div>
    </>
  );
};

export default Login;
