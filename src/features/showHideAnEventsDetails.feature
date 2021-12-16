Feature: Show/hide event details

Scenario: An event element is collapsed by default
Given - a user is on the main view
When  - an event is displayed on the view
Then  - the event details will be collapsed

Scenario: User can expand an event to see its details
Given - a user has a list of events displayed
When  - the user has selected an event
Then  - display the details of the event

Scenario: User can collapse an event to hide its details
Given - the user is viewing the expanded event details
When  - the user has collapsed the event details
Then  - the event details will be collapsed