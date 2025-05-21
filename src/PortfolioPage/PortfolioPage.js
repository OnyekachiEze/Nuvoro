import React, { useEffect, useRef } from 'react';

import PortfolioHome from './PortfolioHome'
import './Portfolio.css'


const industries = [
    {
        title: "Healthcare",
        description:
            "We craft intuitive, ironclad healthcare apps that put patients first—boosting engagement while simplifying care. Every solution is precision-built to your needs and rigorously compliant with HIPAA, GDPR, and global security standards.",
        icon: "../medical-heart_7638479.png",
    },
    {
        title: "Education",
        description:
            "At Nuvoro, we bridge innovation and learning by crafting cutting-edge EdTech solutions transforming education with intuitive platforms, immersive tools, and AI-powered personalization for tomorrow’s learners.",
        icon: "../study_7672539.png",
    },
    {
        title: "E-commerce",
        description:
            "Nuvoro crafts high-converting e-commerce experiences seamless mobile shopping, AI-driven personalization, and frictionless checkout flows that turn browsers into loyal buyers also connecting sellers with global audiences",
        icon: "../product_7572672.png",
    },
    {
        title: "Finance",
        description:
            "Nuvoro designs intelligent finance management tools transforming complex budgeting, investing, and expense tracking into effortless, seamless experiences that grows automate savings and slash debt boosting wealth and confidence.",
        icon: ".//dollar_10169917.png",
    },
];

const customers = [
    {
        logo: 'https://storage.googleapis.com/a1aa/image/c9514a66-b5da-41e8-0d24-d4035a1b9f13.jpg',
        company: 'ayTrackr',
        logoColor: 'text-blue-600',
        stars: 5,
        description: 'Paytrackr, a fintech company dedicated to financial solutions',
        userImg: 'https://storage.googleapis.com/a1aa/image/2f11f446-749c-4fdd-ddae-d550137950c7.jpg',
        quote:
            'Partnering with Nuvoro delivered exceptional results at every stage...',
        name: 'Julian Zino',
        role: 'CEO',
    },
    {
        logo: 'https://storage.googleapis.com/a1aa/image/2a8b804a-3758-4780-8676-9dbacb173777.jpg',
        company: 'Healtalk',
        logoColor: 'text-[#2c7a7b]',
        stars: 5,
        description: 'Healtalk, is a provider of IT solutions for the healthcare industry',
        userImg: 'https://storage.googleapis.com/a1aa/image/953a0ba1-8036-4431-50a9-6adf4fbb2c6b.jpg',
        quote:
            'When we needed enterprise-grade infrastructure for our mission-critical SMS platform...',
        name: 'Johnson Ebere',
        role: 'Tech Team Head',
    },
    {
        logo: 'https://storage.googleapis.com/a1aa/image/77b2870e-e645-4737-a8b8-9d59c28e17e5.jpg',
        company: 'bifirst',
        logoColor: 'text-black',
        stars: 5,
        description: 'Bifirst, a web development company major in e-commerce',
        userImg: 'https://storage.googleapis.com/a1aa/image/2f11f446-749c-4fdd-ddae-d550137950c7.jpg',
        quote:
            'Our company turned to ScienceSoft for infrastructure management...',
        name: 'Inyene Richard',
        role: 'Founder and CEO',
    },
];

const PortfolioPage = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        const scrollSpeed = 1; // pixels per frame
        let animationFrameId;

        const scroll = () => {
            if (scrollContainer) {
                scrollContainer.scrollLeft += scrollSpeed;
                if (
                    scrollContainer.scrollLeft + scrollContainer.clientWidth >=
                    scrollContainer.scrollWidth
                ) {
                    scrollContainer.scrollLeft = 0; // reset to beginning
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);


    return (
        <div>
            <PortfolioHome />
            <div className="industries-body">
                <div className="industries-container">
                    <h2 className="industries-title">Industries We Serve</h2>
                    <p className="industries-subtitle">
                        Whatever your industry, we’re here to understand your challenges and help you succeed.
                    </p>
                    <div className="industries-gridd">
                        {industries.map((item, index) => (
                            <div className="industry-card" key={index}>
                                <div className="industry-header">
                                    <img src={item.icon} alt={item.title} className="industry-icon" />
                                    <h3 className="industry-title">{item.title}</h3>
                                </div>
                                <p className="industry-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className="technology-section">
                <h2 className="section-title">Tech Stack</h2>
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

            <div className="satisfied-container">
                <h2 className="title">Our Satisfied Customers</h2>
                <div className="cards-scroll auto-scroll" ref={scrollRef}>
                    {customers.map((cust, idx) => (
                        <div className="card" key={idx}>
                            <div className="card-header">
                                <div className="card-logo">
                                    <img src={cust.logo} alt={cust.company} />
                                    <span className={`company ${cust.logoColor}`}>{cust.company}</span>
                                </div>
                                <div className="stars">
                                    {Array(cust.stars).fill(0).map((_, i) => (
                                        <i key={i} className="fas fa-star"></i>
                                    ))}
                                </div>
                            </div>
                            <p className="desc">
                                <strong>{cust.company}</strong>, {cust.description}
                            </p>
                            <div className="user">
                                <img src={cust.userImg} alt={cust.name} />
                            </div>
                            <p className="quote">
                                <i className="fas fa-quote-left"></i> {cust.quote}
                            </p>
                            <p className="name">{cust.name}</p>
                            <p className="role">{cust.role}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default PortfolioPage