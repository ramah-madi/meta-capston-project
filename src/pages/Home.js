import React from 'react'
import Main from '../components/Main';
import restaurantFood from '../assets/restauranfood.jpg'

export default function Home() {
  return (
    <>
      <div className='header-image'>
          <img className='header-image' src={restaurantFood} style={{ height: '20rem' }} alt='Chef presenting a dish at Little Lemon Restaurant'/>
      </div>
      <div className='header-text'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Welcome to Little Lemon Restaurant! Delight in a cozy ambiance, fresh ingredients, and mouthwatering dishes crafted with love. Whether you're planning a casual meal or a special celebration, your perfect dining experience starts here.</p>
          <button>Reserve a table</button>
      </div>
      <Main />
    </>
  )
}
