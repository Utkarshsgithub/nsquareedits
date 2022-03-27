import React from 'react'
import "../styles/about.css";

export default function About() {
  return (
    <section className='about center fd-col'>
        <h1 className='center'>Who We Are?</h1>
        <div className="about-section">
          <div className="about-text">
            <p>About</p>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
          </div>
          <img src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="nsquare edits" />
        </div>
    </section>
  )
}
