import React from 'react'
import './ser.css'

const testimonials = [
  {
    name: "Rita",
    img: "/test1.png",
    bgColor: "#555ba1",
    textColor: "white",
    stars: 5,
    halfStar: false,
    text: "Nuvoro designed an incredible app for our band—sleek, user-friendly, and packed with cool features.",
  },
  {
    name: "Francis",
    img: "/test2.png",
    bgColor: "#d9d9d9",
    textColor: "#1e2541",
    stars: 5,
    halfStar: false,
    text: "Nuvoro designed an incredible app for our band—sleek, user-friendly, and packed with cool features.",
  },
  {
    name: "Rita",
    img: "/test1.png",
    bgColor: "#d9d9d9",
    textColor: "#1e2541",
    stars: 5,
    halfStar: false,
    text: "Nuvoro designed an incredible app for our band—sleek, user-friendly, and packed with cool features.",
  },
 
  {
    name: "Chidima",
    img: "/test3.png",
    bgColor: "#d9d9d9",
    textColor: "#1e2541",
    stars: 4,
    halfStar: true,
    text: "Nuvoro designed an incredible app for our band—sleek, user-friendly, and packed with cool features.",
  },
];


const Industries = () => {


    return (
        <div>
            <section className="industries-section">
                <h2 className="section-title">Industries Served</h2>
                <div className="industries-grid">
                    <div className="industry-card education">
                        <img
                            src="./industry1.png"
                            alt="Education"
                            className="industry-image true"
                        />
                        <div className="industry-content">
                            <h3>Education</h3>
                            <p>
                                Build secure, scalable tech skill through industry-aligned training
                                that drives innovation and professional growth.
                            </p>
                            <span className="arrow">↗</span>
                        </div>
                    </div>

                    <div className="vertical-stack">
                        <div className="industry-card healthcare">
                            <img
                                src="./industry2.png"
                                alt="Health Care"
                                className="industry-image"
                            />
                            <div className="industry-content">
                                <h3>Health Care</h3>
                                <p>
                                    Nuvoro delivers HIPAA-compliant health tech solutions for secure
                                    patient data management and telemedicine platforms.
                                </p>
                                <span className="arrow">↗</span>
                            </div>
                        </div>
                    </div>

                    <div className="vertical-stack">
                        <div className="industry-card ecommerce">
                            <img
                                src="./industry3.png"
                                alt="E-commerce"
                                className="industry-image"
                            />
                            <div className="industry-content">
                                <h3>E-commerce</h3>
                                <p>
                                    Nuvoro engineers high-conversion e-commerce applications with AI-powered personalization and seamless checkout flows.
                                </p>
                                <span className="arrow">↗</span>
                            </div>
                        </div>

                        <div className="industry-card finance">
                            <img
                                src="./industry4.png"
                                alt="Finance"
                                className="industry-image"
                            />
                            <div className="industry-content">
                                <h3>Finance</h3>
                                <p>
                                    We build fraud-proof fintech systems with blockchain-grade security and real-time transaction processing.
                                </p>
                                <span className="arrow">↗</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="nuvoro-container">
                <h2 className="nuvoro-title">What Makes Nuvoro Exceptional</h2>
                <p className="nuvoro-subtitle">We don’t just build solutions; we craft experiences.</p>

                <div className="nuvoro-box">
                    <div className="nuvoro-row">
                        <div className="nuvoro-label">Core Expertise</div>
                        <div className="nuvoro-content">
                            End-to-end custom software development, from ideation to deployment, with scalable web, mobile & cloud solutions.
                        </div>
                    </div>
                    <div className="nuvoro-row">
                        <div className="nuvoro-label">Design & Strategy</div>
                        <div className="nuvoro-content">
                            Human-centric UI/UX design, rapid prototyping, and data-driven product strategy to ensure market-fit and brand resonance.
                        </div>
                    </div>
                    <div className="nuvoro-row">
                        <div className="nuvoro-label">Advisory & Support</div>
                        <div className="nuvoro-content">
                            White-glove consulting, tech advisory, and architecture reviews to future-proof systems and optimize performance.
                        </div>
                    </div>
                    <div className="nuvoro-row no-border">
                        <div className="nuvoro-label">Legacy of Inspiration</div>
                        <div className="nuvoro-content">
                            Founded with the disruptive spirit of Tekeet, merging cutting-edge tech with actionable business transformation.
                        </div>
                    </div>
                </div>
            </div>


            <section className="technology-section">
                <h2 className="section-title">Technology we Use</h2>
                <div className='tech-grid'>
                    <div className="technology-image-wrapper">
                        <h1 className='tech-title'>Back End Languages</h1>
                        <img src="/code1.png" alt="Technology we use" className="tech-image" />
                    </div>
                    <div className="technology-image-wrapper">
                        <h1 className='tech-title'>Front End Languages</h1>
                        <img src="/code2.png" alt="Technology we use" className="tech-image" />
                    </div>
                </div>
                <div className='tech-grid'>
                    <div className="technology-image-wrapper">
                        <h1 className='tech-title'>Cloud Platform</h1>
                        <img src="/code3.png" alt="Technology we use" className="tech-image" />
                    </div>
                    <div className="technology-image-wrapper">
                        <h1 className='tech-title'>UI/UX Design</h1>
                        <img src="/code4.png" alt="Technology we use" className="tech-image" />
                    </div>
                    <div className="technology-image-wrapper">
                        <h1 className='tech-title'>Development Tool</h1>
                        <img src="/code5.png" alt="Technology we use" className="tech-image" />
                    </div>
                </div>
            </section>


            <section className="testimonials-container">
                <h2 className="section-title">Client Testimonials</h2>
                <div className="scrolling-wrapper">
                    {/* Duplicate the testimonials array twice for seamless infinite scroll */}
                    {[...testimonials, ...testimonials].map((test, i) => (
                        <article
                            key={i}
                            className="testimonial-card"
                            style={{ backgroundColor: test.bgColor }}
                        >
                            <div className="testimonial-header">
                                <img
                                    src={test.img}
                                    alt={`Portrait of ${test.name}`}
                                    className="testimonial-img"
                                />
                                <h3
                                    className="testimonial-name"
                                    style={{ color: test.textColor }}
                                >
                                    {test.name}
                                </h3>
                            </div>
                            <div className="testimonial-body">
                                <div className="quote-icon">❝</div>
                                <div className="stars">
                                    {Array.from({ length: test.stars }).map((_, idx) => (
                                        <i
                                            key={idx}
                                            className="fas fa-star star-yellow"
                                            aria-hidden="true"
                                        />
                                    ))}
                                    {test.halfStar && (
                                        <i
                                            className="fas fa-star-half-alt star-yellow"
                                            aria-hidden="true"
                                        />
                                    )}
                                </div>
                                <p className="testimonial-text">{test.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Industries
