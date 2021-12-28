import React from "react";
import './WelcomeScreen.css';
function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <div className="WelcomeScreen">
        <div className="WelcomeScreen__content">
          <div className="WelcomeScreen__content__heading">
            <h1>Welcome to the Meet app</h1>
            <h4>
              Log in to see upcoming events around the world for
              full-stack
              developers
            </h4>
            <p>This app is currently undergoing a verification process with Google.</p>
          </div>
          <div className="button_cont" align="center">
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google sign-in"
                />
              </div>
              <button onClick={() => { props.getAccessToken() }}
                rel="nofollow noopener"
                className="btn-text"
              >
                <b>Sign in with google</b>
              </button>
            </div>
          </div>
          <a
            href="https://simharuk2021.github.io/meet/privacy.html"
            rel="nofollow noopener"
            className="WelcomeScreen__privacy-policy"
          >
            Privacy policy
          </a>
          <div className="WelcomeScreen__app-info">
            <h2>What does this app do, and why do I need to sign in with my Google account?</h2>
            <p>
              Meet app is a Progressive Web App (PWA) built with React and coded using a test-driven development process. The app uses the Google Calendar API to fetch upcoming events from a a CareerFoundry events calendar.
            </p>
            <p>
              Upon login (using Google verification), the user is greeted by a list of events, the city they are held in and a summary of the event details.  The events by city can be filtered (by city) as can the number of events to be displayed.  The details button will expand the event and futher information will be displayed, the samme button can then be clicked again to hide the details (once they are shown).
            </p>
            <p>
              The Meet app is using https://www.googleapis.com/auth/calendar.events.readonly for
              educational purposes only. The calendar accessed is a calendar provided by
              CareerFoundry as part of their Full-Stack Immersion course. 
            </p>
          </div>

        </div>

      </div>
    )
    : null
}
export default WelcomeScreen;