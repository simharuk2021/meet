import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

class Event extends Component {
state ={
    event:{},
    collapsed: true,
};

handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

    render() {
        const { event } = this.props;
        const { collapsed } = this.state;
        return <Card> <div className="event">
            <Card.Header className="summary" as="h4">{event.summary}</Card.Header>
            <span className="location" as="h4">{event.location}</span>
            <span className="start" as="h4">{event.start.dateTime} ({event.start.timeZone})</span>
            
            {!collapsed &&
            <div className={`extra-details ${this.state.collapsed ? "hide" : "show"}`}>
              <br />
              <h3>About the event:</h3>
                  
                  <p className="description">{event.description}</p>
            </div>
          }
            <Button variant = "light" className={`${collapsed ? "show" : "hide"}-details`} onClick={this.handleClick}>
            {collapsed ? "Show Details" : "Hide Details"}
            </Button>
            </div>
            </Card>
    }
}

export default Event;