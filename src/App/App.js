import React, { Component } from 'react';
import './App.css';
import AllRezzies from '../Components/AllRezzies/AllRezzies'
import Form from '../Components/Form/Form'
import { getAllReservations, addReservationToApi } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getAllReservations()
    .then(data => {
      console.log(data)
      this.setState({reservations: data})
      console.log(this.state)
    })
    .catch(error => console.log(error))
  }
  

  addReservation = (newRezzy) => {
    addReservationToApi(newRezzy)
    .then(() => 
      getAllReservations()
      .then(data => this.setState({reservations: data})
      .catch(error => console.log(error)))
    .catch(error => console.log(error)
    ))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        <AllRezzies reservations={this.state.reservations}/>
        
      </div>
    )
  }
}

export default App;
