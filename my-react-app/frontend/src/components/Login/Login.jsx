import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-image"></div>
      <div className="login-form-container">
        <div className="login-form-box">
          <Link to="/" className="login-logo-tag">
            Goodlyfe
          </Link>
          <h2>Welcome Back</h2>

          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit" className="login-btn">
              LOG IN
            </button>
          </form>

          <div className="login-footer">
            <a href="#">Forgot Password?</a>
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;