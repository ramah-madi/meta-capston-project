import React from 'react'
import successIcon from '../assets/success-filled.svg';

export default function ReservationSuccess() {
  return (
    <div className='success-container'>
            <div className='success-background'>
                <img className='success-icon' src={successIcon} alt="Success" />
            </div>
            <div className='success-content'>
                <h1 className='reservation-h1'>Reservation Success!</h1>
                <h2>Thank You!</h2>
                <p className='note-content'>Note: we will send your reservation details to your phone. This may take a few minutes. If it takes too long, please click the button below to resend.</p>
                <button className='resend-button'>Resend</button>
            </div>
    </div>
  )
}
