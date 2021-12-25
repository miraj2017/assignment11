import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <form className="form">
        <h2>Register Please</h2>
        <input type="text" placeholder="Your Email" /> <br />
        <input type="password" placeholder="Password" /> <br />
        <button>Register</button> <br /> <br />
        <small>already registered? </small>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default Register;
