import React, { useState } from 'react';
import logo from '../assets/logo.png';


const HeroSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div>
            <section className="hero-section">
                <header className="glass-header">
                    <div className="logo">
                        <img src={logo} alt="Logo" />

                    </div>


                    <nav id="nav-links" className={menuOpen ? 'nav-open' : ''}>
                        <a href="#">Home</a>
                        <a href="#">About us</a>
                        <a href="#">Services</a>
                        <a href="#">Academy</a>
                        <a href="#">Portfolio</a>
                        <a href="#">Blog</a>
                        <a href="#" className="btn neon">
                            Get Started
                        </a>
                    </nav>
                    <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </header>

                <div
                    className="hero"
                    aria-label="Welcome to NUVORO, Innovation Meets Elegance in Software Solutions"
                >
                    <div className="hero-text fade-in">
                        <p>Welcome to NUVORO</p>
                        <h1>
                            <span className="line-1">Innovation Meets</span>
                            <br />
                            <span className="line-2">Elegance in</span>
                            <br />
                            <span className="line-3">Software Solutions</span>
                        </h1>
                        <div className="buttons">
                            <a href="#" className="btn neon">
                                Get Started
                            </a>
                            <a href="#" className="btn glass">
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </section>



            <div className="showcase-container">
                <div className="content-wrapper">
                    <div className="image-column">
                        <img src="img1.png" alt="Woman with headphones" className="profile-image" />

                        <div className="circle-graphic">
                            <div className="circle-border"></div>
                            <div className="dot dot-1"></div>
                            <div className="dot dot-2"></div>
                            <div className="dot dot-3"></div>
                            <div className="dot dot-4"></div>
                            <div className="dot dot-5"></div>

                            <div className="chart-visual">
                                <div className="chart-bar bar-1"></div>
                                <div className="chart-bar bar-2"></div>
                                <div className="chart-bar bar-3"></div>
                                <div className="chart-bar bar-4"></div>
                                <div className="chart-bar bar-5"></div>
                                <div className="chart-bar bar-6"></div>
                                <div className="chart-bar bar-7"></div>
                                <div className="chart-bar bar-8"></div>
                            </div>
                        </div>

                        <div className="stats-container">
                            <div className="stat-box">
                                <div className="stat-number" id="client-count">350+</div>
                                <div className="stat-label">Happy Clients</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number" id="project-count">502+</div>
                                <div className="stat-label">Projects Done</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number" id="partner-count">14+</div>
                                <div className="stat-label">Trusted Partners</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-column">
                        <p className="company-description">
                            Driven by a shared vision, a team of relentless innovators founded Nuvoro - a tech powerhouse
                            bridging imagination and digital excellence through app development, software engineering, and
                            full-stack solutions. Their elite UI/UX designers sculpted intuitive, captivating experiences, while
                            their engineers delivered scalable, future-proof systems for global clients.
                        </p>

                        <button className="read-more-btn">Read More</button>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default HeroSection;
