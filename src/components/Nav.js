import React, { useState } from 'react';
import logo from '../assets/Logo.svg';
import hamburgerMenu from '../assets/icon-hamburger-menu.svg';
import closeIcon from '../assets/close-icon.svg';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  };

  // Closes the menu
  function closeMenu() {
    setMenuOpen(false);
  };

  return (
    <nav>
      <Link to='/' className='logo'><img className='logo' src={logo} alt='Logo of the little lemon retaurant'/></Link>
      <button className="burger-menu" aria-label="Toggle Navigation" onClick={toggleMenu}>
        <img src={hamburgerMenu} alt='Hamburger menu icon'/>
      </button>
      <ul
        role='navigation'
        className={`nav-links ${menuOpen ? "open" : ""}`}
      >
        <li>
          <button className="close-menu" aria-label="Close Navigation" onClick={closeMenu}>
            <img className="close-icon" src={closeIcon} alt="Close menu icon" />
          </button>
        </li>
        <li><Link to='/' className='homepage'>Home</Link></li>
        <li><Link to='#' className='about'>About</Link></li>
        <li><Link to='#' className='menu'>Menu</Link></li>
        <li><Link to='/reservations' className='reservations'>Reservations</Link></li>
        <li><Link to='#' className='order-online'>Order Online</Link></li>
        <li><Link to='#' className='login'>Login</Link></li>
      </ul>
    </nav>
  )
};