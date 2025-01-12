import React from 'react'
import deliveryIcon from '../assets/delivery-icon.svg';

export default function SpecialsCard({ imageSrc, imageAlt, title, price, description }) {
  return (
    <div className='specials-item'>
        <header className='specials-item-header'>
            <img src={ imageSrc } style={{ height: '20rem' }} alt={ imageAlt }/>
        </header>
        <h3>{ title } <span>{ price }</span></h3>
        <p>{ description }</p>
        <p>
        Order a delivery <img className="delivery-icon" src={deliveryIcon} alt="A small delivery motorcycle icon" />
        </p>
    </div>
  )
}
