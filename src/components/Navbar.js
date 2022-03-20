import React from 'react'
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h1 className="logo">NSquare</h1>
        <ul className='remove-list-style'>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li className='mr-0'>Reviews</li>
        </ul>
    </nav>
  )
}
