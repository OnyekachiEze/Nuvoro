"use client";
import { useState } from "react";

const tabData = [
  { id: "uiux", label: "UI/UX Design" },
  { id: "fullstack", label: "Full Stack Dev" },
  { id: "product", label: "Product Design" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "viewmore", label: "View More" },
];

const CoursesTabs = () => {
  const [activeTab, setActiveTab] = useState("uiux");

  return (
    <section className="courses-section">
      <div className="courses-container">
        <h2 className="section-title">Explore More</h2>
        <p className="section-subtitle">Our Courses</p>

        <nav className="tabs-nav">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              {tab.label}
              {activeTab === tab.id && <span className="tab-underline"></span>}
            </button>
          ))}
        </nav>

        <div className="tab-panel" role="tabpanel">
          {activeTab === "uiux" && (
            <div className="card-grid">
              {/* UI/UX Design Cards */}
              <article className="card">
                <h3 className="card-title">Design User-Centered Interfaces</h3>
                <img
                  src="card1.png"
                  alt="People in a tech meeting"
                  className="card-image"
                />
                <p className="card-heading">
                  Learn to craft interfaces that prioritize usability
                </p>
                <p className="card-text">
                  Understand how thoughtful design choices directly enhance user satisfaction and retention across web and mobile platforms.
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">Master UX/UI & Prototyping</h3>
                <img
                  src="card2.png"
                  alt="Group working in modern learning space"
                  className="card-image"
                />
                <p className="card-heading">
                  Dive deep into user research, wireframing
                </p>
                <p className="card-text">
                  Build scalable design systems and workflows that align with modern development processes and deliver consistent user experiences.
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">Create Seamless Digital Experiences</h3>
                <img
                  src="d188da345a1aa258f410cae6f82d4818.png"
                  alt="Happy graduates"
                  className="card-image"
                />
                <p className="card-heading">
                 Explore the psychology of user interaction
                </p>
                <p className="card-text">
                  everage industry-standard tools like Figma and Adobe XD. Create responsive, visually compelling products that users love to use.
                </p>
              </article>
            </div>
          )}

          {activeTab === "fullstack" && (
            <div className="card-grid">
              {/* Full Stack Dev Cards */}
              <article className="card">
                <h3 className="card-title">Comprehensive Curriculum</h3>
                <img
                  src="d188da345a1aa258f410cae6f82d4818.png"
                  alt="Developers coding collaboratively"
                  className="card-image"
                />
                <p className="card-heading">
                  Master Frontend and Backend Development
                </p>
                <p className="card-text">
                  Dive deep into JavaScript, React, Node.js, databases, and API
                  design to build robust, scalable applications.
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">Real-World Projects</h3>
                <img
                  src="card2.png"
                  alt="Developers working on project"
                  className="card-image"
                />
                <p className="card-heading">
                  Build Your Portfolio with Hands-On Experience
                </p>
                <p className="card-text">
                  Work on client-style projects, from e-commerce sites to complex
                  dashboards, guided by industry mentors.
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">Career Support</h3>
                <img
                  src="card1.png"
                  alt="Career coaching session"
                  className="card-image"
                />
                <p className="card-heading">
                  Job Placement and Interview Preparation
                </p>
                <p className="card-text">
                  Get assistance with resume building, mock interviews, and direct
                  connections to tech companies.
                </p>
              </article>
            </div>
          )}

          {activeTab === "product" && (
            <div className="card-grid">
              {/* Product Design Cards */}
              <article className="card">
                <h3 className="card-title">Design Thinking</h3>
                <img
                  src="card2.png"
                  alt="Team brainstorming ideas"
                  className="card-image"
                />
                <p className="card-heading">Innovate with User-Centered Design</p>
                <p className="card-text">
                  Learn methodologies to create impactful, intuitive products that
                  solve real user problems.
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">Prototyping Tools</h3>
                <img
                  src="card1.png"
                  alt="Designer working on digital prototype"
                  className="card-image"
                />
                <p className="card-heading">
                  Master Figma, Sketch, and Other Industry Standards
                </p>
                <p className="card-text">
                  Quickly iterate and validate product ideas using interactive
                  prototypes.
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">Product Strategy</h3>
                <img
                  src="d188da345a1aa258f410cae6f82d4818.png"
                  alt="Team planning product roadmap"
                  className="card-image"
                />
                <p className="card-heading">
                  From Concept to Launch: Strategic Product Management
                </p>
                <p className="card-text">
                  Understand market research, roadmap planning, and stakeholder
                  management essentials.
                </p>
              </article>
            </div>
          )}

          {activeTab === "cloud" && (
            <div className="card-grid">
              {/* Cloud & DevOps Cards */}
              <article className="card">
                <h3 className="card-title">Cloud Fundamentals</h3>
                <img
                  src="d188da345a1aa258f410cae6f82d4818.png"
                  alt="Cloud infrastructure diagram"
                  className="card-image"
                />
                <p className="card-heading">AWS, Azure & Google Cloud Basics</p>
                <p className="card-text">
                  Learn core cloud concepts, services, and deployment models across
                  leading platforms.
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">DevOps Practices</h3>
                <img
                  src="card2.png"
                  alt="CI/CD pipeline illustration"
                  className="card-image"
                />
                <p className="card-heading">
                  Automate Infrastructure and Software Delivery
                </p>
                <p className="card-text">
                  Master CI/CD pipelines, containerization with Docker, and
                  orchestration with Kubernetes.
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">Security & Monitoring</h3>
                <img
                  src="card1.png"
                  alt="Security shield icon"
                  className="card-image"
                />
                <p className="card-heading">Secure, Monitor, and Optimize</p>
                <p className="card-text">
                  Implement cloud security best practices and set up monitoring and
                  alerting for uptime and performance.
                </p>
              </article>
            </div>
          )}

          {activeTab === "viewmore" && (
            <div className="card-grid">
              {/* View More Cards */}
              <article className="card">
                <h3 className="card-title">Data Science</h3>
                <img
                  src="card2.png"
                  alt="Data analytics and visualization"
                  className="card-image"
                />
                <p className="card-heading">
                  Dive into Data Analysis and Machine Learning
                </p>
                <p className="card-text">
                  Understand data wrangling, visualization, and predictive modeling
                  with Python and R.
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">Cybersecurity</h3>
                <img
                  src="card1.png"
                  alt="Cybersecurity concept"
                  className="card-image"
                />
                <p className="card-heading">Protect Digital Assets</p>
                <p className="card-text">
                  Learn ethical hacking, network defense, and incident response
                  strategies.
                </p>
              </article>

              <article className="card">
                <h3 className="card-title">Mobile Development</h3>
                <img
                  src="d188da345a1aa258f410cae6f82d4818.png"
                  alt="Mobile app development"
                  className="card-image"
                />
                <p className="card-heading">
                  Build Cross-Platform Mobile Apps
                </p>
                <p className="card-text">
                  Develop native and hybrid apps using React Native, Flutter, and
                  Swift.
                </p>
              </article>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoursesTabs;
