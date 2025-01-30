import React from 'react';

export default function Header({ title, description, image }) {
  return (
    <header className='header-reservation'>
      <div className='header-grid'>
        <div className='header-text'>
          <h1 className='reservation-title'>{title}</h1>
          <p className='reservation-text'>{description}</p>
        </div>
        <div className='header-image'>
          <img className='reservation-image' src={image} alt='A view of the restaurant' />
        </div>
      </div>
    </header>
  )
};