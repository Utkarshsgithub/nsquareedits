import React from "react";
import Navbar from "./Navbar";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="styled-text">
        <h1 id="st-1">Editing</h1>
        <h1 id="st-2">Editing</h1>
        <h1 id="st-3">Editing</h1>
        <h1 id="st-4">Editing</h1>
      </div>
      <Navbar />
      <div className="hero-content">
        <div className="hero-text">
          <h1>We Edit Videos</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem non
            nostrum inventore provident perferendis placeat dolorem fugit earum
            deleniti? Dicta!
          </p>
        </div>
      </div>
    </section>
  );
}
