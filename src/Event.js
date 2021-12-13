import React, { Component } from 'react';

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
        return <div className="event">
            <span className="summary" as="h4">{event.summary}</span>
            <span className="location" as="h4">{event.location}</span>
            
            {!collapsed &&
            <div className={`extra-details ${this.state.collapsed ? "hide" : "show"}`}>
              <br />
              <h3>About the event:</h3>
                  
                  <p className="description">{event.description}</p>
            </div>
          }
            <button className={`${collapsed ? "show" : "hide"}-details`} onClick={this.handleClick}>
            {collapsed ? "show Details" : "Hide Details"}
            </button>
            </div>
    }
}

export default Event;