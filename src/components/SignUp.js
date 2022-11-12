import React from "react";
import "./login.css";

const SignUp = () => {
  return (
    <div className="abc">
      <main className="form-signin w-100 m-auto">
        <form>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Full Name"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-dark" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy;2022</p>
        </form>
      </main>
    </div>
  );
};

export default SignUp;