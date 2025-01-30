import React from 'react'
import stars from '../assets/stars.png';

export default function TestimonialsCard({ text, author, role }) {
  return (
    <article className='testimonials-item'>
      <img className="stars-rating" src={stars} alt={`a 5 star rating from ${author}.`} />
      <p className='testimonial-review'>{text}</p>
      <p className='testimonial-author'>
        {author} <span className='testimonial-role'>{role}</span>
      </p>
    </article>
  )
}
