import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
// import Event from './Event';
import NumberOfEvents from'./NumberOfEvents';
import { getEvents, extractLocations } from './api';


class App extends Component {
  constructor(props) {
    super(props);
 
  this.state = {
  events: [],
  locations: [],
  numberOfEvents: 32,
  currentLocation: 'all'
  };
}
async componentDidMount() {
  const { numberOfEvents } = this.state;
  this.mounted = true;
  getEvents().then((events) => {
    if (this.mounted) {
      this.setState({
        events: events.slice(0, numberOfEvents),
        locations: extractLocations(events)
      });
    }
  });
}

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = async (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location,
        });
      }
    });
  }

  updateNumberOfEvents = async (e) => {
    const newNumber = e.target.value ? parseInt(e.target.value) : 32;
    if (newNumber < 1 || newNumber > 32) {
      return this.setState({
        errorText: 'Please choose a number between 1 and 32.',
        numberOfEvents: 0,
      });
    } else {
      this.setState({
        numberOfEvents: newNumber,
      });
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
    }
  };

  render() {

    
  return (
    <div className="App">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      <EventList events={this.state.events}/>
      <NumberOfEvents 
                numberOfEvents={this.state.numberOfEvents} 
                updateNumberOfEvents={this.updateNumberOfEvents} />
    </div>
  );
 }
}
export default App;
