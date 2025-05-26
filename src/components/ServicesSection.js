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

        <div className="servvices-grid">
          {/* Service Cards */}
          {servicesData.map((service, index) => (
            <div className="servvice-card" key={index}>
              <div className="carrd-header">
                <div className="title-section">
                  <div className="icon-container" dangerouslySetInnerHTML={{ __html: service.icon }} />
                  <h3 className="servvice-title">{service.title}</h3>
                </div>
              </div>
              <div className="carrd-content">{service.description}</div>
              <div className="carrd-footer">
                <button className="read-more-btn"><a href="/services" className="news-link3">Read More</a></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <main className="academy-container">
        {/* Text Section */}
        <section className="text-section">
          <p className="intro-text">Sharpen your tech skills with</p>
          <h1 className="tittle">Nuvoro Academy</h1>
          <p className="ddescription">
            Nuvoro Academy is a premier tech education initiative designed to equip aspiring developers and designers with in-demand skills through hands-on, industry-aligned training. Our bootcamp bridges the gap between talent and opportunity, empowering students to thrive in the digital economy.
          </p>
          <div className="button-container">
            <button className="read-more-btnn"><a href="/academy" className="news-link2">Read More</a></button>
            <button className="register-btn"><a href="/application" className="news-link3">Register</a></button>
          </div>
        </section>

        {/* Image Section */}
        <section className="image-section">
          <img
            alt="Person working on computer with code displayed on multiple monitors in a modern office setting"
            className="image"
            height="400"
            src="b93f16edb236ae35fda706f3a1b78a27.png"
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
      'From concept to deployment, Nuvoro provides end-to-end software development—helping you stay ahead in a competitive digital landscape',
    icon: `<svg class="servvice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>`,
  },
  {
    title: 'UI/UX Design',
    description:
      'With experienced designers, we bring your aspirations and imagination to reality, also beautify your project with style and functionality.',
    icon: `<svg class="servvice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>`,
  },
  {
    title: 'Tech Stack',
    description:
      'With experienced designers, we bring your aspirations and imagination to reality, also beautify your project with style and functionality.',
    icon: `<svg class="servvice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>`,
  },
  {
    title: 'Prototyping',
    description:
      'We transforms ideas into market-ready products through strategic prototyping, compelling branding, and data-driven product strategy.',
    icon: `<svg class="servvice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>`,
  },
  {
    title: 'Cloud Solution',
    description:
      'Nuvoro leverages a modern, robust tech stack designed for scalability, security, and performance. Our solutions are built on AWS, Azure, and Google Cloud',
    icon: `<svg class="servvice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>`,
  },
  {
    title: 'Tech Consult',
    description:
      'Novoro’s consultants work as an extension of your team, ensuring smarter investments, reduced risks, cost-efficient resource management and future IT ecosystems.',
    icon: `<svg class="servvice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>`,
  },
];

export default ServicesSection;
