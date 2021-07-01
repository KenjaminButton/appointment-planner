# Guide to Appointment Planner

Download the tempalte folder and run the project locally. Run npm start on the project's root directory.

2a. "Keep track of the contacts and appointments data, each being an array of objects"
(  Define state variables for contacts and appointments )
In App.js, setState for contacts and appointments with the following: 
    
  const [contacts, setContacts] = useState([]);

You will see the warning in your browser, at localhost, that 'useState' is not defined.
At the top of App.js, insert the following:

  import React, { useState } from "react";

Now, the page will load up properly again. For appointments, we can setState with the following:

  const [appointments, setAppointments] = useState([]);

2b. "Define a callback function that, given a name, phone number, and email, ADDS a new contact object with that data to the array of contacts"
Note: I am adding one individual contact and one individual appointment to the contacts and appointments array. In the App.js file, add the following function in the App component.

  const addContact = (name, phone, email ) => {
    setContacts( prev => [...prev, {name, phone, email}]);
  };

2c. "Define a callback function that, given a title, contact, date, and time, adds a new appointment object with that data to the array of appointments."
Note: I am adding one individual appointment with my callback function. In the App.js file, beneath the previous function, add the following function
    
  const addAppointment = (title, contact, date, time) => {
    setAppointments( prev => [...prev, {title, contact, date, time}]);
  }

2d. "Pass the array of contacts and the appropriate callback function as props to the ContactsPage component"
In App.js, add the following properties in App.js's ContactsPage component (underneath the {/* Add props to ContactsPage */} comment):

  <ContactsPage addContact={addContact} />

2e. "Pass the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component"
In App.js, add the following properties in App.js's AppointmentsPage component (underneath the {/* Add props to AppointmentsPage */} comment):

  <AppointmentsPage addAppointment={addAppointment} />