import React, { Component } from 'react';
// import Event from './Event';
import CitySearch from './CitySearch';

class EventList extends Component {
    render() {
        return (<div>
      <CitySearch />
      <EventList />
      </div>
      );
      }
    }

export default EventList;