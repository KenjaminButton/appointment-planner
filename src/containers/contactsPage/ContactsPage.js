import React from "react";
import { useState, useEffect } from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  // Define state variables for contact info and duplicate check
  const contacts = props.contacts;
  const addContact = props.addContact;
  // local states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add contact info and clear data if the contact name is not a duplicate
    if (!duplicate) {

      addContact(name,phone, email);
      // reseting values
      setName('');
      setPhone('');
      setEmail('');
    }
  };


  // check for contact name in the contacts array variable in props
  useEffect( () => {
    for (const contact of contacts) {
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
        <TileList objectsInArray={props.contacts} />
      </section>
    </div>
  );
};

