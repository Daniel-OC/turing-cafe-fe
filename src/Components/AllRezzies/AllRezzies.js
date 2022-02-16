import React from 'react'
import './AllRezzies.css'
import Reservation from '../Reservation/Reservation'

const AllRezzies = (props) => {

  const allReservations = props.reservations.map(reservation => {
    return <Reservation 
      key={reservation.name + reservation.date + reservation.time }
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      partySize={reservation.number}
    />
  })

  return(
  <section className='all-reservations'>
  {allReservations}
  </ section>)
}

export default AllRezzies;