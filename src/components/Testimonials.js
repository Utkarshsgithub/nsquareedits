import React from "react";
import "../styles/testimonials.css";

export default function Testimonials() {

  return (
    <section className="cr">
      <h1 className="center">Testimonials</h1>

      <div className="testimonial-section center">
        <div className="testimonial" id="t-1">
        <i className="fa-solid fa-chevron-left"></i>
          <div className="testimonial-content">
            <img
              src={'https://avatars.githubusercontent.com/u/93197668?s=400&u=f18347d…&v=4'}
              alt="NSquare Edits Client"
            />
            <h3>{'Utkarsh Singh'}</h3>
            
            <p>
              {'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, inventore molestiae accusantium commodi veritatis.'}
            </p>
          </div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
}
