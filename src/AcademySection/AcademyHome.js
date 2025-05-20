import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion';
import './Academy.css';
import Navbar from '../components/Navbar';


const courses = [
    {
        title: 'Web Development',
        description: `Nuvoro Academy is designed to turn beginners into job-ready developers and elevate existing developers to professional-level`,
        learningPath: 'What You will Learn',
        bgColor: '#F9F9FF',
        bullets: [
            'Front-End Development: HTML, CSS, JavaScript, React.js',
            'Back-End Development: Node.js, Express, MongoDB',
            'Version Control: Git & GitHub',
            'API Integration & Deployment',
            'Responsive Design & Performance Optimization'
        ],
        image: 'https://storage.googleapis.com/a1aa/image/9c41cd3a-895b-4b17-788a-78a15c7bc629.jpg',
        dotColor: '#4B3F9B'
    },
    {
        title: 'UI/UX Design',
        description: `Our UI/UX Design course is crafted to transform creative thinkers into professional digital product designers.`,
        learningPath: 'What You will Learn',
        bgColor: '#E3DFFF',
        bullets: [
            'User Research & Journey Mapping',
            'Wireframing & Prototyping',
            'Visual Design Principles',
            'Interaction Design',
            'Usability Testing',
            'Design Systems & Accessibility'
        ],
        image: 'https://storage.googleapis.com/a1aa/image/fe5e38ad-26c6-4553-e170-e76788050a0b.jpg',
        dotColor: '#4B3F9B'
    },
    {
        title: 'Product Design',
        description: `Our Product Design course is tailored for designers ready to go beyond the basics and master the full spectrum of digital product creation from ideation to launch.`,
        learningPath: 'What You will Learn',
        bgColor: '#F0FCFE',
        bullets: [
            'Fundamentals of product design and user-centered thinking',
            'User research, personas development, and journey mapping',
            'Wireframing and interface design',
            'Usability testing and iterative design',
            'Collaboration with developers and stakeholders'
        ],
        image: 'https://storage.googleapis.com/a1aa/image/2c3d102a-cd5e-40a4-d31d-61f950d101c7.jpg',
        dotColor: '#FF6A3D'
    },
    {
        title: 'Cloud Computing',
        description: `This handles servers, storage, databases, networking, software, analytics, and intelligence over the internet to offer faster innovation and flexible resources`,
        learningPath: 'What You will Learn',
        bgColor: '#ADDAFF',
        bullets: [
            'IaaS (Infrastructure as a Service): Provides virtualized computing resources AWS EC2)',
            'PaaS (Platform as a Service): Offers tools and environments for app development',
            'SaaS (Software as a Service): Delivers software applications over the internet',
            'CI/CD, Infrastructure as Code (IaC), monitoring, and scaling',
            'Cloud Architecture & Infrastructure'
        ],
        image: 'https://storage.googleapis.com/a1aa/image/2c3d102a-cd5e-40a4-d31d-61f950d101c7.jpg',
        dotColor: '#0064DE'
    },

];

const facilities = [
    {
        title: 'Learning Space',
        description:
            "Prioritizing our students' comfort, we provide a modern learning space, whiteboard & 80\" TV screen.",
        image: '../Group1.png',
    },
    {
        title: 'High Speed Internet',
        description:
            'Fast, reliable connectivity ensuring uninterrupted access to cloud tools and online resources.',
        image: '../Vector.png',
    },
    {
        title: 'High Performing Laptop',
        description:
            'We make provision for Laptops to all students for coding and design work.',
        image: '../Group 17.png',
    },
];


const testimonials = [
    {
        name: 'Veronica',
        role: 'UI/UX Designer',
        image: '/student1.png',
        text: `Studying UI/UX at Nuvoro has been transformative—expert instructors, hands-on projects, and a collaborative environment made learning engaging and practical. The program’s real-world focus and constructive feedback significantly boosted my design skills.`
    },
    {
        name: 'Charles',
        role: 'Full Stack Developer',
        image: '/student2.png',
        text: `Studying Full Stack Development at Nuvoro has been a game-changer for me! The curriculum is hands-on and up to-date, and the instructors provide incredible support. I’ve gained real-world skills that have already boosted my confidence and career prospects.`
    },
    {
        name: 'Victor',
        role: 'Cloud Computing',
        image: '/student3.png',
        text: `Transitioning from banking to cloud engineering seemed daunting, but Nuvoro made it seamless with their structured curriculum and hands-on training. The instructors were incredibly supportive, breaking down complex concepts into digestible lessons.`
    },
    {
        name: 'Ikenna',
        role: 'Back End Developer',
        image: '/student4.png',
        text: `Enrolling in Nuvoro’s Backend Development program has been transformative. The practical curriculum, expert instructors, and industry-aligned projects have equipped me with in-demand skills and confidence. I recommend Nuvoro Academy.`
    },
    {
        name: 'Deborah',
        role: 'UI/UX Designer',
        image: '/student5.png',
        text: `I started Nuvoro with zero knowledge about what I am transitioning into and not being sure about my decision. Now, based on what I’ve learnt I am taking things head on with UI Designing. I mean from not knowing what whitespace was to knowing my left and right in design.`
    },
    {
        name: 'Blessing',
        role: 'Product Design',
        image: '/student6.png',
        text: `Studying Product Design at Nuvoro has been a transformative experience. The hands-on projects, expert mentorship, and industry-relevant curriculum have sharpened my skills and creativity. I highly recommend Nuvoro to anyone serious about excelling in product design.`
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: 'easeOut',
        }
    })
};


const AcademyHome = () => {

    const handlePlayClick = () => {
        alert('Play video clicked!');
    };


    return (
        <div>
            <div className="academy-hero">
                <Navbar />

                <div className="welcome-container">
                    <div className="welcome-box-container">
                        <img
                            src="academy.png"
                            alt="Group of seven diverse people smiling and raising hands"
                            className="welcome-hero"
                        />

                        <div className="welcome-box">
                            <div className="welcome-content">


                                <h1 className="welcome-title"> Welcome</h1>
                                <p className="welcome-subtitle">to</p>
                                <p className="welcome-welcome">Nuvoro Academy</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <main className="nuvoro-container">
                <h1 className="nuvoro-title">Nuvoro Academy</h1>
                <p className="nuvoro-subtitle">
                    Bridging the Gap Between Talent and Innovation
                </p>
                <p className="nuvoro-description">
                    At Nuvoro Academy, we empower the next generation of tech leaders by
                    transforming theoretical knowledge into real-world expertise. Born from
                    Nuvoro’s mission to drive digital transformation, our academy equips
                    students and professionals with cutting-edge skills in software
                    development, UI/UX design, cloud computing, AI/ML, and product
                    strategy—preparing them to thrive in a fast-evolving tech landscape.
                </p>

                <h2 className="nuvoro-why-heading">Why Nuvoro Academy?</h2>

                <div className="nuvoro-grid">
                    <div className="nuvoro-card">
                        <p className="nuvoro-point">
                            <span className="nuvoro-badge">✅</span>
                            <strong>Industry-Aligned Curriculum</strong> – Learn from experts
                            actively building solutions in e-commerce, healthtech, fintech, and
                            edtech.
                        </p>
                        <p className="nuvoro-point">
                            <span className="nuvoro-badge">✅</span>
                            <strong>Hands-On Training</strong> – Work on live projects, from
                            prototyping to deployment, using modern tools like React, Flutter,
                            Python, and AWS.
                        </p>
                    </div>

                    <div className="nuvoro-card">
                        <p className="nuvoro-point">
                            <span className="nuvoro-badge">✅</span>
                            <strong>Career Acceleration</strong> – Gain mentorship,
                            certifications, and direct pathways to roles at Nuvoro and partner
                            companies.
                        </p>
                        <p className="nuvoro-point">
                            <span className="nuvoro-badge">✅</span>
                            <strong>Future-Ready Skills</strong> – Master AI integration, secure
                            architecture, and scalable development—the pillars of tomorrow’s
                            tech.
                        </p>
                    </div>
                </div>
            </main>

            <div className="about-container">
                <div className="about-text">
                    <h2 className="about-heading">
                        More about <br /> Nuvoro Academy
                    </h2>
                    <p className="about-paragraph">
                        Nuvoro Academy is the learning arm of Nuvoro — a leading technology
                        company committed to excellence in both innovation and education.
                        Founded with the belief that great technology starts with great
                        people, Nuvoro Academy is designed to bridge the gap between talent
                        and opportunity in the digital economy.
                    </p>
                </div>
                <div className="about-image-container">
                    <img
                        src="/aca1.png"
                        alt="Two men discussing and pointing at a large screen filled with colorful programming code"
                        className="about-image"
                    />
                </div>
            </div>

            <div className="video-section">
                <div className="video-container">
                    <div className="image-wrapper">
                        <img
                            src="./academyvid.png"
                            alt="Classroom with diverse students smiling and using laptops, sitting in rows with a bright window in the background"
                            className="video-image"
                            width="800"
                            height="400"
                        />
                        <button
                            aria-label="Play video"
                            className="play-button"
                        >
                            <i className="fas fa-play"></i>
                        </button>
                    </div>
                    <p className="video-description">
                        Over the years, Nuvoro has successfully exposed tech enthusiasts to the beautiful world of digital innovation through structured, industry-driven learning paths. At Nuvoro Academy, we cater to all skill levels—whether you’re taking your first steps in tech or refining advanced expertise.
                    </p>
                </div>
            </div>



            <main className="learning-container">
                <h2 className="section-titlee">Our Learning Track</h2>
                <p className="section-subtitlee">
                    To accommodate learners of all levels, our curriculum is divided into three progressive tracks
                </p>

                <section className="track-section">
                    {/* Beginner Class */}
                    <article className="track-card">
                        <h3 className="track-header">Beginner Class</h3>
                        <p className="track-taglinee">Start your journey with solid foundations.</p>
                        <p>Learn core programming concepts in Python, JavaScript, or Dart</p>
                        <p>Build your first web pages (HTML/ CSS) and basic mobile apps</p>
                        <p>Introduction to product design/ UIUX design with</p>
                        <p>Product Designing</p>
                        <div className="track-footer" />
                    </article>

                    {/* Intermediate Class */}
                    <article className="track-card">
                        <h3 className="track-header">Intermediate Class</h3>
                        <p className="track-taglinee">Build on the basics and take your skills to the next level.</p>
                        <p>Structured learning: organized curriculum, bite-sized lessons and Measurable growth.</p>
                        <p>Expert guidance: 1-on-1 support real-world insights, avoid common pitfalls</p>
                        <p>Supportive community: Collaborative environment Group discussions</p>
                        <p>Feedback / networking opportunities</p>
                        <div className="track-footer" />
                    </article>

                    {/* Advanced Class */}
                    <article className="track-card">
                        <h3 className="track-header">Advanced Class</h3>
                        <p className="track-taglinee">Ready to dominate the tech world?</p>
                        <p>Build projects that mirror real industry challenges</p>
                        <p>Get portfolio pieces that make recruiters stop scrolling</p>
                        <p>Acquire adequate knowledge and skills as you prepare for internship</p>
                        <p>Mastering production-grade tools</p>
                        <div className="track-footer" />
                    </article>
                </section>
            </main>


            <section className="admission-section">
                <h2 className="admission-title">Admission</h2>
                <p className="admission-subtitle">
                    Ready to move beyond tutorials and into real-world tech mastery? <br />
                    Nuvoro Academy is now accepting applications
                </p>

                <div className="admission-text">
                    <div>
                        <div className="admission-step">
                            <img src="./check-icon.png" alt="check" className="check-icon" />
                            <div>
                                <h4>Apply Online</h4>
                                <p>Decided on a course of your choice? quickly hit the apply button to proceed</p>
                            </div>
                        </div>

                        <div className="admission-step">
                            <img src="./check-icon.png" alt="check" className="check-icon" />
                            <div>
                                <h4>Assessment</h4>
                                <p>Nuvoro Academy assesses you through a basic aptitude evaluation and provides expert counseling</p>
                            </div>
                        </div>

                        <div className="admission-step">
                            <img src="./check-icon.png" alt="check" className="check-icon" />
                            <div>
                                <h4>Apply Online</h4>
                                <p>Decided on a course of your choice? quickly hit the apply button to proceed</p>
                            </div>
                        </div>
                        <button className="apply-button">Apply Now</button>

                    </div>

                    <div className="admission-image">
                        <img src="./addmission1.png" alt="Student applying online" />
                    </div>

                </div>


            </section>





            <section className="courses-container">
                <h2 className="section-title">Courses Offered</h2>
                <p className="section-subtitle">
                    Nuvoro Academy provides a range of specialized courses tailored to<br />
                    high-demand areas in tech:
                </p>
                <div className="course-grid">
                    {courses.map((course, index) => (
                        <article
                            className="course-card"
                            style={{ backgroundColor: course.bgColor }}
                            key={index}
                        >
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-description">{course.description}</p>
                            <p className="course-learningPath">{course.learningPath}</p>
                            <div className="course-content">
                                <ul className="course-list">
                                    {course.bullets.map((item, idx) => (
                                        <li className="course-item" key={idx}>
                                            <span
                                                className="dot"
                                                style={{ backgroundColor: course.dotColor }}
                                            ></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <img src={course.image} alt={`${course.title} illustration`} className="course-image" />
                            </div>
                        </article>
                    ))}
                </div>
            </section>


            <div className="facilities-section">
                <h2>Facilities</h2>
                <p className="subtitle">
                    Nuvoro Academy provides a range of specialized
                    <br />
                    courses tailored to high-demand areas in tech
                </p>
                <div className="facilities-cards">
                    {facilities.map((facility, index) => (
                        <div className="facility-card" key={index}>
                            <div className="image-container">
                                <img src={facility.image} alt={facility.title} />
                            </div>
                            <h3>{facility.title}</h3>
                            <p>{facility.description}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="cohort-container">
                <img
                    src="cohorst1.png"
                    alt="Group of five diverse people collaborating at a table with laptops in a modern office"
                    className="cohort-image"
                />
                <div className="cohort-content">
                    <div>
                        <h2 className="cohort-title">Upcoming Cohorts</h2>
                        <p className="cohort-subtitle">
                            Summer 2025 Cohort – Now Accepting Applications!
                        </p>
                        <p className="cohort-details">
                            Start Date: July 15, 2025
                            <br />
                            Duration: 12 Weeks (Flexible Weekend and Weekday Classes)
                            <br />
                            Location: Nuvoro HQ, Lagos (or hybrid options if available)
                        </p>
                    </div>
                    <button className="cohort-button" type="button">
                        View Course Available
                    </button>
                </div>
            </div>
            <div className="cohort-container">

                <div className="cohort-content" id='cohort2'>
                    <div>
                        <h2 className="cohort-title">Upcoming Events</h2>
                        <p className="cohort-subtitle">
                            Summer 2025 Events – Open for Registration!
                        </p>
                        <p className="cohort-details">
                            Tech for Good Hackathon – August 2025
                            <br />
                            Demo Day & Portfolio Showcase – September 2025
                            <br />
                            Guest Speaker Series – Ongoing (featuring industry leaders
                            from top tech firms)
                        </p>
                    </div>
                    <button className="cohort-button" type="button" id='cohort-btn'>
                        Register Now
                    </button>
                </div>

                <img
                    src="cohorst2.png"
                    alt="Group of five diverse people collaborating at a table with laptops in a modern office"
                    className="cohort-image2"
                />
            </div>


            <section className="testimonials-sectionn">
                <h2 className="section-titlee">What Our Students Say</h2>
                <div className="testimonials-gridd">
                    {testimonials.map((student, index) => (
                        <motion.article
                            className="testimonial-cardd"
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            custom={index}
                        >
                            <div className="student-info">
                                <img src={student.image} alt={`Portrait of ${student.name}`} className="student-image" />
                                <div>
                                    <h3 className="student-name">{student.name}</h3>
                                    <p className="student-role">{student.role}</p>
                                </div>
                            </div>
                            <p className="testimonial-textt">{student.text}</p>
                        </motion.article>
                    ))}
                </div>
            </section>

        </div >
    )
}

export default AcademyHome
