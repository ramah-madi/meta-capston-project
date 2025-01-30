import React from 'react';
import SpecialsCard from './SpecialsCard';
import TestimonialsCard from './TestimonialsCard';
import specialsData from '../data/specials.json';
import testimonialsData from '../data/testimonials.json';
import greekSalad from '../assets/greek-salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon-dessert.jpg';
import marioAndAdrianA from '../assets/mario-and-adrian-a.jpg';
import marioAndAdrianB from '../assets/mario-and-adrian-b.jpg';

const imageMap = {
  "greek-salad.jpg": greekSalad,
  "bruchetta.svg": bruchetta,
  "lemon-dessert.jpg": lemonDessert,
};

export default function Main() {
  return (
    <main className='main'>
      <section className='specials-section'>
        <header className='specials-header'>
          <h2 className='specials-title'>This weeks specials!</h2>
          <button className='online-menu-btn'>Online Menu</button>
        </header>
        <div className='specials-grid'>
          {
          specialsData.map((specialItem) => {
            return ( <SpecialsCard
              key={specialItem.id}
              imageSrc= {imageMap[specialItem.imageSrc]}
              imageAlt={specialItem.imageAlt}
              title={specialItem.title}
              price={specialItem.price}
              description={specialItem.description}
            />)
          })}
        </div>
      </section>

      <section className='testimonials-section'>
        <header className='testimonials-header'>
          <h2 className='testimonials-title'>Don’t take our word for it</h2>
        </header>
        <div className='testimonials-grid'>
          {
          testimonialsData.map((testimonial) => {
            return ( <TestimonialsCard
              key={testimonial.id}
              text={testimonial.text}
              author={testimonial.author}
              role={testimonial.role}
            />)
          })}
        </div>
      </section>

      <section className='about-section'>
        <div className='about-text'>
          <h2 className='about-title'>Little Lemon</h2>
          <h3 className='about-subtitle'>Chicago</h3>
          <p className='about-description'>Welcome to Little Lemon, where flavor meets hospitality! Nestled in the city's heart, we pride ourselves on crafting delicious, fresh, and wholesome dishes inspired by Mediterranean cuisine. From zesty appetizers to indulgent desserts, every plate is made with love, using locally sourced ingredients and time-honored recipes.</p>
        </div>
        <div className='about-images'>
          <img className='about-image about-image-a' src={marioAndAdrianA}  alt='Mario and Adrian preparing a dish in the kitchen'/>
          <img className='about-image about-image-b' src={marioAndAdrianB}  alt='Mario and Adrian preparing dishes joyfully.'/>
        </div>
      </section>
    </main>
  )
};