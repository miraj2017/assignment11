import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import "./Login.css";

const Login = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  const { signInUsingGoogle, setLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "./home";

  const handleSignInUsingGoogle = () => {
    signInUsingGoogle()
      .then((res) => {
        history.push(redirect_uri);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <form className="form" onClick={handleForm}>
        <h2>Login Here</h2>
        <input type="text" placeholder="Your Email" /> <br />
        <input type="password" placeholder="Password" /> <br />
        <button>Login</button> <br />
        <br />
        <br />
        <button onClick={handleSignInUsingGoogle}>Google Sign In</button> <br />
        <br />
        <small>new here?</small> <Link to="/register">Register</Link>
      </form>
    </div>
  );
};

export default Login;
