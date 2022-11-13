import "./login.css";
import React from "react";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
    
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      toast.error("Credentials not proper", {
        position: "top-left",
        autoClose: 2000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else {
      const data = { name, email, password };

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          //always use this
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const check = await res.json();

      if (check.success) {
        toast.success("Thanks ,for registering with us", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setname("");
        setpassword("");
        
        setemail("");

        setTimeout(() => {
          navigate("/Login");
        }, 3000);
      } else {
        toast.error(check.error, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setname("");
        setpassword("");
       
        setemail("");
      }
    }
  };

  const onChange = (req) => {
    if (req.target.name === "name") {
      setname(req.target.value);
    } else if (req.target.name === "email") {
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
    <div className="abc">
      <main className="form-signin w-100 m-auto">
        <form method="post" onSubmit={handleClick}>
          <div className="form-floating">
          <input
                type="text"
                className="form-control"
                value={name}
                id="name"
                name="name"
                placeholder="Enter your name"
                onChange={onChange}
              />
            <label htmlFor="floatingInput">Name</label>
          </div>

          <div className="form-floating">
          <input
                type="email"
                className="form-control"
                value={email}
                id="email"
                name="email"
                placeholder="name@example.com"
                onChange={onChange}
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
              />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-dark" type="submit">
            Sign up
          </button>
          <br/>
          <p>Already a member ? <a href="/login" style={{color:"blue"}}><u>Sign In</u></a></p>
          <p className="mt-5 mb-3 text-muted">&copy;2022</p>
        </form>
      </main>
    </div>
    </>
  );
};

export default SignUp;