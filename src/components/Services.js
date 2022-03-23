import React from "react";
import "../styles/services.css";
import yt from "../images/youtube.png"

export default function Services() {
  return (
    <section className="services">
      <h1 className="center">Our Services</h1>
      <p className="center" style={{'textAlign':'center'}}>We Specialize In Vlog And Gaming Videos Editing.</p>
      <div className="service-cards">
        <div className="service-card">
          <img src={yt} alt="vlog like a pro image" />
          <h3>Edit Vlogs</h3>
          <p>service description Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="service-card">
          <img src="yt" alt="" />
          <h3>Game Like A Pro</h3>
          <p>service description Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="service-card">
          <img src="yt" alt="" />
          <h3>Teach Like A Pro</h3>
          <p>service description Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="service-card">
          <img src="yt" alt="" />
          <h3>Vlog Like A Pro</h3>
          <p>service description Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
}
