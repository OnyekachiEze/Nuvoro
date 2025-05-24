import React, { useState } from 'react';
import Navbar from './Navbar';


const HeroSection = () => {

    return (
        <div>
            <section className="home-hero-section">
                <Navbar />

                <div
                    className="home-hero"
                    aria-label="Welcome to NUVORO, Innovation Meets Elegance in Software Solutions"
                >
                    <div className="home-hero-text fade-in">
                        <h1>Welcome to NUVORO</h1>
                        <p>
                            Innovation Meets Elegance in Software Solutions and Tech Skills Development
                        </p>
                        {/* <div className="buttons">
                            <a href="#" className="btn neon">
                                Get Started
                            </a>
                            <a href="#" className="btn glass">
                                Login
                            </a>
                        </div> */}
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
                            Driven by a shared vision, a team of relentless innovators founded Nuvoro - a tech powerhouse bridging imagination and digital excellence through app development, software engineering, and full-stack solutions. Their elite UI/UX designers sculpted intuitive, captivating experiences, while their engineers delivered scalable, future-proof systems for global clients.
                        </p>

                        <button className="read-more-btn">Read More</button>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default HeroSection;
