import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.png';
import './Blog.css'
import Navbar from '../components/Navbar';



const BlogHome = () => {
    return (
        <div>

            <div className='blog-home'>

                <Navbar />
                <div className="hero-image-container">

                    <div className="hero-overlay">
                        <h1 className="hero-titleee">
                            Nuvoro Blog
                        </h1>
                        <p className="hero-subtitle">
                            Bringing you insight on latest tech news
                        </p>
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

            <main className="news-container">
                <article className="news-article">
                    <img
                        src="/blogtalk1.png"
                        alt="Three people sitting at a table working on a laptop in an office with a plant in the background"
                        className="news-image"
                        width="600"
                        height="400"
                    />
                    <h3 className="news-title">LlamaCon AI event hint</h3>
                    <p className="news-text">
                        Following{" "}
                        <a href="#" className="news-link">
                            LlamaCon
                        </a>
                        , our inaugural AI event that convened developers from around the
                        world, we hosted our first-ever LlamaCon Hackathon in San Francisco.
                        The event brought together 238 talented developers and innovators
                        from a pool of more than 600 registrants for a day of building. The
                        challenge was to create a demonstrable project using the Llama API,
                        Llama 4 Scout, or Llama 4 Maverick—or any combination of these
                        cutting-edge tools—within just 24 hours.
                    </p>
                    <button className="reead-more">Read More</button>
                </article>

                <article className="news-article">
                    <img
                        src="/blogtalk2.png"
                        alt="Man in a blue suit speaking at a conference with blue background and white text"
                        className="news-image"
                        width="600"
                        height="400"
                    />
                    <h3 className="news-title">Open AI, Microsoft to revamp partnership</h3>
                    <p className="news-text">
                        Microsoft has been one of the largest investors in OpenAI, having put
                        in more than $13 billion into OpenAI since 2019. Now, the tech titan
                        is reportedly considering changes to the existing contract to ensure
                        ongoing access to future AI models, even after the current agreement
                        expires in 2030. According to sources cited by the Financial Times,
                        Microsoft is open to giving up part of its equity stake in OpenAI’s
                        new for-profit subsidiary, now being restructured as a Public Benefit
                        Corporation (PBC).
                    </p>
                    <button className="reead-more">Read More</button>
                </article>
            </main>


            <div className="news-container">
                <div className="news-left">
                    <div className="news-item">
                        <img
                            src="/news1.png"
                            alt="Google logo white text on black background"
                            className="news-image"
                        />
                        <p className="news-description">
                            Google testing AI Mode on homepage, potentially replacing "I'm Feeling Lucky"
                        </p>
                    </div>
                    <div className="news-item">
                        <img
                            src="/news2.png"
                            alt="Red warning signs and blue keyboard on a digital screen representing hacking"
                            className="news-image"
                        />
                        <p className="news-description">
                            Spies hack high-value mail servers using an exploit from yesteryear
                        </p>
                    </div>
                </div>

                <div className="news-right">
                    <div className="news-right-item">
                        <img
                            src="/new3.png"
                            alt="Motorola Razr and Razr Ultra phones on red background"
                            className="thumb-image"
                        />
                        <div className="thumb-content">
                            <h3 className="thumb-title">
                                Motorola Razr and Razr Ultra (2025) review: Cool as hell, but too much AI
                            </h3>
                            <p className="thumb-text">
                                The new Razrs are sleek, capable, and overflowing with AI features.
                            </p>
                        </div>
                    </div>

                    <div className="news-right-item">
                        <img
                            src="/news4.png"
                            alt="Microsoft Surface Laptop Studio 2 on blue background"
                            className="thumb-image"
                        />
                        <div className="thumb-content">
                            <h3 className="thumb-title">
                                Microsoft’s Surface lineup reportedly losing another of its most interesting designs
                            </h3>
                            <p className="thumb-text">
                                Surface Laptop Studio 2 is reportedly no longer being manufactured.
                            </p>
                        </div>
                    </div>

                    <div className="news-right-item">
                        <img
                            src="/news5.png"
                            alt="Person with robotic limbs on blue background"
                            className="thumb-image"
                        />
                        <div className="thumb-content">
                            <h3 className="thumb-title">
                                6 Arms, 3 Thumbs: I Tested The Future of Robotic Limbs
                            </h3>
                            <p className="thumb-text">
                                Surface Laptop Studio 2 is reportedly no longer being manufactured.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="article-wrapper">
                <div className="article-card">
                    <img
                        src="/google.png"
                        alt="A futuristic robot with glowing blue lights working on a transparent digital interface with multiple screens in the background"
                        className="articccle-image"
                        width={800}
                        height={300}
                    />
                    <h2 className="articcle-title">
                        Google Gemini eases web surfing for users with vision and hearing issues
                        By Nadeem Sarwar Published May 15, 2025 11:12 PM

                    </h2>

                </div>
            </div>

        </div>
    )
}

export default BlogHome
