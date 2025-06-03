import React, { useEffect, useRef } from 'react';

import PortfolioHome from './PortfolioHome'
import Footer from '../components/Footer'
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
        logo: './Group 17 (1).png',
        logoColor: 'text-blue-600',
        stars: 5,
        description: 'Paytrackr, a fintech company dedicated to financial solutions',
        userImg: './a417fff5e7c94532c89384405c2f7071.png',
        quote:
            'Partnering with Nuvoro delivered exceptional results at every stage. Their expertise in financial technology  standards enabled us to build a robust, high-performance backend for our next-gen auto financial saving and tracking system for our customers.',
        name: 'Julian Zino',
        role: 'CEO',
    },
    {
        logo: './afcbc0d19732d4e7c62edac125763a9d.png',
        logoColor: 'text-[#2c7a7b]',
        stars: 5,
        description: 'Healtalk, is a provider of IT solutions for the healthcare industry',
        userImg: './8f23447418ff5e3e048ad43742eaf93a.png',
        quote:
            'When we needed enterprise-grade infrastructure for our mission-critical SMS platform, Nuvoro engineered a bulletproof AWS architecture—delivering 99.99% uptime and seamless scalability for millions of global notifications.',
        name: 'Johnson Ebere',
        role: 'Tech Team Head',
    },
    {
        logo: './Screenshot 2025-05-21 141913.png',
        logoColor: 'text-black',
        stars: 5,
        description: 'Bifirst, a web development company major in e-commerce',
        userImg: './a417fff5e7c94532c89384405c2f7071 (1).png',
        quote:
            'Our company turned to ScienceSoft for infrastructure management of the web application that we offer to our clients for sending SMS notifications. ScienceSoft’s team built a fault-tolerant and highly available AWS-based app infrastructure.',
        name: 'Inyene Richard',
        role: 'Founder and CEO',
    },
    {
        logo: './Group 17 (1).png',
        logoColor: 'text-blue-600',
        stars: 5,
        description: 'Paytrackr, a fintech company dedicated to financial solutions',
        userImg: './a417fff5e7c94532c89384405c2f7071.png',
        quote:
            'Partnering with Nuvoro delivered exceptional results at every stage. Their expertise in financial technology  standards enabled us to build a robust, high-performance backend for our next-gen auto financial saving and tracking system for our customers.',
        name: 'Julian Zino',
        role: 'CEO',
    },
    {
        logo: './afcbc0d19732d4e7c62edac125763a9d.png',
        logoColor: 'text-[#2c7a7b]',
        stars: 5,
        description: 'Healtalk, is a provider of IT solutions for the healthcare industry',
        userImg: './8f23447418ff5e3e048ad43742eaf93a.png',
        quote:
            'When we needed enterprise-grade infrastructure for our mission-critical SMS platform, Nuvoro engineered a bulletproof AWS architecture—delivering 99.99% uptime and seamless scalability for millions of global notifications.',
        name: 'Johnson Ebere',
        role: 'Tech Team Head',
    },

];

const PortfolioPage = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const container = scrollRef.current;
        let scrollX = 0;
        let animationFrameId;

        const step = () => {
            scrollX += 0.5; // Speed
            if (container) {
                container.scrollLeft = scrollX;
                if (scrollX >= container.scrollWidth / 2) {
                    scrollX = 0; // Reset scroll
                }
            }
            animationFrameId = requestAnimationFrame(step);
        };

        animationFrameId = requestAnimationFrame(step);
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
                <h2 className="tiitle">Our Satisfied Customers</h2>
                <div className="scrooll-wrapper" ref={scrollRef}>
                    <div className="scrooll-content">
                        {[...customers, ...customers].map((cust, idx) => (
                            <div className="ccaard" key={idx}>
                                <div className="cacard-header">
                                    <div className="cacard-logo">
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
                                    <span className='company-name'>{cust.company}</span> {cust.description}
                                </p>
                                <div className="user">
                                    <img src={cust.userImg} alt={cust.name} />
                                </div>
                                <div className="quote-box">
                                    <i className="fas fa-quote-left"></i> {cust.quote}
                                </div>

                                <p className="name">{cust.name}</p>
                                <p className="role">{cust.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="launch-container">
                <div className="launch-content">
                    <p className="launch-text">Have a project? Let’s make it happen</p>
                    <button className="launch-button"> <a href='https://wa.link/x64l2w'  style={{color: 'white', textDecoration: 'none'}}>Launch with us</a></button>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default PortfolioPage