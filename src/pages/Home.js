import React from 'react'
import Main from '../components/Main';
import restaurantFood from '../assets/restauranfood.jpg'
import '../styles/home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className='header-container'>
        <div className='header-main'>
          <div className='header-text'>
              <h1 className='home-title'>Little Lemon</h1>
              <h2 className='home-text home-subtitle'>Chicago</h2>
              <p className='home-text'>Welcome to Little Lemon Restaurant! Delight in a cozy ambiance, fresh ingredients, and mouthwatering dishes crafted with love. Whether you're planning a casual meal or a special celebration, your perfect dining experience starts here.</p>
              <Link to='/reservations'><button className='reserve-btn'>Reserve a table</button></Link>
          </div>
          <div className='header-image'>
              <img className='restaurant-image' src={restaurantFood} style={{ height: '20rem' }} alt='Chef presenting a dish at Little Lemon Restaurant'/>
          </div>
        </div>
      </div>
        <Main />
    </>
  )
}
