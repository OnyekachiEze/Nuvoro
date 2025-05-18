import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const AboutHero = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const images = [
        {
            src: '/story1.png',
            alt: 'Smiling woman at desk',
        },
        {
            src: '/story2.png',
            alt: 'Man with laptop',
        },
        {
            src: '/story3.png',
            alt: 'Woman with notebook',
        },
        {
            src: '/story4.png',
            alt: 'Man working on computer',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };
    return (
        <div>
            <div className="about-hero">
                <header className="glass-header">
                    <div className="logo">
                        <img src={logo} alt="Logo" />

                    </div>


                    <nav id="nav-links" className={menuOpen ? 'nav-open' : ''}>
                        <a href="./">Home</a>
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

            <section className="our-story-section">
                <div className="our-story-container">
                    <div className="our-story-images">
                        {images.map((img, index) => (
                            <div key={index} className="image-card floating-image">
                                <img src={img.src} alt={img.alt} className="image" />
                            </div>
                        ))}
                    </div>

                    <div className="our-story-text">
                        <h2 className="title">Our Story</h2>
                        <p className="description">
                            <strong>Inspired by Vision, Driven by Purpose</strong><br />
                            Nuvoro was born from a bold vision — inspired by the pioneering approach of Tekeet, a company renowned for bridging cutting-edge technology with deeply human-centered solutions. Taking that ethos to heart, we set out not just to follow in those footsteps, but to forge our own path — one that redefines the boundaries of what technology can achieve.
                        </p>
                    </div>
                </div>
            </section>

            <div className="mission-vision-container">
                <div className="card">
                    <div className="icon-title">
                        <div className="icon">
                            <i className="fas fa-hand-holding-heart"></i>
                        </div>
                        <h2 className="title">Our Mission</h2>
                    </div>
                    <p className="description">
                        We strive to engineer high-impact software while cultivating the next generation of tech talent with real-world skills, preparing them to lead and thrive in an ever-evolving digital world.
                    </p>
                </div>
                <div className="card">
                    <div className="icon-title">
                        <div className="icon">
                            <i className="fas fa-balance-scale"></i>
                        </div>
                        <h2 className="title">Our Vision</h2>
                    </div>
                    <p className="description">
                        To be a leading force in technology and education, empowering businesses and individuals through innovative digital solutions and transformative learning experiences that shape the future.
                    </p>
                </div>
            </div>






        </div>
    )
}

export default AboutHero
