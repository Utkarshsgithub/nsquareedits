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

          <div className="wrapper">

            <h1 className="static-text">We Edit </h1>

            <ul className="dynamic-text">

              <li><h1> Videos</h1></li>

              {/* <li><h1> Vlogs</h1></li>
              <li><h1> Shorts</h1></li>
              <li><h1> Talking Head</h1></li> */}
              
            </ul>

          </div>

          <p>
            Helping Content Creators automate the demanding task of editing videos, in fast, high quality, and affordable manner.
          </p>

        </div>

      </div>

    </section>

  );

}
