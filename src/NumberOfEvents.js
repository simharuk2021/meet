import React, { Component } from 'react';
import { ErrorAlert } from './Alert';
import { Row } from 'react-bootstrap';

class NumberOfEvents extends Component {
    
    // state = {
    //     numberOfEvents: 32,
    //   }
      
        render() {
          return (
            <div className="NumberOfEvents">
                  <p>Number of events to show:</p>
                  <input type="number"
                    value={this.props.numberOfEvents}
                    className="number-of-events"
                    onChange={(e) => this.props.updateNumberOfEvents(e)} />
                    <Row>
                    <ErrorAlert text={this.props.errorText} />
                    </Row>
            </div>
          );
        }
      }
      
      export default NumberOfEvents;