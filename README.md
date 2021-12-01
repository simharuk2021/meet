# meet app
The purpose of the app is to provide a meet up app which allows users to retrieve events (filtered by city) using a Google calender API.  The app is going to be severless and also allowing users a level of offline support.

# User Stories

2) As a user, I would like to be able to show/hide event details so that I can see more/less
information about an event

    Scenario 1: An event element is collapsed by default

        Given - a user is on the main view
        When  - an event is displayed on the view
        Then  - the event details will be collapsed

    Scenario 2: User can expand an event to see its details

        Given - a user has a list of events displayed
        When  - the user has selected an event
        Then  - display the details of the event

    Scenario 3: User can collapse an event to hide its details  

        Given - the user is viewing the expanded event details
        When  - the user has collapsed the event details
        Then  - the event details will be collapsed

3) As a user, I would like to be able to specify the number of events I want to view in the app so
that I can see more or fewer events in the events list at once.

    Scenario 1: When user hasn’t specified a number, 32 is the default number   

        Given - the user is viewing the events on the main page
        When  - the user hasn't selected the number of events to be displayed
        Then  - the default number of events displayed will be 32

    Scenario 2: User can change the number of events they want to see

        Given - the user is viewing the events on the main page
        When  - the user has selected the number of events to be visible
        Then  - the number of events selected will be the amount displayed

4) As a user, I would like to be able to use the app when offline so that I can see the events I
viewed the last time I was online.

    Scenario 1: Show cached data when there’s no internet connection

        Given - a user is offline
        When  - the user is accessing the app 
        Then  - show cached data from the most recent session

    Scenario 2: Show error when user changes the settings (city, time range)

        Given - a user is offline
        When  - a user changes the city or time range
        Then  - an appropriate error message is displayed

5) As a user, I would like to be able to see a chart showing the upcoming events in each city so
that I know what events are organized in which city.

    Scenario 1: Show a chart with the number of upcoming events in each city

        Given - the user is viewing the main page
        When  - a user selects the overview of data visualisation option 
        Then  - show a graph depicting the cities and corresponding number of events

# Built With

The app was build using a react progressive web application template.  
npx create-react-app meet --template cra-template-pwa --use-npm

npm was added as the package manager and the method of deployment.  
npm install --save-dev gh-pages


Git Hub pages was added to the developer dependencies and this enabled a public url (as shown in the demo link) which enables continous deployment to the web.


# Demo Link
https://simharuk2021.github.io/meet
# Getting Started

# Prerequisites
# Setup
# Install
# Usage
# Run tests
To be covered 

# Deployment
npm run deploy

Authors
👤 Simon Hart 

Github: @simharuk2021
Twitter: @twitterhandle
Linkedin: linkedin

👤 Career Foundry

Github: @githubhandle
Twitter: @twitterhandle
Linkedin: linkedin
🤝 Contributing
Contributions, issues and feature requests are welcome!

Feel free to check the issues page.

Show your support
Give a ⭐️ if you like this project!

Acknowledgments
Hat tip to anyone whose code was used
Inspiration
etc
📝 License
This project is MIT licensed.
 

