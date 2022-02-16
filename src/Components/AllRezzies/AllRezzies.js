import React from 'react'
import './AllRezzies.scss'
import Reservation from '../Reservation/Reservation'

const AllRezzies = (props) => {

  allReservations = props.reservations.map(reservation => {
    return <Reservation 
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      partySize={reservation.number}
    />
  })

  return(
  <>
  {allReservations}
  </>)
}