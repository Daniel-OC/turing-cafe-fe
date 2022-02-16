import React from 'react'
import './Reservation.scss'

const Reservation = (props) => {

  return (
    <div>
    <h2>{props.name}</h2>
    <p>{props.date}</p>
    <p>{props.time}</p>
    <p>{props.partySize}</p>
    <button>Cancel</button>
    </div>
  )
}

export default Reservation;