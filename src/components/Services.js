import React from "react";
import "../styles/services.css";
import yt from "../images/youtuber.png"
import head from "../images/vlogger.png"
import vlog from "../images/vlog.png"

export default function Services() {
  return (
    <section className="services">
      <h1 className="center">Our Services</h1>
      <p className="center" style={{'textAlign':'center'}}>We Specialize In Vlog And Gaming Videos Editing.</p>
      <div className="service-cards">
        <div className="service-card">
          <img src={yt} alt="vlog like a pro" />
          <h3>Videos</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div className="service-card">
          <img src={vlog} alt="" />
          <h3>Vlogs</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, quo!</p>
        </div>
        <div className="service-card">
          <img src={head} alt="" />
          <h3>Talking Heads</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, delectus.</p>
        </div>
      </div>
    </section>
  );
}
