import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import Event from './Event';
import NumberOfEvents from'./NumberOfEvents';
import { getEvents, extractLocations } from './api';


class App extends Component {
  constructor(props) {
    super(props);
 
  this.state = {
  events: [],
  locations: []
  };
}
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }
  render() {

    
  return (
    <div className="App">
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      <EventList events={this.state.events}/>
      <Event />
      <NumberOfEvents />
    </div>
  );
 }
}
export default App;
