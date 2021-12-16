import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from'../App';
import { mockData } from '../mock-data';
import { mount, shallow } from 'enzyme';
import Event from '../Event';
import EventList from '../EventList';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

//Scenario 1
    test('An event element is collapsed by default', ({ given, when, then }) => {
        
        given('- a user is on the main view', () => {
      
           });
        let EventListWrapper;
        when('- an event is displayed on the view', () => {
        EventListWrapper = shallow(<EventList events={mockData} />);
        expect(EventListWrapper.find('.EventList')).toHaveLength(1);
    });

        let EventWrapper;
        then('- the event details will be collapsed', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />);
            EventWrapper.find('.event .extra-details');
            expect(EventWrapper.state('collapsed')).toBe(true);
        });
    });

//Scenario 2
    test('User can expand an event to see its details', ({ given, when, then }) => {
        let EventWrapper;
        given('- a user has a list of events displayed', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />)
            expect(EventWrapper.state('collapsed')).toBe(true);
        });

        when('- the user has selected an event', () => {
            const showDetails = EventWrapper.find('.event .show-details');
            showDetails.simulate('click');   
        });

        then('- display the details of the event', () => {
            expect(EventWrapper.state('collapsed')).toBe(false);
        });
    });

//Scenario 3
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let EventWrapper;
        given('- the user is viewing the expanded event details', () => {
            EventWrapper = shallow(<Event event={mockData[0]} />)
            expect(EventWrapper.state('collapsed')).toBe(true);
        });

        when('- the user has collapsed the event details', () => {
            const showDetails = EventWrapper.find('.event .show-details');
            showDetails.simulate('click');   
        });

        then('- the event details will be collapsed', () => {
            expect(EventWrapper.state('collapsed')).toBe(false);
        });
    });
});