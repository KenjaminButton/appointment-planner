import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  // Define state variables for contacts and appointments
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([])
  /*
  Define a callback function that, given a name, phone number, and email,
  adds a new contact object with that data to the array of contacts
  */
  // Difference is with the return in the callback function
  // const addContact = (name, phone, email) => {setContacts(prevContacts => { return […prevContacts, {name, phone, email}]})};
  const addContact = (name, phone, email) => {setContacts(prev => [...prev, {name, phone, email}])}
  /*
  Define a callback function that, given a title, contact, date, and time,
  adds a new appointment object with that data to the array of appointments
  */
  const addAppointment = (title, contact, date, time) => {setAppointments(prev => [...prev, {title, contact, date, time}])}
  

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
          {/* Pass the array of contacts and the appropriate callback function as props to the ContactsPage component */}
            <ContactsPage
              contacts={contacts}
              addContact={addContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Pass the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component */}
            <AppointmentsPage 
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
