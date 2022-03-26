import React from 'react'
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <section className="footer-content">
        <h1 className='one'>NSquare Edits</h1>

        <div className="too">
          <strong>Reach out to us</strong>
          <p><a href="mailto:nishkarshagarwal@gmail.com" >nishkarshagarwal@gmail.com</a></p>
        </div>

        <div className="three">
          <strong>Call us at</strong>
          <p><a href="tel:+919664490564" >+91 3044708193</a></p>
        </div>
      </section>

      <hr />

      <section className="footer-bottom-content">
        <p>© 2022-2023 NSquare Edits.</p>
        <p>All rights reserved.</p>
      </section>
    </footer>
  )
}
