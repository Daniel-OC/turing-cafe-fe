const checkForError = (response) => {
  if (response.ok) {
    return response.json()
  } else {
    throw (`${response.status} Sorry! Something went wrong as heck!`)
  }
}

const getAllReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(response => checkForError(response))
}

const addReservationToApi = (reservation) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    body: {name: reservation.name, date: reservation.date, time: reservation.time, number: reservation.number}
  })
}

export {getAllReservations, addReservationToApi}