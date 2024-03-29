# Guide to Appointment Planner

### Download the template folder and run the project locally. Run npm install, npm audit fix, and finally npm start on the project's root directory.

1a Run npm install in terminal for the project's root folder.
```console
npm install
```
1b. Now run npm audit fix as recommended.
```console
npm audit fix
```

1c. Now we can finally run npm start
```console
npm start
```
### In App.js

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
"Array of contacts" is: 
```javascript
contacts={contacts}
```
"Appropriate callback function" is:
```javascript
addContact={addContact}
```
In App.js, add the following properties in App.js's ContactsPage component (underneath the {/* Add props to ContactsPage */} comment):
```javascript
<ContactsPage 
  contacts={contacts}
  addContact={addContact}
/>
```
2e. "Pass the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component"
In App.js, add the following properties in App.js's AppointmentsPage component (underneath the {/* Add props to AppointmentsPage */} comment):
```javascript
<AppointmentsPage
  addAppointment={addAppointment}
  appointments={appointments}
  contacts={contacts}
/>
```

### Based on the given requirements, implement ContactsPage.js as a stateful component to handle the logic for adding new contacts and listing current contacts. ContactsPage.js

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
    ...
  }
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
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
```

3c. "Check for duplicates whenever the name in the form changes and indicate the name is a duplicate"
Define state variables for duplicate check (with a default value of false) to the following:
```javascript
  const [duplicate, setDuplicate] = useState(false);
```

Checking if name matches contacts.name - if it does match, set setDuplicate state to true.
/* Using hooks, check for contact name in the contacts array variable in props */
Note: I will be using the useEffect hook here so make sure to import it at the top of the file, next to useState if preferred.
```javascript
  // check for contact name in the contacts array variable in props
  useEffect( () => {
    for (const contact of contacts) {
      if (name === contact.name) {
        setDuplicate(true);
      }
      return;
    }
  });
```

3d. "Only add a new contact on form submission if it does not duplicate an existing contact’s name"
Now inside the handleSubmit handler, check for duplicate, then add the contact information if it is not a duplicate.
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  /*
  Add contact info and clear data
  if the contact name is not a duplicate
  */
  if (!duplicate) {
    addContact(name, phone, email);
    // "A successful submission should clear the form"
    setName('');
    setPhone('');
    setEmail('');
  }
};
```

3e. "In the Add Contact section, render a ContactForm with the following passed via props:
  - local state variables
  - local state variable setter functions
  - handleSubmit callback function
Import the ContactForm component with the following: 
```javascript
import { ContactForm } from '../../components/contactForm/ContactForm';
```
Now, under the h2 Add Contact, import the ContactForm component with the following props:
```javascript
<ContactForm
  name={name}
  setName={setName}
  phone={phone}
  setPhone={setPhone}
  email={email}
  setEmail={setEmail}
  handleSubmit={handleSubmit}
/>
```
3f. "In the Contacts section, render a TileList with the contact array passed via props"
Note: Under h2 Contacts, add the TileList component with the prop key to "data". My first attempt at this was to
use the property key of contacts={contacts}. However, TileList is a shared component between Appointments and Contacts so having
the property set to contacts won't make sense later on (when I try to implement appointments into the TileList component). My suggestion
is to first try contacts={contacts} and then it will make sense why I changed it to data={data} below.


```Javascript
<TileList data={contacts} />
```
Import TileList component with the following:
```Javascript
import { TileList } from '../../components/tileList/TileList.js';
```

### Implement ContactForm as a stateless component that renders a web form to collect the necessary contact information. ContactForm.js

4a. Render a form with the onSubmit attribute set
In the return statement, add an HTML form tab. 
```javascript
<form onSubmit={handleSubmit}>

</form>
```

4b. Render a form with 3 controlled <input> elements, one for each piece of contact data.
Inside the form tag, nest the following inputs:
Note: Try onChange={target => setXXXX(target.value)} and watch the code break. Then debug like I did. 🤪
```javascript
<form onSubmit={handleSubmit}>
  <input
    value={name}
    type="text"
    onChange={({target}) => setName(target.value)}
    required
  />
  <input
    value={phone}
    type="tel"
    // 4d. A pattern attribute to the phone <input> with a regex (USA)
    pattern="^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$"
    onChange={({target}) => setPhone(target.value)}
    required
  />
  <input
    value={email}
    type="email"
    onChange={({target}) => setEmail(target.value)}
    required
  />
</form>
```
4c. Render a form with the a submit button
Inside the form, create a submit button.
```javascript
  <input
    type="submit"
  />
```

### Implement TileList as a stateless component that renders a list of Tile components using an array of objects. TileList.js

5a. Receive one prop:
      An array of objects to render as a list.
Note: Try export const TileList = (data) => {
  ...
} without the curly braces wrapped around data. Then debug later. Remember, on the first go around, I used contacts={contacts} here so entering contacts, instead of data, would be the first attempt.
```javascript
export const TileList = ({data}) => {
  ...
};
```

5b. Use the array passed via props to iteratively render Tile components, passing each object (Individual contact object) in the array (objectsInArray aka App.js's contacts array) as a prop to each rendered Tile component.
```javascript
export const TileList = ({data}) => {
  {data.map( (index, value) => <Tile key={index} value={value} /> )}
};
```

Note: The requirements for the TileList component are generalized and allow it to be shared by the ContactsPage and AppointmentsPage components. As long as an array of objects with either the contact data or appointments data is passed then the content will be handled appropriately.

### Implement Tile as a stateless component that renders the data from an object. Tile.js

6a. In Tile.js, receive one prop: An object.
Note: Take a look at TileList.js's <Tile /> component. That's where the input value comes from.
```javascript
export const Tile = ({value}) => {
  return (
    <div className="tile-container">
      ...  
    </div>
  );
};
```

6b. Iterate over the values in the object, passed in via props, and render a <p> element for each value
Note: valueInObject is the singular of valuesInObject here. I used the naming method to match the prompt given above. 
```javascript
export const Tile = ({value}) => {
  const valuesInObject = Object.values(value);
  return (
    <div className="tile-container">
      // Implement Tile as a stateless component that renders the "data" from an object
      {valuesInObject.map( (valueInObject, index) => {
        // Render a <p> element for each value
        return <p key={index}> {valueInObject} </p>
      })}
    </div>
  )
};
```

6c. Give a className of "tile-title" to the first <p> element
Inside tile-container class, for the Tile.js file, write the following input statement.
```javascript
if (index === 0) {
  return <p className="tile-title" key={index}> {valueInObject} </p>
}

```

6d. Give a className of "tile" to all other <p> elements
```javascript
if (index === 0) {
  return <p className="tile-title" key={index}> {valueInObject} </p>
} else {
  return <p className="tile" key={index}> {valueInObject} </p>
}
```

Note: Somehow, the bold will not show up in our tile-title class, but I found the problem in index.css file. Change .tile.tile-title to just .tile-title. Now the bold styling will show as expected.

### Implement AppointmentsPage as a stateful component that handles the logic for adding new appointments and listing current appointments. AppointmentsPage.js

7a. Receive three props:
    - The current list of appointments
    - The current list of contacts

First, insert props as the input variable for the function.
To retrieve the list of appointments and contacts (from App.js), simply check the ContactsPage.js as an example.
```javascript
export const AppointmentsPage = (props) => {
  const appointments = props.appointments;
  const contacts = props.contacts;
}
```

7b. - A callback function for adding a new appointment.
Retrieving the App.js addAppointment callback function.
```javascript
const addAppointment = props.addAppointment
```

7c. Keep track of four local state variables, the current title, contact, date, and time entered into the form.
Note: Inside the handleSubmit function, (similar to ContactsPage.js) write the following: 
```javascript
const [title, setTitle] = useState('');
const [contact, setContact] = useState('');
const [date, setDate] = useState('');
const [time, setTime] = useState('');
```

7d. Add a new appointment to form submission.
Note: Duplicates are accepted here.
```javascript
addAppointment(title, contact, date, time)
```

7e. Clear the form on submission
Note: Use the state variables defined above to clear data upon submission of form.
```javascript
setTitle('');
setContact('');
setDate('');
setTime('')
```

7f. In the Add Appointment section, render an AppointmentForm with the following passed via props:
local state variables
local state variable setter functions
handleSubmit callback function
Note: Add the contacts variable, referring to the contacts property, defined above. 
```javascript
<AppointmentForm 
  title={title}
  contact={contact}
  date={date}
  time={time}
  setTitle={setTitle}
  setContact={setContact}
  setDate={setDate}
  setTime={setTime}
  handleSubmit={handleSubmit}

  contacts={contacts}
/>
```
Note: Try to NOT add contacts={contacts} here and keep coding. Eventually, you will see that the const contacts=props.contacts was defined, but not used. This will break the code later, but we will eventually use is, like how it is inserted above, and the code will work again.

7g. In the Appointments section, render a TileList with the appointment array passed via props
Note: Appointments section is referring to <h2>Appointments</h2>. Make sure to import TileList component.
Note: Refer back to TileList.js and the input for the function, which is data. If we refer back to ContactsPage.js and its implementation, contacts={appointments} would not make sense. Furthermore, if we try appointments={appointments}, (which I suggest) this below would break the code. Therefore, I backtracked to change the property of TileList component to data={appointments} (for AppointmentsPage.js) and data={contacts} (for ContactsPage.js) so that they "SHARE" the TileList component.
```javascript
<TileList data={appointments} />
```

### Implement AppointmentForm as a stateless component that renders a web form to collect the necessary appointment information. AppointmentForm.js

Render a form with:
The onSubmit attribute set to the callback function passed in via props
3 controlled input components, to be used for the title, date and time appointment data
A ContactPicker component with the contacts list passed in via props
A submit button
Use getTodayString() to set the min attribute of the date input

8a. Render a form with:
The onSubmit attribute set to the callback function passed in via props
<form onSubmit={handleSubmit}>
</form>

8b. Render a form with:
3 controlled input components, to be used for the title, date and time appointment data
Note: inside the form tag, nest input tags (FYI: input tags are self closing here)
```javascript
return (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      onChange={({target}) => setTitle(target.value)}
      value={title} 
    />
    <input
      type="date"
      value={date}
      onChange={({target}) => setDate(target.value)}
    />
    <input
      type="time"
      value={time} 
      onChange={({target}) => setTime(target.value)}
    />
  </form>
);
```

8c. Render a form with:
A ContactPicker component with the contacts list passed in via props
Note: Inside the form tag, render the <ContactPicker /> component. Make sure to import the component on the top of the file.

```javascript
<ContactPicker
  contacts={contacts}
  value={contact}
  onChange={({target}) => setContact(target.value)}
/>
```

8d. Render a form with:
A submit button
Note: Inside form tags
```javascript 
  <input type="submit" />
```

8e. Use getTodayString() to set the min attribute of the date input
Note: Inside the date input, call the getTodayString function as follows:
```javascript
<input 
  type="date"
  ...
  min={getTodayString()}
/>
```

### Implement ContactPicker as a stateless component that renders a drop-down list of all contact names. ContactPicker.js

9a. Receive 2 props: The array of contacts and a callback function to handle when the onChange event is triggered
Note: Before the return statement retrieve contacts and onChange. Make sure the function receives a props variable.
```javascript
export const ContactPicker = (props) => {
  const contacts = props.contacts
  const onChange= props.onChange
  return (
    ...
  );
};
```

9b. Render a select element with the onChange attribute set to the callback passed in via props
Note: [Check the select html rules](https://www.w3schools.com/tags/tag_select.asp) I chose not to pass the name or id attribute here.

```javascript
<select onChange={onChange}>
  
</select>
```

9c. Have a default first option element that indicates no contact is selected
Note: [Option Element Rules](https://www.w3schools.com/tags/tag_option.asp)
I will pass the value attribute here.

```javascript
<option value="">
  Choose something 😬
</option>

```
Note: Yes, emojis work and won't break "THE ENTIRE PROJECT" aka code.

9d. Iteratively add option elements using the contact names from the array passed in via props
Note: Below the previous option tag, Nested inside select tag only, not the option tag. I am adding another option tag below the default tag via JSX.


```javascript
{contacts.map( contact => <option value={contact.name}>{contact.name}</option>)}
```

9e. Check chrome console error messages. Add key attribute to make error message disappear.

```javascript
{contacts.map( (contact, index) => <option value={contact.name} key={index}>{contact.name}<option/>)}
```

