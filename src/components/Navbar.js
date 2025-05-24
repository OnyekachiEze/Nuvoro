import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src="./logo.png" alt="Logo" />

                </div>

                <ul className="navbar-links-desktop">
                    <li><a href="./">Home</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/academy">Academy</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>

                <button className="get-started-btn-desktop"><a href="/login">Get Started</a></button>

                <div className="navbar-toggle" onClick={toggleMenu}>
                    <div className="bar" />
                    <div className="bar" />
                    <div className="bar" />
                </div>
            </div>

            {/* Fullscreen overlay for mobile */}
            <div className={`navbar-overlay ${menuOpen ? "open" : ""}`}>
                <div className="close-btn" onClick={toggleMenu}>×</div>
                <div className="navbar-links-mobile">
                    <a href="./">Home</a>
                    <a href="/about">About us</a>
                    <a href="/services">Services</a>
                    <a href="/academy">Academy</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/blog">Blog</a>
                    <button className="get-started-btn">Get Started</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
