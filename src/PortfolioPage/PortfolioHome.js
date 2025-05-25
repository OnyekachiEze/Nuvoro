import React from 'react'
import Navbar from '../components/Navbar'

const PortfolioHome = () => {
    return (
        <div className="portfolio-home">

            <div className="banner-container">
                <Navbar />

                <div className="banner-content">
                    <h1 className="banner-title">Our Work Speaks for Us</h1>
                    {/* <p className="banner-description">
                        Explore some of our finest projects that reflect our commitment to
                        innovation, functionality, and elegance.
                    </p> */}
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
                            Behealthy approached Nuvoro to design a type of heath app, that would help track health status, keep track of medication and vaccination. The challenge was to create a seamless, visually appealing interface that aligns  with Behealthy brand identity while ensuring high usability and customer satisfaction. We are able to develop an application that provided:
                        </p>
                        <button className="portfolio-btn">Increase in medical follow-up </button>
                        <button className="portfolio-btn">Robust data security</button>
                        <button className="portfolio-btn">Instant doctor responds</button>
                        <p className="portfolio-tech-info">
                            <span className="portfolio-label">Core Tech:</span> Figma, Ruby on Rails, Node.js, SQL
                        </p>
                        {/* <a href="#" className="portfolio-view-more">
                            View More <i className="fas fa-chevron-right"></i>
                        </a> */}
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
                            Easy Expense Tracking
                        </button>
                        <button className="paytrackr-button">
                            Income Management
                        </button>
                        <button className="paytrackr-button">
                            Bill Reminders & Due Dates
                        </button>
                        <p className="paytrackr-tech">
                            <span className="font-semibold">Core Tech:</span> Figma, Ruby on Rails, Node.js, SQL
                        </p>

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

            <section className="portfolio-project-section">
                <div className="portfolio-image-wrapper">
                    <img
                        src="/Screenshot 2025-05-24 195820.png"
                        alt="Three mobile phone screens side by side showing a health app interface with doctor search, medicines list, and calories tracking"
                    />
                </div>
                <div className="portfolio-project-content">
                    <h2 className="portfolio-project-title">Wedress Web Page</h2>
                    <h3 className="portfolio-section-title">Overview</h3>
                    <p className="portfolio-description">
                        WeDress, a trendy online boutique known for its elegant dresses, had built a loyal following. But as sales grew, their website struggled to keep up. Slow load times, a clunky checkout process, and a dated design were costing them customers.
                        Determined to elevate their brand, WeDress reached out to NuVoro, renowned for crafting seamless e-commerce experiences.                    </p>
                    <button className="portfolio-btn">Niche Market Focus </button>
                    <button className="portfolio-btn">Secure Payment & Escrow Protection </button>
                    <button className="portfolio-btn">Buyer-Seller Chat & Reviews </button>
                    <p className="portfolio-tech-info">
                        <span className="portfolio-label">Core Tech:</span> Figma, Ruby on Rails, Node.js, SQL
                    </p>

                </div>
            </section>








        </div>
    )
}

export default PortfolioHome