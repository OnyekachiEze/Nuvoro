import React, { useState } from 'react';

const ServicesSection = () => {
  return (
    <div>
    <div className="container">
      <div className="header">
        <h1>Services</h1>
        <p>
          Designed to offer cutting-edge, scalable, and user-focused digital solutions customized for your business.
        </p>
      </div>

      <div className="services-grid">
        {/* Service Cards */}
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="card-header">
              <div className="title-section">
                <div className="icon-container" dangerouslySetInnerHTML={{ __html: service.icon }} />
                <h3 className="service-title">{service.title}</h3>
              </div>
            </div>
            <div className="card-content">{service.description}</div>
            <div className="card-footer">
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>

        <main className="academy-container">
            {/* Text Section */}
            <section className="text-section">
                <p className="intro-text">Sharpen your tech skills with</p>
                <h1 className="title">Nuvoro Academy</h1>
                <p className="description">
                    Nuvoro Academy is a premier tech education initiative designed to equip aspiring developers and designers with in-demand skills through hands-on, industry-aligned training. Our bootcamp bridges the gap between talent and opportunity, empowering students to thrive in the digital economy.
                </p>
                <div className="button-container">
                    <button className="read-more-btnn">Read More</button>
                    <button className="register-btn">Register</button>
                </div>
            </section>

            {/* Image Section */}
            <section className="image-section">
                <img
                    alt="Person working on computer with code displayed on multiple monitors in a modern office setting"
                    className="image"
                    height="400"
                    src="img2.png"
                    width="600"
                />
            </section>
        </main>

    </div>
  );

  
};

const servicesData = [
  {
    title: 'Software Dev',
    description:
      'From concept to deployment, Nuvoro provides end-to-end software development expertise you rely on to create a competitive edge in the digital world.',
    icon: `<svg class="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>`,
  },
  {
    title: 'UI/UX Design',
    description:
      'With experienced designers, we bring your solutions and imagination to reality, also matching your product with right user experience and style.',
    icon: `<svg class="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>`,
  },
  {
    title: 'Tech Stack',
    description:
      'With experienced engineers, we bring your solutions and imagination to reality, also supporting your project with right and modern technology.',
    icon: `<svg class="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>`,
  },
  {
    title: 'Prototyping',
    description:
      'We help you develop and deliver ready products through iterative prototyping, comprising brainstorm, and data-driven approach to your needs.',
    icon: `<svg class="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>`,
  },
  {
    title: 'Cloud Solution',
    description:
      'We provide cloud infrastructure designed for scalability, security, and performance. Our solutions are built on AWS, Azure, and Google Cloud Platform.',
    icon: `<svg class="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>`,
  },
  {
    title: 'Tech Consult',
    description:
      'Receive strategic technology guidance from our team, ensuring complex deployments, reduced risks, cost-efficient resource management and future IT planning.',
    icon: `<svg class="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>`,
  },
];

export default ServicesSection;
