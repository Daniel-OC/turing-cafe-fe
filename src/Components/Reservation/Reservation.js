import React from 'react'
import './Reservation.css'

const Reservation = (props) => {

  return (
    <section className='rez-card'>
    <h2 className='rez-name'>{props.name}</h2>
    <p>{props.date}</p>
    <p>{props.time}</p>
    <p>Number of Guests: {props.partySize}</p>
    <button>Cancel</button>
    </section>
  )
}

export default Reservation;