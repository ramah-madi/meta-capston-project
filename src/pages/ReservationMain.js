import React from 'react';
import Header from '../components/Header';
import '../styles/reservationPage1.css';
import '../styles/home.css';
import resturantImage from '../assets/restaurant1.jpg';
import ReservationForm from '../components/ReservationForm';

export default function ReservationMain() {
  return (
    <>
      <Header title='Welcome to the reservations page!' description='Plan your perfect dining experience with ease. Reserve a table by following our simple steps, and let us take care of the rest!' image={resturantImage}/>
      <ReservationForm />
    </>
  )
}
