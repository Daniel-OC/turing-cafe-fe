import React from 'react'
import './Form.css'

class Form extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  pushReservationUp = () => {
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({name: '', date: '', time: '', guests: ''})
  }

  render() {
    return (
      <section className='userForm'>
        <input name='name' value={this.state.name} onChange={event => this.handleChange(event)} placeholder='Name'></input>
        <input name='date' value={this.state.date} onChange={event => this.handleChange(event)} placeholder='Date (mm/dd)'></input>
        <input name='time' value={this.state.time} onChange={event => this.handleChange(event)} placeholder='Time'></input>
        <input name='guests' value={this.state.guests} onChange={event => this.handleChange(event)} placeholder='Number of guests'></input>
        <button className='make-rez' onClick={() => this.pushReservationUp()}>Make Reservation</button>
      </section>
    )
  }
}

export default Form;