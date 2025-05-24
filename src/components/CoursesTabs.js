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
                <h2 className="section-ttitle">Explore More</h2>
                <p className="seection-subtitle">Our Courses</p>

                <nav className="tabs-nav">
                    {tabData.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                            {activeTab === tab.id && <span className="tab-underline"></span>}
                        </button>
                    ))}
                </nav>

                <div className="tab-panel">
                    {activeTab === "uiux" && (
                        <div className="card-grid">
                            {/* Learning Track */}
                            <article className="card">
                                <h3 className="card-title">Learning Track</h3>
                                <img
                                    src="card1.png"
                                    alt="People in a tech meeting"
                                    className="card-image"
                                />
                                <p className="card-heading">
                                    Unlock Your Tech Potential with Nuvoro Academy
                                </p>
                                <p className="card-text">
                                    Whether you’re just starting or leveling up, our structured
                                    online/offline courses cater to every stage of your journey.
                                </p>
                            </article>

                            {/* Facilities */}
                            <article className="card">
                                <h3 className="card-title">Facilities</h3>
                                <img
                                    src="card2.png"
                                    alt="Group working in modern learning space"
                                    className="card-image"
                                />
                                <p className="card-heading">
                                    Nuvoro Learning Hub: Designed for Success
                                </p>
                                <p className="card-text">
                                    Boost your tech skills in our modern learning space, equipped
                                    with high-speed internet and provided laptops.
                                </p>
                            </article>

                            {/* Admission */}
                            <article className="card">
                                <h3 className="card-title">Admission</h3>
                                <img
                                    src="d188da345a1aa258f410cae6f82d4818.png"
                                    alt="Happy graduates"
                                    className="card-image"
                                />
                                <p className="card-heading">
                                    Easy, Simple and Friendly Admission Process
                                </p>
                                <p className="card-text">
                                    With just one click, Nuvoro opens up your path to the tech
                                    world also presenting virtual or actual class.
                                </p>
                            </article>
                        </div>
                    )}

                    {["fullstack", "product", "cloud", "viewmore"].includes(activeTab) && (
                        <div className="coming-soon">
                            {tabData.find((tab) => tab.id === activeTab)?.label} content coming soon.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CoursesTabs;
