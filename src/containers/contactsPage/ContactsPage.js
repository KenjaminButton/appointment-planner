import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  /*
  implement ContactsPage as a stateful component to handle the logic for adding
  new contacts and listing current contacts. Keep track of three local state
  values: the current name, phone, and email entered into the form
  Define state variables for contact info (name, phone and email)
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  /*
  Set state variable for duplicate check with a default value to false
  Check for duplicates whenever the name in the form changes and indicate
  the name is a duplicate
  */
  const [duplicate, setDuplicate] = useState(false);

  /*
  Receive two props: The current list of contacts and a callback
  function for adding a new contact
  */
  const contacts = props.contacts;
  const addContact = props.addContact;


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info
    */
    addContact(name, phone, email);
    
    /*
    If the contact name is not a duplicate
    Only add a new contact on form submission if it
    does not duplicate an existing contact’s name
    */
    if (!duplicate) {
      // Clear data
      // A successful submission clearing the form
      setName('');
      setPhone('');
      setEmail('');
    }
    
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  // check for contact name in the contacts array variable in props
  useEffect( () => {
    for (let contact of contacts) {
      if (name === contact.name) {
        setDuplicate(true);
      }
      return;
    }
  });

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {/* Rendering a ContactForm with the following props: local state
        variables, local state variable setter functions, and handleSubmit
        callback function */}
        <ContactForm 
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />


      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {/* In the Contacts section, render a TileList with the contact array passed via props */}
        <TileList 
          objArr={props.contacts}
        />
      </section>
    </div>
  );
};
