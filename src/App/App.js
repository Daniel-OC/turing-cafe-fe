import React, { Component } from 'react';
import './App.css';
import AllRezzies from '../Components/AllRezzies/AllRezzies'
import Form from '../Components/Form/Form'
import { getAllReservations } from '../apiCalls';

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
  }
  
  addReservation = (newRezzy) => {
    this.setState({reservations: [...this.state.reservations, newRezzy]})
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
