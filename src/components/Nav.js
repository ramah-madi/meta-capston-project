import React from 'react';
import logo from '../assets/Logo.svg';

export default function Nav() {
  return (
    <nav>
      <ul>
        <img className='Logo' src={logo} alt='Logo of the little lemon retaurant'/>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
    </nav>
  )
};