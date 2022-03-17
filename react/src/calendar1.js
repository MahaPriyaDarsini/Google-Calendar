import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyATrqVw0O9gfNVvch6el02vPPPh2pCidyo";
let calendars = [
  {calendarId: "7e76jvb7iuccn14r4ep88veftg@group.calendar.google.com"},
  {
   // calendarId: "YOUR_CALENDAR_ID_2",
    color: "#B241D1" //optional, specify color of calendar 2 events
  }
];

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} />
      </div>
    )
  }
}
