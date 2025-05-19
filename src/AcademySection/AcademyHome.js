import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.png';


const AcademyHome = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <div>
            <header className="glass-header">
                <div className="logo">
                    <img src={logo} alt="Logo" />

                </div>


                <nav id="nav-links" className={menuOpen ? 'nav-open' : ''}>
                    <a href="./">Home</a>
                    <a href="/about">About us</a>
                    <a href="/services">Services</a>
                    <a href="#">Academy</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Blog</a>
                    <a href="#" className="btn neon" id='ready'>
                        Get Started
                    </a>
                </nav>
                <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </header>

        </div>
    )
}

export default AcademyHome
