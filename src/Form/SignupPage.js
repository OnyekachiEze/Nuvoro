import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./SignupPage.css";
import Navbar from "../components/Navbar";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agree: true,
  });

  const [error, setError] = useState("");


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (!formData.agree) {
      setError("Please agree to the Terms & Conditions");
      return;
    }

    setError(""); // Clear error on success
    console.log("Form Submitted", formData);
  };


  return (
    <div className="body">
      <Navbar />
      <div className="signup-container">
        <div className="left-panel">
          <h1>
            Unlock your<br />Potential with<br />Nuvoro Academy
          </h1>
          <p>Create an account and sign in to explore more on Nuvoro Academy</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <FaUser className="iicon" />

          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FaEnvelope className="iicon" />

          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <FaLock className="iicon" />

          </div>

          <div className="terms">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label>Agree to our Terms & Con</label>
          </div>
          {error && <div className="error-message">{error}</div>}

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>

  );
};

export default SignupPage;
