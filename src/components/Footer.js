import React from 'react';
import chefB from '../assets/restaurantChefB.jpg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className='footer-grid'>
        <img className='footer-image' src={chefB} alt='A chef making food in the kitchen'/>
        <ul className='doormat-navigation footer-list' role='navigation'>
          <li><h2 className='footer-title'>Doormat Navigation</h2></li>
          <li><Link to='/' className='home'>Home</Link></li>
          <li><Link to='#' className='about'>About</Link></li>
          <li><Link to='#' className='menu'>Menu</Link></li>
          <li><Link to='/reservations' className='reservations'>Reservations</Link></li>
          <li><Link to='#' className='order-online'>Order Online</Link></li>
          <li><Link to='#' className='login'>Login</Link></li>
        </ul>

        <ul className='contact-navigation footer-list' role='navigation'>
          <li><h2 className='footer-title'>Contact</h2></li>
          <li><Link to='#' className='adress'>Address</Link></li>
          <li><Link to='#' className='phone-number'>Phone Number</Link></li>
          <li><Link to='#' className='email'>Email</Link></li>
        </ul>

        <ul className='social-media-links footer-list' role='navigation'>
          <li><h2 className='footer-title'>Social Media Links</h2></li>
          <li><Link to='#' className='facebook'>Facebook</Link></li>
          <li><Link to='#' className='instagram'>Instagram</Link></li>
          <li><Link to='#' className='linked-in'>Linked In</Link></li>
        </ul>
      </div>
    </footer>
  )
};