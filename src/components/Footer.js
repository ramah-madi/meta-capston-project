import React from 'react'
import chefB from '../assets/restaurantChefB.jpg'

export default function Footer() {
  return (
    <footer>
      <img className='footer-image' src={chefB} style={{ height: '20rem' }} alt='A chef making food in the kitchen'/>
      <ul className='doormat-navigation'>
        <li className='footer-title'>Doormat Navigation</li>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/menu'>Menu</a></li>
        <li><a href='/reservations'>Reservations</a></li>
        <li><a href='/order-online'>Order Online</a></li>
        <li><a href='/login'>Login</a></li>
      </ul>

      <ul className='contact'>
        <li className='footer-title'>Contact</li>
        <li><a href='/address'>Address</a></li>
        <li><a href='/phone-number'>Phone Number</a></li>
        <li><a href='/email'>Email</a></li>
      </ul>

      <ul className='social-media-links'>
        <li className='footer-title'>Social Media Links</li>
        <li><a href='/facebook'>Facebook</a></li>
        <li><a href='/instagram'>Instagram</a></li>
        <li><a href='/linked-in'>Linked In</a></li>
      </ul>
    </footer>
  )
};