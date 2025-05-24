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

const steps = [
    { icon: "📞", title: "Consultation" },
    { icon: "🧠", title: "Strategy & Planning" },
    { icon: "💻", title: "Design & Development" },
    { icon: "🧪", title: "Testing & Deployment" },
    { icon: "🚀", title: "Support & Scaling" },
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
                        <h2>Transforming Ideas into Powerful Digital Solutions</h2>
                        <p>
                            We offer premium software services and technical expertise to help
                            businesses grow, evolve, and lead in their industries.
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

            <div className="quote-section">
                <p className="quote-text">Interested in what we do?</p>
                <div className="quote-buttons">
                    <button className="btn primary">Get a Quote</button>
                    <button className="btn secondary">Book free Consultation</button>
                </div>
            </div>

            <div className="services-wrapperr">
                <div className="scroll-buttons">
                    <button onClick={scrollLeft}>&#8249;</button>
                    <button onClick={scrollRight}>&#8250;</button>
                </div>

                <div className="scroll-container" ref={scrollRef}>
                    <div className="scroll-service-cardd software">
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

                    <div className="scroll-service-cardd uiux">
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

                    <div className="scroll-service-cardd software">
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

                    <div className="scroll-service-cardd uiux">
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

            <div className="how-we-work">
                <div className="work-image">
                    <h2>How We Work</h2>

                    <img src="../f536ed6aab552b9e3b80aee479d954a0.png" alt="Team working together" />
                </div>
                <div className="work-steps">
                    <ul>
                        {steps.map((step, index) => (
                            <li key={index}>
                                <span className="icon">{step.icon}</span>
                                <span className="text">{step.title}</span>
                                {index !== steps.length - 1 && <span className="line"></span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default ServiceHome
