import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.png';
import './Blog.css'



const BlogHome = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <div>

            <div className='blog-home'>

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

                <div className="nuvoro-blog">
                    <div className="hero-image-container">

                        <div className="hero-overlay">
                            <h1 className="hero-titleee">
                                Nuvoro Blog
                            </h1>
                            <p className="hero-subtitleee">
                                <span className="highlighttext">Bringing</span> You Insight On Latest <span className="highlighttext">Tech News</span>
                            </p>
                        </div>
                    </div>
                    <div className="category-bar">
                        <button className="category-btn">AI</button>
                        <button className="category-btn">Designs</button>
                        <button className="category-btn">Tech Learn</button>
                        <button className="category-btn">Tech News</button>
                    </div>
                </div>
            </div>


            <div className="tech-article">
                <div className="article-container">
                    <div className="article-content">
                        <img
                            src="/blog2.png"
                            alt="Man wearing VR headset sitting in a modern tech room with multiple computer monitors and ambient lighting"
                            className="article-image"
                            width={400}
                            height={250}
                        />
                        <div className="article-text">
                            <p>
                                Technology is evolving faster than ever, transforming the way we
                                work and live. In this dynamic landscape, it’s not just new tech
                                trends that are reshaping the future, but the very roles of IT
                                professionals themselves. According to{" "}
                                <a href="#" className="article-link">
                                    Gartner’s research on strategic technology trends
                                </a>
                                , the most influential innovations are expected to disrupt
                                industries and accelerate business success in the coming years.
                            </p>
                            <button type="button" className="read-more-btn">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="article-wrapper">
                <div className="article-card">
                    <img
                        src="/blog-robot.png"
                        alt="A futuristic robot with glowing blue lights working on a transparent digital interface with multiple screens in the background"
                        className="articcle-image"
                        width={800}
                        height={300}
                    />
                    <h2 className="articcle-title">
                        xAI says ‘unauthorized modification’ to Grok led to ‘white genocide’ content
                    </h2>
                    <p className="articcle-description">
                        xAI, the AI firm founded by Elon Musk, has said in a post, that an internal
                        breach led to its chatbot Grok, publishing unsolicited responses referencing
                        ‘white genocide in South Africa.’ The issue, which unfolded earlier this
                        week, saw Grok repeatedly bring about the topic into unrelated discussions
                        on the X platform, formerly Twitter, where the chatbot is integrated.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default BlogHome
