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
                        <h2>Cloud<br />Integration</h2>
                        <p>
                            Connecting your disparate systems—whether cloud-based, on-premises, or hybrid—into a cohesive, automated ecosystem.                        </p>
                        <ul>
                            <li>iPaaS Power, API-First Architecture</li>
                            <li>Leverage cloud elasticity to handle spikes in demand</li>
                            <li>Connect CRM (Salesforce), ERP (SAP), databases</li>
                            <li>Cloud-Native (AWS/Azure/GCP)</li>
                        </ul>
                    </div>

                    <div className="scroll-service-cardd uiux">
                        <h2>Prototyping<br />and Branding</h2>
                        <p>
                            Great products aren’t built by chance—they’re crafted through strategic prototyping  and powerful branding.
                        </p>
                        <ul>
                            <li>Figma, Adobe XD, Proto.io, Framer</li>
                            <li>Canva, Adobe Illustrator, Looka</li>
                            <li>Test concepts before full development. </li>
                            <li>Ensures product-market fit before launch.</li>
                            <li>Tests both functionality and emotional appeal.</li>

                        </ul>
                    </div>

                    <div className="scroll-service-cardd software">
                        <h2>Web / App<br />Development</h2>
                        <p>
                            We craft high-performance, secure, and scalable web solutions tailored to your business needs.
                        </p>
                        <ul>
                            <li>Frontend: Modern frameworks like React, Vue.js, and Next.js for lightning-fast, responsive UIs.</li>
                            <li>Backend: Robust Node.js, Python (Django), and PHP (Laravel) architectures. </li>
                            <li>Databases: Optimized Postgre</li>

                        </ul>
                    </div>


                    <div className="scroll-service-cardd uiux">
                        <h2>Product<br />Strategy</h2>
                        <p>
                            Outsourced approach where businesses leverage expert consultants or agencies to define, plan, and execute a winning product roadmap without building an in-house strategy team.
                        </p>
                        <ul>
                            <li>Tool: Miro, Notion, Aha!, SimilarWeb</li>
                            <li> Performance Tracking</li>
                            <li>Research & Validation</li>
                            <li>Execution & Collaboration.</li>
                            <li></li>

                        </ul>
                    </div>


                    <div className="scroll-service-cardd software">
                        <h2>Development<br />Operations</h2>
                        <p>
                            We integrate DevOps practices into your workflow to streamline development, enhance collaboration, and deliver high-quality software faster and more reliably.
                        </p>
                        <ul>
                            <li>Tool: Jenkins, GitHub Actions, GitLab CI/CD
                                Terraform, Ansible, AWS CloudFormation</li>
                            <li>DevOps Assessment & Strategy</li>
                            <li>CI/CD Pipeline Implementation</li>
                            <li>Cloud Migration & Optimization</li>

                        </ul>
                    </div>


                    <div className="scroll-service-cardd uiux">
                        <h2>Architecture<br />Review </h2>
                        <p>
                            We offer Architecture Review Services to ensure your software, cloud, or infrastructure design is scalable, secure, and cost-efficient—before you build or scale.
                        </p>
                        <ul>
                            <li>Lucidchart, AWS Cost Explorer, Azure Cost Management, Azure Advisor</li>
                            <li>Cloud Architecture Review</li>
                            <li>Microservices & Kubernetes Assessment</li>
                            <li>Disaster Recovery (DR) Review</li>

                        </ul>
                    </div>


                    <div className="scroll-service-cardd software">
                        <h2>Consulting <br />and Support</h2>
                        <p>
                            At Nuvoro, we provide tailored consultation and dedicated support to ensure your technology initiatives succeed from planning to execution and beyond.
                        </p>
                        <ul>
                            <li>Strategic Tech Advisory</li>
                            <li>Solution Design & Architecture</li>
                            <li>Implementation Guidance</li>
                            <li>24/7 Monitoring & Incident Response</li>
                            <li>Bug Fixes & Troubleshooting</li>

                        </ul>
                    </div>

                    <div className="scroll-service-cardd uiux">
                        <h2>Product<br />Design</h2>
                        <p>
                            Nuvoro combines user-centered design with cutting-edge technology to craft intuitive, engaging, and scalable digital products.
                        </p>
                        <ul>
                            <li>Tools: Figma, Adobe XD, Framer Balsamiq, Whimsical, ZeroHeight, Storybook</li>
                            <li>Scalable component libraries for brands.</li>
                            <li>Improve existing products with data-driven updates.</li>
                            <li>Dentify pain points in current user journeys.</li>

                        </ul>
                    </div>


                    <div className="scroll-service-cardd software">
                        <h2>Tech<br />Education</h2>
                        <p>
                            Nuvoro Academy is a cutting-edge learning platform designed to equip professionals and businesses with in-demand tech skills through hands-on, industry-aligned training.
                        </p>
                        <ul>
                            <li>Industry-Driven Curriculum Courses in UIUX  DevOps, Cloud, Product Design, and more.</li>
                            <li>Learn by Doing  real-world projects, labs, and case studies.</li>
                            <li>Self-paced or instructor-led programs. Certification & Career Support.</li>

                        </ul>
                    </div>

                    <div className="scroll-service-cardd uiux">
                        <h2>Testing and<br /> Quality Assurance</h2>
                        <p>
                            Ensure software is reliable, secure, and user-friendly by systematically identifying and fixing defects before release.                        </p>
                        <ul>
                            <li>Tools: Jira, TestRail, qTest, Selenium Appium, Espresso (Android), XCUITest (iOS)</li>
                            <li>Unit Testing: Developer-level such as, Jest, JUnit.</li>
                            <li>Performance: Load, stress, scalability – JMeter, Gatling</li>

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