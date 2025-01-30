import React from 'react'
import deliveryIcon from '../assets/delivery-icon.svg';

export default function SpecialsCard({ imageSrc, imageAlt, title, price, description }) {
  return (
    <article className='specials-item'>
        <header className='specials-item-header'>
            <img className= 'specials-imgs' src={ imageSrc } alt={ imageAlt }/>
        </header>
        <div className='specials-text'>
          <h3 className='spacials-item-title'>{ title } <span className='specials-item-price'>{`${price}$`}</span></h3>
          <p className='specials-description'>{ description }</p>
          <p className='specials-order'>
          Order a delivery <img className="delivery-icon" src={deliveryIcon} alt="A small delivery motorcycle icon" />
          </p>
        </div>
    </article>
  )
}
