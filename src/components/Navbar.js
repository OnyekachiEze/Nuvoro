import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const togglePopup = () => {
        setPopupOpen(!popupOpen);
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

                <div className="get-started-wrapper">
                    <button className="get-started-btn-desktop" onClick={togglePopup}>Get Started</button>
                    {popupOpen && (
                        <div className="popup-menu">
                            <a href="/services" className="popup-link">🔧 Want our services</a>
                            <a href="/consultation" className="popup-link">💬 Consultation</a>
                        </div>
                    )}
                </div>

                <div className="navbar-toggle" onClick={toggleMenu}>
                    <div className="bar" />
                    <div className="bar" />
                    <div className="bar" />
                </div>
            </div>

            <div className={`navbar-overlay ${menuOpen ? "open" : ""}`}>
                <div className="close-btn" onClick={toggleMenu}>×</div>
                <div className="navbar-links-mobile">
                    <a href="./">Home</a>
                    <a href="/about">About us</a>
                    <a href="/services">Services</a>
                    <a href="/academy">Academy</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/blog">Blog</a>
                    <button className="get-started-btn" onClick={togglePopup}>Get Started</button>
                    {popupOpen && (
                        <div className="popup-menu-mobile">
                            <a href="/services" className="popup-link">🔧 Want our services</a>
                            <a href="/academy" className="popup-link">Academy</a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
