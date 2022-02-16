import React, { Component } from 'react';
import './App.css';
import AllRezzies from '../Components/AllRezzies/AllRezzies'
import Form from '../Components/Form/Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [{
        id: 1,
        name: 'Christie',
        date: '12/29',
        time: '7:00',
        number: 12,
      },
      {
        id: 2,
        name: 'Leta',
        date: '4/5',
        time: '7:00',
        number: 2,
      },
      {
        id: 3,
        name: 'Pam',
        date: '1/21',
        time: '6:00',
        number: 4,
      },
      {
        id: 1,
        name: 'Christie',
        date: '12/29',
        time: '7:00',
        number: 12,
      },
      {
        id: 2,
        name: 'Leta',
        date: '4/5',
        time: '7:00',
        number: 2,
      },
      {
        id: 3,
        name: 'Pam',
        date: '1/21',
        time: '6:00',
        number: 4,
      },
      {
        id: 1,
        name: 'Christie',
        date: '12/29',
        time: '7:00',
        number: 12,
      },
      {
        id: 2,
        name: 'Leta',
        date: '4/5',
        time: '7:00',
        number: 2,
      },
      {
        id: 3,
        name: 'Pam',
        date: '1/21',
        time: '6:00',
        number: 4,
      }]
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
          <AllRezzies reservations={this.state.reservations}/>
        
      </div>
    )
  }
}

export default App;
