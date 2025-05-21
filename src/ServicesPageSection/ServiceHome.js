import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png';
import Navbar from '../components/Navbar';

const services = [
    "Software Development",
    "UI/UX Design",
    "Cloud Solutions",
    "Web, Mobile Development",
    "Prototyping & Branding",
    "Product Strategy",
    "Product Strategy",
    "Architecture Reviews",
    "Consulting & Support",
    "Product Design",
    "Tech Education",
    "Help Desk Service"
];


const ServiceHome = () => {


    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        if (inputValue.trim()) {
            console.log('User input:', inputValue);
            alert(`Searching for: ${inputValue}`);
            setInputValue('');
        }
    };

    // Services scroll
    const scrollRef = useRef(null);

    // Auto-scroll every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const container = scrollRef.current;
                const scrollAmount = container.offsetWidth;
                if (container.scrollLeft + scrollAmount >= container.scrollWidth) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: 'smooth' });
    };



    return (
        <div>
            <div className="services-hero">
                <Navbar />
                <section className="services-section">

                    <div className="text-area">
                        <h2>Our Services</h2>
                        <p>
                            Empowering businesses with transformative technology while cultivating future-ready talent
                            through hands-on, industry-aligned training.
                        </p>
                    </div>
                </section>




            </div>

            <section className="services-container">
                <div className="services-inner">
                    <h2 className="services-heading">Services We Offer</h2>
                    <p className="services-subheading">Empower businesses and build future-ready talent</p>
                    <div className="services-gridd">
                        {services.map((service, index) => (
                            <div

                                className="service-cardd"
                                key={index}
                                style={{ '--i': index }}
                                dangerouslySetInnerHTML={{
                                    __html: service.replace(' & ', '<br />& ').replace(' Development', '<br />Development').replace(' Design', '<br />Design')
                                }}
                            />
                        ))}

                    </div>
                </div>
            </section>

            <div className="button-input-container">
                <div className="button-input-box animate-slide-in">
                    <input
                        type="text"
                        placeholder="What can we help you with?"
                        className="button-input-field"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="button-input-btn" onClick={handleClick}>
                        Get Started
                    </button>
                </div>
            </div>

            <div className="services-wrapperr">
                <div className="scroll-buttons">
                    <button onClick={scrollLeft}>&#8249;</button>
                    <button onClick={scrollRight}>&#8250;</button>
                </div>

                <div className="scroll-container" ref={scrollRef}>
                    <div className="service-cardd software">
                        <h2>Software<br />Development</h2>
                        <p>
                            End-to-end custom software engineering with scalable architectures, rigorous testing, and compliance-ready solutions.
                        </p>
                        <ul>
                            <li><strong> Custom Solutions:</strong> ERP, CRM, workflow automation</li>
                            <li><strong> Tech Stack:</strong> Python, Java, .NET, Node.js</li>
                            <li><strong> QA Practices:</strong> TDD, automated testing</li>
                            <li><strong> Compliance:</strong> GDPR, HIPAA, SOC 2</li>
                        </ul>
                    </div>

                    <div className="service-cardd uiux">
                        <h2>UIUX<br />Design</h2>
                        <p>
                            Crafting intuitive, human-centered digital experiences that drive engagement and conversions.
                        </p>
                        <ul>
                            <li><strong>Tools:</strong> Figma, Sketch, Framer, Protopie</li>
                            <li><strong>Specializations:</strong></li>

                            <li>Micro-interactions & motion design</li>
                            <li>Voice/AR interface design</li>
                            <li>Enterprise dashboard UX</li>

                        </ul>
                    </div>

                    <div className="service-cardd software">
                        <h2>Software<br />Development</h2>
                        <p>
                            End-to-end custom software engineering with scalable architectures, rigorous testing, and compliance-ready solutions.
                        </p>
                        <ul>
                            <li><strong> Custom Solutions:</strong> ERP, CRM, workflow automation</li>
                            <li><strong> Tech Stack:</strong> Python, Java, .NET, Node.js</li>
                            <li><strong> QA Practices:</strong> TDD, automated testing</li>
                            <li><strong> Compliance:</strong> GDPR, HIPAA, SOC 2</li>
                        </ul>
                    </div>

                    <div className="service-cardd uiux">
                        <h2>UIUX<br />Design</h2>
                        <p>
                            Crafting intuitive, human-centered digital experiences that drive engagement and conversions.
                        </p>
                        <ul>
                            <li><strong>Tools:</strong> Figma, Sketch, Framer, Protopie</li>
                            <li><strong>Specializations:</strong></li>

                            <li>Micro-interactions & motion design</li>
                            <li>Voice/AR interface design</li>
                            <li>Enterprise dashboard UX</li>

                        </ul>
                    </div>
                </div>

                <div className="dots">
                    <span className="active-dot"></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </div>
    )
}

export default ServiceHome
