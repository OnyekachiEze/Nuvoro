import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./SignupPage.css";
import "./LoginForm.css";
import Navbar from "../components/Navbar";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }

        setError("");
        console.log("Logged in", formData);
        // Handle actual login logic here
    };

    return (
        <div>
            <Navbar />
            <div className="login-container">
                <div className="left-panel">
                    <h1>
                        Unlock your<br />Potential with<br />Nuvoro Academy
                    </h1>
                    <p>Create an account and sign in to explore more on Nuvoro Academy</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
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
                            minLength="6"
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

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>

    );
};

export default LoginForm;
