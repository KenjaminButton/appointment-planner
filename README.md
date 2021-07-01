# Guide to Appointment Planner

### Download the template folder and run the project locally. Run npm start on the project's root directory.

2a. "Keep track of the contacts and appointments data, each being an array of objects"
(  Define state variables for contacts and appointments )
In App.js, setState for contacts and appointments with the following: 
```javascript
const [contacts, setContacts] = useState([]);
```
You will see the warning in your browser, at localhost, that 'useState' is not defined.
At the top of App.js, insert the following:
```javascript
import React, { useState } from "react";
```
Now, the page will load up properly again. For appointments, we can setState with the following:
```javascript
const [appointments, setAppointments] = useState([]);
```

2b. "Define a callback function that, given a name, phone number, and email, ADDS a new contact object with that data to the array of contacts"
Note: I am adding one individual contact and one individual appointment to the contacts and appointments array. In the App.js file, add the following function in the App component.
```javascript
const addContact = (name, phone, email ) => {
  setContacts( prev => [...prev, {name, phone, email}]);
};
```

2c. "Define a callback function that, given a title, contact, date, and time, adds a new appointment object with that data to the array of appointments."
Note: I am adding one individual appointment with my callback function. In the App.js file, beneath the previous function, add the following function
```javascript    
const addAppointment = (title, contact, date, time) => {
  setAppointments( prev => [...prev, {title, contact, date, time}]);
}
```
2d. "Pass the array of contacts and the appropriate callback function as props to the ContactsPage component"
In App.js, add the following properties in App.js's ContactsPage component (underneath the {/* Add props to ContactsPage */} comment):
```javascript
<ContactsPage addContact={addContact} />
```
2e. "Pass the appointments array, and the add appointment function as props to the AppointmentsPage component"
In App.js, add the following properties in App.js's AppointmentsPage component (underneath the {/* Add props to AppointmentsPage */} comment):
```javascript
<AppointmentsPage addAppointment={addAppointment} />
```

### Based on the given requirements, implement ContactsPage.js as a stateful component to handle the logic for adding new contacts and listing current contacts.

3a. "Receive two props:
  - The current list of contacts
  - A callback function for adding a new contact
Note: In ContactsPage.js, inside the ContactsPage component, add the following:
```javascript
  // Current list of contacts
  const contacts = props.contacts;
  // Callback function for adding new contact
  const addContact = props.addContact;
```
Now, the page will not currently load - the error message of 'props is not defined' can be fixed by adding props as an input to the ContactsPage component. Change the function definition as follows:
```javascript
  export const ContactsPage = (props) => {
```
The page should load properly again.

3b. "Keep track of three local state values: the current name, phone, and email entered into the form"
Inside the ContactsPage.js ContactsPage component, add the following: 
```javascript
  const [name, setName] = useState('');
```
The error message from the inability to load can be cleared with the following: 
```javascript
  import React, { useState } from 'react';
```
The page should now load properly again.
Now add the following below our definition of name state variables (for phone and email):
```javascript
  const [phone, setPhone] = useState('408');
  const [email, setEmail] = useState('Gmail');
```

3c "Check for duplicates whenever the name in the form changes and indicate the name is a duplicate"
