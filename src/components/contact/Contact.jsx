import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

function contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dale@cooper@twinpeaks.com</h5>
            <a href="mailto:dale@cooper@twinpeaks.com">Send an email</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+306979040396">Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" placeholder='Your full name' id="" required />
          <input type="email" name="email" placeholder='Your email' id="" required />
          <textarea name="message"  rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message </button>
        </form>

      </div>
    </section>
  )
}

export default contact