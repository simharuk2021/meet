(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(31),i=n.n(a),c=(n(38),n(4)),s=n.n(c),l=n(12),u=n(5),d=n(11),m=n(7),p=n(6),h=(n(40),n(65)),f=n(66),g=n(0),v=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={event:{},collapsed:!0},e.handleClick=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.event,t=this.state.collapsed;return Object(g.jsxs)(h.a,{children:[" ",Object(g.jsxs)("div",{className:"event",children:[Object(g.jsx)(h.a.Header,{className:"summary",as:"h4",children:e.summary}),Object(g.jsx)("span",{className:"location",as:"h4",children:e.location}),Object(g.jsxs)("span",{className:"start",as:"h4",children:[e.start.dateTime," (",e.start.timeZone,")"]}),!t&&Object(g.jsxs)("div",{className:"extra-details ".concat(this.state.collapsed?"hide":"show"),children:[Object(g.jsx)("br",{}),Object(g.jsx)("h3",{children:"About the event:"}),Object(g.jsx)("p",{className:"description",children:e.description})]}),Object(g.jsx)(f.a,{variant:"light",className:"".concat(t?"show":"hide","-details"),onClick:this.handleClick,children:t?"Show Details":"Hide Details"})]})]})}}]),n}(o.Component),b=v,w=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).getStyle=function(){return{color:o.color,backgroundColor:o.backgroundColor}},o.color=null,o.fontSize="12px",o.backgroundColor=null,o}return Object(d.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"Alert",children:Object(g.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(o.Component),y=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).color="blue",o.backgroundColor="#d2e5f6",o}return n}(w),T=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).color="red",o.backgroundColor="#fde2e2",o}return n}(w),k=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).color="#f5950c",o.backgroundColor="#f0ea88",o}return n}(w),j=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(g.jsx)("div",{children:Object(g.jsxs)("ul",{className:"EventList",children:[navigator.onLine?"":Object(g.jsx)(k,{text:"You are offline, the events list has been loaded from the Cache!"}),e.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)(b,{event:e})})}))]})})}}]),n}(o.Component),Z=j,x=n(63),S=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,o=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==o.length)return e.setState({query:n,suggestions:o,infoText:""});e.setState({query:n,infoText:"We cannot find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"CitySearch",children:[Object(g.jsx)(x.a,{children:Object(g.jsx)(y,{className:"Alert",text:this.state.infoText})}),Object(g.jsx)("h2",{children:"Select a City"}),Object(g.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(g.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(g.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(g.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(g.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(o.Component),O=S,M=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"NumberOfEvents",children:[Object(g.jsx)("p",{children:"Number of events to show:"}),Object(g.jsx)("input",{type:"number",value:this.props.numberOfEvents,className:"number-of-events",onChange:function(t){return e.props.updateNumberOfEvents(t)}}),Object(g.jsx)(x.a,{children:Object(g.jsx)(T,{text:this.props.errorText})})]})}}]),n}(o.Component),W=M;n(42);var q=function(e){return e.showWelcomeScreen?Object(g.jsx)("div",{className:"WelcomeScreen",children:Object(g.jsxs)("div",{className:"WelcomeScreen__content",children:[Object(g.jsxs)("div",{className:"WelcomeScreen__content__heading",children:[Object(g.jsx)("h1",{children:"Welcome to the Meet app"}),Object(g.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(g.jsx)("p",{children:"This app is currently undergoing a verification process with Google."})]}),Object(g.jsx)("div",{className:"button_cont",align:"center",children:Object(g.jsxs)("div",{className:"google-btn",children:[Object(g.jsx)("div",{className:"google-icon-wrapper",children:Object(g.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(g.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:Object(g.jsx)("b",{children:"Sign in with google"})})]})}),Object(g.jsx)("a",{href:"https://simharuk2021.github.io/meet/privacy.html",rel:"nofollow noopener",className:"WelcomeScreen__privacy-policy",children:"Privacy policy"}),Object(g.jsxs)("div",{className:"WelcomeScreen__app-info",children:[Object(g.jsx)("h2",{children:"What does this app do, and why do I need to sign in with my Google account?"}),Object(g.jsx)("p",{children:"Meet app is a Progressive Web App (PWA) built with React and coded using a test-driven development process. The app uses the Google Calendar API to fetch upcoming events from a a CareerFoundry events calendar."}),Object(g.jsx)("p",{children:'Once logged in, the app is a single page app with two inputs, one for a city name, and one for a number of events to show. Simply input your desired city and select it from the suggestions dropdown, then narrow down or increase the number of events shown with using the number input. Clicking on the "more details" button for an event will display a description and URL for the event. Clicking the event URL will redirect you to the Google Calendar event.'}),Object(g.jsx)("p",{children:"The Meet app is using https://www.googleapis.com/auth/calendar.events.readonly for educational purposes only. The calendar accessed is a calendar provided by CareerFoundry as part of their Full-Stack Immersion course."})]})]})}):null},E=n(33),R=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200523T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-23T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-23T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-23T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200525T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-25T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-25T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-25T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200529T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjlUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-29T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-29T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-29T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200530T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MzBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-30T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-30T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-30T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200601T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDFUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-01T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-01T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-06-01T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200602T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDJUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-02T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-02T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-06-02T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200603T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDNUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-03T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-03T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-06-03T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200603T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDNUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-03T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-03T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-06-03T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200605T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-05T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-05T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-06-05T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200605T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-05T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-05T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-06-05T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200605T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction.",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-05T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-05T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-06-05T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200609T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-09T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-09T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-06-09T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187232583216000"',id:"3m5n6mcl1aqrdsg6k5vkr6to5p_20200804T163000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M201bjZtY2wxYXFyZHNnNms1dmtyNnRvNXBfMjAyMDA4MDRUMTYzMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:54:32.000Z",updated:"2020-07-01T15:11:31.608Z",summary:"Build Your First App with JavaScript",description:"You know basic HTML and CSS, and interested to learn the next thing about web development? Well, you are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:\n- Learn JavaScript, from basics to advanced topics\n- Create your first app",location:"Amsterdam, Netherlands",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-08-04T18:30:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-08-04T19:30:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3m5n6mcl1aqrdsg6k5vkr6to5p",originalStartTime:{dateTime:"2020-08-04T18:30:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3m5n6mcl1aqrdsg6k5vkr6to5p@google.com",sequence:1,hangoutLink:"https://meet.google.com/vxc-jcvs-juv",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/vxc-jcvs-juv",label:"meet.google.com/vxc-jcvs-juv"},{entryPointType:"more",uri:"https://tel.meet/vxc-jcvs-juv?pin=7178471106778",pin:"7178471106778"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081619886",label:"+49 40 8081619886",pin:"257304091"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"vxc-jcvs-juv",signature:"AGirE/L1nRxxage7/xYEiTpkVsOW"},reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187232499498000"',id:"7rclpdp8egm60g7kepei7j0bt9_20200805T090000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=N3JjbHBkcDhlZ202MGc3a2VwZWk3ajBidDlfMjAyMDA4MDVUMDkwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T15:10:03.000Z",updated:"2020-07-01T15:10:49.749Z",summary:"Hello JavaScript!!",description:"You know basic HTML and CSS, and interested to learn the next thing about web development? You are at the right place. Our workshop will take you to the amazing world of JavaScript. \n\nIn this workshop, you'll:- Learn JavaScript, from basics to advanced topics- Create your first app",location:"Bangkok, Thailand",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-08-05T11:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-08-05T12:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"7rclpdp8egm60g7kepei7j0bt9",originalStartTime:{dateTime:"2020-08-05T11:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"7rclpdp8egm60g7kepei7j0bt9@google.com",sequence:1,hangoutLink:"https://meet.google.com/tbu-cgma-ikb",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/tbu-cgma-ikb",label:"meet.google.com/tbu-cgma-ikb"},{entryPointType:"more",uri:"https://tel.meet/tbu-cgma-ikb?pin=5464596701700",pin:"5464596701700"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081618071",label:"+49 40 8081618071",pin:"382271360"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"tbu-cgma-ikb",signature:"AGirE/JMEW9+pm1Esv5ik3OMrH7A"},reminders:{useDefault:!0},eventType:"default"}],D=n(21),A=n.n(D),B=n(17),J=n.n(B),C=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,o,r,a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,L(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return o=new URLSearchParams(window.location.search),e.next=13,o.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,A.a.get("https://jodfngij05.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return a=e.sent,i=a.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",r&&Y(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,o,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=3;break}return J.a.done(),e.abrupt("return",R);case 3:if(navigator.onLine){e.next=6;break}return t=localStorage.getItem("lastEvents"),e.abrupt("return",t?JSON.parse(t).events:[]);case 6:return J.a.start(),e.next=9,C();case 9:if(!(n=e.sent)){e.next=19;break}return I(),o="https://jodfngij05.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=15,A.a.get(o);case 15:return(r=e.sent).data&&(a=H(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(a))),J.a.done(),e.abrupt("return",r.data.events);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},Y=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,o,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://jodfngij05.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return o=e.sent,(r=o.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(e){var t=e.map((function(e){return e.location}));return Object(E.a)(new Set(t))},F=(n(60),n(64)),U=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).updateEvents=function(){var e=Object(l.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N().then((function(e){var n="all"===t?e:e.filter((function(e){return e.location===t}));o.mounted&&o.setState({events:n.slice(0,o.state.numberOfEvents),currentLocation:t})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o.updateNumberOfEvents=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=t.target.value?parseInt(t.target.value):32)<1||n>32)){e.next=5;break}return e.abrupt("return",o.setState({errorText:"Please choose a number between 1 and 32.",numberOfEvents:0}));case 5:o.setState({errorText:"",numberOfEvents:n}),o.updateEvents(o.state.currentLocation,o.state.numberOfEvents);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.state={events:[],locations:[],showWelcomeScreen:void 0,numberOfEvents:32,currentLocation:"all",errorText:""},o}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,o,r,a,i=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.numberOfEvents,this.mounted=!0,!(navigator.onLine&!window.location.href.startsWith("http://localhost"))){e.next=18;break}return n=localStorage.getItem("access_token"),e.next=6,L(n);case 6:if(!e.sent.error){e.next=10;break}e.t0=!1,e.next=11;break;case 10:e.t0=!0;case 11:o=e.t0,r=new URLSearchParams(window.location.search),a=r.get("code"),this.setState({showWelcomeScreen:!(a||o)}),(a||o)&&this.mounted&&N().then((function(e){i.mounted&&i.setState({events:e.slice(0,t),locations:H(e)})})),e.next=19;break;case 18:N().then((function(e){i.mounted&&i.setState({events:e.slice(0,i.state.numberOfEvents),locations:H(e)})}));case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(g.jsxs)(F.a,{className:"App",children:[Object(g.jsx)(O,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(g.jsx)(W,{numberOfEvents:this.state.numberOfEvents,updateNumberOfEvents:this.updateNumberOfEvents,errorText:this.state.errorText}),Object(g.jsx)(Z,{events:this.state.events}),navigator.onLine&&Object(g.jsx)(q,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){C()}})]})}}]),n}(o.Component),_=U,z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),a(e),i(e)}))};n(32).config("37baa5f444954d0a9dcf607407731688").install(),i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(_,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):G(t,e)}))}}(),V()}},[[62,1,2]]]);
//# sourceMappingURL=main.e5f97b09.chunk.js.map