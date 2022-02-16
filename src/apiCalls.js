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

export {getAllReservations}