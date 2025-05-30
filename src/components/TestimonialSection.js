import React from 'react';
// import './MarqueeTestimonials.css';

const testimonials = [
  {
    name: "John Doe",
    message: "This product changed my life!",
    image: "/testimonial1.png",
  },
  {
    name: "Jane Smith",
    message: "Excellent service and great value.",
    image: "/testimonial2.png",
  },
  {
    name: "Alex Johnson",
    message: "Highly recommended for everyone!",
    image: "/testimonial3.png",
  },
  {
    name: "Emily Wilson",
    message: "A truly seamless experience.",
    image: "/testimonial4.png",
  },
  {
    name: "Emily Wilson",
    message: "A truly seamless experience.",
    image: "/testimonial5.png",
  },
];

const Testimonialsection = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        <div className="track">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <img src={testimonial.image} alt={testimonial.name} className="testimmonial-img" />
              <div className="testimonial-text">
                <p>"{testimonial.message}"</p>
                <h4>- {testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonialsection;
