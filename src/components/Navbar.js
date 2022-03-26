import React, { useState, useRef } from "react";
import "../styles/navbar.css";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  // let button = document.getElementById("button");

  let navbarMenu = useRef(null)
  const button = useRef(null)

  function menuClicked() {
    if (menuOpen === false) {
      button.current.classList.add("open");
      setMenuOpen(true);
      navbarMenu.current.style.transform = 'translateX(0)';
    } else {
      button.current.classList.remove("open");
      setMenuOpen(false);
      navbarMenu.current.style.transform = 'translateX(100%)';
    }
  }

  return (
    <nav className="navbar">
      <h1 className="logo">NSquare</h1>
      <ul id="ls-tabs" className="remove-list-style">
        <li>Home</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>About Us</li>
        <li>Careers</li>
        <li className='cta mr-0'>Edit My Videos</li>
      </ul>
      <div onClick={menuClicked} ref={button} id="button">
        <div id="bars"></div>
      </div>
      <div ref={navbarMenu} className="navbar-menu">
        <h1>Hello Bitch</h1>
      </div>
    </nav>
  );
}
