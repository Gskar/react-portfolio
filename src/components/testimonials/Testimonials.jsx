import React from 'react'
import './testimonials.css'

import Avatar1 from '../../assets/audreyhorne.jpg'
import Avatar2 from '../../assets/bobbybriggs.jpg'
import Avatar3 from '../../assets/laurapalmer.jpg'
import Avatar4 from '../../assets/shellyjohnson.jpg'

// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    avatar: Avatar1,
    name: 'Audrey Horne',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi officiis repellat tempora cum ut similique!'
  },
  {
    id: 2,
    avatar: Avatar2,
    name: 'Bobby Briggs',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi officiis repellat tempora cum ut similique!'
  },
  {
    id: 3,
    avatar: Avatar3,
    name: 'Laura Palmer',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi officiis repellat tempora cum ut similique!'
  },
  {
    id: 4,
    avatar: Avatar4,
    name: 'Shelly Johnson',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi officiis repellat tempora cum ut similique!'
  },
]

const testimonials = data.map((testimonial)=>{
  return(
      <SwiperSlide key={testimonial.id} className="testimonial">
          <div className="client__avatar">
            <img src={testimonial.avatar} alt="Client Review" />
          </div>
          <h5 className='client__name'>{testimonial.name}</h5>
          <small className='client__review'>{testimonial.review}</small>
      </SwiperSlide>
  )
})

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container" // install Swiper modules
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {testimonials}
        
      </Swiper>
    </section>
  )
}

export default Testimonials