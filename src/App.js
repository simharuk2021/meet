import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import EventGenre from './EventGenre';
import NumberOfEvents from'./NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import { Container } from 'react-bootstrap';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


class App extends Component {
  constructor(props) {
    super(props);
 
  this.state = {
  events: [],
  locations: [],
  showWelcomeScreen: undefined,
  numberOfEvents: 32,
  currentLocation: 'all',
  errorText: '',  
  };
}
async componentDidMount() {
  const { numberOfEvents } = this.state;
  this.mounted = true;
  if (navigator.onLine & !window.location.href.startsWith('http://localhost')) {
  const accessToken = localStorage.getItem('access_token');
  const isTokenValid = (await checkToken(accessToken)).error ? false : true;
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
      if ((code || isTokenValid) && this.mounted) {
    getEvents().then((events) => {
      if (this.mounted) {
      this.setState({
        events: events.slice(0, numberOfEvents),
        locations: extractLocations(events)
      });
      }
    });
  }
}
  else {
  getEvents().then((events) => {
    if (this.mounted) {
      this.setState({
        events: events.slice(0, this.state.numberOfEvents),
        locations: extractLocations(events)
      });
    }
  });
}
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
        errorText: '',
        numberOfEvents: newNumber,
      });
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
    }
  };

  getData = () => {
		if (this.mounted) {
			const { locations, events } = this.state;
			const data = locations.map(location => {
				const number = events.filter(
					event => event.location === location
				).length;
				const city = location.split(', ').shift();
				return { city, number };
			});
			return data;
		}
	};

  render() {
    
  // if (this.state.showWelcomeScreen === undefined) return <div
  //   className="App" />      
    
  return (
    <Container className="App">
      <CitySearch locations={this.state.locations} 
                  updateEvents={this.updateEvents} />
      <NumberOfEvents 
                numberOfEvents={this.state.numberOfEvents} 
                updateNumberOfEvents={this.updateNumberOfEvents}
                errorText={this.state.errorText} />
    <div className="data-vis-wrapper">
							<EventGenre events={this.state.events} />
                <h4>Events in each city</h4>
    <ResponsiveContainer height={300} width="99%" >
      <ScatterChart margin={{top: 20, right: 20, bottom: 20, left: 20,}}>
      <CartesianGrid />
      <XAxis dataKey="city" type = "category"  name="city" />
      <YAxis dataKey="number" type="number"  name="number of events" allowDecimals={false}/>
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter data={this.getData()} fill="#00008B" />
      </ScatterChart>
    </ResponsiveContainer>
    </div>
    <EventList events={this.state.events}/>
      {navigator.onLine && <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />}
    </Container>

    
  );
 }
}
export default App;