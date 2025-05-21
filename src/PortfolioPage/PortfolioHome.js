import React from 'react'
import Navbar from '../components/Navbar'

const PortfolioHome = () => {
    return (
        <div className="portfolio-home">
            <Navbar />

            <div className="banner-container">
                <div className="banner-content">
                    <h1 className="banner-title">Our Work Speaks for Us</h1>
                    <p className="banner-description">
                        Explore some of our finest projects that reflect our commitment to
                        innovation, functionality, and elegance.
                    </p>
                    <div className="banner-buttons">
                        <button className="btn-primary">Book a free Consultation</button>
                        <button className="btn-secondary">See More Project</button>
                    </div>
                </div>
            </div>

            <main className="portfolio-container">
                <h1 className="portfolio-heading">Successful Projects</h1>
                <section className="portfolio-project-section">
                    <div className="portfolio-image-wrapper">
                        <img
                            src="/portfolioPhone.png"
                            alt="Three mobile phone screens side by side showing a health app interface with doctor search, medicines list, and calories tracking"
                        />
                    </div>
                    <div className="portfolio-project-content">
                        <h2 className="portfolio-project-title">Behealthy Mobile App</h2>
                        <h3 className="portfolio-section-title">Overview</h3>
                        <p className="portfolio-description">
                            Behealthy approached Nuvoro to design a type of health app, that would help track health status, keep track of medication and vaccination. The challenge was to create a seamless, visually appealing interface that aligns with Behealthy brand identity while ensuring high usability and customer satisfaction.
                        </p>
                        <button className="portfolio-btn">50% decrease in missing medication</button>
                        <button className="portfolio-btn">50% reduction in missing appointments</button>
                        <p className="portfolio-tech-info">
                            <span className="portfolio-label">Core Tech:</span> Figma, Ruby on Rails, Node.js, SQL
                        </p>
                        <a href="#" className="portfolio-view-more">
                            View More <i className="fas fa-chevron-right"></i>
                        </a>
                    </div>
                </section>
            </main>


            <div className="paytrackr-body">
                <main className="paytrackr-container">
                    <section className="paytrackr-content">
                        <h1 className="paytrackr-title">Paytrackr Mobile App</h1>
                        <div>
                            <h2 className="paytrackr-subtitle">Overview</h2>
                            <p className="paytrackr-description">
                                PayTrackr is a cutting-edge personal finance app designed by Nuvoro to help users track expenses, optimize budgets, and save money effortlessly. By leveraging AI-driven insights and intuitive financial analytics, PayTrackr reminds customers on active subscriptions and recommends financial advices on subscribed apps as part of its financial goals.
                            </p>
                        </div>
                        <button className="paytrackr-button">
                            78% decrease in miscellaneous spending
                        </button>
                        <button className="paytrackr-button">
                            80% Increase in optimal savings
                        </button>
                        <p className="paytrackr-tech">
                            <span className="font-semibold">Core Tech:</span> Figma, Ruby on Rails, Node.js, SQL
                        </p>
                        <button className="paytrackr-viewmore">
                            View More  <i className="fas fa-chevron-right"></i>
                        </button>
                    </section>

                    <section className="paytrackr-image-wrapper">
                        <img
                            src="/phone1.png"
                            alt="Two mobile phones showing Paytrackr app screens with blue gradient background and diagonal lines"
                            className="paytrackr-image"
                        />
                    </section>
                </main>
            </div>








        </div>
    )
}

export default PortfolioHome