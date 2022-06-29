import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import './footer.css'
function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Double 'R Diner</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li> 
        <li><a href="#services">Services</a></li> 
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li> 
        <li><a href="#contact">Contact</a></li> 
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Fire Walk With Me </small>
      </div>

    </footer>
  )
}

export default Footer