import logo from './logo.svg';
import './App.css';
/* import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { useState } from 'react';
 *//* function App() {
  const responseGoogle = (response) => {
    console.log(response);
    const {code}=response
    
axios.post
('/api/create-tokens',{code})
    .then(response=>{
      console.log(
response.data
)
      setSignedIn(true)
    })
    .catch(error=>console.log(error.message))
  }
  const responseError = (error) => {
    console.log(error);
  }
  const handleSubmit=(e)=>
  {
    e.preventDefault()
  
axios.post
('/api/create-event',{summary,desc,location,StartDateTime,endDateTime})
  .then(response=>{
    console.log(
response.data
)
  })
  .catch(error=>console.log(error.message))
}
  const [summary,setSummary]=useState('');
const [desc,setDesc]=useState('')
const [location,setLocation]=useState('')
  const [StartDateTime,setStartDateTime]=useState('')
  const [endDateTime,setEndDateTime]=useState('')
  const [signedIn,setSignedIn]=useState('')

  return (
    <div>
      {
        !signedIn?  (<div>   <GoogleLogin
    clientId="687309219187-410k7qldibtr5u7lb5u0bd284aghl46m.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseError}
    cookiePolicy={'single_host_origin'}
    responseType="code"
    accessType='offline'
    scope="openid email profile https://www.googleapis.com/auth/calendar"
    />
</div>) : (<div>
  <form onSubmit={handleSubmit}>
  <label htmlFor="summary" >summary</label>
  <br/>
  <input type="text" id="summary" value={summary} onChange={e=>setSummary(e.target.value)}/>
   <br/>
   <label htmlFor="desc" >desc</label>
  <br/>
  <input 
  type="text" 
  id="desc"
   value={desc} 
   onChange={e=>setDesc(e.target.value)}/>
   <br/>
   <label htmlFor="location" >Location</label>
  <br/> 
  <input 
  type="text" 
  id="location"
   value={location} 
   onChange={e=>setLocation(e.target.value)}/>
   <br/>
   <label htmlFor="StartDateTime" >StartDateTime</label>
  <br/>
  <input 
  type="datetime-local" 
  id="StartDateTime"
   value={StartDateTime} 
   onChange={e=>setStartDateTime(e.target.value)}/>
   <br/>
   <label htmlFor="endDateTime">endDateTime</label>
  <br/>
  <input type="datetime-local" id="endDateTime" value={endDateTime} onChange={e=>setEndDateTime(e.target.value)}/>
  <br/>

<button type="submit">Submit</button>
</form>
</div>
)}

      </div>
    

  );
}

export default App; 
 */
 import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { useState } from 'react';
function App() {
  const responseGoogle = (response) => {
    console.log(response);
    const {code}=response
    axios.post('/api/create-tokens',{code})
    .then(response=>{
      console.log(response.data)
      setSignedIn(true)
    })
    .catch(error=>console.log(error.message))
  }
  const responseError = (error) => {
    console.log(error);
  }
  const handleSubmit=(e)=>
  {
    e.preventDefault()
  axios.post('/api/create-event',{summary,desc,location,StartDateTime,endDateTime})
  .then(response=>{
    console.log(response.data)
  })
  .catch(error=>console.log(error.message))
}
  const [summary,setSummary]=useState('');
const [desc,setDesc]=useState('')
const [location,setLocation]=useState('')
  const [StartDateTime,setStartDateTime]=useState('')
  const [endDateTime,setEndDateTime]=useState('')
  const [signedIn,setSignedIn]=useState('')

  return (
    <div>
      {
        !signedIn?  (<div>   <GoogleLogin
    clientId="687309219187-410k7qldibtr5u7lb5u0bd284aghl46m.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseError}
    cookiePolicy={'single_host_origin'}
    responseType="code"
    accessType='offline'
    scope="openid email profile https://www.googleapis.com/auth/calendar"
    />
</div>) : (<div>
  <form onSubmit={handleSubmit}>
  <label htmlFor="summary" >summary</label>
  <br/>
  <input type="text" id="summary" value={summary} onChange={e=>setSummary(e.target.value)}/>
   <br/>
   <label htmlFor="desc" >desc</label>
  <br/>
  <input 
  type="text" 
  id="desc"
   value={desc} 
   onChange={e=>setDesc(e.target.value)}/>
   <br/>
   <label htmlFor="location" >Location</label>
  <br/> 
  <input 
  type="text" 
  id="location"
   value={location} 
   onChange={e=>setLocation(e.target.value)}/>
   <br/>
   <label htmlFor="StartDateTime" >StartDateTime</label>
  <br/>
  <input 
  type="datetime-local" 
  id="StartDateTime"
   value={StartDateTime} 
   onChange={e=>setStartDateTime(e.target.value)}/>
   <br/>
   <label htmlFor="endDateTime">endDateTime</label>
  <br/>
  <input type="datetime-local" id="endDateTime" value={endDateTime} onChange={e=>setEndDateTime(e.target.value)}/>
  <br/>

<button type="submit">Submit</button>
</form>
</div>
)}

      </div>
    

  );
}

export default App;
 
/* import React from 'react'
 import { Calendar } from '@fullcalendar/core';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid'
let calendarEl = document.getElementById('calendar');
let calendar ;
 *//* let calendar = new Calendar(calendarEl, {
  plugins: [ googleCalendarPlugin ]
}); 
 */
/* export default class DemoApp extends React.Component 
{
  
  constructor(props) {
    super(props);
  }

  calendar = new Calendar(calendarEl, {
  
  plugins: [ googleCalendarPlugin,dayGridPlugin ],
      googleCalendarApiKey: 'AIzaSyATrqVw0O9gfNVvch6el02vPPPh2pCidyo',
  events: {
    googleCalendarId: '7e76jvb7iuccn14r4ep88veftg@group.calendar.google.com',
    className: 'gcal-event' // an option!
  }
  
},
calendar.render()

);

 */ /*  render() {
    return (
      <Calendar
        plugins={[ googleCalendarPlugin ]}
        initialView="dayGridMonth"

      />
    )
  }
 *///}

 
  /* 
  import FullCalendar from '@fullcalendar/react' // must go before plugins
  import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!*/


