import React from "react";
import "../styles/testimonials.css";

export default function Testimonials() {
  return (
    <section className="cr">
      <h1 className="center">Testimonials</h1>

      <div className="testimonial-section center">
        <div className="testimonial" id="t-1">
        <i class="fa-solid fa-chevron-left"></i>
          <div className="testimonial-content">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="NSquare Edits Client"
            />
            <h3>Robert Hanks</h3>
            <p>
              It was Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro eos facere laudantium officia labore impedit quibusdam
              magnam ipsum perspiciatis sint!
            </p>
          </div>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
}
