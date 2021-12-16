import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    //Scenario 1
    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
        given('the user is viewing the events on the main page', () => {

        });

        when('the user hasn\'t selected the number of events to be displayed', () => {

        });

        then('the default number of events wil be displayed', () => {

        });
    });
//Scenario 2
    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('the user is viewing the events on the main page', () => {

        });

        when('the user has selected the number of events to be visible', () => {

        });

        then('the number of events selected will be the amount displayed', () => {

        });
    });
});