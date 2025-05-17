import React, { useState } from 'react';
import logo from '../assets/logo.png';

const AboutHero = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <div>
            <div className="about-hero">
                <header className="glass-header">
                    <div className="logo">
                        <img src={logo} alt="Logo" />

                    </div>


                    <nav id="nav-links" className={menuOpen ? 'nav-open' : ''}>
                        <a href="/home">Home</a>
                        <a href="/about">About us</a>
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

                <section className="about-nuvoro">
                    <div className="about-content">
                        <h2>
                            About <span className="highlight">Nuvoro</span>
                        </h2>
                        <p>
                            Nuvoro is a visionary tech company <span className='span-text'> dedicated to delivering innovative software <br></br></span>
                            and digital <span className='span-text'> solutions that transform businesses.</span>
                        </p>
                    </div>
                </section>
            </div>


            <div className="whoWeAre-bg">
                <div className="container">
                    <div className="content-wrapper">
                        <div className="text-section">
                            <h2>Who we are</h2>
                            <p>
                                Nuvoro stands at the intersection of innovation and impact,
                                operating as both a forward-thinking technology company and a
                                premier academy for tech talent development. We don’t merely build
                                software — we engineer possibilities. Our mission is rooted in a
                                deep passion for innovation, a relentless commitment to
                                excellence, and a vision to reshape the future through digital
                                transformation and knowledge empowerment.
                            </p>
                        </div>
                        <div className="image-section">
                            <img
                                src="/abt1.png"
                                alt="Group of five professionals standing and smiling in office, diverse team with confident expressions"
                            />
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default AboutHero
