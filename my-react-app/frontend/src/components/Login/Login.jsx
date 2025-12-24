import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./login.css";

const Login = () => {
  //Стейт для зберігання введених даних
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //логіка з хука
  const { loginUser, loading, error } = useAuth();

  //Функція обробки відправки форми
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await loginUser(email, password);
    } catch (e) {
        console.error("Помилка входу");
    }
  };

  return (
    <div className="login-page">
      <div className="login-image"></div>
      <div className="login-form-container">
        <div className="login-form-box">
          <Link to="/" className="login-logo-tag">
            Goodlyfe
          </Link>
          <h2>Welcome Back</h2>

          {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "LOADING..." : "LOG IN"}
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