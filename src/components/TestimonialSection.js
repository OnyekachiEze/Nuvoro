import React from "react";
import { Play } from "lucide-react";

const testimonials = [
  { id: 1, name: "Student 1", img: "/testimonial1.png" },
  { id: 2, name: "Student 2", img: "/testimonial2.png" },
  { id: 3, name: "Main", img: "/testimonial3.png", isMain: true },
  { id: 4, name: "Student 3", img: "/testimonial4.png" },
  { id: 5, name: "Student 4", img: "/testimonial5.png" },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">Testimonial</h2>
      <div className="testimonial-container">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className={`testimonial-card ${item.isMain ? "testimonial-main" : ""}`}
            style={{ width: item.isMain ? "220px" : "160px", height: item.isMain ? "320px" : "280px" }}
          >
            <div className={`testimonial-inner ${item.isMain ? "main-inner" : ""}`}>
              <img
                src={item.img}
                alt={item.name}
                className={`testimonial-img ${item.isMain ? "main-img" : "side-img"}`}
              />
              {item.isMain && (
                <div className="play-overlay">
                  <button className="play-button">
                    <Play className="play-icon" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
