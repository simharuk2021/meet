import React, { Component } from 'react';
import Event from './Event';
import { WarningAlert } from './Alert';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
      <ul className="EventList">
      {!navigator.onLine ? (
						<WarningAlert text="You are offline, the events list has been loaded from the Cache!" />
					) : (
						''
					)}
        {events.map(event =>
          <li>
            <Event event={event} />
          </li>
        )}
      </ul>
      </div>
    );
  }
}
export default EventList;