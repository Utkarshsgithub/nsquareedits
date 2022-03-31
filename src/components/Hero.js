import React from "react";
import Navbar from "./Navbar";
import "../styles/hero.css";

export default function Hero() {

  return (

    <section className="hero">

      <div className="styled-text">

        <h1 id="st-1">Video</h1>

        <h1 id="st-2">Editing</h1>

        <h1 id="st-3">Video</h1>

        <h1 id="st-4">Editing</h1>

      </div>

      <Navbar />

      <div className="hero-content">

        <div className="hero-text">

          <div className="wrapper">

            <h1 style={{'lineHeight':'90px'}} className="static-text">We Edit Videos</h1>

          </div>

          <p>
            Helping Content Creators automate the demanding task of editing videos, in fast, high quality, and affordable manner.
          </p>

        </div>

      </div>

    </section>

  );

}
