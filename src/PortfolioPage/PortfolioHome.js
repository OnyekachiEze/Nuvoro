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
                        <button className="btn-primary"><a href='https://wa.link/x64l2w'  style={{color: 'white', textDecoration: 'none'}}>Book a free Consultation</a></button>
                        <button className="btn-secondary"><a href='#projects'>See More Project</a> </button>
                    </div>
                </div>
            </div>

            <main className="portfolio-container" id='projects'>
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


             <section className="second-paytrackr-wrapper">
      <div className="second-paytrackr-text">
        <h2 className="second-title">Paytrackr Mobile App</h2>
        <h3 className="second-subtitle">Overview</h3>
        <p className="second-description">
          PayTrackr is a cutting-edge personal finance app designed by Nuvoro to help users track expenses,
          optimize budgets, and save money effortlessly. By leveraging AI-driven insights and intuitive financial
          analytics, PayTrackr reminds customers on active subscriptions and recommends financial advice on
          subscribed apps as part of its financial goals.
        </p>
        <ul className="second-features">
          <li>Easy Expense Tracking</li>
          <li>Income Management</li>
          <li>Bill Reminders & Due Dates</li>
        </ul>
        <p className="second-core-tech">
          <strong>Core Tech:</strong> Figma, Ruby on Rails, Node.js, SQL
        </p>
      </div>

      <div className="second-paytrackr-image">
        <img src="/phone1.png" alt="Paytrackr Mobile UI" />
      </div>
    </section>

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