import React, { useRef } from "react";
import "../styles/testimonials.css";

export default function Testimonials() {

  let id = useRef('1')
  let img = useRef(null)
  let name = useRef(null)
  let taarif = useRef(null)

  function nextTestimonial() {
    if (id === '1') {
      name.current.innerHTML = 'John Blake'
      img.current.src = "https://randomuser.me/api/portraits/men/57.jpg"
      taarif.current.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium eius doloremque assumenda pariatur? Voluptatem consectetur iusto!"
      id = '2'
    }
    if (id === '2') {
      name.current.innerHTML = 'HE HE HE HE'
      img.current.src = "https://randomuser.me/api/portraits/men/3.jpg"
      taarif.current.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium eius doloremque assumenda pariatur? Voluptatem consectetur iusto fugiat ratione atque minus quos ipsam fuga maiores tenetur odit magni eius tempora distinctio, obcaecati praesentium vero!"
      id = '3'
    }
    if (id === '3') {
      name.current.innerHTML = 'Utkarsh Singh'
      img.current.src = "https://avatars.githubusercontent.com/u/93197668?s=400&u=f18347d…&v=4"
      taarif.current.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, inventore molestiae accusantium commodi veritatis."
      id = '1'
    }
  } 

  function prevTestimonial() {
    return null
  }

  return (
    <section className="cr">
      <h1 className="center">Testimonials</h1>
      <div className="testimonial-section center">
        <div className="testimonial" id="t-1">
          <i className="fa-solid fa-chevron-left"></i>
          <div className="testimonial-content">
            <input value={1
            } type="hidden" className="id" />
            <img ref={img}
              src="https://avatars.githubusercontent.com/u/93197668?s=400&u=f18347d…&v=4"
              alt="NSquare Edits Client"
            />
            <h3 style={{'transition':'all .2s ease-in-out'}} ref={name}>Utkarsh Singh</h3>
            <p ref={taarif}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at, inventore molestiae accusantium commodi veritatis.</p>
          </div>
          <i onClick={()=>nextTestimonial()} className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
}
