import React from 'react'
import stars from '../assets/stars.png';

export default function TestimonialsCard({ text, author, role }) {
  return (
    <div className='testimonials-item'>
      <img className="stars-rating" src={stars} alt={`a 5 star rating from ${author}.`} />
      <p>{text}</p>
      <p>
        {author} <span>{role}</span>
      </p>
    </div>
  )
}
