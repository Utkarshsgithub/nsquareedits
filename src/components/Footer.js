import React from 'react'
import "../styles/footer.css";

export default function Footer() {
  
  return (
    
    <footer id="contact">
      
      <section className="footer-content">
        
        <h1 className='one'>NSquare Edits</h1>
        

        <div className="too">
          
          <strong>Reach out to us</strong>
          
          <p><a href="mailto:nishkarshagarwal@gmail.com" >nishkarshagarwal@gmail.com</a></p>
          
          <p><a href="tel:+919664490564" >+91 3044708193</a></p>
          
        </div>
        

        <div className="three">
          
          <strong>Socials</strong>
          
          <p><a href="https://instagram.com" >Instagram</a></p>
          
          <p><a href="https://youtube.com" >YouTube</a></p>
          
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
