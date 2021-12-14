import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let EventWrapper;
    let event = mockData[0];
    beforeAll(() => {
      EventWrapper = shallow(<Event event={event} />);
    });
//summary information and buttons are rendered within the event component
    test('event details hidden by default', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    // test('event details shown on click', () => {
    //     expect(EventWrapper.find('.description')).toHaveLength(1);
    // });

    test('renders location', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
      });

      test('renders the show/hide details button', () => {
        expect(EventWrapper.find('.show-details')).toHaveLength(1);
      });

// scenario 1 - the event details are hidden by default

      test("event details collapsed by default is true", () => {
        expect(EventWrapper.state("collapsed")).toBe(true);
      });

// scenario 2 - the details are shown when the show button is clicked

      test("change state to show details on click of button", () => {
        EventWrapper.find('.show-details').simulate('click')
        expect(EventWrapper.state("collapsed")).toBe(false);
      });

// scenario 3 - the details are hidden
      test("change state to hide details on click of button", () => {
        EventWrapper.find('.hide-details').simulate('click')
        expect(EventWrapper.state("collapsed")).toBe(true);
      });

});